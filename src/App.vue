<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      res:{}
    }
  },
  mounted(){
    //storage.setItem('a',1);
    //storage.setItem('user',{a:1});
    //storage.setItem('abc',{a:1},'user');
    //storage.clear('a')
    //storage.clear('a','user')

    this.axios.get('/user/login').then((res) => {
      this.res = res;
    })
  }
}
</script>

<style>
</style>
