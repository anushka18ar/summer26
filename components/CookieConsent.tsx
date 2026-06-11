"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("outceedo-cookie-consent");
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("outceedo-cookie-consent", "accepted");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem("outceedo-cookie-consent", "rejected");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
        >
          <div className="max-w-3xl mx-auto bg-white border border-slate-200 rounded-2xl shadow-card p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-sm text-slate-600 leading-relaxed flex-1">
              We use cookies to enhance your browsing experience. By continuing to use our site, you agree to our{" "}
              <Link href="/privacy" className="text-primary hover:underline font-medium">Cookie Policy</Link>
              {" "}and{" "}
              <Link href="/terms" className="text-primary hover:underline font-medium">Terms of Use</Link>.
            </p>
            <div className="flex gap-3 shrink-0">
              <button onClick={reject} className="btn-secondary !h-9 !px-4 !text-xs">Reject</button>
              <button onClick={accept} className="btn-primary !h-9 !px-4 !text-xs">Accept</button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
