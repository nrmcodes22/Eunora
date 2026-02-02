import React from  "react"
import { useState } from 'react';
import { CTAButton } from '../CTAButton';
import { Mail, Phone, MapPin, Target, Award, Lightbulb, Users, Send } from 'lucide-react';

export function AboutContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        organization: '',
        message: '',
      });
      
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'Delivering accurate and reliable drone solutions with cutting-edge technology and meticulous engineering.',
    },
    {
      icon: Award,
      title: 'Reliability',
      description: 'Building systems that perform consistently in the most demanding environments and critical missions.',
    },
    {
      icon: Lightbulb,
      title: 'Scalability',
      description: 'Creating flexible solutions that adapt and grow with evolving business needs and technological advances.',
    },
    {
      icon: Users,
      title: 'Knowledge Transfer',
      description: 'Empowering teams through comprehensive training and ongoing support for sustainable operations.',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full text-accent text-sm font-medium mb-6">
              🇮🇳 Made in India • Atmanirbhar Bharat
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Eunora Technologies
            </h1>
            <p className="text-xl text-white/80">
              Indigenous Indian drone technology company committed to building advanced unmanned aerial systems for a self-reliant India.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Mission
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  At Eunora Technologies, we are committed to advancing India's technological sovereignty through indigenous drone innovation. Our mission aligns with the vision of <span className="text-accent font-semibold">Atmanirbhar Bharat</span> – building a self-reliant nation through cutting-edge technology and local manufacturing.
                </p>
                <p>
                  We design, develop, and manufacture advanced unmanned aerial systems that serve critical sectors including agriculture, defence, surveillance, logistics, and infrastructure. Every product we create is engineered in India, for India, and for the world.
                </p>
                <p>
                  Beyond technology, we are dedicated to knowledge transfer and skill development. Through our training programs, we empower the next generation of engineers, pilots, and entrepreneurs to lead India's drone revolution.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1752937395499-18e109d60739?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkcm9uZSUyMGFlcmlhbCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcwMDE2NDI2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Eunora Technologies"
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/20 rounded-lg -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent/50 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-accent/30">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your operations with drone technology? Let's talk.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-cyan-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Email</h4>
                      <a href="mailto:info@eunora.in" className="text-muted-foreground  transition-colors">
                        info@eunora.in
                      </a>
                      <br />
                      <a href="mailto:sales@eunora.in" className="text-muted-foreground transition-colors">
                        sales@eunora.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-cyan-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Phone</h4>
                      <a href="tel:+911234567890" className="text-muted-foreground  transition-colors">
                        +91 12345 67890
                      </a>
                      <br />
                      <a href="tel:+911234567891" className="text-muted-foreground transition-colors">
                        +91 12345 67891
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-cyan-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Address</h4>
                      <p className="text-muted-foreground">
                        Eunora Technologies Private Limited
                        <br />
                        Electronics City, Bangalore
                        <br />
                        Karnataka 560100, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-muted rounded-lg p-6">
                <h4 className="font-semibold text-primary mb-4">Business Hours</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="text-foreground font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="text-foreground font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="text-foreground font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-primary to-secondary rounded-lg p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
              
              {submitSuccess && (
                <div className="mb-6 p-4 bg-accent/20 border border-accent/30 rounded-lg text-accent">
                  ✓ Thank you! Your message has been sent successfully. We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Your company or institution"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>

                <CTAButton
                  type="submit"
                  variant="primary"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </CTAButton>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Partner With Us
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Join us in building India's drone technology ecosystem. Whether you're looking for solutions, collaboration opportunities, or investment partnerships, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton variant="primary" href="mailto:partnerships@eunora.in">
              Partnership Inquiry
            </CTAButton>
            <CTAButton variant="outline" href="mailto:careers@eunora.in">
              Career Opportunities
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
