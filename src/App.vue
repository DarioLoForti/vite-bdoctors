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
    <Footer/>
    <router-view></router-view>
</template>
<style lang="scss">
  @use './styles/general.scss' as *;
</style>