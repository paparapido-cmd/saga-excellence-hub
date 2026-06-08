import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/shared/PageHero";
import { ContentSection } from "@/components/shared/ContentSection";

export default function Privacy() {
  return (
    <PageLayout>
      <PageHero
        title="Privacy Policy"
        subtitle="Last updated: June 2025"
      />
      <ContentSection>
        <div className="max-w-3xl mx-auto prose-consulting">

          <h2>1. Introduction</h2>
          <p>
            Saga Excellence is committed to protecting your personal information
            and your right to privacy. This Privacy Policy explains how we collect,
            use, and safeguard information when you visit our website or engage with our services.
            If you have any questions, please contact us at office@sagaexcellence.com.
          </p>

          <h2>2. Information We Collect</h2>
          <p>We collect information you voluntarily provide, including when you:</p>
          <ul>
            <li>Fill out our contact form</li>
            <li>Send us an email</li>
            <li>Book a consultation call</li>
          </ul>
          <p>
            This may include your name, email address, phone number, company name,
            and the content of your messages. We also collect basic technical data
            such as IP address and browser type to improve our website.
          </p>

          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your inquiries and fulfill your requests</li>
            <li>Provide and maintain our consulting services</li>
            <li>Improve our website and user experience</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p>We will never sell or share your personal information with third parties for marketing purposes.</p>

          <h2>4. Legal Basis for Processing (GDPR)</h2>
          <p>If you are located in the European Union, we process your personal data under the following legal bases: consent, contract, legitimate interests, and legal obligation.</p>

          <h2>5. Third-Party Services</h2>
          <p>
            Our contact form is processed through Formspree, which operates under its own privacy policy.
            We use this service solely to receive and manage your messages securely.
          </p>

          <h2>6. Your Rights</h2>
          <p>You may have the right to access, correct, delete, or restrict processing of your personal data. To exercise these rights, contact us at office@sagaexcellence.com. We will respond within 30 days.</p>

          <h2>7. Data Retention</h2>
          <p>We retain your personal information only as long as necessary to fulfill the purposes described in this policy, or as required by law.</p>

          <h2>8. Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the internet is 100% secure.</p>

          <h2>9. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date.</p>

          <h2>10. Contact Us</h2>
          <p>
            Saga Excellence<br />
            Prague, Czech Republic<br />
            Email: office@sagaexcellence.com<br />
            Phone: +381 63 802 6766
          </p>

        </div>
      </ContentSection>
    </PageLayout>
  );
}
