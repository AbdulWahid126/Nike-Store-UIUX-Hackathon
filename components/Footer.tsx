import Link from "next/link"
import { MapPin, Twitter, Facebook, Youtube, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Find a Store Column */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-bold uppercase">Find a Store</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  BECOME A MEMBER
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  SIGN UP FOR EMAIL
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  SEND US FEEDBACK
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  STUDENT DISCOUNTS
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Help Column */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-bold uppercase">Get Help</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  Order Status
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Delivery
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Payment Options
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Contact Us On Nike.com Inquiries
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Contact Us On All Other Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* About Nike Column */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-bold uppercase">About Nike</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  News
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Investors
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links Column */}
          <div className="flex flex-col space-y-4">
            <div className="flex space-x-4">
              <Link
                href="#"
                className="rounded-full bg-[#7e7e7e] p-2 transition-colors text-black hover:bg-gray-700"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="rounded-full bg-[#7e7e7e] p-2 transition-colors text-black hover:bg-gray-700"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="rounded-full bg-[#7e7e7e] p-2 transition-colors text-black hover:bg-gray-700"
                aria-label="YouTube"
              >
                <Youtube className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="rounded-full bg-[#7e7e7e] p-2 transition-colors text-black hover:bg-gray-700"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex flex-col space-y-4 border-t border-gray-800 pt-8 text-xs text-gray-400">
          {/* Location */}
          <div className="flex items-center space-x-2">
            <Link href="/storeLocator">
            <MapPin className="h-4 w-4" />
            <span>India</span>
            </Link>
          </div>

          {/* Copyright */}
          <div className="flex flex-col justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
            <div className="flex items-center">
              <span>© 2023 Nike, Inc. All Rights Reserved</span>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-4">
              <Link href="#" className="hover:text-white">
                Guides
              </Link>
              <Link href="#" className="hover:text-white">
                Terms of Sale
              </Link>
              <Link href="#" className="hover:text-white">
                Terms of Use
              </Link>
              <Link href="#" className="hover:text-white">
                Nike Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

