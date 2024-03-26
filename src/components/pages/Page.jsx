const Page = ({ children, className, onKeyDown }) => {
    return (
        <div className={`flex-1 max-h-dvh ${className}`} onKeyDown={onKeyDown}>
            {children}
        </div>
    )
}

export default Page
