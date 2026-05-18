import React from 'react';
import { motion } from 'framer-motion';
import { Shield, BookOpen } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export const PrivacyPolicy = () => {
  return (
    <div className="bg-[#020617] text-white min-h-screen relative overflow-hidden pt-40 pb-32">
      <Helmet>
        <title>Privacy Policy | Celoxus</title>
        <meta name="description" content="Read the Celoxus Privacy Policy to understand how we collect, use, and protect your personal data and information." />
      </Helmet>
      
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-indigo-900/10 blur-[110px] rounded-full pointer-events-none z-0"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 text-indigo-300 text-sm font-normal mb-8 uppercase tracking-widest bg-white/5 backdrop-blur-md">
             <Shield className="w-4 h-4" /> Legal Framework
          </div>
          <h1 className="text-4xl md:text-5xl font-light font-display tracking-tight mb-8">
            Privacy Policy
          </h1>
          <p className="text-slate-400 font-light mb-12">Effective Date: January 1, 2024</p>

          <div className="text-slate-300 text-lg leading-[1.8] tracking-wide [&>p]:mb-8 [&>h2]:text-3xl [&>h2]:font-normal [&>h2]:text-white [&>h2]:mt-16 [&>h2]:mb-6 [&>ul]:list-disc [&>ul]:pl-8 [&>ul>li]:mb-4 [&>ul>li>strong]:text-white">
            <p>
              Celoxus ("we", "our", or "us") is deeply committed to protecting your privacy and ensuring that your personal data is handled securely and responsibly. This Privacy Policy details the types of information we collect, the purposes for which we use it, your rights regarding your personal data, and the rigorous measures we implement to protect it.
            </p>

            <h2>1. Information We Collect</h2>
            <p>
              In the course of operating our digital platforms and providing our professional consulting and integration services, we may collect the following categories of information:
            </p>
            <ul>
              <li><strong>Contact Information:</strong> Such as your name, corporate email address, phone number, and physical business address when you initiate contact, request support, or establish a partnership.</li>
              <li><strong>Professional Details:</strong> Information related to your role, company name, industry, and the nature of your inquiry.</li>
              <li><strong>Usage and Technical Data:</strong> Automated information collected through your interaction with our website, including IP addresses, browser types, operating systems, and page interaction metrics, which help us optimize the performance and security of our site.</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>
              We process your personal information securely and only for legitimate business purposes. Such purposes include:
            </p>
            <ul>
              <li><strong>Service Delivery:</strong> To respond to your inquiries, deliver requested proposals, and fulfill contractual obligations.</li>
              <li><strong>Platform Optimization:</strong> To monitor and analyze website traffic, troubleshoot technical issues, and improve the user experience of our digital properties.</li>
              <li><strong>Communication:</strong> To send administrative information, technical notices, and updates regarding our policies or your ongoing projects.</li>
              <li><strong>Compliance:</strong> To satisfy legal obligations, resolve disputes, and enforce our agreements.</li>
            </ul>

            <h2>3. Data Protection and Security</h2>
            <p>
              Protecting enterprise data is core to our operational philosophy. We utilize commercially reasonable and industry-standard technical, administrative, and physical safeguards designed to protect your information against loss, unauthorized access, alteration, and misuse. However, please note that no electronic transmission or storage system can be guaranteed to be 100% secure.
            </p>

            <h2>4. Third-Party Disclosures</h2>
            <p>
              We do not sell, rent, or trade your personal information to third parties for their marketing purposes. We may share necessary information with trusted service providers who assist us in operating our website and conducting our business, provided those parties agree to uphold strict confidentiality standards. We may also disclose information when mandated by legal processes or to protect our rights and the safety of our users.
            </p>

            <h2>5. Your Rights and Choices</h2>
            <p>
              Depending on your jurisdiction, you may have the right to request access to, correction of, or deletion of your personal data held by us. You may also have the right to object to or restrict certain data processing activities. To exercise these rights, please contact us using the information provided below.
            </p>
            
            <h2>6. Revisions to this Policy</h2>
            <p>
              We reserve the right to modify this Privacy Policy at any time to reflect updates to our practices or relevant legal requirements. We encourage you to periodically review this page for the latest information on our privacy practices.
            </p>

            <h2>7. Contact Us</h2>
            <p>
              If you have any questions or concerns regarding this Privacy Policy or our treatment of your data, please reach out to our privacy compliance team:<br/><br/>
              <strong>Email:</strong> info@celoxus.com<br/>
              <strong>Phone:</strong> +1 469 994 4602
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export const TermsOfService = () => {
  return (
    <div className="bg-[#020617] text-white min-h-screen relative overflow-hidden pt-40 pb-32">
      <Helmet>
        <title>Terms of Service | Celoxus</title>
        <meta name="description" content="Read the Celoxus Terms of Service to understand the rules and guidelines governing the use of our website and professional integration services." />
      </Helmet>
      
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#049fd9]/5 blur-[110px] rounded-full pointer-events-none z-0"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 text-indigo-300 text-sm font-normal mb-8 uppercase tracking-widest bg-white/5 backdrop-blur-md">
             <BookOpen className="w-4 h-4" /> Legal Framework
          </div>
          <h1 className="text-4xl md:text-5xl font-light font-display tracking-tight mb-8">
            Terms of Service
          </h1>
          <p className="text-slate-400 font-light mb-12">Effective Date: January 1, 2024</p>

          <div className="text-slate-300 text-lg leading-[1.8] tracking-wide [&>p]:mb-8 [&>h2]:text-3xl [&>h2]:font-normal [&>h2]:text-white [&>h2]:mt-16 [&>h2]:mb-6 [&>ul]:list-disc [&>ul]:pl-8 [&>ul>li]:mb-4 [&>ul>li>strong]:text-white">
            <p>
              These Terms of Service ("Terms") constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), and Celoxus ("we", "us", or "our"), concerning your access to and use of the Celoxus website and our associated consultative and professional integration services (collectively, the "Services"). By accessing the Services, you agree that you have read, understood, and agree to be bound by all of these Terms.
            </p>

            <h2>1. Service Utilization and Scope</h2>
            <p>
              Celoxus operates as a technology consulting and systems integration firm. Information provided on this website is for general informational purposes only and does not constitute technical warranties or definitive engineering advice. Formal engineering, architecture mapping, and implementation engagements are strictly governed by individually executed Master Services Agreements (MSAs) or Statements of Work (SOWs) signed by both parties.
            </p>

            <h2>2. Intellectual Property Rights</h2>
            <p>
              Unless otherwise indicated or stipulated in an active MSA, the Site and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein are owned or controlled by us or licensed to us. You are granted a limited, non-exclusive, non-transferable license to access the Site for internal informational purposes.
            </p>

            <h2>3. User Representations</h2>
            <p>
              By utilizing our Site or submitting inquiries, you represent and warrant that: (1) all information you submit will be true, accurate, current, and complete; (2) you have the legal capacity to comply with these Terms; and (3) you will not access the Site through automated or non-human means strictly for malicious scraping or exploitation.
            </p>

            <h2>4. Disclaimers and Limitation of Liability</h2>
            <p>
              THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF. 
            </p>
            <p>
              In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site or reliance on any information provided herein.
            </p>

            <h2>5. Third-Party Integrations and Affiliations</h2>
            <p>
              Celoxus provides integrations and consulting for third-party platforms (such as Cisco, Webex, and other enterprise vendors). We are an independent entity. Any mentions of third-party platforms, trademarks, or registered protocols are the property of their respective owners. Our Terms do not supersede the End User License Agreements (EULAs) required by those third-party vendors.
            </p>
            
            <h2>6. Modifications to Terms</h2>
            <p>
              We reserve the right, in our sole discretion, to make changes or modifications to these Terms at any time. We will alert you about any changes by updating the "Effective Date" of these Terms, and you waive any right to receive specific notice of each such change.
            </p>

            <h2>7. Governing Law</h2>
            <p>
              These Terms and your use of the Site are governed by and construed in accordance with the laws of the applicable jurisdiction in which Celoxus maintains its primary headquarters, without regard to its conflict of law principles.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
