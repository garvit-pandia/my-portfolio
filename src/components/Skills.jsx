import { useRef, useEffect, useState, useCallback } from 'react'
import { motion } from 'framer-motion'

const SKILLS = [
    { name: 'C++', icon: '⚡', color: '#00599C' },
    { name: 'Java', icon: '☕', color: '#f89820' },
    { name: 'Python', icon: '🐍', color: '#3776ab' },
    { name: 'JavaScript', icon: '✨', color: '#f7df1e' },
    { name: 'HTML', icon: '🌐', color: '#e34c26' },
    { name: 'CSS', icon: '🎨', color: '#264de4' },
    { name: 'MySQL', icon: '🗄️', color: '#00758f' },
    { name: 'Git', icon: '🔀', color: '#f05032' },
    { name: 'GitHub', icon: '🐙', color: '#6e5494' },
    { name: 'Tableau', icon: '📊', color: '#e97627' },
    { name: 'R', icon: '📈', color: '#276DC3' },
    { name: 'Excel', icon: '📋', color: '#217346' },
    { name: 'DSA', icon: '🧩', color: '#64f3ff' },
    { name: 'Streamlit', icon: '🚀', color: '#ff4b4b' },
]

function createTile(skill, containerW, containerH, index) {
    const cols = 7
    const row = Math.floor(index / cols)
    const col = index % cols
    const tileW = 120
    const tileH = 44
    const gapX = (containerW - cols * tileW) / (cols + 1)
    const gapY = 60

    return {
        ...skill,
        x: gapX + col * (tileW + gapX),
        y: 60 + row * (tileH + gapY),
        w: tileW,
        h: tileH,
        vx: 0,
        vy: 0,
        dragging: false,
    }
}

export default function Skills() {
    const containerRef = useRef(null)
    const tilesRef = useRef([])
    const [, forceUpdate] = useState(0)
    const dragRef = useRef({ idx: -1, offX: 0, offY: 0, lastX: 0, lastY: 0 })
    const rafRef = useRef(null)

    const init = useCallback(() => {
        if (!containerRef.current) return
        const rect = containerRef.current.getBoundingClientRect()
        tilesRef.current = SKILLS.map((s, i) => createTile(s, rect.width, rect.height, i))
        forceUpdate((n) => n + 1)
    }, [])

    useEffect(() => {
        init()
        const gravity = 0.25
        const friction = 0.97
        const bounce = 0.5

        const step = () => {
            if (!containerRef.current) { rafRef.current = requestAnimationFrame(step); return }
            const rect = containerRef.current.getBoundingClientRect()
            const W = rect.width
            const H = rect.height

            tilesRef.current.forEach((tile) => {
                if (tile.dragging) return

                tile.vy += gravity
                tile.vx *= friction
                tile.vy *= friction

                tile.x += tile.vx
                tile.y += tile.vy

                // Walls
                if (tile.x < 0) { tile.x = 0; tile.vx *= -bounce }
                if (tile.x + tile.w > W) { tile.x = W - tile.w; tile.vx *= -bounce }
                if (tile.y < 0) { tile.y = 0; tile.vy *= -bounce }
                if (tile.y + tile.h > H) { tile.y = H - tile.h; tile.vy *= -bounce }
            })

            // Tile-tile collisions (simple AABB push)
            const tiles = tilesRef.current
            for (let i = 0; i < tiles.length; i++) {
                for (let j = i + 1; j < tiles.length; j++) {
                    const a = tiles[i], b = tiles[j]
                    const overlapX = Math.min(a.x + a.w, b.x + b.w) - Math.max(a.x, b.x)
                    const overlapY = Math.min(a.y + a.h, b.y + b.h) - Math.max(a.y, b.y)
                    if (overlapX > 0 && overlapY > 0) {
                        if (overlapX < overlapY) {
                            const push = overlapX / 2
                            if (a.x < b.x) { a.x -= push; b.x += push } else { a.x += push; b.x -= push }
                            const tmp = a.vx; a.vx = b.vx * bounce; b.vx = tmp * bounce
                        } else {
                            const push = overlapY / 2
                            if (a.y < b.y) { a.y -= push; b.y += push } else { a.y += push; b.y -= push }
                            const tmp = a.vy; a.vy = b.vy * bounce; b.vy = tmp * bounce
                        }
                    }
                }
            }

            forceUpdate((n) => n + 1)
            rafRef.current = requestAnimationFrame(step)
        }

        rafRef.current = requestAnimationFrame(step)
        return () => cancelAnimationFrame(rafRef.current)
    }, [])

    const handlePointerDown = (e, idx) => {
        e.preventDefault()
        const rect = containerRef.current.getBoundingClientRect()
        const clientX = e.touches ? e.touches[0].clientX : e.clientX
        const clientY = e.touches ? e.touches[0].clientY : e.clientY
        const tile = tilesRef.current[idx]
        dragRef.current = {
            idx,
            offX: clientX - rect.left - tile.x,
            offY: clientY - rect.top - tile.y,
            lastX: clientX,
            lastY: clientY,
        }
        tile.dragging = true
        tile.vx = 0
        tile.vy = 0
    }

    useEffect(() => {
        const handleMove = (e) => {
            const { idx } = dragRef.current
            if (idx < 0) return
            e.preventDefault()
            const clientX = e.touches ? e.touches[0].clientX : e.clientX
            const clientY = e.touches ? e.touches[0].clientY : e.clientY
            const rect = containerRef.current.getBoundingClientRect()
            const tile = tilesRef.current[idx]
            tile.x = clientX - rect.left - dragRef.current.offX
            tile.y = clientY - rect.top - dragRef.current.offY
            // Track velocity for throw
            tile.vx = (clientX - dragRef.current.lastX) * 0.5
            tile.vy = (clientY - dragRef.current.lastY) * 0.5
            dragRef.current.lastX = clientX
            dragRef.current.lastY = clientY
        }

        const handleUp = () => {
            const { idx } = dragRef.current
            if (idx >= 0) {
                tilesRef.current[idx].dragging = false
            }
            dragRef.current.idx = -1
        }

        window.addEventListener('mousemove', handleMove)
        window.addEventListener('mouseup', handleUp)
        window.addEventListener('touchmove', handleMove, { passive: false })
        window.addEventListener('touchend', handleUp)

        return () => {
            window.removeEventListener('mousemove', handleMove)
            window.removeEventListener('mouseup', handleUp)
            window.removeEventListener('touchmove', handleMove)
            window.removeEventListener('touchend', handleUp)
        }
    }, [])

    return (
        <section className="section" id="skills">
            <div className="section-header">
                <motion.p className="section-label" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                    What I Know
                </motion.p>
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Skills <span className="gradient">Playground</span>
                </motion.h2>
                <motion.p
                    className="section-subtitle"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    Drag and throw the tiles around! They have real physics 🎮
                </motion.p>
            </div>

            <motion.div
                ref={containerRef}
                className="skills-playground"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <button className="skills-reset" onClick={init}>↻ Reset</button>
                {tilesRef.current.map((tile, i) => (
                    <div
                        key={tile.name}
                        className="skill-tile"
                        style={{
                            left: tile.x,
                            top: tile.y,
                            borderColor: tile.dragging ? tile.color : undefined,
                            boxShadow: tile.dragging ? `0 0 20px ${tile.color}40` : undefined,
                        }}
                        onMouseDown={(e) => handlePointerDown(e, i)}
                        onTouchStart={(e) => handlePointerDown(e, i)}
                    >
                        <span className="skill-icon">{tile.icon}</span>
                        {tile.name}
                    </div>
                ))}
            </motion.div>
        </section>
    )
}
