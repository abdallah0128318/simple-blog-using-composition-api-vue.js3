import {ref } from '@vue/reactivity'
const getPost = (resource) =>{
    const post = ref(null)
    const error = ref(null)

    // fetch the data using fetch API and async/await pair 

    const load = async()=>{
      try {
        const response = await fetch(resource)
        if(!response.ok)
          throw new Error('No data available')
        post.value = await response.json()
        
      } catch (err) {
        error.value = err.message
      }
    }

    return {post, error, load}
}

export default getPost