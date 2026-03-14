"use client";

import { useEffect, useRef, useState } from "react";

export default function VantaBackground() {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let effect: any = null;
    
    // Safety timeout to ensure scripts initialized
    const initVanta = () => {
      try {
        if (!vantaEffect && vantaRef.current) {
          const VANTA = (window as any).VANTA;
          if (VANTA && VANTA.TOPOLOGY) {
            effect = VANTA.TOPOLOGY({
              el: vantaRef.current,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.00,
              minWidth: 200.00,
              scale: 1.00,
              scaleMobile: 1.00,
              color: 0x00f0ff,
              backgroundColor: 0x09090b,
            });
            setVantaEffect(effect);
          } else {
            console.error("VANTA.TOPOLOGY not found on window object.");
          }
        }
      } catch (error: any) {
        console.error("[VantaBackground] Initialization failed:", error);
      }
    };

    // Small delay allows beforeInteractive scripts to fully parse if they hadn't yet
    const timeout = setTimeout(initVanta, 100);

    return () => {
      clearTimeout(timeout);
      if (effect) {
        effect.destroy();
      }
    };
  }, [vantaEffect]);

  return (
    <div 
      ref={vantaRef} 
      className="fixed inset-0 w-full h-full pointer-events-auto"
      style={{ zIndex: -1 }}
    />
  );
}
