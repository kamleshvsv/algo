'use client'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import banner from "./../assets/vecteezy_smart-home-concept-with-automation-control-network_14000940.jpg"
import banner1 from "./../assets/vecteezy_startup-business-people-group-at-office_12446141.jpg"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { getTenantConfig } from '@/lib/tenant-config'
import TenantLayout from '@/components/tenant-layout'
import Image from 'next/image'

export default function Home() {
  const config = getTenantConfig('main')

  return (
    <TenantLayout config={config}>
      <main className="bg-white relative">
        
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-50 to-white" />
          <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center pt-20 pb-16 px-6 lg:px-8">
            {/* Text */}
            <div className="md:w-1/2 space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                Academy of Your Business
              </h1>
              <p className="text-gray-700 sm:text-lg">
                Organizes work so teams know what to do, why it matters, and how to get it done.
              </p>
              <div className="flex space-x-4">
                <Button size="lg">Get Started</Button>
                <Button variant="outline" size="lg">View Demo</Button>
              </div>
              <div className="flex items-center space-x-3 pt-4">
                <Badge className="bg-black text-white">6k Clients</Badge>
                <span className="text-gray-600">40% Market</span>
              </div>
            </div>
            {/* Image and decorative shape */}
            <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
              <div className="relative">
                <div className="absolute top-[-20px] right-[-20px] w-32 h-32 bg-black rounded-tl-full rounded-bl-full rotate-45 z-20" />
                <div className="absolute bottom-[-10px] left-[-10px] w-20 h-20 bg-green-300 rounded-full z-20" />
                <Image
                  src={banner1}
                  alt="Hero"
                  className="relative rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto text-center px-6">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">The process we follow</h2>
            <p className="text-gray-600 mb-12">As an academy of business, we go through the development cycle.</p>
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-8 sm:space-y-0">
              {[
                { iconBg: 'bg-green-200', title: 'Business idea', desc: 'What you want your business to be.' },
                { iconBg: 'bg-yellow-200', title: 'Planning', desc: 'A business plan helps formalize your idea.' },
                { iconBg: 'bg-pink-200', title: 'Develop', desc: 'Ideation, prototyping, costing.' },
                { iconBg: 'bg-gray-600', title: 'Business structure', desc: 'Key parts of your bussiness.ss' },
              ].map((step, i) => (
                <div key={i} className="flex-1 text-center p-6 bg-gray-100 ml-1 mr-1 rounded-xl">
                  <div className={`${step.iconBg} w-12 h-12 rounded-full mx-auto flex items-center justify-center mb-4`}/>
                  <h3 className="font-semibold mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-black text-white">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center px-6 lg:px-8 space-y-8 lg:space-y-0">
            <Image
              src={banner}
              alt="Our Story"
              className="w-full lg:w-1/2 rounded-xl border-2 border-yellow-400 shadow-lg"
            />
            <div className="lg:w-1/2 ml-2 p-10">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="mb-6">We specialise in organising professional training courses and have been doing it since 1994.</p>
              <Button variant="outline" className="border-white text-white">Get Started</Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-4">Services we provide</h2>
            <p className="text-center text-gray-600 mb-12">We specialize in organising professional training courses.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Accounting and Analysis', color: 'bg-yellow-50' },
                { title: 'Finance and Banking', color: 'bg-green-50' },
                { title: 'Strategic Business Leader', color: 'bg-pink-50' },
                { title: 'Preparatory Course', color: 'bg-red-50' },
                { title: 'Business English Writing Skills', color: 'bg-blue-50' },
                { title: 'Strategic Business Reporting', color: 'bg-emerald-50' },
              ].map((svc, i) => (
                <Card key={i} className={`${svc.color} p-6 relative overflow-visible`}>                  
                  <CardContent>
                    <CardTitle className="mb-4 text-lg font-semibold">{svc.title}</CardTitle>
                    <Button variant="link" className="text-sm">Get Started →</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
            <p className="text-center text-gray-600 mb-8">If you have any further questions please contact us.</p>
            <Accordion type="multiple">
              {[
                { q: 'Will I get lifetime updates?', a: 'Yes, all future updates will be available to existing customers.' },
                { q: 'Can I use this for a client’s product?', a: 'Absolutely, you can use it for any commercial project.' },
                { q: 'Does Algobean provide code kit as well?', a: 'Algobean offers both Figma UI kit and code kit.' },
                { q: 'Do you have a free trial?', a: 'Yes, we provide a 7-day free trial with no credit card required.' },
                { q: 'Who can use Algobean?', a: 'Anyone from freelancers to agencies.' },
              ].map((item, idx) => (
                <AccordionItem key={idx} value={`faq-${idx}`}>
                  <AccordionTrigger className="flex justify-between">{item.q}</AccordionTrigger>
                  <AccordionContent>{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-2">Algobean</h3>
              <p className="text-sm text-gray-400">© 2025 Algobean. All rights reserved.</p>
            </div>
            <div className="flex space-x-6 justify-center">
              <ul className="space-y-1 text-gray-300">
                <li className="hover:underline">Services</li>
                <li className="hover:underline">Product</li>
                <li className="hover:underline">Resources</li>
                <li className="hover:underline">Pricing</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Subscribe to our newsletter!</h4>
              <div className="flex space-x-2">
                <Input placeholder="Your email" className="w-full text-black" />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </TenantLayout>
  )
}
