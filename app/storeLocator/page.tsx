import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { MapPin, Search } from 'lucide-react'

export default function StoreLocator() {
  return (
    <div className="container px-4 py-8 lg:ml-12">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold mb-4">Find a Nike Store</h1>
            <div className="flex gap-2">
              <Input placeholder="Search Location" className="flex-1" />
              <Button variant="outline">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold">Nike NYC - House of Innovation 000</h3>
              <p className="text-sm text-muted-foreground mt-1">650 5th Ave, New York, NY 10019, US</p>
              <div className="mt-2 flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-1" />
                <span>0.5 miles away</span>
              </div>
              <Button variant="link" className="mt-2 p-0">View Store Details</Button>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold">Nike Upper East Side</h3>
              <p className="text-sm text-muted-foreground mt-1">1131 3rd Ave, New York, NY 10065, US</p>
              <div className="mt-2 flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-1" />
                <span>1.2 miles away</span>
              </div>
              <Button variant="link" className="mt-2 p-0">View Store Details</Button>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 h-[600px] bg-gray-100  rounded-lg">
          <Image 
          src="/assets/map.png"
          width={960}
          height={720}
          alt="picture of map"
          className="object-cover"
          />
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            Interactive Map
          </div>
        </div>
      </div>
    </div>
  )
}

