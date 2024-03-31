import React from "react"

interface Props {
    children: any
    className?: string
    onKeyDown?: (event: React.KeyboardEvent) => void
}

const Page = ({ children, className, onKeyDown }: Props) => {
    return (
        <div className={`flex-1 max-h-dvh ${className}`} onKeyDown={onKeyDown}>
            {children}
        </div>
    )
}

export default Page
