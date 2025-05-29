"use server"

import { z } from "zod"

// Define validation schema for form data
const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(2, { message: "Subject is required" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

type ContactFormData = z.infer<typeof ContactFormSchema>

export type FormState = {
  errors?: {
    name?: string[]
    email?: string[]
    subject?: string[]
    message?: string[]
    _form?: string[]
  }
  success?: boolean
  message?: string
}

export async function submitContactForm(prevState: FormState, formData: FormData): Promise<FormState> {
  // Extract form data
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  // Validate form data
  const validatedFields = ContactFormSchema.safeParse({
    name,
    email,
    subject,
    message,
  })

  // If validation fails, return errors
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
      message: "Please fix the errors in the form.",
    }
  }

  // Form data is valid, proceed with submission
  try {
    // In a real application, you would send an email or store in a database here
    // For example, using a service like Nodemailer, SendGrid, or a database like Supabase

    // Simulate a network request
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // For demonstration, we'll just log the data and return success
    console.log("Form submission:", validatedFields.data)

    // Return success state
    return {
      success: true,
      message: "Thank you for your message. We'll get back to you soon!",
    }
  } catch (error) {
    // Handle any errors that occur during submission
    console.error("Form submission error:", error)
    return {
      errors: {
        _form: ["An error occurred while submitting the form. Please try again."],
      },
      success: false,
      message: "Failed to submit the form. Please try again later.",
    }
  }
}
