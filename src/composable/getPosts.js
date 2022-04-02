import {ref } from '@vue/reactivity'
const getPosts = (resource) =>{
    const posts = ref([])
    const error = ref(null)

    // fetch the data using fetch API and async/await pair 

    const load = async()=>{
      try {
        const response = await fetch(resource)
        if(!response.ok)
          throw new Error('No data available')
        posts.value = await response.json()
        
      } catch (err) {
        error.value = err.message
      }
    }

    return {posts, error, load}
}

export default getPosts