import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import sanityClient from '../client.js'

const Post = () => {
  const [postData, setPostData] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'post']{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
            },
            alt
          }
        }`
      )
      .then(data => setPostData(data))
      .catch(console.error)
  }, [])

  return (
    <main>
      <section className='blog-page'>
        <h1 className='cursive'>Blog Posts Page</h1>
        <h2 className='cursive'>Welcome to my page of blog posts</h2>
        <div className='blog-posts container'>
          { postData && postData.map((post, index) => (
          <article>
            <Link to={"/post/" + post.slug.current} key={post.slug.current}>
            <span className='posts-img-title' key={index}>
              <img src={post.mainImage.asset.url} alt={post.mainImage.alt}/>
              <span className='posts-title'>
                <h3>{post.title}</h3>
              </span>
            </span>
            </Link>
          </article>
))}
        </div>
      </section>
    </main>
  )
}

export default Post
