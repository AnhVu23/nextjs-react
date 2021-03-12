import {Component} from 'react'
import fetch from 'node-fetch'
export default class About extends Component {

    static async getInitialProps() {
        const res = await fetch('https://api.github.com/users/anhvu23')
        const data = await res.json()
        return {
            user: data
        }
    }
    render() {
        const {user} = this.props
        if (!user) return <div>Loading...</div>
        return (
            <div>
                <h1>About</h1>
                <img src={user.avatar_url}/>
            </div>
        )
    }
}
