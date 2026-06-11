import Link from "next/link";

const sections = [
  {
    title: "INTRODUCTION",
    content: `Welcome to Outceedo, please read these Terms of Use carefully before using outceedo.com and its services. These Terms of Use ("Terms") apply to your access to, and use of the website and other online products and services (collectively, our "Services") provided by Outceedo Ltd.\n\nBy accessing or using our Website, Mobile App or Services, you agree to comply with and be legally bound by these Terms of Use. If you do not read, fully understand and agree to these Terms of Use, you must immediately leave the Website and discontinue use of our Services.`,
  },
  {
    title: "WHO WE ARE",
    content: `Outceedo is an Online Marketplace (b2c eCommerce website) that connects worldwide sports experts and aspiring sports players.\n\nOutceedo.com — Registered in Scotland, United Kingdom (Registration number SC853014)\nRegistered address: 82 Berryden Gardens, Aberdeen, United Kingdom, AB25 3RW`,
  },
  {
    title: "OUR PLATFORM",
    content: `Outceedo is an Online Marketplace (b2c eCommerce website) that connects worldwide sports experts and aspiring sports players.\n\nWe serve worldwide sports experts, aspiring sports players, sports related clubs, academies, companies, organisations, audience/fans/followers, sports media companies, and sports sponsors with an online marketplace and many other services.`,
  },
  {
    title: "USER TYPES AND OUR SERVICES",
    content: `Users: Players, Sports Experts, Sports Teams, Sports Sponsors, Fans/Followers, Scouts.\n\nA Platform/Online Marketplace that allows Sports Experts to create their profile, add personal details, photos, videos, certificates, awards, social media links and offer various services to worldwide Sports Players.\n\nA Platform/Online Marketplace that allows Sports Players to create their profile, add personal details, photos, videos, certificates, awards, social media links and book worldwide services provided by Sports Experts, and apply for Sponsorships from Sponsors.`,
  },
  {
    title: "USER ELIGIBILITY",
    content: `You must be at least 18 years of age to use our Services independently. Users under 18 years of age must have a parent or guardian sign up on their behalf and supervise their use of the platform.\n\nBy creating an account, you represent and warrant that you meet these eligibility requirements and that all information you provide is accurate and truthful.`,
  },
  {
    title: "USER OBLIGATIONS/RESPONSIBILITY",
    content: `YOU SHOULD: provide accurate and truthful information; keep your login credentials secure; use the platform for lawful purposes; respect other users and their content; comply with all applicable laws and regulations.\n\nYOU SHOULD NOT: impersonate any person or entity; harass, abuse, or harm other users; upload harmful, offensive, or illegal content; attempt to gain unauthorized access to the platform; use automated tools to scrape or access data; violate any intellectual property rights.`,
  },
  {
    title: "PARENT/GUARDIAN AGREEMENT",
    content: `If you are a parent or guardian signing up on behalf of a minor (under 18 years of age), you agree to supervise and be responsible for the minor's use of the platform. You accept full responsibility for ensuring that the minor's use of our Services complies with these Terms.`,
  },
  {
    title: "PAYMENTS AND SUBSCRIPTIONS",
    content: `Outceedo offers both free and paid subscription plans. Paid subscriptions (Premium) are billed on a monthly or annual basis as selected by the user.\n\nYou may cancel your subscription at any time. Access to Premium features will continue until the end of the current billing period. We reserve the right to modify pricing with reasonable notice.`,
  },
  {
    title: "LIMITATION OF LIABILITY",
    content: `Outceedo's services are provided "as is" without any warranties, express or implied. We do not guarantee uninterrupted or error-free service. To the maximum extent permitted by law, Outceedo shall not be liable for any indirect, incidental, special, consequential or punitive damages.`,
  },
  {
    title: "GOVERNING LAW",
    content: `These Terms shall be governed by and construed in accordance with the laws of Scotland and the United Kingdom. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of Scotland.`,
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="relative py-20 lg:py-28 overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="badge badge-white mb-4 inline-flex">LEGAL</span>
          <h1 className="font-display font-black text-[clamp(40px,6vw,80px)] uppercase leading-[0.9] mb-4 text-slate-900">
            TERMS<br />
            <span className="text-primary italic">OF USE</span>
          </h1>
          <p className="text-slate-600">Please read these terms carefully</p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {sections.map((section, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-card">
                <h2 className="font-display font-black text-lg uppercase text-primary mb-4">{section.title}</h2>
                {section.content.split("\n\n").map((para, j) => (
                  <p key={j} className="text-slate-600 text-sm leading-relaxed mb-3 last:mb-0 whitespace-pre-line">{para}</p>
                ))}
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-slate-400 text-sm">
              By using Outceedo, you agree to these Terms.{" "}
              <Link href="/privacy" className="text-primary hover:underline">View Privacy Policy</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
