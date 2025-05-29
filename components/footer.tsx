import Link from "next/link"
import { EnhancedLogo } from "@/components/enhanced-logo"

interface FooterProps {
  isArabic?: boolean
}

export function Footer({ isArabic = false }: FooterProps) {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <EnhancedLogo size="md" isArabic={isArabic} />
            <p className="mt-4 text-sm text-white/70">
              {isArabic
                ? "تحويل المساحات من خلال تصميم إضاءة مبتكر يجمع بين الدقة التقنية والتعبير الفني."
                : "Transforming spaces through innovative lighting design that merges technical precision with artistic expression."}
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium text-white">{isArabic ? "التنقل" : "Navigation"}</h3>
            <ul className={`space-y-2 text-sm text-white/70 ${isArabic ? "text-right" : ""}`}>
              <li>
                <Link href={isArabic ? "/ar/projects" : "/projects"} className="transition-colors hover:text-white">
                  {isArabic ? "المشاريع" : "Projects"}
                </Link>
              </li>
              <li>
                <Link href={isArabic ? "/ar/articles" : "/articles"} className="transition-colors hover:text-white">
                  {isArabic ? "المقالات" : "Articles"}
                </Link>
              </li>
              <li>
                <Link href={isArabic ? "/ar/products" : "/products"} className="transition-colors hover:text-white">
                  {isArabic ? "المنتجات" : "Products"}
                </Link>
              </li>
              <li>
                <Link href={isArabic ? "/ar/about" : "/about"} className="transition-colors hover:text-white">
                  {isArabic ? "عن الشركة" : "About"}
                </Link>
              </li>
              <li>
                <Link href={isArabic ? "/ar/contact" : "/contact"} className="transition-colors hover:text-white">
                  {isArabic ? "اتصل بنا" : "Contact"}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium text-white">{isArabic ? "الخدمات" : "Services"}</h3>
            <ul className={`space-y-2 text-sm text-white/70 ${isArabic ? "text-right" : ""}`}>
              <li>
                <Link
                  href={isArabic ? "/ar/articles/concept-design" : "/articles/concept-design"}
                  className="transition-colors hover:text-white"
                >
                  {isArabic ? "تصميم المفهوم" : "Concept Design"}
                </Link>
              </li>
              <li>
                <Link
                  href={isArabic ? "/ar/articles/schematic-design" : "/articles/schematic-design"}
                  className="transition-colors hover:text-white"
                >
                  {isArabic ? "التصميم التخطيطي" : "Schematic Design"}
                </Link>
              </li>
              <li>
                <Link
                  href={isArabic ? "/ar/articles/detailed-design" : "/articles/detailed-design"}
                  className="transition-colors hover:text-white"
                >
                  {isArabic ? "التصميم التفصيلي" : "Detailed Design"}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium text-white">{isArabic ? "اتصل بنا" : "Contact"}</h3>
            <ul className={`space-y-2 text-sm text-white/70 ${isArabic ? "text-right" : ""}`}>
              <li>{isArabic ? "البريد الإلكتروني: laillighting@gmail.com" : "Email: laillighting@gmail.com"}</li>
              <li>{isArabic ? "الهاتف: 6015 934 55 971+" : "Phone: +971 55 934 6015"}</li>
              <li>{isArabic ? "العنوان: دبي، الإمارات العربية المتحدة" : "Address: Dubai, UAE"}</li>
            </ul>
            <div className="mt-4 flex space-x-4">
              <a href="https://instagram.com" className="text-white/70 transition-colors hover:text-white">
                <span className="sr-only">Instagram</span>
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
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a href="https://linkedin.com" className="text-white/70 transition-colors hover:text-white">
                <span className="sr-only">LinkedIn</span>
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
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-white/60">
          <p>
            &copy; {new Date().getFullYear()} LAIL LIGHTING. {isArabic ? "جميع الحقوق محفوظة." : "All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  )
}
