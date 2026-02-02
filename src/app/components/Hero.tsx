import React from "react";
import { Link } from "react-router-dom";
import { CTAButton } from "../components/CTAButton";
import { DroneScene } from "../components/DroneScene";

export function Hero() {
  const scrollAreaRef = React.useRef<HTMLDivElement | null>(null);

  return (
    <div ref={scrollAreaRef} className="relative h-[150vh]">
      {/* Pinned hero viewport */}
      <section className="sticky top-0 h-screen overflow-hidden bg-gradient-to-br from-primary via-secondary to-primary">
        {/* Background visual treatment preserved from original hero */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(0, 212, 255, 0.3) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0, 212, 255, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* 3D drone layer */}
        <DroneScene
          scrollTargetRef={scrollAreaRef}
          modelUrl="/models/drone.glb"
          className="pointer-events-none absolute inset-0"
        />

        {/* Content layer */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
            {/* Left: text */}
            <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
              <div className="inline-block px-4 py-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full text-accent text-sm font-medium mb-4">
                🇮🇳 Atmanirbhar Bharat • Made in India
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Indigenous Drone Technology
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">
                  for India's Future
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto lg:mx-0">
                Advanced unmanned aerial systems for agriculture, inspection,
                logistics, surveillance, and defence.
              </p>
              <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 pt-4">
                <Link to="/solutions">
                  <CTAButton variant="primary" showArrow>
                    Explore Solutions
                  </CTAButton>
                </Link>
                <Link to="/about">
                  <CTAButton variant="outline">Contact Us</CTAButton>
                </Link>
              </div>
            </div>

            {/* Right column - empty on desktop for drone, adds spacing on mobile */}
            <div className="order-1 lg:order-2 h-32 lg:h-auto" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
          <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-accent rounded-full animate-pulse" />
          </div>
        </div>
      </section>
    </div>
  );
}