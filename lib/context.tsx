'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { translations, Language, TranslationKey } from './translations'

interface AppContextType {
  language: Language
  setLanguage: (lang: Language) => void
  theme: 'light' | 'dark'
  setTheme: (theme: 'light' | 'dark') => void
  t: (key: TranslationKey) => string
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ru')
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    // Загружаем сохраненные настройки
    const savedLang = localStorage.getItem('language') as Language
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark'
    
    if (savedLang && (savedLang === 'ru' || savedLang === 'kz')) {
      setLanguage(savedLang)
    }
    
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      setTheme(savedTheme)
    } else {
      // Определяем системную тему по умолчанию
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      setTheme(systemTheme)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  useEffect(() => {
    localStorage.setItem('theme', theme)
    
    // Применяем тему через класс на html элементе для Tailwind CSS
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const t = (key: TranslationKey): string => {
    return translations[language][key] || key
  }

  return (
    <AppContext.Provider value={{
      language,
      setLanguage,
      theme,
      setTheme,
      t
    }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider')
  }
  return context
}