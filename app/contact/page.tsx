"use client"

import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { ArrowRight, Mail, Phone, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Footer } from "@/components/footer"
import { MinimalHeader } from "@/components/minimal-header"
import { StarBackground } from "@/components/star-background"
import { ShootingStars } from "@/components/shooting-stars"
import { DualSpotlightEffect } from "@/components/spotlight-effect"
import { submitContactForm, type FormState } from "../actions/contact-form"
import { useEffect, useState } from "react"
import { toast } from "@/components/ui/use-toast"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

// Form submit button with loading state
function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button
      type="submit"
      className="w-full border border-white/20 bg-white text-black hover:bg-transparent hover:text-white"
      disabled={pending}
    >
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : (
        <>
          Send Message
          <ArrowRight className="ml-2 h-4 w-4" />
        </>
      )}
    </Button>
  )
}

export default function ContactPage() {
  // Initial form state
  const initialState: FormState = { errors: {} }

  // Form state using useActionState hook
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState)

  // State to track if the form has been submitted successfully
  const [formSubmitted, setFormSubmitted] = useState(false)

  // Effect to show toast notification on successful submission
  useEffect(() => {
    if (state.success) {
      setFormSubmitted(true)
      toast({
        title: "Message sent!",
        description: state.message,
      })
    }
  }, [state])

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <MinimalHeader />
      <main className="flex-1">
        <section className="relative py-20 md:py-28 lg:py-32">
          <DualSpotlightEffect intensity={0.5} size={0.7} color="255, 241, 224">
            <div className="absolute inset-0 z-0">
              <div className="h-full w-full bg-black"></div>
            </div>
            <StarBackground />
            <div className="container mx-auto relative z-10 px-4 md:px-6">
              <div className="mx-auto max-w-3xl text-center">
                <h1 className="text-4xl font-light tracking-tight md:text-5xl lg:text-6xl">
                  Get in <span className="font-medium">Touch</span>
                </h1>
                <p className="mt-6 text-lg text-white/80 md:text-xl">
                  Let's discuss how we can illuminate your next project.
                </p>
              </div>
            </div>
          </DualSpotlightEffect>
        </section>

        <section className="relative py-12">
          <DualSpotlightEffect intensity={0.4} size={0.6} color="255, 241, 224">
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-black to-black/95"></div>
            <ShootingStars />
            <div className="container mx-auto relative z-10 px-4 md:px-6">
              <div className="grid gap-12 md:grid-cols-2">
                <div>
                  <h2 className="text-2xl font-bold">Contact Information</h2>
                  <p className="mt-4 text-white/70">
                    Reach out to us through any of the following channels. We're ready to discuss your lighting design
                    needs.
                  </p>
                  <div className="mt-8 space-y-6">
                    <div className="flex items-start">
                      <Mail className="mr-4 h-6 w-6 text-white/60" />
                      <div>
                        <h3 className="text-lg font-medium">Email</h3>
                        <a href="mailto:laillighting@gmail.com" className="text-white/70 hover:text-white">
                          laillighting@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="mr-4 h-6 w-6 text-white/60" />
                      <div>
                        <h3 className="text-lg font-medium">Phone</h3>
                        <a href="tel:+97142588520" className="text-white/70 hover:text-white">
                          +971 4 258 8520
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-4 h-6 w-6 text-white/60"
                      >
                        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                        <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                        <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                        <path d="M9.5 13.5c.5 1 1.5 1 2.5 1s2-.5 2.5-1" />
                      </svg>
                      <div>
                        <h3 className="text-lg font-medium">WhatsApp</h3>
                        <a href="https://wa.me/971559346015" className="text-white/70 hover:text-white">
                          +971 55 934 6015
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-lg font-medium">Address</h3>
                    <address className="mt-2 not-italic text-white/70">
                      LAIL Lighting Design
                      <br />
                      JLT, Cluster X 1506
                      <br />
                      Dubai, UAE
                    </address>
                  </div>
                  <div className="mt-12">
                    <h3 className="text-lg font-medium">Follow Us</h3>
                    <div className="mt-4 flex space-x-4">
                      <a
                        href="https://instagram.com"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-white hover:text-white"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-instagram"
                        >
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                        </svg>
                        <span className="sr-only">Instagram</span>
                      </a>
                      <a
                        href="https://twitter.com"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-white hover:text-white"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-twitter"
                        >
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                        </svg>
                        <span className="sr-only">Twitter</span>
                      </a>
                      <a
                        href="https://linkedin.com"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-white hover:text-white"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-linkedin"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect width="4" height="12" x="2" y="9" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                        <span className="sr-only">LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Send Us a Message</h2>

                  {formSubmitted ? (
                    <div className="mt-8">
                      <Alert className="border-green-500/20 bg-green-500/10">
                        <AlertTitle className="text-green-400">Message Sent Successfully!</AlertTitle>
                        <AlertDescription className="text-green-300/80">
                          Thank you for contacting us. We'll get back to you as soon as possible.
                        </AlertDescription>
                      </Alert>
                      <Button
                        className="mt-6 w-full border border-white/20 bg-white text-black hover:bg-transparent hover:text-white"
                        onClick={() => setFormSubmitted(false)}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form action={formAction} className="mt-8 space-y-6">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Name
                          </label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Your name"
                            className={`border-white/20 bg-white/5 text-white placeholder:text-white/50 focus:border-white ${
                              state.errors?.name ? "border-red-500" : ""
                            }`}
                          />
                          {state.errors?.name && <p className="mt-1 text-sm text-red-500">{state.errors.name[0]}</p>}
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Your email"
                            className={`border-white/20 bg-white/5 text-white placeholder:text-white/50 focus:border-white ${
                              state.errors?.email ? "border-red-500" : ""
                            }`}
                          />
                          {state.errors?.email && <p className="mt-1 text-sm text-red-500">{state.errors.email[0]}</p>}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder="Subject"
                          className={`border-white/20 bg-white/5 text-white placeholder:text-white/50 focus:border-white ${
                            state.errors?.subject ? "border-red-500" : ""
                          }`}
                        />
                        {state.errors?.subject && (
                          <p className="mt-1 text-sm text-red-500">{state.errors.subject[0]}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Your message"
                          className={`min-h-[150px] border-white/20 bg-white/5 text-white placeholder:text-white/50 focus:border-white ${
                            state.errors?.message ? "border-red-500" : ""
                          }`}
                        />
                        {state.errors?.message && (
                          <p className="mt-1 text-sm text-red-500">{state.errors.message[0]}</p>
                        )}
                      </div>

                      {state.errors?._form && (
                        <Alert variant="destructive">
                          <AlertDescription>{state.errors._form[0]}</AlertDescription>
                        </Alert>
                      )}

                      <SubmitButton />
                    </form>
                  )}
                </div>
              </div>
            </div>
          </DualSpotlightEffect>
        </section>
      </main>
      <Footer />
    </div>
  )
}
