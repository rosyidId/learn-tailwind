
function Layout({ children }) {
    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-300 antialiased font-sans tracking-tighter'>
            {children}
        </div>
    )
}

export default Layout