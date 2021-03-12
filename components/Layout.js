import Link from 'next/link'
const Layout = ({
    children,
    title
                }) => (
    <div>
        <header>
            <Link>
                <a href=''>Home</a>
            </Link>
            <Link>
                <a href='/about'>About</a>
            </Link>
            <Link>
                <a href='/hire_me'>Hire me</a>
            </Link>
        </header>
        <main>
            {children}
        </main>
        <footer>
            Footer
        </footer>
    </div>
)

export default Layout
