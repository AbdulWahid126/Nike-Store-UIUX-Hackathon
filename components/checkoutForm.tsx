'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function CheckoutForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    addressLine1: '',
    addressLine2: '',
    addressLine3: '',
    postalCode: '',
    locality: '',
    state: 'British Territory',
    country: 'India',
    email: '',
    phone: '',
    pan: ''
  })

  return (
    <form className="space-y-8 max-w-2xl">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Enter your name and address:</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input 
              id="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={(e) => setFormData({...formData, firstName: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input 
              id="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={(e) => setFormData({...formData, lastName: e.target.value})}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="addressLine1">Address Line 1</Label>
          <Input 
            id="addressLine1"
            placeholder="Address Line 1"
            value={formData.addressLine1}
            onChange={(e) => setFormData({...formData, addressLine1: e.target.value})}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="addressLine2">Address Line 2</Label>
          <Input 
            id="addressLine2"
            placeholder="Address Line 2"
            value={formData.addressLine2}
            onChange={(e) => setFormData({...formData, addressLine2: e.target.value})}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="addressLine3">Address Line 3</Label>
          <Input 
            id="addressLine3"
            placeholder="Address Line 3"
            value={formData.addressLine3}
            onChange={(e) => setFormData({...formData, addressLine3: e.target.value})}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="postalCode">Postal Code</Label>
            <Input 
              id="postalCode"
              placeholder="Postal Code"
              value={formData.postalCode}
              onChange={(e) => setFormData({...formData, postalCode: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="locality">Locality</Label>
            <Input 
              id="locality"
              placeholder="Locality"
              value={formData.locality}
              onChange={(e) => setFormData({...formData, locality: e.target.value})}
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="state">State/Territory</Label>
            <Select defaultValue={formData.state}>
              <SelectTrigger>
                <SelectValue placeholder="Select state" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="British Territory">British Territory</SelectItem>
                {/* Add other states */}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="country">Country</Label>
            <Select defaultValue={formData.country}>
              <SelectTrigger>
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="India">India</SelectItem>
                {/* Add other countries */}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">What&apos;s your contact information?</h2>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            <p className="text-sm text-muted-foreground">A confirmation email will be sent after checkout.</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input 
              id="phone"
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
            <p className="text-sm text-muted-foreground">Your phone number will be used if there&apos;s an issue with your delivery.</p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">What&apos;s your PAN?</h2>
          <div className="space-y-2">
            <Label htmlFor="pan">PAN</Label>
            <Input 
              id="pan"
              placeholder="PAN"
              value={formData.pan}
              onChange={(e) => setFormData({...formData, pan: e.target.value})}
            />
            <p className="text-sm text-muted-foreground">Your PAN will be used to validate payment.</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="saveAddress" />
            <Label htmlFor="saveAddress">Save this address to my profile</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="preferredAddress" />
            <Label htmlFor="preferredAddress">Make this my preferred address</Label>
          </div>
        </div>
      </div>

      <Button className="w-full" size="lg">
        Continue
      </Button>
    </form>
  )
}

