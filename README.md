# Deploying Your React App with Facebook Integration to GitHub Pages

This guide will help you set up and deploy your React application with Facebook integration using Vite and GitHub Pages.

## Setting Up Vite for GitHub Pages

### 1. Add Base URL Configuration

GitHub Pages serves your site from a subdirectory (e.g., `https://username.github.io/repo-name/`), so you need to configure Vite to use the correct base URL.

Create or modify `vite.config.ts` in your project root:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Add base URL for GitHub Pages
  // Replace 'repo-name' with your actual repository name
  base: process.env.NODE_ENV === 'production' ? '/repo-name/' : '/',
})
```

### 2. Create a Deploy Script

Add deployment scripts to your `package.json`:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### 3. Install gh-pages Package

```bash
npm install --save-dev gh-pages
# or
yarn add -D gh-pages
```

## Facebook App Configuration for GitHub Pages

### 1. Add GitHub Pages Domain to Facebook App

Since your app will be hosted on GitHub Pages, you need to add this domain to your Facebook App:

1. Go to [Facebook Developer Dashboard](https://developers.facebook.com/apps/)
2. Select your app
3. Go to "Settings" > "Basic"
4. Under "App Domains", add your GitHub Pages domain: `username.github.io`
5. Save changes

### 2. Add OAuth Redirect URIs

1. Go to "Facebook Login" > "Settings"
2. Under "Valid OAuth Redirect URIs", add:
   - `https://username.github.io/repo-name/`
   - `https://username.github.io/repo-name/index.html`
3. Save changes

### 3. Update Privacy Policy URL

Facebook Login requires a valid privacy policy URL. If you don't have one:

1. Create a simple privacy policy page in your repository
2. Add its URL to Facebook App settings

## Handling Content Blockers

The updated code includes an alternative method for logging in when the Facebook SDK is blocked. This works by:

1. Manually creating an OAuth URL
2. Opening it in a popup
3. Listening for the redirect with the access token
4. Extracting the token from the URL

## Deploying to GitHub Pages

Once everything is set up, deploy your app:

```bash
npm run deploy
# or
yarn deploy
```

## GitHub Actions Deployment (Optional)

For automatic deployment, create a `.github/workflows/deploy.yml` file:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build
        env:
          BASE_URL: /${{ github.event.repository.name }}/

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Troubleshooting

### 1. ERR_BLOCKED_BY_CLIENT

If you see this error, it means a content blocker (like an ad blocker) is preventing the Facebook SDK from loading. Our code includes a fallback method, but you can also:

- Ask users to whitelist your GitHub Pages domain in their ad blocker
- Use a descriptive message explaining why Facebook functionality is needed

### 2. Cross-Origin Issues

GitHub Pages enforces HTTPS, so make sure all Facebook requests use HTTPS.

### 3. Facebook Login Popup Blocked

Some browsers block popups by default. Add instructions for users to allow popups for your site.

### 4. 404 Errors After Deployment

For single-page apps, create a `404.html` that redirects to your main page with the original URL parameters.

Create a `public/404.html` file:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Redirecting...</title>
  <script>
    const path = window.location.pathname.slice(1);
    const searchParams = window.location.search;
    const hash = window.location.hash;
    const repo = '/repo-name'; // Replace with your repo name
    
    window.location.href = 
      repo + 
      (path ? '/#/' + path : '/') + 
      searchParams + 
      hash;
  </script>
</head>
<body>
  <p>Redirecting...</p>
</body>
</html>
```

Replace `repo-name` with your actual repository name.