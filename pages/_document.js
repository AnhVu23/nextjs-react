import React from 'react'
import Document, {Head, Main, NextScript, Html} from 'next/document'
import Helmet from 'react-helmet';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps, helmet: Helmet.renderStatic()}
    }

    render() {
        return (
            <Html lang='en'>
            <Head>
                <meta name='description' content='My portfolio site'/>
                <meta charSet='utf-8'/>
                <meta name='robots' content='noindex, nofollow'/>
                <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js'/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
            <style global jsx>{`
            body {
                font-family: 'Roboto', sans-serif;
             }
        `}</style>
            </Html>
        )
    }
}

export default MyDocument
