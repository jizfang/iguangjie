<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import storage from './storage'

export default {
  name: 'App',
  mounted(){
    //storage.setItem('a',1);
    //storage.setItem('user',{a:1});
    //storage.setItem('abc',{a:1},'user');
    //storage.clear('a')
    storage.clear('a','user')
  }
}
</script>

<style>
</style>
