export default function PrivacyPolicy() {
    const contactEmail = "mathieuloco@gmail.com"
    const appName = "Camion à Simon"
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Privacy Policy</h1>
      <p className="text-sm text-center text-gray-500 italic mb-8">Last Updated: April 30, 2025</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Introduction</h2>
        <p className="mb-4 text-gray-600">
          Welcome to {appName} ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. 
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our application and services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Information We Collect</h2>
        
        <div className="mb-4">
          <h3 className="text-xl font-medium text-gray-700 mb-2">Information You Provide to Us</h3>
          <p className="mb-2 text-gray-600">We may collect information that you provide directly to us when you:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-600">
            <li className="mb-1">Create or modify your account</li>
            <li className="mb-1">Fill in forms in our app</li>
            <li className="mb-1">Correspond with us</li>
            <li className="mb-1">Participate in interactive features</li>
            <li className="mb-1">Request customer support</li>
          </ul>
          <p className="mb-2 text-gray-600">This information may include:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-600">
            <li className="mb-1">Name</li>
            <li className="mb-1">Email address</li>
            <li className="mb-1">Phone number</li>
            <li className="mb-1">Profile information</li>
            <li className="mb-1">Content you share through our app</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-medium text-gray-700 mb-2">Information We Collect Automatically</h3>
          <p className="mb-2 text-gray-600">When you use our app, we may automatically collect certain information, including:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-600">
            <li className="mb-1">Device information (device type, operating system, unique device identifiers)</li>
            <li className="mb-1">Log information (access times, pages viewed, app crashes)</li>
            <li className="mb-1">Location information (with your permission)</li>
            <li className="mb-1">Usage data (features used, content viewed)</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-medium text-gray-700 mb-2">Information from Third Parties</h3>
          <p className="mb-2 text-gray-600">We may receive information about you from third parties, including:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-600">
            <li className="mb-1">Social media platforms when you connect your account</li>
            <li className="mb-1">Other users who may provide information about you</li>
            <li className="mb-1">Partners with whom we offer co-branded services</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">How We Use Your Information</h2>
        <p className="mb-2 text-gray-600">We use the information we collect to:</p>
        <ul className="list-disc pl-6 mb-4 text-gray-600">
          <li className="mb-1">Provide, maintain, and improve our services</li>
          <li className="mb-1">Process transactions and send related information</li>
          <li className="mb-1">Send administrative messages and communications</li>
          <li className="mb-1">Respond to your comments and questions</li>
          <li className="mb-1">Personalize your experience</li>
          <li className="mb-1">Monitor and analyze trends and usage</li>
          <li className="mb-1">Detect and prevent fraudulent activities</li>
          <li className="mb-1">Comply with legal obligations</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">How We Share Your Information</h2>
        <p className="mb-2 text-gray-600">We may share your information with:</p>
        <ul className="list-disc pl-6 mb-4 text-gray-600">
          <li className="mb-1">Service providers who perform services on our behalf</li>
          <li className="mb-1">Business partners with your consent</li>
          <li className="mb-1">In response to legal requests or to protect rights</li>
          <li className="mb-1">In connection with business transfers (merger, acquisition)</li>
          <li className="mb-1">With your consent or at your direction</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your Rights and Choices</h2>
        <p className="mb-2 text-gray-600">
          Depending on your location, you may have rights regarding your personal information, including:
        </p>
        <ul className="list-disc pl-6 mb-4 text-gray-600">
          <li className="mb-1">Access to your personal information</li>
          <li className="mb-1">Correction of inaccurate data</li>
          <li className="mb-1">Deletion of your personal information</li>
          <li className="mb-1">Restriction of processing</li>
          <li className="mb-1">Data portability</li>
          <li className="mb-1">Objection to processing</li>
        </ul>
        <p className="mb-2 text-gray-600">
          To exercise these rights, please contact us at {contactEmail}.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Data Security</h2>
        <p className="mb-4 text-gray-600">
          We implement appropriate technical and organizational measures to protect your personal information. 
          However, no method of transmission over the Internet or electronic storage is 100% secure, 
          so we cannot guarantee absolute security.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Data Retention</h2>
        <p className="mb-4 text-gray-600">
          We retain your personal information for as long as necessary to fulfill the purposes 
          outlined in this Privacy Policy, unless a longer retention period is required by law.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Children's Privacy</h2>
        <p className="mb-4 text-gray-600">
          Our services are not intended for children under the age of 13, and we do not knowingly 
          collect personal information from children under 13. If we learn we have collected personal 
          information from a child under 13, we will delete this information.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">International Data Transfers</h2>
        <p className="mb-4 text-gray-600">
          Your information may be transferred to and processed in countries other than the country 
          in which you reside. These countries may have data protection laws that are different from 
          those in your country.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Changes to This Privacy Policy</h2>
        <p className="mb-4 text-gray-600">
          We may update this Privacy Policy from time to time. The updated version will be indicated 
          by an updated "Last Updated" date. We encourage you to review this Privacy Policy frequently.
        </p>
      </section>

      <section className="mb-8 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Contact Us</h2>
        <p className="mb-2 text-gray-600">If you have questions about this Privacy Policy, please contact us at:</p>
        <ul className="list-none text-gray-600">
          <li className="mb-1">Email: {contactEmail}</li>
        </ul>
      </section>
    </div>
  );
};