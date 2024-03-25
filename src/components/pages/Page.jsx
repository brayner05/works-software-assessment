const Page = ({ children, className }) => {
    return <div className={`flex-1 max-h-dvh ${className}`}>{children}</div>
}

export default Page
