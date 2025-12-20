'use client'

import { useState, useEffect } from 'react'
import { X, Play, Pause } from 'lucide-react'
import { useApp } from '../lib/context'

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
  const { language } = useApp()
  const [isPlaying, setIsPlaying] = useState(false)
  const [videoRef, setVideoRef] = useState<HTMLVideoElement | null>(null)

  // Закрытие модала по Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  // Остановка видео при закрытии модала
  useEffect(() => {
    if (!isOpen && videoRef) {
      videoRef.pause()
      videoRef.currentTime = 0
      setIsPlaying(false)
    }
  }, [isOpen, videoRef])

  const togglePlayPause = () => {
    if (videoRef) {
      if (isPlaying) {
        videoRef.pause()
      } else {
        videoRef.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleVideoPlay = () => {
    setIsPlaying(true)
  }

  const handleVideoPause = () => {
    setIsPlaying(false)
  }

  const handleVideoEnded = () => {
    setIsPlaying(false)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-4xl mx-4 max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <h3 className="text-xl font-bold text-white">
            {language === 'ru' ? 'Наши работы' : 'Біздің жұмыстар'}
          </h3>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-black/50 hover:bg-black/70 text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Video Container */}
        <div className="relative bg-black rounded-2xl overflow-hidden">
          <video
            ref={setVideoRef}
            className="w-full h-auto max-h-[80vh]"
            onPlay={handleVideoPlay}
            onPause={handleVideoPause}
            onEnded={handleVideoEnded}
            controls
            playsInline
            poster="/fon_dark_hero.jpg"
          >
            <source src="/s3_hero_video.mp4" type="video/mp4" />
            {language === 'ru' 
              ? 'Ваш браузер не поддерживает воспроизведение видео.'
              : 'Сіздің браузеріңіз бейне ойнатуды қолдамайды.'
            }
          </video>

          {/* Custom Play/Pause Button Overlay */}
          <div 
            className="absolute inset-0 flex items-center justify-center cursor-pointer"
            onClick={togglePlayPause}
          >
            <div className={`
              w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center
              transition-all duration-300 hover:bg-white/30 hover:scale-110
              ${isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'}
            `}>
              <Play className="w-8 h-8 text-white ml-1" />
            </div>
          </div>

          {/* Video Info Overlay */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4">
              <p className="text-white text-sm">
                {language === 'ru' 
                  ? 'Посмотрите на качество наших работ по детейлингу автомобилей'
                  : 'Автомобиль детейлинг бойынша біздің жұмыстарымыздың сапасын көріңіз'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}