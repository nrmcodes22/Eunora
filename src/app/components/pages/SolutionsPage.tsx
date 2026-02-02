import React from "react"
import { Link } from 'react-router-dom';
import { CTAButton } from '../CTAButton';
import { Sprout, Wrench, Building2, Package, Eye, Shield, Cog, CheckCircle } from 'lucide-react';

export function SolutionsPage() {
  const solutions = [
    {
      icon: Sprout,
      title: 'Agriculture',
      description: 'Precision agriculture solutions with crop monitoring, health analysis, and automated pesticide spraying.',
      features: [
        'Crop health monitoring',
        'Automated spraying systems',
        'Yield optimization',
        'Real-time field mapping',
      ],
      image: 'https://images.unsplash.com/photo-1720386063956-00296002a701?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGRyb25lJTIwZmllbGR8ZW58MXx8fHwxNzY5OTYxNDkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Wrench,
      title: 'Inspection',
      description: 'Industrial inspection drones for power lines, pipelines, wind turbines, and hard-to-reach infrastructure.',
      features: [
        'High-resolution imaging',
        'Thermal inspection',
        'Defect detection',
        'Safety compliance',
      ],
      image: 'https://images.unsplash.com/photo-1659543690669-d40b1bfefc12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwaW5zcGVjdGlvbiUyMGRyb25lfGVufDF8fHx8MTc3MDAxNjQyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Building2,
      title: 'Infrastructure',
      description: 'Construction site monitoring, progress tracking, and 3D mapping for infrastructure development projects.',
      features: [
        'Site surveying',
        'Progress monitoring',
        '3D modeling',
        'Volume calculations',
      ],
      image: 'https://images.unsplash.com/photo-1752937395499-18e109d60739?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkcm9uZSUyMGFlcmlhbCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcwMDE2NDI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Package,
      title: 'Logistics',
      description: 'Last-mile delivery solutions for medical supplies, e-commerce, and emergency response operations.',
      features: [
        'Autonomous delivery',
        'Route optimization',
        'Real-time tracking',
        'Payload flexibility',
      ],
      image: 'https://images.unsplash.com/photo-1753781466414-e93cf7f4f6df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpdmVyeSUyMGxvZ2lzdGljcyUyMGRyb25lfGVufDF8fHx8MTc3MDAxNjQyOHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Eye,
      title: 'Surveillance',
      description: 'Advanced surveillance systems for border security, crowd monitoring, and law enforcement operations.',
      features: [
        'Real-time video feed',
        'Night vision capability',
        'Long-range operation',
        'AI-powered detection',
      ],
      image: 'https://images.unsplash.com/photo-1691172874488-94e5e955b4a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXJ2ZWlsbGFuY2UlMjBkcm9uZSUyMGZseWluZ3xlbnwxfHx8fDE3NzAwMTY0Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Shield,
      title: 'Defence',
      description: 'Military-grade unmanned aerial systems for reconnaissance, tactical operations, and strategic missions.',
      features: [
        'Tactical reconnaissance',
        'Encrypted communication',
        'All-weather operation',
        'Stealth capabilities',
      ],
      image: 'https://images.unsplash.com/photo-1752937395499-18e109d60739?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkcm9uZSUyMGFlcmlhbCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcwMDE2NDI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              End-to-End Drone Solutions
            </h1>
            <p className="text-xl text-white/80">
              Comprehensive unmanned aerial systems tailored to your industry needs, backed by cutting-edge technology and indigenous innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
                >
                  {/* Image */}
                  <div className="flex-1 w-full">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg transform group-hover:scale-105 transition-transform duration-300"></div>
                      <img
                        src={solution.image}
                        alt={solution.title}
                        className="relative w-full h-80 object-cover rounded-lg shadow-xl"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 w-full">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <h2 className="text-3xl font-bold text-primary">
                        {solution.title}
                      </h2>
                    </div>
                    
                    <p className="text-lg text-muted-foreground mb-6">
                      {solution.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-cyan-700 flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link to="/about">
                      <CTAButton variant="outline">
                        Request More Info
                      </CTAButton>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Custom Drone Projects Section */}
      <section className="py-20 bg-gradient-to-br from-muted to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="w-16 h-16 bg-accent/80 rounded-full flex items-center justify-center mb-6">
                  <Cog className="w-8 h-8 text-black" />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Custom Drone Projects
                </h2>
                
                <p className="text-lg text-muted-foreground mb-6">
                  Need a specialized solution? Our engineering team can design and build custom unmanned aerial systems tailored to your unique requirements.
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-700 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Custom payload integration</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-700 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Specialized flight controllers</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-700 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Bespoke software solutions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-700 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">End-to-end project support</span>
                  </li>
                </ul>

                <Link to="/about">
                  <CTAButton variant="primary" showArrow>
                    Request Consultation
                  </CTAButton>
                </Link>
              </div>

              {/* Right Image */}
              <div className="relative h-64 lg:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1752937395499-18e109d60739?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkcm9uZSUyMGFlcmlhbCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcwMDE2NDI2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Custom Drone Projects"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Contact us today to discuss how our drone solutions can meet your specific needs.
          </p>
          <Link to="/about">
            <CTAButton variant="primary" showArrow>
              Get in Touch
            </CTAButton>
          </Link>
        </div>
      </section>
    </div>
  );
}
