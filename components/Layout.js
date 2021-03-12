import {useEffect} from 'react'
import Link from 'next/link'
import Head from 'next/head'
import {useRouter} from 'next/router'
import NProgress from 'nprogress'

const Layout = ({
                    children,
                    title
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
                <Link href='/'>
                    <a>Home</a>
                </Link>
                <Link href='/about'>
                    <a>About</a>
                </Link>
                <Link href='/hire_me'>
                    <a>Hire me</a>
                </Link>
            </header>
            <Head>
                <title>Portfilio</title>
                <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js'/>
            </Head>
            <main>
                {children}
            </main>
            <footer>
                &copy: {new Date().getFullYear()}
            </footer>
        </div>
    )
}

export default Layout
