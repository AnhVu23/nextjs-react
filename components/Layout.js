import {useEffect} from 'react'
import Link from 'next/link'
import Head from 'next/head'
import {useRouter} from 'next/router'
import NProgress from 'nprogress'

const Layout = ({
                    children,
                    title = 'Next.js',
    description,
                }) => {
    const router = useRouter()
    useEffect(() => {
        router.events.on('routeChangeStart', url => {
            NProgress.start()
        })
        router.events.on('routeChangeComplete', url => {
            NProgress.done()
        })
        router.events.on('routeChangeError', url => {
            NProgress.done()
        })
    }, [])

    return (
        <div>
            <header>
                <nav>
                    <Link href='/'>
                        <a>Home</a>
                    </Link>
                    <Link href='/about'>
                        <a>About</a>
                    </Link>
                    <Link href='/hire_me'>
                        <a>Hire me</a>
                    </Link>
                </nav>
            </header>
            <Head>
                <title>{title}</title>
                <meta name='viewport' content='width=device-width'/>
                <meta name='description' content={description}/>
            </Head>
            <main>
                {children}
            </main>
            <footer>
                &copy; {new Date().getFullYear()}
            </footer>
            <style jsx>{`
                .container {
                    max-width: 800px;
                    margin: 0 auto;
                    background: #f6f6ef;
                }
                nav {
                    display: flex;
                    flex-direction: row;
                    background: #f6f6ef;
                    padding: 1em;
                }
                nav > * {
                    padding: 0 1rem;
                    margin: 0 1rem;
                    align-items: center
                    color: black;
                }
                nav a {
                    text-decoration: none;
                }
            `}</style>
            <style jsx global>{`
                body {
                    background: white;
                    font-family: Verdana, Geneva, sans-serif
                }
            `}

            </style>
        </div>
    )
}

export default Layout
