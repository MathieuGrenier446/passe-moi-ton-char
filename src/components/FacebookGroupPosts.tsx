import React, { useCallback, useEffect, useState } from 'react';

// Types for Facebook SDK
declare global {
  interface Window {
    FB: {
      init: (options: {
        appId: string;
        cookie: boolean;
        xfbml: boolean;
        version: string;
      }) => void;
      login: (
        callback: (response: FacebookLoginResponse) => void,
        options?: { scope: string }
      ) => void;
      getLoginStatus: (callback: (response: FacebookLoginResponse) => void) => void;
      api: (
        path: string,
        method: string,
        params: object,
        callback: (response: unknown) => void
      ) => void;
      logout: (callback: () => void) => void;
    };
    fbAsyncInit?: () => void;
  }
}

// Type definitions
interface FacebookLoginResponse {
  status: 'connected' | 'not_authorized' | 'unknown';
  authResponse?: {
    accessToken: string;
    expiresIn: string;
    signedRequest: string;
    userID: string;
  };
}

interface FacebookPost {
  id: string;
  message?: string;
  created_time: string;
  from?: {
    name: string;
    id: string;
  };
  permalink_url?: string;
  reactions?: {
    summary: {
      total_count: number;
    };
  };
  comments?: {
    summary: {
      total_count: number;
    };
  };
}

interface FacebookApiResponse {
  data: FacebookPost[];
  paging?: {
    cursors: {
      before: string;
      after: string;
    };
    next?: string;
  };
  error?: {
    message: string;
    type: string;
    code: number;
  };
}

interface FacebookLoginProps {
  appId: string;
  groupId: string;
  onError?: (message: string) => void;
}

