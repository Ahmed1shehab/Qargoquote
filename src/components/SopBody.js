import logo from "../assets/q.png";
export const SOP1 = () => {
  return (
    <div className="container mx-auto px-4 mt-8">
      <div className="flex justify-center">
        <img src={logo} alt="Logo" className="w-80" />
      </div>
      <h1 className="text-3xl font-bold text-center mb-6 p-10">
        Standard Operating Procedure (SOP) for Qargoquote
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">1. Purpose</h2>
        <p className="text-lg text-gray-700">
          The purpose of this SOP is to establish clear, detailed, and
          structured guidelines for the operational processes of Qargoquote. It
          ensures a safe, efficient, and transparent environment for all users,
          including importers and service providers, while promoting trust, data
          protection, and business integrity. This document serves as a
          framework for achieving and maintaining operational excellence.
        </p>
      </section>

      <div className="border-t border-gray-300 w-full my-6"></div>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">
          2. User Registration and Verification
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          Qargoquote employs a stringent verification process to maintain a
          trustworthy user base.
        </p>
        <ul className="list-disc pl-8 text-lg text-gray-700 space-y-4">
          <li>
            <strong>Step 1: Account Creation</strong>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>For Importers:</strong> Importers must register their
                companies on the platform, providing detailed information such
                as company name, registration number, trade license, business
                address, and contact details. Importers must ensure that all the
                information provided is accurate and up to date.
              </li>
              <li>
                <strong>For Service Providers:</strong> Logistics providers must
                create an account by submitting valid documentation, including
                business registration certificates, licenses, operational
                permits, and proof of logistics activities. The service category
                (freight forwarding, warehousing, etc.) must be specified
                clearly.
              </li>
            </ul>
          </li>
          <li>
            <strong>Step 2: Submission of Documentation</strong>
            <p>
              Users must upload all necessary documents via a secure portal. All
              documents must be legible and authentic. The verification team
              will reach out for additional information if any inconsistencies
              or unclear details are found.
            </p>
          </li>
          <li>
            <strong>Step 3: Verification Process</strong>
            <p>
              Qargoquote's verification team performs a thorough review to
              validate the authenticity and legitimacy of the submitted
              documents. This process may include cross-referencing with
              government databases or contacting regulatory authorities if
              needed.
            </p>
          </li>
          <li>
            <strong>Step 4: Approval and Activation</strong>
            <p>
              Approved users will receive an email confirming successful
              verification and full access to the platform. Users whose accounts
              are denied will receive a detailed explanation of the reasons for
              denial, with the opportunity to resubmit corrected documents for
              reconsideration.
            </p>
          </li>
        </ul>
      </section>

      <div className="border-t border-gray-300 w-full my-6"></div>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">3. Subscription Management</h2>
        <p className="text-lg text-gray-700 mb-4">
          Access to Qargoquote is based on a flexible subscription model
          designed to accommodate businesses of all sizes.
        </p>
        <ul className="list-disc pl-8 text-lg text-gray-700 space-y-4">
          <li>
            <strong>Step 1: Selecting a Subscription Plan</strong>
            <p>
              Users can choose from three subscription options: weekly, monthly,
              or annual plans. Detailed descriptions of each plan, including
              features and pricing, are available on the subscription page.
            </p>
          </li>
          <li>
            <strong>Step 2: Payment Processing</strong>
            <p>
              Users must complete payment through the secure payment gateway.
              Accepted methods include credit cards, bank transfers, and digital
              wallets. Users receive an automated email receipt after payment
              confirmation.
            </p>
          </li>
          <li>
            <strong>Step 3: Subscription Activation</strong>
            <p>
              Once the payment is processed, the subscription is activated,
              granting full access to all Qargoquote features. Users must review
              the subscription agreement, which outlines the non-refundable
              nature of the fees.
            </p>
          </li>
          <li>
            <strong>Step 4: Renewal and Expiry Notifications</strong>
            <p>
              Users receive notifications for upcoming renewals or subscription
              expirations. Auto-renewal settings can be adjusted in the account
              settings, and users must ensure payment methods remain valid to
              avoid service interruptions.
            </p>
          </li>
          <li>
            <strong>Step 5: Subscription Cancellation</strong>
            <p>
              Users can cancel or modify their subscriptions at any time.
              Cancellations take effect at the end of the current billing
              period, with no refunds for unused time. Users are encouraged to
              review cancellation policies before proceeding.
            </p>
          </li>
        </ul>
      </section>
      <div className="border-t border-gray-300 w-full my-6"></div>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">
          4. Requesting and Providing Quotes
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          Qargoquote connects importers and service providers through a
          structured and secure quote management process.
        </p>
        <ul className="list-disc pl-8 text-lg text-gray-700 space-y-4">
          <li>
            <strong>For Importers:</strong>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Step 1: Creating a Shipment Request</strong>
                <p>
                  Importers must fill out a detailed shipment request form,
                  specifying all necessary details such as cargo type, weight,
                  dimensions, origin, destination, and any special handling
                  requirements. Complete and accurate information ensures
                  precise quotes from service providers.
                </p>
              </li>
              <li>
                <strong>Step 2: Reviewing and Comparing Quotes</strong>
                <p>
                  Importers receive quotes from service providers and can
                  compare options based on price, ratings, and delivery
                  timelines. Importers must carefully review these quotes before
                  making a final selection.
                </p>
              </li>
              <li>
                <strong>Step 3: Quote Confirmation</strong>
                <p>
                  Once a quote is confirmed, shipment details are locked, and
                  changes cannot be made. Importers must ensure all information
                  is correct before confirming.
                </p>
              </li>
            </ul>
          </li>
          <li>
            <strong>For Service Providers:</strong>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Step 1: Receiving Shipment Notifications</strong>
                <p>
                  Service providers receive notifications for new shipment
                  requests. Providers can view the shipment details and
                  determine whether they are equipped to fulfill the service as
                  requested.
                </p>
              </li>
              <li>
                <strong>Step 2: Submitting a Quote</strong>
                <p>
                  Providers submit comprehensive, transparent quotes that
                  include all fees and conditions. Quotes should reflect the
                  true cost of service, and no hidden charges are allowed.
                </p>
              </li>
              <li>
                <strong>
                  Step 3: Importer Identity Disclosure and Right to Reject
                </strong>
                <p>
                  The importer’s identity will remain hidden until the service
                  provider receives confirmation of the offer. If a service
                  provider has documented, proven bad history with the importer,
                  they have the right to reject performing the service even
                  after the quote has been confirmed. Service providers must
                  notify Qargoquote of the reason for the rejection, which will
                  be reviewed for compliance.
                </p>
              </li>
              <li>
                <strong>Step 4: Service Fulfillment</strong>
                <p>
                  If the service provider proceeds with the agreement, they are
                  responsible for fulfilling the shipment requirements as
                  outlined in the confirmed quote. Any deviation from agreed
                  terms without proper justification may lead to penalties or
                  suspension.
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-300 w-full my-6"></div>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">
          5. Payment and Financial Responsibility
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          Qargoquote does not process or secure payments but offers guidance on
          best practices.
        </p>
        <ul className="list-disc pl-8 text-lg text-gray-700 space-y-4">
          <li>
            <strong>Step 1: Direct Payment Arrangements</strong>
            <p>
              Importers and service providers must negotiate and agree on
              payment terms before initiating services. Common terms include
              upfront payments, installment-based payments, or cash on delivery
              (COD).
            </p>
          </li>
          <li>
            <strong>Step 2: Documenting Agreements</strong>
            <p>
              Users are advised to create a written agreement outlining payment
              schedules, methods, and any penalties for late payments.
              Qargoquote recommends digital signatures for added security.
            </p>
          </li>
          <li>
            <strong>Step 3: Dispute Prevention</strong>
            <p>
              Both parties should keep all communication and agreements
              documented within the Qargoquote platform. In case of payment
              disputes, this documentation is critical for mediation.
            </p>
          </li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">
          6. Dispute Resolution and Complaint Handling
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          A structured approach ensures fair handling of disputes and
          complaints.
        </p>
        <ul className="list-disc pl-8 text-lg text-gray-700 space-y-4">
          <li>
            <strong>Step 1: Filing a Complaint</strong>
            <p>
              Users can file complaints through the “Dispute Resolution”
              section. Complaints must include specific details, such as date of
              service, nature of the issue, and supporting evidence (e.g.,
              correspondence, receipts).
            </p>
          </li>
          <li>
            <strong>Step 2: Investigation and Mediation</strong>
            <p>
              The mediation team reviews complaints, contacts both parties for
              their accounts, and examines the provided evidence. Qargoquote
              strives to mediate disputes objectively and fairly, aiming for a
              mutually acceptable resolution.
            </p>
          </li>
          <li>
            <strong>Step 3: Outcome and Enforcement</strong>
            <p>
              If a user is found at fault (e.g., failure to pay or breach of
              service terms), consequences may include negative rating
              adjustments, account warnings, or suspension. A notification will
              be sent to all service providers if an importer fails to meet
              payment obligations, ensuring caution in future dealings.
            </p>
          </li>
          <li>
            <strong>Step 4: Appeal Process</strong>
            <p>
              Users may appeal the mediation decision within a specified period
              if they have new evidence or believe the ruling was unfair.
              Appeals are reviewed by a senior mediation officer, whose decision
              is final.
            </p>
          </li>
        </ul>
      </section>

      <div className="border-t border-gray-300 w-full my-6"></div>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">7. Ratings and Reviews</h2>
        <p className="text-lg text-gray-700 mb-4">
          Transparency and accountability are maintained through a detailed
          rating and review system.
        </p>
        <ul className="list-disc pl-8 text-lg text-gray-700 space-y-4">
          <li>
            <strong>Step 1: Leaving a Review</strong>
            <p>
              After each transaction, both importers and service providers are
              prompted to leave a review. Ratings are based on factors like
              communication, reliability, service quality, and payment
              timeliness. Detailed written feedback is encouraged to help other
              users make informed decisions.
            </p>
          </li>
          <li>
            <strong>Step 2: Monitoring and Authenticity Checks</strong>
            <p>
              The review system is actively monitored to prevent abuse or
              manipulation. Suspicious activity, such as repeated negative or
              overly positive reviews from the same entity, will trigger an
              investigation.
            </p>
          </li>
          <li>
            <strong>Step 3: Disciplinary Action</strong>
            <p>
              Users found manipulating the review system will face penalties,
              which may include reduced platform visibility, suspension, or
              banning.
            </p>
          </li>
        </ul>
      </section>

      <div className="border-t border-gray-300 w-full my-6"></div>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">
          8. Security and Data Management
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          User data security is a top priority for Qargoquote, and multiple
          layers of protection are in place.
        </p>
        <ul className="list-disc pl-8 text-lg text-gray-700 space-y-4">
          <li>
            <strong>Step 1: Data Encryption</strong>
            <p>
              All user data is encrypted using state-of-the-art security
              protocols, both in transit and at rest. This ensures that
              sensitive information remains secure from unauthorized access.
            </p>
          </li>
          <li>
            <strong>Step 2: Two-Factor Authentication (2FA)</strong>
            <p>
              Users are required to enable 2FA to add an extra layer of
              security. This measure ensures that only authorized individuals
              can access their accounts.
            </p>
          </li>
          <li>
            <strong>Step 3: Privacy Policies</strong>
            <p>
              Qargoquote adheres to strict data privacy regulations. User data
              is never shared with third parties without explicit consent,
              except as required by law. Users have the right to review, modify,
              or delete their personal data upon request.
            </p>
          </li>
        </ul>
      </section>

      <div className="border-t border-gray-300 w-full my-6"></div>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">
          9. Compliance and Platform Integrity
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          Maintaining the integrity of the platform is essential to ensuring
          trust among users.
        </p>
        <ul className="list-disc pl-8 text-lg text-gray-700 space-y-4">
          <li>
            <strong>Step 1: Compliance Requirements</strong>
            <p>
              All users must follow Qargoquote’s rules and adhere to local and
              international laws governing logistics and business transactions.
              Violations will result in account suspension, legal action, or
              both.
            </p>
          </li>
          <li>
            <strong>Step 2: Monitoring and Enforcement</strong>
            <p>
              Qargoquote employs monitoring systems to detect non-compliance,
              fraud, or misuse. Reports from users are also taken seriously and
              investigated promptly. Penalties are issued based on the severity
              of the infraction, with serious offenses leading to permanent
              banning from the platform.
            </p>
          </li>
        </ul>
      </section>

      <div className="border-t border-gray-300 w-full my-6"></div>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">
          10. Amendments and Policy Updates
        </h2>
        <ul className="list-disc pl-8 text-lg text-gray-700 space-y-4">
          <li>
            <strong>Step 1: User Notification</strong>
            <p>
              Users will be notified of any significant policy changes via email
              and platform announcements. It is the user’s responsibility to
              stay updated on these changes.
            </p>
          </li>
          <li>
            <strong>Step 2: Continued Use</strong>
            <p>
              Users who do not agree with the updated terms may cancel their
              subscriptions. Continued use of the platform signifies acceptance
              of the new terms and conditions.
            </p>
          </li>
        </ul>
      </section>

      <div className="border-t border-gray-300 w-full my-6"></div>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">11. Contact Information</h2>
        <p className="text-lg text-gray-700 mb-4">
          For inquiries, support, or feedback, users can reach Qargoquote
          through multiple channels:
        </p>
        <ul className="list-disc pl-8 text-lg text-gray-700">
          <li>Email: Info@qargoquote.com</li>
          <li>
            Online Inquiry: Available on the Qargoquote website for assistance.
          </li>
        </ul>
      </section>

      <div className="border-t border-gray-300 w-full my-6"></div>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">12. Additional Information</h2>
        <ul className="list-disc pl-8 text-lg text-gray-700 space-y-4">
          <li>
            <strong>Training and Support:</strong> Qargoquote offers training
            materials and resources to help users understand the platform's
            features and functions. This includes video tutorials, webinars, and
            a detailed FAQ section.
          </li>
          <li>
            <strong>Emergency Protocols:</strong> In case of platform-wide
            issues, Qargoquote has a dedicated emergency support team to address
            and resolve problems swiftly.
          </li>
        </ul>
      </section>
    </div>
  );
};
