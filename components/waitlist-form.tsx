"use client"
import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "react-toastify"
import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"

interface FormData {
  persona: string
  name: string
  email: string
  location: string
  phoneNumber: string
  keepUpdated: boolean
}

export default function WaitlistForm() {
  const [formData, setFormData] = useState<FormData>({
    persona: "",
    name: "",
    email: "",
    location: "",
    phoneNumber: "",
    keepUpdated: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/submit-waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        const data = await response.json()
        toast.success(data.message || "You've been added to the waitlist. We'll be in touch soon!")
        setFormData({
          persona: "",
          name: "",
          email: "",
          location: "",
          phoneNumber: "",
          keepUpdated: false,
        })
        setTimeout(() => {
          router.push("/")
        }, 1200)
      } else {
        const errorData = await response.json()
        toast.error(errorData.error || "Failed to submit")
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="w-full max-w-xl mx-auto shadow-2xl border-0 bg-white max-h-[95vh] overflow-y-auto">
      <CardHeader className="text-center pb-4">
        <div className="mx-auto flex items-center justify-center">
          <Image
          src="/images/waitlist.png"
          width={50}
          height={50}
          alt=""
          />
        </div>
        <CardTitle className="text-4xl font-medium text-neutral-100">Join the waitlist</CardTitle>
        <CardDescription className="text-neutral-200 text-[16px] font-light">Please fill the details below to join the waitlist</CardDescription>
      </CardHeader>

      <CardContent className="">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="persona" className="text-sm font-medium text-gray-700">
              Your Persona
            </Label>
            <Select value={formData.persona} onValueChange={(value) => handleInputChange("persona", value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select your persona" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="student">Student</SelectItem>
                <SelectItem value="mentor">Mentor</SelectItem>
                <SelectItem value="school">School</SelectItem>
                <SelectItem value="parent">Parent</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-gray-700">
              Your Name
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              required
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="location" className="text-sm font-medium text-gray-700">
              Location
            </Label>
            <Input
              id="location"
              type="text"
              placeholder="Enter your location"
              value={formData.location}
              onChange={(e) => handleInputChange("location", e.target.value)}
              required
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
              Phone Number
            </Label>
            {/* <div className="flex"> */}
              {/* <div className="flex items-center px-3 py-2 border border-r-0 rounded-l-md bg-gray-50 text-sm text-gray-600">
                🇳🇬 +234
              </div> */}
              <Input
                id="phone"
                type="tel"
                placeholder="000 000 0000"
                value={formData.phoneNumber}
                onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                required
                className="w-full"
              />
            {/* </div> */}
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="updates"
              checked={formData.keepUpdated}
              onCheckedChange={(checked) => handleInputChange("keepUpdated", checked as boolean)}
            />
            <Label htmlFor="updates" className="text-sm text-gray-600">
              Keep me updated on news from MyGuy
            </Label>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-full mt-8 mb-6"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}