"use client";
import { useEffect, useRef, useState } from "react";
import FooterAll from "../footerAll";

export default function FooterObserver() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (triggerRef.current) observer.observe(triggerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Trigger */}
      <div ref={triggerRef} className="h-5"></div>

      {/* Footer */}
      <footer
        className={`footer ${isVisible ? "visible" : ""} fixed bottom-0 left-0 w-full bg-gray-800`}
      >
        <FooterAll />
      </footer>
    </>
  );
}
