import React from "react"
import { Link } from 'react-router-dom';
import { CTAButton } from '../CTAButton';
import { GraduationCap, Users, Rocket, BookOpen, Clock, Award, CheckCircle } from 'lucide-react';

export function TrainingPage() {
  const programs = [
    {
      icon: GraduationCap,
      title: 'Student Workshops',
      duration: '1-3 Days',
      description: 'Hands-on drone workshops for schools and colleges, introducing students to UAV technology and aviation.',
      topics: [
        'Drone basics and components',
        'Flight principles and safety',
        'Hands-on flying experience',
        'Career opportunities in UAV',
      ],
      audience: 'Classes 8-12, Engineering Students',
    },
    {
      icon: Rocket,
      title: 'UAV Training Programs',
      duration: '2-4 Weeks',
      description: 'Comprehensive training programs for professionals looking to enter the drone industry or upskill.',
      topics: [
        'Advanced flight operations',
        'Drone maintenance and repair',
        'Regulatory compliance',
        'Commercial applications',
      ],
      audience: 'Professionals, Entrepreneurs',
    },
    {
      icon: BookOpen,
      title: 'STEM Learning Programs',
      duration: 'Customizable',
      description: 'Integrated STEM curriculum combining robotics, coding, and drone technology for educational institutions.',
      topics: [
        'Programming and automation',
        'Sensor integration',
        'AI and computer vision',
        'Project-based learning',
      ],
      audience: 'Schools, Colleges, Training Centers',
    },
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1659543690669-d40b1bfefc12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMHdvcmtzaG9wJTIwc3R1ZGVudHMlMjB0cmFpbmluZ3xlbnwxfHx8fDE3NzAwMTY0Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1752937395499-18e109d60739?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkcm9uZSUyMGFlcmlhbCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcwMDE2NDI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1691172874488-94e5e955b4a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXJ2ZWlsbGFuY2UlMjBkcm9uZSUyMGZseWluZ3xlbnwxfHx8fDE3NzAwMTY0Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1720386063956-00296002a701?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGRyb25lJTIwZmllbGR8ZW58MXx8fHwxNzY5OTYxNDkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1753781466414-e93cf7f4f6df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpdmVyeSUyMGxvZ2lzdGljcyUyMGRyb25lfGVufDF8fHx8MTc3MDAxNjQyOHww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1659543690669-d40b1bfefc12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwaW5zcGVjdGlvbiUyMGRyb25lfGVufDF8fHx8MTc3MDAxNjQyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with real-world experience',
    },
    {
      icon: Award,
      title: 'Certification',
      description: 'Receive industry-recognized certificates upon completion',
    },
    {
      icon: Rocket,
      title: 'Hands-on Training',
      description: 'Practical experience with latest drone technology',
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Material',
      description: 'Access to detailed training manuals and resources',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full text-accent text-sm font-medium mb-6">
              Education & Skill Development
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Drone Training & Workshops
            </h1>
            <p className="text-xl text-white/80">
              Empowering India's youth with cutting-edge UAV technology through comprehensive training programs and hands-on workshops.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-accent/30">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Training Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the program that best fits your learning goals and schedule
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="bg-gradient-to-br from-primary to-secondary p-6 text-white">
                    <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                    <div className="flex items-center space-x-2 text-accent">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{program.duration}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-muted-foreground mb-6">
                      {program.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-primary mb-3">What You'll Learn:</h4>
                      <ul className="space-y-2">
                        {program.topics.map((topic, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-cyan-700 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-foreground">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6 p-4 bg-muted rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-primary">Target Audience:</span>
                        <br />
                        {program.audience}
                      </p>
                    </div>

                    <Link to="/about">
                      <CTAButton variant="outline" className="w-full">
                        Enroll Now
                      </CTAButton>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Training Gallery
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See our training programs in action
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-w-16 aspect-h-9 h-64">
                  <img
                    src={image}
                    alt={`Training session ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Drone Journey?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Book a workshop for your institution or enroll in our training programs today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/about">
              <CTAButton variant="primary" showArrow>
                Book a Workshop
              </CTAButton>
            </Link>
            <Link to="/about">
              <CTAButton variant="outline">
                Contact Us
              </CTAButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Training Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-muted to-white rounded-2xl p-8 md:p-12 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Why Drone Education Matters
            </h2>
            <div className="prose prose-lg max-w-none text-foreground">
              <p className="text-lg text-muted-foreground mb-4">
                The drone industry is one of the fastest-growing sectors in India, with applications spanning agriculture, defence, logistics, and more. By 2030, the UAV market is expected to reach $5.7 billion in India alone.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Our training programs align with the government's vision of <span className="text-cyan-500 font-semibold">Atmanirbhar Bharat</span>, equipping India's youth with the skills needed to lead in indigenous drone technology and innovation.
              </p>
              <p className="text-lg text-muted-foreground">
                Whether you're a student exploring career options, a professional looking to upskill, or an institution seeking to integrate drone technology into your curriculum, Eunora Technologies is your partner in education and growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
