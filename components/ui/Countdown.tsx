'use client'

import { useState, useEffect } from 'react'

interface CountdownProps {
  targetDate: string
  label?: string
}

export function Countdown({ targetDate, label = 'Comienza en' }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const target = new Date(targetDate).getTime()
      const diff = target - now

      if (diff <= 0) {
        clearInterval(timer)
        return
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  const blocks = [
    { value: timeLeft.days, label: 'Días' },
    { value: timeLeft.hours, label: 'Horas' },
    { value: timeLeft.minutes, label: 'Min' },
    { value: timeLeft.seconds, label: 'Seg' },
  ]

  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-white/80 text-xs font-medium uppercase tracking-widest">{label}</p>
      <div className="flex gap-2 sm:gap-3">
        {blocks.map((block) => (
          <div key={block.label} className="flex flex-col items-center">
            <div className="bg-white/15 backdrop-blur-sm rounded-lg w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center border border-white/20">
              <span className="text-white text-xl sm:text-2xl font-black tabular-nums">
                {String(block.value).padStart(2, '0')}
              </span>
            </div>
            <span className="text-white/70 text-[10px] sm:text-xs mt-1 font-medium">{block.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
