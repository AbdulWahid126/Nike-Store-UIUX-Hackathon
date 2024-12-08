import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, MapPin } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Help() {
  return (
    <div className="container px-4 py-8 md:py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center items-center">
          <h1 className="text-2xl content-center font-bold mb-8">GET HELP</h1>
        </div>
        <div className="px-96">
          <div className="mb-12">
            <Input
              type="search"
              placeholder="What can we help you with?"
              className="max-w-xl py-4"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-[2fr_1fr] gap-12">
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-4">
                WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
              </h2>
              <p className="text-muted-foreground mb-4">
                We want to make buying your favourite Nike shoes and gear online
                fast and easy, and we accept the following payment options:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  • Visa, Mastercard, Diners Club, Discover, American Express,
                  Visa Electron, Maestro
                </li>
                <li>• PayPal</li>
                <li>• Apple Pay</li>
              </ul>
              <div className="mt-6 space-x-4">
                <Button
                  variant="outline"
                  className="bg-black text-white rounded-3xl border-none hover:bg-black/10"
                >
                  JOIN US
                </Button>
                <Button
                  variant="outline"
                  className="bg-black text-white rounded-3xl border-none hover:bg-black/10"
                >
                  SHOP NOW
                </Button>
              </div>
            </section>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Does my card need international purchases enabled?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we recommend asking your bank to enable international
                  purchases on your card. You will be notified at checkout if
                  international purchases need to be enabled.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Can I pay for my order with multiple payment methods?
                </AccordionTrigger>
                <AccordionContent>
                  No, payment for Nike orders cant be split between multiple
                  payment methods.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  WHAT ARE NIKES DELIVERY OPTIONS?
                </AccordionTrigger>
                <AccordionContent>
                  We offer standard delivery and express delivery options to
                  most locations.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="font-bold">CONTACT US</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 mt-1" />
                  <div>
                    <p className="font-medium">000 800 919 0566</p>
                    <p className="text-sm text-muted-foreground">
                      Products & Orders: 24 hours a day, 7 days a week
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Company Info & Enquiries: 07:30 - 16:30, Monday - Friday
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MessageSquare className="w-5 h-5 mt-1" />
                  <div>
                    <p className="font-medium">24 hours a day</p>
                    <p className="text-sm text-muted-foreground">
                      7 days a week
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 mt-1" />
                  <div>
                    <p className="font-medium">STORE LOCATOR</p>
                    <p className="text-sm text-muted-foreground">
                      Find Nike retail stores near you
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
