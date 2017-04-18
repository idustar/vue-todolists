<template>
  <div id="app">
    <navbar></navbar>

    <router-view></router-view>
  </div>
</template>

<script>
  import navbar from '@/components/navbar'
// import Sidebar from 'COMPONENT/Sidebar/'
// import Breadcrumb from 'COMPONENT/Breadcrumb'
  export default {
    components: { navbar }
  }
</script>

<style>
  html{
    width:100%;
    overflow-x:hidden;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    word-wrap: break-word;
  }
  body{
    margin: 0px;
  }
  .fade-transition {
    transition: opacity .1s ease;
  }
  .fade-enter, .fade-leave {
    opacity: 0;
  }
  .sidebar1{
    padding-bottom: 30px;
  }
</style>
