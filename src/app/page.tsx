"use client";

import MainLayout from "@/components/layout/MainLayout";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import HeroScene from "@/components/3d/HeroScene";
import { FadeIn, StaggerContainer } from "@/components/animations/ScrollAnimations";

// Import icons
import { 
  AcademicCapIcon, 
  RocketLaunchIcon, 
  UsersIcon, 
  ShoppingBagIcon,
  CheckCircleIcon 
} from '@heroicons/react/24/outline';

export default function Home() {
  const categories = [
    { name: "For Entrepreneurs", icon: <RocketLaunchIcon className="w-8 h-8" />, description: "Launch and grow your business with expert guidance and tools." },
    { name: "For Students", icon: <AcademicCapIcon className="w-8 h-8" />, description: "Enhance your financial and technical literacy through interactive learning." },
    { name: "For Professionals", icon: <UsersIcon className="w-8 h-8" />, description: "Network with like-minded individuals and advance your career." },
    { name: "For Businesses", icon: <ShoppingBagIcon className="w-8 h-8" />, description: "Access resources and support to scale your operations." },
  ];

  const services = [
    { 
      title: "Gamified Learning", 
      description: "Master finance and tech through interactive, bite-sized content.",
      color: "bg-blue-500"
    },
    { 
      title: "Startup Support", 
      description: "Expert coaching and resources to launch and grow your venture.",
      color: "bg-indigo-500"
    },
    { 
      title: "Social Networking", 
      description: "Connect with peers, mentors, and potential investors.",
      color: "bg-purple-500"
    },
    { 
      title: "VroPay Store", 
      description: "Access premium tools, templates, and courses for growth.",
      color: "bg-teal-500"
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section with 3D Elements */}
      <Section
        background="gradient"
        className="pt-28 pb-20 md:pt-32 md:pb-24"
        padding="lg"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="text-center lg:text-left">
            <FadeIn direction="up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Your Gateway to Financial & Technical Growth
              </h1>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <p className="text-xl text-blue-100 mb-10">
                VroPay empowers you with innovative tools, learning resources, and expert support to achieve your financial goals.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button 
                  variant="primary" 
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50"
                  href="/services"
                >
                  Explore Services
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                  href="/contact"
                >
                  Contact Us
                </Button>
              </div>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.3}>
            <div className="lg:h-[500px] md:h-[400px] h-[300px]">
              <HeroScene />
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Services Overview */}
      <Section background="white">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Our Services
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Comprehensive solutions designed to accelerate your financial and technical growth journey.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <FadeIn key={index} delay={0.1 * index}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                  <div className={`${service.color} h-2 w-full group-hover:h-3 transition-all duration-300`}></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="text-center mt-12">
            <FadeIn>
              <Button 
                variant="primary" 
                size="lg" 
                href="/services"
              >
                Learn More About Our Services
              </Button>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* User Categories */}
      <Section background="light">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Who We Serve
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Our solutions are tailored to meet the needs of different user groups.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex items-start gap-6"
              >
                <div className="bg-blue-100 p-4 rounded-xl text-blue-600">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{category.name}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="dark" padding="lg">
        <div className="max-w-6xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Financial Future?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Join thousands of users who have accelerated their growth with VroPay.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto mb-12">
              {["Expert-led guidance", "Interactive learning", "Powerful networking"].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-white">{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <Button 
              variant="primary" 
              size="lg" 
              href="/contact"
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              Get Started Today
            </Button>
          </FadeIn>
        </div>
      </Section>
    </MainLayout>
  );
}
