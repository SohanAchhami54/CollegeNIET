"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function WhatsAppFloatButton() {
  const phoneNumber = "9779845301787";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldAnimate(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        fixed bottom-6 right-6 z-50
        w-12 h-12 md:w-14 md:h-14
        rounded-full
        shadow-lg hover:shadow-xl
        hover:scale-110 active:scale-95
        outline-none
        focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2
        overflow-hidden
        ${shouldAnimate ? "animate-bounce-in" : "opacity-0"}
      `}
      style={{ zIndex: 9999 }}
      aria-label="Contact us on WhatsApp"
    >
      <Image
        src="/whatsapp.png"
        alt="WhatsApp"
        fill
        className="w-full h-full object-contain rounded-full"
        loading="eager"
        draggable="false"
      />
      <span className="sr-only">Contact us on WhatsApp</span>
    </a>
  );
}
