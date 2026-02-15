import { useEffect, useRef } from 'react'

const TRAIL_COUNT = 10

export default function CustomCursor() {
    const dotsRef = useRef([])
    const mouse = useRef({ x: -100, y: -100 })
    const positions = useRef(Array.from({ length: TRAIL_COUNT }, () => ({ x: -100, y: -100 })))

    useEffect(() => {
        if ('ontouchstart' in window) return

        const handleMove = (e) => {
            mouse.current = { x: e.clientX, y: e.clientY }
        }
        window.addEventListener('mousemove', handleMove, { passive: true })

        let raf
        const animate = () => {
            let { x: lx, y: ly } = mouse.current
            positions.current.forEach((pos, i) => {
                // Higher base easing + gentler falloff = smoother trail
                const ease = 0.45 - i * 0.025
                pos.x += (lx - pos.x) * ease
                pos.y += (ly - pos.y) * ease
                if (dotsRef.current[i]) {
                    dotsRef.current[i].style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`
                }
                lx = pos.x
                ly = pos.y
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

    return (
        <>
            {Array.from({ length: TRAIL_COUNT }, (_, i) => {
                const size = 16 - i * 1.2
                const opacity = 0.8 - i * 0.07
                return (
                    <div
                        key={i}
                        ref={(el) => (dotsRef.current[i] = el)}
                        className="cursor-dot"
                        style={{
                            width: `${size}px`,
                            height: `${size}px`,
                            background: `rgba(99, 102, 241, ${opacity})`,
                            boxShadow: i === 0 ? '0 0 12px rgba(99, 102, 241, 0.6)' : 'none',
                            marginLeft: `${-size / 2}px`,
                            marginTop: `${-size / 2}px`,
                        }}
                    />
                )
            })}
        </>
    )
}
