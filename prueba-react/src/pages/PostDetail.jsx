import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getPost } from '../api/blogApi';
const PostDetail = () => {
  const {id} = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(()=> {
    getPost(id)
    .then((response) => {
      setPost(response.data);
      setError(null)
    })
    .catch((err) =>{
      console.log(err);
      setError(`Could not fetch post. Status: ${err.message}`)
    })
  }, [id])
  if (error) return <p className='text-red-500 text-center'>{error} </p>
  if (!post) return <p className='text-center italic'>Loading...</p>

  return (
   <div className="max-w-2xl mx-auto my-5 p-5 bg-yellow-50 rounded-lg shadow-md">
    <img src={`https://picsum.photos/800/400?random=${id}`} 
    alt={post.title}
    className='w-full h-auto rounded-lg mb-4'
     />
     <h1 className='text-3xl font-bold mb-4'>{post.title} </h1>
     <p className='text-gray-700 leading-relaxed'>
      {post.body}
       </p>
   </div>
  )
}
export default PostDetail