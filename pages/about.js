import {Component} from 'react'
import fetch from 'node-fetch'

import Error from './_error'
export default class About extends Component {

    static async getInitialProps() {
        try {
            const res = await fetch('https://api.github.com/users/anhvu23234')
            const data = await res.json()
            if (res.statusCode !== 200) {
                throw `${data.message}`
            }
            return {
                user: data
            }
        } catch (e) {
            return {
                error: e
            }
        }
    }
    render() {
        const {user, error} = this.props
        if (error) return <Error message={error}/>
        if (!user) return <div>Loading...</div>
        return (
            <div>
                <h1>About</h1>
                <img src={user.avatar_url}/>
            </div>
        )
    }
}
