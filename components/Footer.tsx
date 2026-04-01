'use client'

import { Phone, Instagram, Send, MessageCircle, ArrowUp } from 'lucide-react'
import { useApp } from '../lib/context'
import { COMPANY_CONFIG, getWhatsAppLink } from '../lib/company-config'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const { t, language } = useApp()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer id="contact" className="relative bg-gradient-to-b from-card to-card/95 border-t border-border overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Brand & CTA — takes 4 cols */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center space-x-3">
              <Image src="/logo.png" height={40} width={40} className="rounded-full" alt="S3 DETAILING" />
              <div>
                <span className="text-xl font-bold tracking-tight text-card-foreground">{COMPANY_CONFIG.name}</span>
                <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-medium">Premium Detailing</div>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed text-sm max-w-xs">
              {COMPANY_CONFIG.description[language]}
            </p>

            {/* WhatsApp CTA */}
            <a
              href={getWhatsAppLink(language === 'ru' ? 'Здравствуйте! Интересует детейлинг.' : 'Сәлеметсіз бе! Детейлинг қызықтырады.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-xl font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              {language === 'ru' ? 'Написать в WhatsApp' : 'WhatsApp-қа жазу'}
            </a>

            {/* Social */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_CONFIG.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-muted/60 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 flex items-center justify-center text-muted-foreground hover:text-white transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={COMPANY_CONFIG.social.telegram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="w-10 h-10 rounded-xl bg-muted/60 hover:bg-[#0088cc] flex items-center justify-center text-muted-foreground hover:text-white transition-all duration-300"
              >
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation — takes 2 cols */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-card-foreground mb-5">
              {t('quickLinks')}
            </h4>
            <ul className="space-y-3">
              {[
                { href: '#home', label: t('home') },
                { href: '#services', label: t('services') },
                { href: '#about', label: t('about') },
                { href: '#faq', label: t('faq') },
                { href: '#contact', label: t('contact') },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services — takes 3 cols */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-card-foreground mb-5">
              {t('ourServices')}
            </h4>
            <ul className="space-y-3">
              {[
                { href: '/services/tinting', label: t('tinting') },
                { href: '/services/ppf', label: t('ppf') },
                { href: '/services/detailing', label: t('detailing') },
                { href: '/services/ceramic', label: t('ceramic') },
                { href: '/services/polishing', label: t('polishing') },
              ].map((svc) => (
                <li key={svc.href}>
                  <Link href={svc.href} className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                    {svc.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact — takes 3 cols */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-card-foreground mb-5">
              {t('contactTitle')}
            </h4>

            <div className="space-y-4">
              {/* Main phone */}
              <a
                href={`tel:${COMPANY_CONFIG.contacts.phone.formatted}`}
                className="flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-medium text-card-foreground">{COMPANY_CONFIG.contacts.phone.main}</div>
                  <div className="text-[11px] text-muted-foreground">{language === 'ru' ? 'Основной' : 'Негізгі'}</div>
                </div>
              </a>

              {/* Additional phones */}
              {COMPANY_CONFIG.contacts.additionalPhones.map((phone, i) => (
                <a
                  key={i}
                  href={`tel:${phone.replace(/[^\d+]/g, '')}`}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-muted/60 flex items-center justify-center text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-sm text-muted-foreground group-hover:text-card-foreground transition-colors duration-200">{phone}</span>
                </a>
              ))}

              {/* Work hours */}
              <div className="pt-3 border-t border-border/50">
                <div className="text-xs text-muted-foreground">
                  {language === 'ru' ? 'Ежедневно' : 'Күн сайын'}: 09:00 — 21:00
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {COMPANY_CONFIG.name}. {language === 'ru' ? 'Все права защищены.' : 'Барлық құқықтар қорғалған.'}
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-9 h-9 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300 hover:-translate-y-0.5"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}