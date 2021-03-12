import Layout from '../components/Layout'

export default ({
                    Component,
                    pageProps
                }) => {
    console.log(pageProps)
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}
