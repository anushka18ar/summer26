import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

const platform = [
  { href: "/about", label: "About" },
  { href: "/board", label: "Board" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
  { href: "/experts", label: "Find Experts" },
];

const legal = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

export default function Footer() {
  return (
    <footer className="text-white" style={{ background: "#050506" }}>
      <div className="h-px bg-white/5" />
      <div className="h-[2px] bg-primary" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex mb-4">
              <Image
                src="/logo.png"
                alt="Outceedo"
                width={140}
                height={40}
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              The premier ecosystem connecting rising football stars with world-class coaches, scouts, and performance experts.
            </p>
            <div className="flex items-center gap-2">
              <span className="dot-live" />
              <span className="text-xs text-slate-600 font-medium">Platform Operational</span>
            </div>
          </div>

          {/* Platform links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-5">PLATFORM</h3>
            <ul className="space-y-3">
              {platform.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-slate-500 hover:text-red-500 text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-5">LEGAL</h3>
            <ul className="space-y-3">
              {legal.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-slate-500 hover:text-red-500 text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-5">HEADQUARTERS</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-primary shrink-0 mt-0.5" />
                <span className="text-slate-500 text-sm">82 Berryden Gardens, Aberdeen, UK, AB25 3RW</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-primary shrink-0" />
                <a href="mailto:info@outceedo.com" className="text-slate-500 hover:text-red-500 text-sm transition-colors">
                  info@outceedo.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-primary shrink-0" />
                <a href="tel:+447707201236" className="text-slate-500 hover:text-red-500 text-sm transition-colors">
                  +44 7707 201236
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-xs">
            © 2026 OUTCEEDO LIMITED. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">Privacy Policy</Link>
            <span className="text-white/10">·</span>
            <Link href="/terms" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">Terms of Service</Link>
            <span className="text-white/10">·</span>
            <Image src="/logo.png" alt="Outceedo" width={80} height={24} className="h-5 w-auto object-contain opacity-30" />
          </div>
        </div>
      </div>
    </footer>
  );
}
