import Link from "next/link";
import { Search, Heart, ShoppingBag } from "lucide-react";
import Image from "next/image";

export default function Header() {
  return (
    <header className=" top-0 z-50 w-full bg-white">
      {/* Top utility nav */}
      <div className="hidden items-center justify-between bg-gray-100 px-14 py-1 text-xs md:flex">
        <Link href="/jordan" className="flex-shrink-0">
          <Image
            src="/assets/jordenLogo.png"
            alt="Jordan"
            width={24}
            height={24}
            className="h-6 w-auto"
          />
        </Link>
        <Link
          href="#main"
          className="text-black hover:text-gray-900 bg-white px-2 py-1"
        >
          Skip to main content
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/products" className="text-black hover:text-gray-900">
            Find a Store
          </Link>
          <span className="text-gray-300">|</span>
          <Link href="/help" className="text-black hover:text-gray-900">
            Help
          </Link>
          <span className="text-gray-300">|</span>
          <Link href="/join" className="text-black hover:text-gray-900">
            Join Us
          </Link>
          <span className="text-gray-300">|</span>
          <Link href="/signIn" className="text-black hover:text-gray-900">
            Sign In
          </Link>
        </div>
      </div>

      {/* Main header */}
      <div className="flex items-center justify-between px-12 py-3">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/assets/nikeLogo.png"
              alt="Nike"
              width={60}
              height={24}
              className="h-12 w-auto"
            />
          </Link>
        </div>

        {/* Main nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-6">
            <li>
              <Link
                href="/products"
                className="text-sm font-medium text-gray-900 hover:text-gray-600"
              >
                New & Featured
              </Link>
            </li>
            <li>
              <Link
                href="/men"
                className="text-sm font-medium text-gray-900 hover:text-gray-600"
              >
                Men
              </Link>
            </li>
            <li>
              <Link
                href="/women"
                className="text-sm font-medium text-gray-900 hover:text-gray-600"
              >
                Women
              </Link>
            </li>
            <li>
              <Link
                href="/kids"
                className="text-sm font-medium text-gray-900 hover:text-gray-600"
              >
                Kids
              </Link>
            </li>
            <li>
              <Link
                href="/sale"
                className="text-sm font-medium text-gray-900 hover:text-gray-600"
              >
                Sale
              </Link>
            </li>
            <li>
              <Link
                href="/snkrs"
                className="text-sm font-medium text-gray-900 hover:text-gray-600"
              >
                SNKRS
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right icons */}
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <input
              type="search"
              placeholder="Search"
              className="w-full rounded-full bg-gray-100 px-4 py-2 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          </div>
          <button
            type="button"
            className="rounded-full p-2 hover:bg-gray-100"
            aria-label="Favorites"
          >
            <Heart className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="rounded-full p-2 hover:bg-gray-100"
            aria-label="Shopping bag"
          >
            <Link href="/cart">
              <ShoppingBag className="h-5 w-5" />
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
}
