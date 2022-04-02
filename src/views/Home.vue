<template>
  <div class="home">
    <h1>Home page</h1>
    <p v-if="error">{{error}}</p>
    <div v-else>
        <div v-if="posts.length">
        <PostList :posts='posts'/>
      </div>
      <div v-else>
        Posts Loading.....
      </div>
    </div>
    
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import getPosts from '../composable/getPosts.js'
export default {
  name: 'Home',
  components: {PostList},
  setup(){

    const {posts, error, load} = getPosts('http://localhost:3000/posts')
    load()
    return {posts, error}
  }
  
}
</script>
