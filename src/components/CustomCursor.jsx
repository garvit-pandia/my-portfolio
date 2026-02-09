import { useEffect, useRef } from 'react'

export default function CustomCursor() {
    const dotsRef = useRef([])
    const mouse = useRef({ x: -100, y: -100 })
    const positions = useRef(Array.from({ length: 7 }, () => ({ x: -100, y: -100 })))

    useEffect(() => {
        // Skip on touch/mobile
        if ('ontouchstart' in window) return

        const handleMove = (e) => {
            mouse.current = { x: e.clientX, y: e.clientY }
        }
        window.addEventListener('mousemove', handleMove)

        let raf
        const animate = () => {
            let prev = mouse.current
            positions.current.forEach((pos, i) => {
                const ease = 0.35 - i * 0.03
                pos.x += (prev.x - pos.x) * ease
                pos.y += (prev.y - pos.y) * ease
                if (dotsRef.current[i]) {
                    const size = 14 - i * 1.5
                    dotsRef.current[i].style.transform = `translate(${pos.x - size / 2}px, ${pos.y - size / 2}px)`
                    dotsRef.current[i].style.width = `${size}px`
                    dotsRef.current[i].style.height = `${size}px`
                }
                prev = pos
            })
            raf = requestAnimationFrame(animate)
        }
        raf = requestAnimationFrame(animate)

        return () => {
            window.removeEventListener('mousemove', handleMove)
            cancelAnimationFrame(raf)
        }
    }, [])

    if (typeof window !== 'undefined' && 'ontouchstart' in window) return null

    const colors = [
        'rgba(100,243,255,0.8)',
        'rgba(120,220,255,0.65)',
        'rgba(140,200,255,0.5)',
        'rgba(155,135,255,0.4)',
        'rgba(170,120,255,0.3)',
        'rgba(200,100,255,0.2)',
        'rgba(255,0,255,0.12)',
    ]

    return (
        <>
            {colors.map((c, i) => (
                <div
                    key={i}
                    ref={(el) => (dotsRef.current[i] = el)}
                    className="cursor-dot"
                    style={{ background: c }}
                />
            ))}
        </>
    )
}
