import Link from "next/link"

export function WhatsAppButton({ phoneNumber, className = "" }: { phoneNumber: string; className?: string }) {
  // Remove any non-numeric characters from the phone number
  const cleanNumber = phoneNumber.replace(/\D/g, "")
  const whatsappUrl = `https://wa.me/${cleanNumber}`

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-2 rounded-md bg-[#25D366] px-4 py-2 text-white transition-all hover:bg-[#128C7E] ${className}`}
    >
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
        className="h-5 w-5"
      >
        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
        <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
        <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
        <path d="M9.5 13.5c.5 1 1.5 1 2.5 1s2-.5 2.5-1" />
      </svg>
      <span>WhatsApp</span>
    </Link>
  )
}
