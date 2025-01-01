'use client'

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })

  return (
    <div className="container mt-16 max-w-md mx-auto px-4 py-8">
      <div className="flex justify-center mb-8">
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold mb-2">YOUR ACCOUNT FOR EVERYTHING NIKE</h1>
      </div>
      <form className="space-y-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                checked={formData.rememberMe}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, rememberMe: checked as boolean })
                }
              />
              <Label htmlFor="remember" className="text-sm">
                Keep me signed in
              </Label>
            </div>
            <Link href="/forgot-password" className="text-sm underline">
              Forgotten your password?
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-xs text-gray-600">
            By logging in, you agree to Nike&apos;s{" "}
            <Link href="/privacy" className="underline">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/terms" className="underline">
              Terms of Use
            </Link>
            .
          </p>
          <Button type="submit" className="w-full bg-black text-white">
            SIGN IN
          </Button>
          <p className="text-sm text-center">
            Not a Member?{" "}
            <Link href="/join" className="underline">
              Join Us
            </Link>
          </p>
        </div>
      </form>
    </div>
  )
}

