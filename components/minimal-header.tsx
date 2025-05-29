"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { EnhancedLogo } from "@/components/enhanced-logo"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ThemeToggle } from "@/components/theme-toggle"

interface MinimalHeaderProps {
  isArabic?: boolean
}

export function MinimalHeader({ isArabic = false }: MinimalHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    document.body.style.overflow = "auto"
  }

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container max-w-full flex items-center justify-between px-4 py-4 md:px-6">
        <div className="flex items-center space-x-4">
          <Link href={isArabic ? "/ar" : "/"} onClick={closeMenu}>
            <EnhancedLogo size="sm" isArabic={isArabic} linkWrapper={false} />
          </Link>

          <nav className="hidden md:block">
            <ul className={`flex space-x-6 ${isArabic ? "flex-row-reverse space-x-reverse" : ""}`}>
              <li>
                <Link
                  href={isArabic ? "/ar" : "/"}
                  className="text-sm uppercase tracking-wider text-white/70 transition-colors hover:text-white"
                >
                  {isArabic ? "الرئيسية" : "Home"}
                </Link>
              </li>
              <li>
                <Link
                  href={isArabic ? "/ar/projects" : "/projects"}
                  className="text-sm uppercase tracking-wider text-white/70 transition-colors hover:text-white"
                >
                  {isArabic ? "المشاريع" : "Projects"}
                </Link>
              </li>
              <li>
                <Link
                  href={isArabic ? "/ar/articles" : "/articles"}
                  className="text-sm uppercase tracking-wider text-white/70 transition-colors hover:text-white"
                >
                  {isArabic ? "المقالات" : "Articles"}
                </Link>
              </li>
              <li>
                <Link
                  href={isArabic ? "/ar/products" : "/products"}
                  className="text-sm uppercase tracking-wider text-white/70 transition-colors hover:text-white"
                >
                  {isArabic ? "المنتجات" : "Products"}
                </Link>
              </li>
              <li>
                <Link
                  href={isArabic ? "/ar/about" : "/about"}
                  className="text-sm uppercase tracking-wider text-white/70 transition-colors hover:text-white"
                >
                  {isArabic ? "عن الشركة" : "About"}
                </Link>
              </li>
              <li>
                <Link
                  href={isArabic ? "/ar/contact" : "/contact"}
                  className="text-sm uppercase tracking-wider text-white/70 transition-colors hover:text-white"
                >
                  {isArabic ? "اتصل بنا" : "Contact"}
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <LanguageSwitcher />
          <button
            onClick={toggleMenu}
            className="rounded-full border border-white/20 p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 top-[72px] z-40 bg-black/95 backdrop-blur-md md:hidden"
          >
            <nav className="container h-full px-4 py-8">
              <ul className={`flex flex-col space-y-6 ${isArabic ? "items-end text-right" : ""}`}>
                <li>
                  <Link
                    href={isArabic ? "/ar" : "/"}
                    className="text-xl uppercase tracking-wider text-white/70 transition-colors hover:text-white"
                    onClick={closeMenu}
                  >
                    {isArabic ? "الرئيسية" : "Home"}
                  </Link>
                </li>
                <li>
                  <Link
                    href={isArabic ? "/ar/projects" : "/projects"}
                    className="text-xl uppercase tracking-wider text-white/70 transition-colors hover:text-white"
                    onClick={closeMenu}
                  >
                    {isArabic ? "المشاريع" : "Projects"}
                  </Link>
                </li>
                <li>
                  <Link
                    href={isArabic ? "/ar/articles" : "/articles"}
                    className="text-xl uppercase tracking-wider text-white/70 transition-colors hover:text-white"
                    onClick={closeMenu}
                  >
                    {isArabic ? "المقالات" : "Articles"}
                  </Link>
                </li>
                <li>
                  <Link
                    href={isArabic ? "/ar/products" : "/products"}
                    className="text-xl uppercase tracking-wider text-white/70 transition-colors hover:text-white"
                    onClick={closeMenu}
                  >
                    {isArabic ? "المنتجات" : "Products"}
                  </Link>
                </li>
                <li>
                  <Link
                    href={isArabic ? "/ar/about" : "/about"}
                    className="text-xl uppercase tracking-wider text-white/70 transition-colors hover:text-white"
                    onClick={closeMenu}
                  >
                    {isArabic ? "عن الشركة" : "About"}
                  </Link>
                </li>
                <li>
                  <Link
                    href={isArabic ? "/ar/contact" : "/contact"}
                    className="text-xl uppercase tracking-wider text-white/70 transition-colors hover:text-white"
                    onClick={closeMenu}
                  >
                    {isArabic ? "اتصل بنا" : "Contact"}
                  </Link>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
