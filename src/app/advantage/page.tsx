"use client";

import MainLayout from "@/components/layout/MainLayout";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { FadeIn, StaggerContainer } from "@/components/animations/ScrollAnimations";
import { CheckCircleIcon, LightBulbIcon, RocketLaunchIcon, UserGroupIcon, CubeTransparentIcon, CogIcon } from "@heroicons/react/24/outline";

export default function AdvantagePage() {
  const advantages = [
    {
      title: "Comprehensive Learning",
      description: "Access over 25+ categories of knowledge, from finance to tech, all in bite-sized, digestible formats.",
      icon: <LightBulbIcon className="w-8 h-8 text-blue-600" />,
      color: "bg-blue-100"
    },
    {
      title: "Expert-Led Support",
      description: "Get guidance from industry veterans who have built and scaled successful businesses.",
      icon: <UserGroupIcon className="w-8 h-8 text-indigo-600" />,
      color: "bg-indigo-100"
    },
    {
      title: "Powerful Networking",
      description: "Connect with like-minded individuals, potential collaborators, and investors in a focused environment.",
      icon: <CubeTransparentIcon className="w-8 h-8 text-purple-600" />,
      color: "bg-purple-100"
    },
    {
      title: "Innovative Tools",
      description: "Access cutting-edge tools and templates designed to streamline your business and financial processes.",
      icon: <CogIcon className="w-8 h-8 text-teal-600" />,
      color: "bg-teal-100"
    },
    {
      title: "Growth-Focused",
      description: "Everything we offer is designed with one goal: to accelerate your personal and professional growth.",
      icon: <RocketLaunchIcon className="w-8 h-8 text-rose-600" />,
      color: "bg-rose-100"
    },
    {
      title: "Community-Driven",
      description: "Be part of a vibrant community that shares insights, provides feedback, and celebrates successes.",
      icon: <CheckCircleIcon className="w-8 h-8 text-emerald-600" />,
      color: "bg-emerald-100"
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <Section
        background="gradient"
        className="pt-24 flex items-center"
        padding="lg"
      >
        <div className="text-center max-w-4xl mx-auto">
          <FadeIn direction="up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              The VroPay Advantage
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Discover what sets us apart and why thousands choose VroPay for their financial and technical growth journey
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* Advantages Grid Section */}
      <Section background="light" padding="lg">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 text-center">
              Why Choose VroPay?
            </h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 card-hover"
              >
                <div className={`${advantage.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}>
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section background="secondary" padding="lg">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 text-center">
              What Our Users Say
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeIn direction="up">
              <div className="bg-white p-8 rounded-xl shadow-lg relative">
                <div className="absolute -top-5 left-8 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  &quot;
                </div>
                <p className="text-gray-600 mb-6 pt-6">
                  VroPay transformed my approach to finance. The gamified learning made complex concepts easy to understand, and the networking features helped me find my co-founder!
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold text-gray-900">Priya Sharma</h4>
                    <p className="text-gray-500 text-sm">Startup Founder</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
              <div className="bg-white p-8 rounded-xl shadow-lg relative">
                <div className="absolute -top-5 left-8 w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  &quot;
                </div>
                <p className="text-gray-600 mb-6 pt-6">
                  As a busy professional, I needed something that could fit into my schedule. VroPay&apos;s bite-sized learning modules and accessible expert guidance have been invaluable.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold text-gray-900">Rahul Verma</h4>
                    <p className="text-gray-500 text-sm">Software Engineer</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <div className="bg-white p-8 rounded-xl shadow-lg relative">
                <div className="absolute -top-5 left-8 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  &quot;
                </div>
                <p className="text-gray-600 mb-6 pt-6">
                  The resources in the VroPay Store saved me countless hours. The templates and tools were exactly what I needed to create a solid business plan and financial model.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold text-gray-900">Amit Patel</h4>
                    <p className="text-gray-500 text-sm">Small Business Owner</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Stats Section */}
      <Section background="white" padding="lg">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 text-center">
              VroPay in Numbers
            </h2>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <FadeIn direction="up">
              <div className="text-center">
                <p className="text-5xl font-bold text-blue-600 mb-2">25+</p>
                <p className="text-gray-600">Learning Categories</p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <div className="text-center">
                <p className="text-5xl font-bold text-indigo-600 mb-2">10k+</p>
                <p className="text-gray-600">Active Users</p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <div className="text-center">
                <p className="text-5xl font-bold text-purple-600 mb-2">500+</p>
                <p className="text-gray-600">Expert Mentors</p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <div className="text-center">
                <p className="text-5xl font-bold text-teal-600 mb-2">95%</p>
                <p className="text-gray-600">User Satisfaction</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient" padding="lg">
        <div className="text-center max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Experience the VroPay Advantage Today
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-blue-100 mb-10">
              Join thousands of users who have transformed their financial and technical knowledge with VroPay.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <Button 
              variant="primary" 
              size="lg" 
              href="/contact"
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              Start Your Journey
            </Button>
          </FadeIn>
        </div>
      </Section>
    </MainLayout>
  );
} 