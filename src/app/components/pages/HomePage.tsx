import React from "react";
import { Link } from "react-router-dom";
import { CTAButton } from "../CTAButton";
import { Sprout, Building2, Package, Eye, Shield, Wrench, Target, Award, Users, Lightbulb } from 'lucide-react';
import { Hero } from "../Hero";

export function HomePage() {
  const industries = [
    {
      icon: Sprout,
      title: 'Agriculture',
      description: 'Precision farming with crop monitoring and pesticide spraying drones.',
    },
    {
      icon: Wrench,
      title: 'Inspection',
      description: 'Infrastructure and industrial inspection with high-resolution imaging.',
    },
    {
      icon: Building2,
      title: 'Infrastructure',
      description: 'Real-time monitoring of construction sites and infrastructure projects.',
    },
    {
      icon: Package,
      title: 'Logistics',
      description: 'Last-mile delivery solutions for urban and remote locations.',
    },
    {
      icon: Eye,
      title: 'Surveillance',
      description: 'Advanced surveillance systems for security and public safety.',
    },
    {
      icon: Shield,
      title: 'Defence',
      description: 'Military-grade UAV systems for reconnaissance and tactical operations.',
    },
  ];

  const solutions = [
    {
      title: 'Agricultural Drones',
      description: 'Increase crop yield with AI-powered precision agriculture and automated spraying systems.',
      image: 'https://images.unsplash.com/photo-1720386063956-00296002a701?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGRyb25lJTIwZmllbGR8ZW58MXx8fHwxNzY5OTYxNDkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Surveillance Systems',
      description: 'Military-grade surveillance drones with advanced imaging and real-time data transmission.',
      image: 'https://images.unsplash.com/photo-1691172874488-94e5e955b4a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXJ2ZWlsbGFuY2UlMjBkcm9uZSUyMGZseWluZ3xlbnwxfHx8fDE3NzAwMTY0Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Inspection Drones',
      description: 'Industrial-grade inspection solutions for infrastructure, power lines, and hard-to-reach areas.',
      image: 'https://images.unsplash.com/photo-1659543690669-d40b1bfefc12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwaW5zcGVjdGlvbiUyMGRyb25lfGVufDF8fHx8MTc3MDAxNjQyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const pillars = [
    {
      icon: Target,
      title: 'Precision',
      description: 'Cutting-edge technology for accurate and reliable operations.',
    },
    {
      icon: Award,
      title: 'Reliability',
      description: 'Built to perform in the most demanding conditions.',
    },
    {
      icon: Lightbulb,
      title: 'Scalability',
      description: 'Solutions that grow with your business needs.',
    },
    {
      icon: Users,
      title: 'Knowledge Transfer',
      description: 'Comprehensive training and support for sustainable operations.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Industries Served Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Delivering cutting-edge drone solutions across multiple sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div
                  key={index}
                  className="group p-6 bg-white border border-border rounded-lg hover:shadow-xl hover:shadow-accent/10 hover:border-accent/50 transition-all duration-300"
                >
                      <div className="
                  w-12 h-12 rounded-xl flex items-center justify-center mb-4
                  bg-cyan-300 border 
                  shadow-[0_0_20px_rgba(34,211,238,0.35)]
                  group-hover:scale-110 transition-all duration-300
                ">
                   <Icon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {industry.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {industry.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Solutions Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Featured Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Innovative drone technology designed for real-world applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {solution.description}
                  </p>
                  <Link to="/solutions" className="text-cyan-800 font-medium hover:underline inline-flex items-center">
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Eunora Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose Eunora
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence and innovation sets us apart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={index}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-accent/30">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Training Highlight Banner */}
      <section className="py-20 bg-gradient-to-r from-primary via-secondary to-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 212, 255, 0.5) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 212, 255, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px',
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Drone Training & Workshops
              </h2>
              <p className="text-xl text-white/80 mb-6">
                Empowering the next generation with hands-on UAV training, student workshops, and STEM learning programs.
              </p>
              <Link to="/training">
                <CTAButton variant="primary" showArrow>
                  Book a Workshop
                </CTAButton>
              </Link>
            </div>
            <div className="flex-1 max-w-md">
              <img
                src="https://images.unsplash.com/photo-1659543690669-d40b1bfefc12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMHdvcmtzaG9wJTIwc3R1ZGVudHMlMjB0cmFpbmluZ3xlbnwxfHx8fDE3NzAwMTY0Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Drone Training"
                className="w-full h-64 object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}