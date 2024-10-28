import React, { useEffect, useState } from 'react'
import { getPosts, getTags } from '../api/blogApi';
import { Link } from 'react-router-dom';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState('');
  useEffect(()=>{
   
     const fetchData = async () => { try{
      const postResponse = await getPosts()
      const tagsResponse = await getTags()
      setPosts(postResponse.data)
      setTags(tagsResponse.data)

    } catch(error){
      console.log('Error fetching data:', error)

    }
  }
  fetchData();
  }, [])
  const filteredPosts = selectedTag
  ? posts.filter((post) => post.title.includes(selectedTag))
  : posts;


  return (
    <div className="max-w-5xl mx-auto p-5">
      <h1 className='text-4xl font-bold mb-5 text-center'>Blog posts</h1>
      <div className="mb-5">
        <h2 className='text-xl font-semibold'>Tags</h2>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag)=>(
            <button 
            key={tag} 
            onClick={() => setSelectedTag(tag)} 
            className="bg-teal-100 text-teal-800 py-1 px-3 rounded-full text-sm hover:bg-teal-200 transition duration-300"
          >
            {tag}
          </button>
          ))}
          <button onClick={() => setSelectedTag('')} className="bg-gray-200 text-gray-600 py-1 px-3 rounded-full text-sm hover:bg-gray-300 transition duration-300">
            Mostrar Todos
          </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {filteredPosts.map((post)=>(
              <div key={post.id} className="border border-gray-300 rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 bg-white shadow-sm">
               <Link to={`/posts/${post.id}`}>
               <div className="p-4">
                <h2 className="text-2xl font-bold">{post.title}</h2>
                <p className="text-gray-700 my-2">{post.body}</p>
                <p className="mt-2 text-sm text-gray-500">
                  Etiquetas: {tags.join(', ')}
                </p>
              </div>
               </Link>

              </div>
            
            ))}
          </div>
      </div>
    </div>
  )
}
export default Home