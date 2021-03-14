import fetch from 'node-fetch'
import React from 'react'
import Error from 'next/error'

export default class Home extends React.Component {
    static async getInitialProps() {
        let stories
        try {
            const res = await fetch('https://node-hnapi.herokuapp.com/news')
            stories = await res.json()

        } catch (e) {
            console.log(e)
            stories = []
        }
        return {
            stories
        }
    }

    render() {
        const {stories} = this.props
        if (stories.length === 0) return <Error statusCode={404}/>
        return (
            <div>
                <h1>hacker next</h1>
                {stories.map(story => (
                    <h2 key={story.id}>{story.title}</h2>
                ))}
            </div>
        )
    }
}
