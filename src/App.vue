<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
export default {
  components:{
    Header,
    Footer,
  }
}
</script>
<template lang="">
    <Header/>
    <router-view></router-view>
    <Footer/>
</template>
<style lang="scss">
  @use 'assets/styles/generals.scss' as *;
</style>