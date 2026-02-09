import { useState, useEffect, useMemo } from 'react'

const TERMINAL_LINES = [
    { type: 'command', text: '> git push origin main' },
    { type: 'output', text: 'Enumerating objects: 42, done.' },
    { type: 'success', text: '✓ Commit successful' },
    { type: 'command', text: '> npm run build' },
    { type: 'output', text: 'Building portfolio...' },
    { type: 'success', text: '✓ Build succeeded — 0 errors' },
    { type: 'command', text: '> deploying to production...' },
    { type: 'success', text: '✓ Portfolio is LIVE 🚀' },
]

function BinaryRain() {
    const columns = useMemo(() => {
        return Array.from({ length: 30 }, (_, i) => ({
            id: i,
            left: `${(i / 30) * 100}%`,
            duration: `${3 + Math.random() * 5}s`,
            delay: `${-Math.random() * 5}s`,
            text: Array.from({ length: 60 }, () => Math.round(Math.random())).join(' '),
        }))
    }, [])

    return (
        <div className="preloader-binary">
            {columns.map(col => (
                <div
                    key={col.id}
                    className="binary-column"
                    style={{
                        left: col.left,
                        animationDuration: col.duration,
                        animationDelay: col.delay,
                    }}
                >
                    {col.text}
                </div>
            ))}
        </div>
    )
}

export default function Preloader({ visible }) {
    const [visibleLines, setVisibleLines] = useState(0)
    const [showFinal, setShowFinal] = useState(false)

    useEffect(() => {
        if (!visible) return
        const timers = []
        TERMINAL_LINES.forEach((_, i) => {
            timers.push(setTimeout(() => setVisibleLines(i + 1), 400 * (i + 1)))
        })
        timers.push(setTimeout(() => setShowFinal(true), 400 * TERMINAL_LINES.length + 400))
        return () => timers.forEach(clearTimeout)
    }, [visible])

    return (
        <div className={`preloader ${!visible ? 'hidden' : ''}`}>
            <BinaryRain />
            <div className="terminal-card">
                <div className="terminal-header">
                    <div className="terminal-dot red" />
                    <div className="terminal-dot yellow" />
                    <div className="terminal-dot green" />
                </div>
                <div className="terminal-body">
                    {TERMINAL_LINES.slice(0, visibleLines).map((line, i) => (
                        <div
                            key={i}
                            className="terminal-line"
                            style={{ animationDelay: `${i * 0.05}s` }}
                        >
                            <span className={line.type === 'command' ? 'command' : line.type === 'success' ? 'success' : 'output'}>
                                {line.text}
                            </span>
                        </div>
                    ))}
                    {visibleLines < TERMINAL_LINES.length && <span className="terminal-cursor" />}
                    {showFinal && (
                        <div className="preloader-final">
                            GARVIT PANDIA · Engine Started
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
