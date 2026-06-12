import Link from "next/link";

const sections = [
  {
    title: "INTRODUCTION",
    content: `Outceedo Limited (outceedo.com), registered in Scotland, UK (Registration number SC853014), with the registered address at: 82 Berryden Gardens, Aberdeen, UK, AB25 3RW.\n\nIn this Privacy Policy "we", "us" and "our" means Outceedo, outceedo.com, Outceedo Limited, while references to "you" and "your" refer to the persons/users accessing and/or using this web or mobile app.\n\nOutceedo complies with and is registered under the data protection laws in the United Kingdom and takes all reasonable care to prevent any unauthorised access to your personal data. We protect and respect the privacy of every individual who visits our site and follow strict security procedures in the storage and disclosure of your information as required by law under the Data Protection Act 1998.`,
  },
  {
    title: "INFORMATION WE COLLECT FROM YOU",
    content: `Information you give us: This is information about you that you give us by filling in forms on our site (https://outceedo.com) or by corresponding with us by phone, e-mail or otherwise. It includes information you provide when you register to use our site, subscribe to our service, search for a product, place an order on our site, participate in discussion boards or other social media functions on our site, or report a problem with our site. The information you give us may include your name, address, e-mail address and phone number, personal description and photograph, and any other information.\n\nInformation we collect about you: With regard to each of your visits to our site we will automatically collect the following information: technical information, including the Internet protocol (IP) address, your login information, browser type and version, location, time zone setting, browser plug-in types and versions, operating system and platform, and information about your visit, including the full Uniform Resource Locators (URL), click stream to, through and from our site (including date and time), and page response times.`,
  },
  {
    title: "COOKIES, WEB BEACONS & SIMILAR TECHNOLOGIES",
    content: `We use cookies and similar tracking technologies to track the activity on our platform and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.\n\nYou can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.`,
  },
  {
    title: "USES MADE OF THE INFORMATION",
    content: `We use information held about you in the following ways: to ensure that content from our site is presented in the most effective manner; to provide you with information, products or services that you request from us; to carry out our obligations arising from any contracts entered into between you and us; to allow you to participate in interactive features of our service; to notify you about changes to our service; and to administer our site and for internal operations.`,
  },
  {
    title: "DISCLOSURE OF YOUR INFORMATION",
    content: `We may share your personal information with any member of our group, which means our subsidiaries, our ultimate holding company and its subsidiaries. We may share your information with selected third parties including business partners, suppliers and sub-contractors for the performance of any contract we enter into with them or you.\n\nWe will disclose your personal information to third parties if we are under a duty to disclose or share your personal data in order to comply with any legal obligation, or in order to enforce or apply our terms of use and other agreements.`,
  },
  {
    title: "WHERE WE STORE YOUR PERSONAL DATA",
    content: `The data that we collect from you may be transferred to, and stored at, a destination outside the European Economic Area ("EEA"). By submitting your personal data, you agree to this transfer, storing or processing. We will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this privacy policy.`,
  },
  {
    title: "YOUR RIGHTS",
    content: `You have the right to ask us not to process your personal data for marketing purposes. You have the right to access your personal data, request rectification, erasure, or restriction of processing. You also have the right to data portability and to object to processing.\n\nTo exercise any of these rights, please contact us at info@outceedo.com.`,
  },
  {
    title: "CONTACT",
    content: `Questions, comments and requests regarding this privacy policy are welcomed and should be addressed to: info@outceedo.com or Outceedo Limited, 82 Berryden Gardens, Aberdeen, UK, AB25 3RW.`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-20" style={{ background: "#0a0a0b" }}>
      <section
        className="relative py-20 lg:py-28 overflow-hidden border-b"
        style={{ borderColor: "rgba(255,255,255,0.05)" }}
      >
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="badge badge-red mb-4 inline-flex">LEGAL</span>
          <h1 className="font-display font-black text-[clamp(40px,6vw,80px)] uppercase leading-[0.9] mb-4 text-white">
            PRIVACY &<br />
            <span className="text-primary italic">COOKIE POLICY</span>
          </h1>
          <p className="text-slate-400">Your privacy matters to us</p>
        </div>
      </section>

      <section className="py-16 lg:py-20" style={{ background: "#111114" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {sections.map((section, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 sm:p-8 border border-white/8"
                style={{ background: "#15151a", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)" }}
              >
                <h2 className="font-display font-black text-lg uppercase text-primary mb-4">{section.title}</h2>
                {section.content.split("\n\n").map((para, j) => (
                  <p key={j} className="text-slate-400 text-sm leading-relaxed mb-3 last:mb-0">{para}</p>
                ))}
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-slate-500 text-sm">
              By using Outceedo, you agree to this Privacy Policy.{" "}
              <Link href="/terms" className="text-primary hover:underline">View Terms of Service</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
