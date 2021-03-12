import Link from 'next/link'
const Home = ({

}) => (
    <div>
        <h1>Home</h1>
        <Link href='/about'>
            <a>Go to about</a>
        </Link>
        <p>Welcome to the home page!</p>
    </div>
)

export default Home
