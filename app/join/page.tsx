"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function SignUp() {
  return (
    <div className="flex justify-center">
    <div className="container max-w-md px-4 py-8 md:py-12">
      <div className="text-center mb-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 192.756 192.756"
          className="mx-auto mb-4"
        >
          <path
            fill="currentColor"
            d="M42.741 71.477c-9.881 11.604-19.355 25.994-19.355 36.75 0 5.576 2.216 10.483 6.098 14.303 4.036 3.983 9.149 6.147 14.712 6.147 5.095 0 9.938-1.679 14.753-3.651 6.253-2.557 12.507-6.049 20.587-11.604l.617-.463c-.772 1.216-1.401 2.341-1.987 3.396-2.834 5.173-4.666 8.54-4.666 12.741 0 3.957 1.555 7.722 4.374 10.593 2.941 2.992 6.932 4.641 11.234 4.641 9.304 0 18.326-6.049 27.707-13.05z"
          />
        </svg>
        <h1 className="text-2xl font-bold">BECOME A NIKE MEMBER</h1>
        <p className="text-sm text-muted-foreground mt-2">
          Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.
        </p>
      </div>
      <form className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>
            <Input id="email" type="email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="dob">Date of Birth</Label>
            <Input id="dob" type="date" required />
            <p className="text-xs text-muted-foreground">
              Get a Nike Member Reward every year on your Birthday
            </p>
          </div>
          <div className="space-y-2">
            <Label>Country</Label>
            <Select required>
              <SelectTrigger>
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="in">India</SelectItem>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Gender</Label>
            <RadioGroup defaultValue="male" className="flex gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="male" id="male" />
                <Label htmlFor="male">Male</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="female" id="female" />
                <Label htmlFor="female">Female</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="marketing" />
            <Label htmlFor="marketing" className="text-sm">
              Sign up for emails to get updates from Nike on products, offers and your Member benefits
            </Label>
          </div>
          <p className="text-xs text-muted-foreground">
            By creating an account, you agree to Nikes{" "}
            <Link href="/privacy-policy" className="underline">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/terms" className="underline">
              Terms of Use
            </Link>
            .
          </p>
        </div>
        <Button type="submit" className="w-full bg-black text-white hover:bg-black/90">
          JOIN US
        </Button>
        <p className="text-sm text-center">
          Already a Member?{" "}
          <Link href="/signIn" className="underline">
            Sign In
          </Link>
        </p>
      </form>
    </div>
    </div>
  )
}

