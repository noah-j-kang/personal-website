"use client";

import { useEffect, useRef, useState } from "react";
import p5 from "p5";
// @ts-ignore - Vanta doesn't have official TypeScript types, so we ignore the warning
import TOPOLOGY from "vanta/dist/vanta.topology.min";

export default function VantaBackground() {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only initialize if it hasn't been initialized yet and the ref exists
    if (!vantaEffect && vantaRef.current) {
      try {
        const effect = TOPOLOGY({
          el: vantaRef.current,
          p5: p5, // We explicitly pass the p5 library to Vanta here
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x06c0cc,
          backgroundColor: 0x09090b,
          backgroundAlpha: 0.0,
        });
        setVantaEffect(effect);
      } catch (error) {
        console.error("[VantaBackground] Initialization failed:", error);
      }
    }

    return () => {
      // Clean up the effect when the component unmounts
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      className="fixed inset-0 w-full h-full pointer-events-auto"
      style={{ zIndex: 0 }}
    />
  );
}