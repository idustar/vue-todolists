/**
* Created by dustar on 2017/4/18.
*/

<template>
    <div class="textBar list-complete-item">
      <el-col :span="20">{{value}}</el-col>
      <el-col :span="2">
        <a class="el-icon-close" @click="onClose"></a>
      </el-col>
    </div>
</template>

<script>
  export default {
    name: 'textBar',
    props: ['value'],
    method: {
      onClose () {
        alert('hi')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
