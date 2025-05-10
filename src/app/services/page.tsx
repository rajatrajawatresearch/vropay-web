"use client";

import MainLayout from "@/components/layout/MainLayout";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { FadeIn, StaggerContainer } from "@/components/animations/ScrollAnimations";

// Import icons
import { 
  RocketLaunchIcon, 
  AcademicCapIcon, 
  UsersIcon, 
  ShoppingBagIcon,
  CubeIcon,
  LightBulbIcon,
  ChartBarIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

export default function ServicesPage() {
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
              Our Services
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Comprehensive solutions to empower your financial and technical growth
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* Main Services Section */}
      <Section background="light" padding="lg">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 text-center">
              Core Services
            </h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 gap-8">
            {/* Gamified Learning */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden" id="learning">
              <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                <div className="p-8 md:p-12">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <AcademicCapIcon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Gamified Learning</h3>
                  <p className="text-gray-600 mb-6">
                    Boost financial and tech literacy through interactive, bite-sized content across 25+ categories—from AI tools to investing, 
                    law, spirituality, and more.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <div className="text-green-500 mr-2">✓</div>
                      <span className="text-gray-600">Interactive learning modules with progress tracking</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-2">✓</div>
                      <span className="text-gray-600">Earn rewards and badges as you learn</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-2">✓</div>
                      <span className="text-gray-600">Content curated by industry experts</span>
                    </li>
                  </ul>
                  <Button variant="primary" href="/services/gamified-learning">
                    Learn More
                  </Button>
                </div>
                <div className="bg-blue-500 h-full p-8 md:p-12 text-white">
                  <h4 className="text-xl font-bold mb-4">What You&apos;ll Learn</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-blue-400 p-2 rounded-lg mr-4">
                        <CubeIcon className="w-5 h-5" />
                      </div>
                      <span>Foundational finance concepts</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-400 p-2 rounded-lg mr-4">
                        <LightBulbIcon className="w-5 h-5" />
                      </div>
                      <span>Latest technology trends and tools</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-400 p-2 rounded-lg mr-4">
                        <ChartBarIcon className="w-5 h-5" />
                      </div>
                      <span>Investment strategies and analysis</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-400 p-2 rounded-lg mr-4">
                        <CurrencyDollarIcon className="w-5 h-5" />
                      </div>
                      <span>Personal finance management</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Startup Launch & Support */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden" id="startup">
              <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                <div className="p-8 md:p-12 order-2 md:order-1 bg-indigo-500 h-full text-white">
                  <h4 className="text-xl font-bold mb-4">Launch Pad Features</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-indigo-400 p-2 rounded-lg mr-4">
                        <RocketLaunchIcon className="w-5 h-5" />
                      </div>
                      <span>Idea validation with expert feedback</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-indigo-400 p-2 rounded-lg mr-4">
                        <UsersIcon className="w-5 h-5" />
                      </div>
                      <span>Connect with potential investors</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-indigo-400 p-2 rounded-lg mr-4">
                        <LightBulbIcon className="w-5 h-5" />
                      </div>
                      <span>Strategy development workshops</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-indigo-400 p-2 rounded-lg mr-4">
                        <ChartBarIcon className="w-5 h-5" />
                      </div>
                      <span>Market analysis and competitor research</span>
                    </li>
                  </ul>
                </div>
                <div className="p-8 md:p-12 order-1 md:order-2">
                  <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                    <RocketLaunchIcon className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Startup Launch & Support</h3>
                  <p className="text-gray-600 mb-6">
                    Access expert-led coaching, business services and promote ideas via LaunchPad—with reward-based engagement built in.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <div className="text-green-500 mr-2">✓</div>
                      <span className="text-gray-600">Comprehensive startup toolkit with templates</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-2">✓</div>
                      <span className="text-gray-600">One-on-one mentorship from industry veterans</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-2">✓</div>
                      <span className="text-gray-600">Pitch development and refinement</span>
                    </li>
                  </ul>
                  <Button variant="primary" href="/services/startup-support">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>

            {/* Social Profiles & Networking */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden" id="networking">
              <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                <div className="p-8 md:p-12">
                  <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                    <UsersIcon className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Social Profiles & Networking</h3>
                  <p className="text-gray-600 mb-6">
                    Showcase your identity as a Founder, Mentor, Creator, or more. Share insights, startup ideas, and milestones 
                    while building your personal brand.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <div className="text-green-500 mr-2">✓</div>
                      <span className="text-gray-600">Customizable professional profile</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-2">✓</div>
                      <span className="text-gray-600">Intelligent matching with potential collaborators</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-2">✓</div>
                      <span className="text-gray-600">Virtual networking events and forums</span>
                    </li>
                  </ul>
                  <Button variant="primary" href="/services/networking">
                    Learn More
                  </Button>
                </div>
                <div className="bg-purple-500 h-full p-8 md:p-12 text-white">
                  <h4 className="text-xl font-bold mb-4">Networking Benefits</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-purple-400 p-2 rounded-lg mr-4">
                        <UsersIcon className="w-5 h-5" />
                      </div>
                      <span>Connect with like-minded professionals</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-purple-400 p-2 rounded-lg mr-4">
                        <RocketLaunchIcon className="w-5 h-5" />
                      </div>
                      <span>Find co-founders and team members</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-purple-400 p-2 rounded-lg mr-4">
                        <LightBulbIcon className="w-5 h-5" />
                      </div>
                      <span>Share ideas and get feedback</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-purple-400 p-2 rounded-lg mr-4">
                        <CurrencyDollarIcon className="w-5 h-5" />
                      </div>
                      <span>Discover partnership opportunities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* VroPay Store */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden" id="store">
              <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                <div className="p-8 md:p-12 order-2 md:order-1 bg-teal-500 h-full text-white">
                  <h4 className="text-xl font-bold mb-4">Store Resources</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-teal-400 p-2 rounded-lg mr-4">
                        <ShoppingBagIcon className="w-5 h-5" />
                      </div>
                      <span>Business plan templates and tools</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-teal-400 p-2 rounded-lg mr-4">
                        <ChartBarIcon className="w-5 h-5" />
                      </div>
                      <span>Financial modeling spreadsheets</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-teal-400 p-2 rounded-lg mr-4">
                        <LightBulbIcon className="w-5 h-5" />
                      </div>
                      <span>Market research reports</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-teal-400 p-2 rounded-lg mr-4">
                        <CurrencyDollarIcon className="w-5 h-5" />
                      </div>
                      <span>Investment and budgeting calculators</span>
                    </li>
                  </ul>
                </div>
                <div className="p-8 md:p-12 order-1 md:order-2">
                  <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                    <ShoppingBagIcon className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">VroPay Store</h3>
                  <p className="text-gray-600 mb-6">
                    Unlock a curated hub of learning, tools, and growth-driven services—like virtual portfolios, smart budgeting templates, 
                    and vibrant community forums—all in one seamless platform.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <div className="text-green-500 mr-2">✓</div>
                      <span className="text-gray-600">Premium resources and templates</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-2">✓</div>
                      <span className="text-gray-600">Exclusive courses and masterclasses</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-2">✓</div>
                      <span className="text-gray-600">Professional services marketplace</span>
                    </li>
                  </ul>
                  <Button variant="primary" href="/services/store">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </StaggerContainer>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="dark" padding="lg">
        <div className="text-center max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Financial Future?
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-gray-300 mb-10">
              Join thousands of individuals and businesses who have accelerated their growth with VroPay&apos;s comprehensive services.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                variant="primary" 
                size="lg" 
                href="/contact"
                className="bg-white text-blue-600 hover:bg-blue-50"
              >
                Get Started Today
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                href="/about"
                className="border-white text-white hover:bg-white/10"
              >
                Learn More About Us
              </Button>
            </div>
          </FadeIn>
        </div>
      </Section>
    </MainLayout>
  );
} 