// Main component
const FacebookGroupPosts: React.FC<FacebookLoginProps> = ({ 
  appId, 
  groupId,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [accessToken, setAccessToken] = useState<string>('');
  const [posts, setPosts] = useState<FacebookPost[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [sdkLoading, setSdkLoading] = useState<boolean>(true);
  const [sdkError, setSdkError] = useState<boolean>(false);

  // Error handling helper
  const handleError = useCallback((message: string) => {
    setError(message);
    if (onError) {
      onError(message);
    }
  },[onError])

  // Load Facebook SDK with timeout
  useEffect(() => {
    let timeoutId: number;
    
    const loadFacebookSDK = () => {
      // Check if SDK is already loaded
      if (document.getElementById('facebook-jssdk')) {
        return;
      }

      // Set up SDK load timeout
      timeoutId = window.setTimeout(() => {
        if (!window.FB) {
          setSdkError(true);
          setSdkLoading(false);
          handleError('Facebook SDK failed to load. Check if any content blockers are enabled.');
        }
      }, 10000); // 10-second timeout

      window.fbAsyncInit = () => {
        clearTimeout(timeoutId);
        
        window.FB.init({
          appId: appId,
          cookie: true,
          xfbml: true,
          version: 'v22.0'
        });

        // Check login status
        window.FB.getLoginStatus((response) => {
          setIsLoaded(true);
          setSdkLoading(false);
          
          if (response.status === 'connected') {
            setIsLoggedIn(true);
            setAccessToken(response.authResponse?.accessToken || '');
          }
        });
      };

      // Load the SDK
      const script = document.createElement('script');
      script.id = 'facebook-jssdk';
      script.src = 'https://connect.facebook.net/en_US/sdk.js';
      script.async = true;
      script.defer = true;
      
      // Add error handling for script loading
      script.onerror = () => {
        clearTimeout(timeoutId);
        setSdkError(true);
        setSdkLoading(false);
        handleError('Failed to load Facebook SDK. Check your network connection or ad blockers.');
      };
      
      document.body.appendChild(script);
    };

    loadFacebookSDK();

    // Cleanup
    return () => {
      clearTimeout(timeoutId);
      const scriptElement = document.getElementById('facebook-jssdk');
      if (scriptElement) {
        document.body.removeChild(scriptElement);
      }
      window.fbAsyncInit = () => {};
    };
  }, [appId, onError, handleError]);

  // Manual login function that doesn't rely on the FB SDK
  const handleManualLogin = async () => {
    try {
      // Create OAuth URL - this will open a popup
      const redirectUri = encodeURIComponent(window.location.href);
      const scope = encodeURIComponent('groups_access_member_info,user_managed_groups');
      const authUrl = `https://www.facebook.com/v22.0/dialog/oauth?client_id=${appId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=token`;
      
      // Open popup
      const width = 600;
      const height = 700;
      const left = (window.innerWidth - width) / 2;
      const top = (window.innerHeight - height) / 2;
      
      const popup = window.open(
        authUrl,
        'facebook-login',
        `width=${width},height=${height},left=${left},top=${top}`
      );
      
      // Handle popup being blocked
      if (!popup || popup.closed || typeof popup.closed === 'undefined') {
        handleError('Popup was blocked. Please allow popups for this site.');
        return;
      }
      
      // Listen for redirect with token
      const checkPopup = setInterval(() => {
        try {
          // Check if popup was closed
          if (popup.closed) {
            clearInterval(checkPopup);
            return;
          }
          
          // Check if we got redirected to our site with token
          if (popup.location.href.includes(window.location.origin)) {
            const hash = popup.location.hash;
            clearInterval(checkPopup);
            popup.close();
            
            if (hash && hash.includes('access_token=')) {
              // Extract token
              const tokenMatch = hash.match(/access_token=([^&]+)/);
              if (tokenMatch && tokenMatch[1]) {
                const extractedToken = tokenMatch[1];
                setAccessToken(extractedToken);
                setIsLoggedIn(true);
                setError(null);
              } else {
                handleError('Failed to extract access token from response');
              }
            } else {
              handleError('Authentication failed or was cancelled');
            }
          }
        } catch  {
          // Cross-origin error, still waiting for redirect
        }
      }, 500);
    } catch (error) {
      handleError(`Login error: ${error instanceof Error ? error.message : String(error)}`);
    }
  };

  // Handle login - tries SDK first, falls back to manual if needed
  const handleLogin = () => {
    if (isLoaded && window.FB) {
      window.FB.login((response) => {
        if (response.status === 'connected') {
          setIsLoggedIn(true);
          setAccessToken(response.authResponse?.accessToken || '');
          setError(null);
        } else {
          handleError('Facebook login failed or was cancelled.');
        }
      }, { scope: 'groups_access_member_info,user_managed_groups' });
    } else if (sdkError) {
      // Use manual login if SDK failed to load
      handleManualLogin();
    } else {
      handleError('Facebook SDK is not loaded yet. Please try again.');
    }
  };

  // Handle logout
  const handleLogout = () => {
    if (isLoaded && window.FB) {
      window.FB.logout(() => {
        setIsLoggedIn(false);
        setAccessToken('');
        setPosts([]);
      });
    } else {
      // Manual logout if SDK not available
      setIsLoggedIn(false);
      setAccessToken('');
      setPosts([]);
    }
  };

  // Fetch posts from the group
  const fetchGroupPosts = async () => {
    if (!accessToken) {
      handleError('Please log in first');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const fields = 'id,message,created_time,from,permalink_url,reactions.summary(true),comments.summary(true)';
      const apiUrl = `https://graph.facebook.com/v22.0/${groupId}/feed?fields=${fields}&access_token=${accessToken}&limit=25`;
      
      const response = await fetch(apiUrl);
      const data: FacebookApiResponse = await response.json();
      
      if (data.error) {
        throw new Error(data.error.message);
      }
      
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      
      if (data.data && Array.isArray(data.data)) {
        setPosts(data.data);
        
        if (data.data.length === 0) {
          setError('No posts found in this group. Make sure you have access to the group.');
        }
      } else {
        throw new Error('Invalid response format from Facebook API');
      }
      
    } catch (err) {
      handleError(`Error fetching posts: ${err instanceof Error ? err.message : String(err)}`);
    } finally {
      setLoading(false);
    }
  };

  // Format date
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };
  // Helper function to render posts
  const renderPosts = () => {
    if (posts.length === 0) {
      return null;
    }
    
    return (
      <div className="posts-container">
        <h3>Group Posts</h3>
        {posts.map((post) => (
          <div key={post.id} className="post">
            <h4>{post.from?.name || 'Unknown'}</h4>
            <p className="date">{formatDate(post.created_time)}</p>
            <div className="message">{post.message || 'No message content'}</div>
            <div className="stats">
              <span>👍 {post.reactions?.summary.total_count || 0}</span>
              <span>💬 {post.comments?.summary.total_count || 0}</span>
            </div>
            {post.permalink_url && (
              <a 
                href={post.permalink_url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="view-link"
              >
                View on Facebook
              </a>
            )}
          </div>
        ))}
      </div>
    );
  };

  // Render manual login button if SDK fails
  if (sdkError) {
    return (
      <div className="facebook-group-posts">
        <h2>Facebook Group Posts</h2>
        <div className="sdk-error">
          <p>
            Facebook SDK could not be loaded. This may be due to ad blockers or network issues.
          </p>
          {!isLoggedIn ? (
            <button onClick={handleManualLogin} className="manual-login-btn">
              Log in with Facebook (Alternative Method)
            </button>
          ) : (
            <div className="logged-in-controls">
              <p>You are logged in!</p>
              <div className="button-group">
                <button onClick={fetchGroupPosts} disabled={loading}>
                  {loading ? 'Loading Posts...' : 'Fetch Group Posts'}
                </button>
                <button onClick={handleLogout}>Log out</button>
              </div>
            </div>
          )}
          
          {error && <div className="error-message">{error}</div>}
          
          {loading && <div className="loading">Loading posts...</div>}
          
          {renderPosts()}
        </div>
      </div>
    );
  }



  // Normal rendering flow
  return (
    <div className="facebook-group-posts">
      <h2>Facebook Group Posts</h2>
      
      {sdkLoading ? (
        <p>Loading Facebook SDK...</p>
      ) : (
        <div className="fb-controls">
          {!isLoggedIn ? (
            <button onClick={handleLogin}>Log in with Facebook</button>
          ) : (
            <div className="logged-in-controls">
              <p>You are logged in!</p>
              <div className="button-group">
                <button onClick={fetchGroupPosts} disabled={loading}>
                  {loading ? 'Loading Posts...' : 'Fetch Group Posts'}
                </button>
                <button onClick={handleLogout}>Log out</button>
              </div>
            </div>
          )}
        </div>
      )}

      {error && <div className="error-message">{error}</div>}

      {loading && <div className="loading">Loading posts...</div>}

      {renderPosts()}
    </div>
  );
};

export default FacebookGroupPosts;