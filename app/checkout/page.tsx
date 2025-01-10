import Image from 'next/image'
import CheckoutForm from '@/components/checkoutForm'
import OrderSummary from '@/components/OrderSummary'
import { CheckoutFooter } from '@/components/CheckoutFooter'

export default function Page() {
  return (
    <div className="min-h-screen">
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Image
            src="/assets/nikelogo.png"
            alt="Nike"
            width={60}
            height={24}
            className="h-12  w-auto"
          />
          <div className="flex items-center gap-4">
            <span>000 800 100 9538</span>
            <button className="p-2">
              <span className="sr-only">Help</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
            </button>
            <button className="p-2">
              <span className="sr-only">Cart</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">How would you like to get your order?</h1>
          
          <div className="mb-8">
            <p className="text-sm text-muted-foreground max-w-3xl">
              Customs regulation for India require a copy of the recipient&apos;s KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/Email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not match your shipping address, please click the link for more information. <button className="text-blue-600 hover:underline">Learn More</button>
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr,400px] gap-8">
            <CheckoutForm />
            <OrderSummary />
          </div>
          {/* <CheckoutSteps /> */}
        </div>
      </main>
      <CheckoutFooter />
    </div>
  )
}

