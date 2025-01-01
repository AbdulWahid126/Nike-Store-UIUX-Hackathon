"use client";

import { Search, Phone, MessageCircle, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 max-w-[1200px]">
        {/* Header */}
        <h1 className="text-[24px] font-bold text-center mb-12">GET HELP</h1>

        {/* Search Bar */}
        <div className="relative max-w-[400px] mx-auto mb-16">
          <Input
            type="text"
            placeholder="What can we help you with?"
            className="w-full h-[40px] pl-4 pr-10 border border-gray-300 rounded-sm text-[14px]"
          />
          <button className="absolute right-3 top-2.5">
            <Search className="h-5 w-5 text-gray-400" />
          </button>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-[65%_35%] gap-12">
          {/* Left Column */}
          <div>
            <h2 className="text-[16px] font-bold mb-6">
              WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
            </h2>
            <p className="text-[14px] leading-5 mb-4">
              We want to make buying your favourite Nike shoes and gear online
              fast and easy, and we accept the following payment options:
            </p>
            <p className="text-[14px] leading-5 mb-3">
              Visa, Mastercard, Diners Club, Discover, American Express, Visa
              Electron, Maestro
            </p>
            <p className="text-[14px] leading-5 mb-3">
              If you enter your full payment information at checkout, you'll be
              able to use your debit with PayPal or a total credit or debit
              card.
            </p>
            <p className="text-[14px] leading-5 mb-3">Apple Pay</p>
            <p className="text-[14px] leading-5 mb-6">
              Nike Members can store multiple debit or credit cards in their
              profile for faster checkout. If you're not already a Member, join
              us today.
            </p>
            <div className="flex gap-2 mb-12">
              <Link
                href="#"
                className="inline-flex h-[40px] px-6 items-center justify-center text-[14px] font-bold border rounded-3xl border-black hover:bg-black hover:text-white transition-colors"
              >
                JOIN US
              </Link>
              <Link
                href="#"
                className="inline-flex h-[40px] px-6 items-center justify-center text-[14px] font-bold border rounded-3xl border-black hover:bg-black hover:text-white transition-colors"
              >
                SHOP NOW
              </Link>
            </div>

            {/* FAQs */}
            
            <div className="mb-8">
              <h3 className="text-[16px] font-bold mb-4">FAQs</h3>
              <div className="space-y-4">
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="text-[14px] font-bold mb-2">
                    Does my card need international purchases enabled?
                  </h4>
                  <p className="text-[14px] leading-5 text-gray-600">
                    Yes, we recommend asking your bank to enable international
                    purchases on your card. You will be notified at checkout if
                    international purchases need to be enabled.
                  </p>
                  <p className="text-[14px] leading-5 text-gray-600 mt-2">
                    Please note, some banks may charge a small transaction fee
                    for international orders.
                  </p>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="text-[14px] font-bold mb-2">
                    Can I pay for my order with multiple payment methods?
                  </h4>
                  <p className="text-[14px] leading-5 text-gray-600">
                    No, payment for Nike orders can't be split between multiple
                    payment methods.
                  </p>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="text-[14px] font-bold mb-2">
                    What payment method is accepted for SNKRS order?
                  </h4>
                  <p className="text-[14px] leading-5 text-gray-600">
                    You can use any accepted credit card to pay for your SNKRS
                    order.
                  </p>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="text-[14px] font-bold mb-2">
                    Why don't I see Apple Pay as an option?
                  </h4>
                  <p className="text-[14px] leading-5 text-gray-600">
                    To see Apple Pay as an option in the Nike App or on
                    Nike.com, you'll need to use a compatible Apple device
                    running the latest OS. You must be signed in to your Apple
                    ID and have a supported credit card in your Wallet.
                    Additionally, you'll need to use Safari to use Apple Pay on
                    Nike.com.
                  </p>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="text-[14px] font-bold mb-2">RELATED</h4>
                  <div className="flex gap-4 mt-2">
                    <Link href="#" className="text-[14px] underline">
                      WHAT ARE NIKE'S DELIVERY OPTIONS?
                    </Link>
                    <Link href="#" className="text-[14px] underline">
                      HOW DO I GET FREE DELIVERY ON NIKE ORDERS?
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Contact Us */}
            <div className="space-y-6">
              <div className="p-6 border border-gray-200">
                <div className="flex items-start gap-3 mb-4">
                  <div className="mt-1">
                    <Phone className="h-6 w-6" />
                  </div>
                  <h3 className="text-[16px] font-bold">CONTACT US</h3>
                </div>
                <p className="text-[16px] font-bold mb-1">000 020 510 0500</p>
                <p className="text-[14px] leading-5 mb-1">
                  Products & Orders: 24 hours a day,
                </p>
                <p className="text-[14px] leading-5 mb-3">7 days a week</p>
                <p className="text-[14px] leading-5">
                  Company Info & Enquiries: 07:30 -
                </p>
                <p className="text-[14px] leading-5">17:00, Monday - Friday</p>
              </div>

              {/* Chat With Us */}
              <div className="p-6 border border-gray-200">
                <div className="flex items-start gap-3 mb-4">
                  <div className="mt-1">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-[14px] leading-5">24 hours a day</p>
                    <p className="text-[14px] leading-5">7 days a week</p>
                  </div>
                </div>
                <p className="text-[14px] leading-5">We'll reply within</p>
                <p className="text-[14px] leading-5">five business days</p>
              </div>

              {/* Store Locator */}
              <div className="p-6 border border-gray-200">
                <div className="flex items-start gap-3 mb-4">
                  <div className="mt-1">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <h3 className="text-[16px] font-bold">STORE LOCATOR</h3>
                </div>
                <p className="text-[14px] leading-5">
                  Find Nike retail stores near you
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
