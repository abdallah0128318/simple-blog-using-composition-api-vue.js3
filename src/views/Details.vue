<template>
  <p v-if="error">{{error}}</p>
  <div v-else>
    <div v-if="post">
      <h3>{{post.title}}</h3>
      <p>{{post.body}}</p>
      <span v-for="tag in post.tags" :key="tag">
        #{{tag}}
      </span>
    </div>
    <div v-else>
      Post loading.....
    </div>
  </div>
  
</template>

<script>
import getPost from '../composable/getPost.js'
export default {
  props: ['id'],
  setup(props){
    const {post, error, load} = getPost('http://localhost:3000/posts/' + props.id)
    load()
    return {post, error}
  }
}

</script>

<style>

</style>