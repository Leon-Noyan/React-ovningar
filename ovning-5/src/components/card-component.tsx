import React from 'react'

interface CardProps {
    title: string
    children: React.ReactNode
    bgColor: string
}

function Card({ title, children, bgColor }: CardProps) {
    return (
        <div style={{ border: '1px solid black', padding: '10px', margin: '10px', backgroundColor: bgColor }}>
            <h2>{title}</h2>
            <div>{children}</div>
        </div>
    )
}

export default Card
