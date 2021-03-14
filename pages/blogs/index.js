import Link from 'next/link'

const BlogLink = ({title, slug}) => (
    <Link as={`blogs/${slug}`}>
        <a>{title}</a>
    </Link>
)
const Blogs = () => (
    <ul>
        <li>
            <BlogLink title={'React Blog Post'}
                      slug={'react'}
            />
            <BlogLink title={'Vue Blog Post'}
                      slug={'Vue'}
            />
        </li>
    </ul>
)

export default Blogs
