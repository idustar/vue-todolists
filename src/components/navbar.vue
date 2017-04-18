/**
* Created by dustar on 2017/4/10.
 */


<template>
  <div id="navbar">
    <el-menu theme="dark" :default-active="activeIndex"  class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-col :xs="0" :sm="1" :md="2" :lg="2">&nbsp;</el-col>
        <el-menu-item index="1" style="font-size: large"><a class="el-icon-menu"></a>{{title}}</el-menu-item>
    </el-menu>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        activeIndex: '1',
        title: 'TODO List'
      }
    },
    methods: {
      handleSelect: (key, keyPath) => console.log(key, keyPath)
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-menu-item-right {
    float: right;
  }

</style>
