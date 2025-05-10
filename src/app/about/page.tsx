"use client";

import MainLayout from "@/components/layout/MainLayout";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { FadeIn, StaggerContainer } from "@/components/animations/ScrollAnimations";

export default function AboutPage() {
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
              About VroPay
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Count on Us—for Trust, Transparency, and Growth
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* Core Values Section */}
      <Section background="light">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 text-center">
              Our Core Values
            </h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white border-t-4 border-blue-500">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Trust</h3>
              <p className="text-gray-600">
                We prioritize your financial well-being, offering fair, reliable, and secure solutions. Our processes are designed to ensure that you can rely on us at every step of your journey.
              </p>
            </div>

            <div className="rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white border-t-4 border-indigo-500">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Transparency</h3>
              <p className="text-gray-600">
                No hidden charges, no surprises. We believe in clear communication, keeping you informed about every detail, from approvals to schedules.
              </p>
            </div>

            <div className="rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white border-t-4 border-purple-500">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Growth</h3>
              <p className="text-gray-600">
                Whether it&apos;s expanding your business, meeting personal needs, or building a financial future, our innovative services and tailored solutions are designed to help you achieve your goals.
              </p>
            </div>
          </StaggerContainer>
        </div>
      </Section>

      {/* Support Section */}
      <Section background="secondary">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right">
              <div className="p-1 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
                <div className="bg-gray-100 p-8 rounded-lg h-full">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">
                    Expert support at your service, anytime you need it.
                  </h2>
                  <p className="text-gray-600 mb-8">
                    We are here to help you whenever you need us, with multiple channels to reach our support team.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-5 rounded-lg text-center shadow-md">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="font-medium">Video assistance</p>
                    </div>
                    <div className="bg-white p-5 rounded-lg text-center shadow-md">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <p className="font-medium">24/7 chat assistance</p>
                    </div>
                    <div className="bg-white p-5 rounded-lg text-center shadow-md">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <p className="font-medium">Phone assistance</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Contact Us</h3>
                <div className="space-y-6">
                  <div className="flex space-x-4 items-start">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Customer Portal</h4>
                      <a href="https://portal.vropay.com/" className="text-blue-600 hover:underline">https://portal.vropay.com/</a>
                    </div>
                  </div>
                  <div className="flex space-x-4 items-start">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Helpline</h4>
                      <p className="text-gray-600">8290815179</p>
                      <p className="text-gray-500 text-sm">
                        (Call charges will be as per your tariff plan and the service provider)
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-4 items-start">
                    <div className="bg-teal-100 p-3 rounded-lg">
                      <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">WhatsApp</h4>
                      <p className="text-gray-600">+91 8290815179</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Button variant="primary" size="lg" href="/contact">
                    Get Support
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="dark" padding="lg">
        <div className="text-center max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-6">
              With us, you&apos;re not just borrowing—you&apos;re building a partnership for success.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Button 
              variant="primary" 
              size="lg" 
              href="/services"
              className="mt-6"
            >
              Explore Our Services
            </Button>
          </FadeIn>
        </div>
      </Section>
    </MainLayout>
  );
} 