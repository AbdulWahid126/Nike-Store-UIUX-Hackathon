import Image from 'next/image'
import Link from 'next/link'

export function CheckoutFooter() {
  return (
    <footer className="mt-auto">
      <div className="bg-black text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4 text-xs">
              <span>© 2024 NIKE, Inc. All Rights Reserved</span>
              <Link href="/terms" className="hover:underline">Terms of Use</Link>
              <Link href="/terms" className="hover:underline">Terms of Sale</Link>
              <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src="/assets/card1.png"
                alt="Visa"
                width={40}
                height={25}
                className="h-6 w-auto"
              />
              <Image
                src="/assets/card2.png"
                alt="Mastercard"
                width={40}
                height={25}
                className="h-6 w-auto"
              />
              <Image
                src="/assets/card3.png"
                alt="American Express"
                width={40}
                height={25}
                className="h-6 w-auto"
              />
              <Image
                src="/assets/card4.png"
                alt="UPI"
                width={40}
                height={25}
                className="h-6 w-auto"
              />
              <Image
                src="/assets/card5.png"
                alt="Net Banking"
                width={40}
                height={25}
                className="h-6 w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

