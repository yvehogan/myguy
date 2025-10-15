import FooterSection from "@/components/footer-section"
import Navbar from "@/components/navbar"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#F2F4FF]">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            MyGuy Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <div className="text-center mb-8">
              <p><strong>Effective Date:</strong> 10/14/2025</p>
              <p><strong>Last Updated:</strong> 10/14/2025</p>
            </div>

            <p className="text-lg">
              Welcome to MyGuy, a global mentorship and connection platform empowering boys and men through mentorship, therapy, guidance, and community engagement.
            </p>

            <p>
              Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you use our website, mobile app, or other digital services (collectively, &quot;the Platform&quot;).
            </p>

            <p>
              By using the Platform, you consent to the practices described in this Policy. If you do not agree, please discontinue use immediately.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Who are We</h2>
            <p>
              MYGUY (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) exists to create a safe, empowering space for boys and men to grow, heal, and connect. Our voice is the embodiment of the trusted, genuine person; firm yet kind, relatable yet wise, casual in delivery yet profound in substance. It balances empathy with encouragement, real talk with respect, and warmth with clarity.
            </p>

            <p>Our services are accessible through:</p>
            <ul className="list-disc pl-6">
              <li>The Mentee App</li>
              <li>The Mentor Portal</li>
              <li>The Admin Portal</li>
              <li>The Website</li>
            </ul>

            <p>We are committed to protecting your personal information and respecting your privacy.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information we Collect</h2>
            <p>We collect personal and non-personal information to provide and improve our services.</p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">a. Information You Provide</h3>
            <p>When you register, participate, or interact with the Platform, you may provide:</p>
            <ul className="list-disc pl-6">
              <li><strong>Personal Identification Data:</strong> Name, email address, phone number, date of birth, gender, nationality.</li>
              <li><strong>Profile Data:</strong> Bio, areas of interest, professional background (for mentors), mentorship goals (for mentees).</li>
              <li><strong>Account Data:</strong> Username, password, and security preferences.</li>
              <li><strong>Communication Data:</strong> Chat messages, feedback, session notes, and correspondence with mentors or admins.</li>
              <li><strong>Transactional Data (Therapy sessions, etc.):</strong> Payment information, billing address, and transaction records (processed securely by third-party gateways).</li>
              <li><strong>Support Data:</strong> Information you provide when you contact our support team.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">b. Information Collected Automatically</h3>
            <p>When you use our app or website, we automatically collect:</p>
            <ul className="list-disc pl-6">
              <li>Device information (model, OS, unique device identifiers).</li>
              <li>Log data (IP address, browser type, access times, pages visited).</li>
              <li>Usage data (clicks, time spent, actions taken on the app).</li>
              <li>Cookies and similar technologies to enhance your experience.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">c. Information from Third Parties</h3>
            <p>We may receive data from:</p>
            <ul className="list-disc pl-6">
              <li>Authentication services (Google, Apple, or social login).</li>
              <li>Analytics and marketing partners.</li>
              <li>Mentorship or educational partners (with your consent).</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-6">
              <li>Create and manage user accounts.</li>
              <li>Match mentors and mentees based on preferences and goals.</li>
              <li>Facilitate mentorship, therapy, and community interactions.</li>
              <li>Process payments and verify identities.</li>
              <li>Provide customer support and respond to inquiries.</li>
              <li>Improve our services and personalize experiences.</li>
              <li>Send updates, notifications, and relevant content (you can opt out anytime).</li>
              <li>Ensure compliance, security, and fraud prevention.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Legal Basis for Processing</h2>
            <p>We process your personal data under one or more of the following legal bases:</p>
            <ul className="list-disc pl-6">
              <li><strong>Consent:</strong> When you agree to data collection or marketing communication.</li>
              <li><strong>Contractual necessity:</strong> To provide mentorship or administrative services.</li>
              <li><strong>Legal Obligation:</strong> Where required by law or regulatory authorities.</li>
              <li><strong>Legitimate Interest:</strong> For analytics, service improvement, and fraud prevention.</li>
            </ul>
            <p>You may withdraw your consent at any time by contacting us (see Section 13).</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Share Your Information</h2>
            <p>We never sell your data. However, we may share it with:</p>
            <ul className="list-disc pl-6">
              <li><strong>Mentors and Mentees:</strong> To facilitate mentorship matches.</li>
              <li><strong>Therapists or Counselors:</strong> For professional support (with your consent).</li>
              <li><strong>Service Providers:</strong> Such as hosting, payment, analytics, and communication tools.</li>
              <li><strong>Legal Authorities:</strong> When required to comply with laws, prevent fraud, or ensure safety.</li>
            </ul>
            <p>All third parties are bound by confidentiality and data protection agreements.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Retention</h2>
            <p>We retain your personal data only as long as necessary to fulfill the purposes described here or as required by law. When data is no longer needed, we securely delete or anonymize it.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6">
              <li>Access your personal data.</li>
              <li>Rectify inaccurate or incomplete data.</li>
              <li>Erase your data (&quot;Right to be Forgotten&quot;).</li>
              <li>Restrict or object to certain processing activities.</li>
              <li>Withdraw consent at any time.</li>
            </ul>
            <p>To exercise these rights, contact us at hello@myguy.me</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Security</h2>
            <p>We implement strict organizational and technical measures to protect your data, including:</p>
            <ul className="list-disc pl-6">
              <li>Encryption of sensitive data during transmission and storage.</li>
              <li>Limited employee access based on roles.</li>
              <li>Regular security reviews and vulnerability checks.</li>
            </ul>
            <p>While we take all reasonable precautions, no system is entirely secure, and we cannot guarantee absolute protection.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Children&apos;s Privacy</h2>
            <p>Our platform is intended for users aged 13 and above. If we discover that we have collected data from a child under 13 without verifiable parental consent, we will delete it promptly.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cookies and Tracking Technologies</h2>
            <p>We use cookies and tracking tools to:</p>
            <ul className="list-disc pl-6">
              <li>Maintain sessions and user preferences.</li>
              <li>Understand user engagement and improve performance.</li>
              <li>Deliver personalized content.</li>
            </ul>
            <p>You can manage cookies through your browser settings. Disabling them may limit functionality.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Changes to This Policy</h2>
            <p>We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you through email or app alerts before major changes take effect.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
            <p>For questions, data access requests, or privacy concerns, please contact us at:</p>
            <ul className="list-disc pl-6">
              <li><strong>Email:</strong> hello@myguy.me</li>
              <li><strong>Website:</strong> myguy.me</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Governing Law</h2>
            <p>This Privacy Policy is governed by applicable data protection law(s) Nigeria Data Protection Regulation (NDPR), and other international privacy frameworks where our users reside.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Copyright Notice</h2>
            <p>Copyright © (2025) (MyGuy). All rights reserved. All content, materials, design elements, logos, trademarks, graphics, text, and software on this platform are the exclusive property of MyGuy and are protected under applicable copyright and intellectual property laws.</p>

            <p>No part of this application, website, or content may be reproduced, distributed, modified, or transmitted in any form or by any means, including photocopying, recording, or other electronic or mechanical methods, without prior written permission from MyGuy.</p>

            <p>Unauthorized use of any materials appearing on this platform may violate copyright, trademark, and other applicable laws and could result in civil or criminal penalties.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Intellectual Property Rights</h2>
            <p>All intellectual property rights in the MyGuy platform including its code, design, trademarks, user interface, graphics, and content are owned or lawfully licensed to MyGuy.</p>

            <p>Users are granted a limited, non-exclusive, non-transferable license to access and use the platform for personal and educational purposes only. This license does not grant permission to copy, modify, distribute, sell, or exploit any part of the platform for commercial purposes without express written consent.</p>

            <p>Any feedback, suggestions, or ideas you submit may be used by MyGuy to improve the platform, and by submitting such feedback, you grant us a royalty-free, worldwide, perpetual license to use and incorporate it.</p>

            <div className="text-center mt-12 pt-8 border-t border-gray-200">
              <p className="font-semibold">© 2025 MyGuy. All Rights Reserved.</p>
              <p className="text-sm text-gray-600">Developed and Managed by 6OH1 Innovation.</p>
            </div>
          </div>
        </div>
      </div>

      <FooterSection />
    </main>
  )
}