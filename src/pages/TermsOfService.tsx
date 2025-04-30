export default function TermsOfService() {
    const appName = "Camion à Simon"
    const appDescription = "a catalog of rides offered by people around Quebec"
    const companyName = "DueChange"
    const jurisdiction = "Quebec, Canada"
    const contactEmail = "mathieuloco@gmail.com"
    const physicalAddress = "unspecified"

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Terms of Service</h1>
      <p className="text-sm text-center text-gray-500 italic mb-8">Last Updated: April 30, 2025</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">1. Agreement to Terms</h2>
        <p className="mb-4 text-gray-600">
          By accessing or using {appName} ("App"), you agree to be bound by these Terms of Service ("Terms"). 
          If you disagree with any part of the Terms, you do not have permission to access or use the App.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">2. Description of Service</h2>
        <p className="mb-4 text-gray-600">
          {appName} provides {appDescription}.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">3. Eligibility</h2>
        <p className="mb-4 text-gray-600">
          You must be at least 13 years old to use our App. By using our App, you represent and warrant that 
          you meet this eligibility requirement.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">4. User Accounts</h2>
        
        <div className="mb-4">
          <h3 className="text-xl font-medium text-gray-700 mb-2">4.1 Account Creation</h3>
          <p className="mb-4 text-gray-600">
            To use certain features of our App, you may need to create an account. You agree to provide 
            accurate, current, and complete information during the registration process.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-medium text-gray-700 mb-2">4.2 Account Responsibilities</h3>
          <p className="mb-4 text-gray-600">
            You are responsible for maintaining the confidentiality of your account credentials and for all 
            activities that occur under your account. You agree to notify us immediately of any unauthorized 
            use of your account.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">5. User Content</h2>
        
        <div className="mb-4">
          <h3 className="text-xl font-medium text-gray-700 mb-2">5.1 Ownership</h3>
          <p className="mb-4 text-gray-600">
            You retain ownership of any content you submit, post, or display on or through the App ("User Content"). 
            By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, 
            reproduce, modify, adapt, publish, translate, and distribute your User Content.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-medium text-gray-700 mb-2">5.2 Content Restrictions</h3>
          <p className="mb-2 text-gray-600">You may not post or transmit content that:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-600">
            <li className="mb-1">Is unlawful, harmful, threatening, abusive, harassing, defamatory, or otherwise objectionable</li>
            <li className="mb-1">Infringes any patent, trademark, trade secret, copyright, or other intellectual property</li>
            <li className="mb-1">Contains software viruses or any other code designed to interrupt or damage our systems</li>
            <li className="mb-1">Impersonates any person or entity or falsely states or misrepresents your affiliation</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">6. Prohibited Conduct</h2>
        <p className="mb-2 text-gray-600">You agree not to:</p>
        <ul className="list-disc pl-6 mb-4 text-gray-600">
          <li className="mb-1">Use the App for any illegal purpose</li>
          <li className="mb-1">Interfere with or disrupt the App or servers</li>
          <li className="mb-1">Attempt to gain unauthorized access to systems or networks</li>
          <li className="mb-1">Use automated scripts to collect information from or interact with the App</li>
          <li className="mb-1">Sell, trade, resell, or exploit for commercial purposes any part of the App</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">7. Intellectual Property</h2>
        <p className="mb-4 text-gray-600">
          The App and its content, features, and functionality are owned by {companyName} and are protected by 
          international copyright, trademark, patent, trade secret, and other intellectual property laws.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">8. Third-Party Links and Content</h2>
        <p className="mb-4 text-gray-600">
          Our App may contain links to third-party websites or services. We are not responsible for the content, 
          policies, or practices of any third-party website or service linked to on our App.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">9. Termination</h2>
        <p className="mb-4 text-gray-600">
          We may terminate or suspend your account and access to the App immediately, without prior notice or 
          liability, for any reason, including if you breach the Terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">10. Disclaimer of Warranties</h2>
        <p className="mb-4 text-gray-600 uppercase font-medium">
          THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, 
          INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, 
          AND NON-INFRINGEMENT.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">11. Limitation of Liability</h2>
        <p className="mb-4 text-gray-600 uppercase font-medium">
          IN NO EVENT SHALL {companyName}, ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS, BE LIABLE FOR ANY 
          INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATING TO YOUR USE 
          OF THE APP.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">12. Indemnification</h2>
        <p className="mb-4 text-gray-600">
          You agree to defend, indemnify, and hold harmless {companyName} and its employees, contractors, 
          agents, officers, and directors from any claims, damages, obligations, losses, liabilities, costs, 
          or debt, and expenses.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">13. Changes to Terms</h2>
        <p className="mb-4 text-gray-600">
          We reserve the right to modify or replace these Terms at any time. We will provide notice of changes 
          by posting the updated Terms on the App with a new effective date.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">14. Governing Law</h2>
        <p className="mb-4 text-gray-600">
          These Terms shall be governed by the laws of {jurisdiction}, without regard to its conflict of law provisions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">15. Dispute Resolution</h2>
        <p className="mb-4 text-gray-600">
          Any dispute arising from these Terms shall be resolved through binding arbitration conducted in {jurisdiction}.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">16. Entire Agreement</h2>
        <p className="mb-4 text-gray-600">
          These Terms constitute the entire agreement between you and {companyName} regarding the use of the App.
        </p>
      </section>

      <section className="mb-8 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">17. Contact Us</h2>
        <p className="mb-2 text-gray-600">If you have any questions about these Terms, please contact us at:</p>
        <ul className="list-none text-gray-600">
          <li className="mb-1">Email: {contactEmail}</li>
          <li className="mb-1">Address: {physicalAddress}</li>
        </ul>
      </section>
    </div>
  );
};