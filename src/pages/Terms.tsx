import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/shared/PageHero";
import { ContentSection } from "@/components/shared/ContentSection";

export default function Terms() {
  return (
    <PageLayout>
      <PageHero
        title="Terms of Service"
        subtitle="Last updated: June 2025"
      />
      <ContentSection>
        <div className="max-w-3xl mx-auto prose-consulting">

          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing or using the Saga Excellence website, you agree to be bound
            by these Terms of Service. If you do not agree, please do not use our website.
          </p>

          <h2>2. Description of Services</h2>
          <p>
            Saga Excellence provides strategic management consulting, Lean methodology
            training, process excellence programs, and related advisory services.
            The information on this website is for general informational purposes only.
            Engagement of our services is subject to a separate written agreement.
          </p>

          <h2>3. Intellectual Property</h2>
          <p>
            All content on this website — including text, graphics, logos, and
            methodologies — is the property of Saga Excellence and is protected by
            applicable intellectual property laws. You may not reproduce or distribute
            our content without prior written permission.
          </p>

          <h2>4. Use of the Website</h2>
          <p>You agree to use this website only for lawful purposes. You must not:</p>
          <ul>
            <li>Use the site in any way that violates applicable law</li>
            <li>Transmit unsolicited advertising or promotional material</li>
            <li>Attempt to gain unauthorized access to any part of the website</li>
            <li>Introduce viruses or other harmful material</li>
          </ul>

          <h2>5. Disclaimers</h2>
          <p>
            The information on this website is provided "as is" without warranty of any kind.
            Content on this site does not constitute professional advice. For specific business,
            legal, or financial decisions, please consult qualified professionals.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Saga Excellence shall not be liable
            for any indirect, incidental, or consequential damages arising from your use
            of this website.
          </p>

          <h2>7. Governing Law</h2>
          <p>
            These Terms of Service are governed by the laws of the Czech Republic.
            Any disputes shall be subject to the exclusive jurisdiction of the courts
            of Prague, Czech Republic.
          </p>

          <h2>8. Changes to Terms</h2>
          <p>
            We reserve the right to update these Terms at any time. Changes will be
            effective upon posting to this page with an updated date. Continued use
            of the website constitutes acceptance of the revised terms.
          </p>

          <h2>9. Contact Us</h2>
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
