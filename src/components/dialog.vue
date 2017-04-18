/**
* Created by dustar on 2017/4/18.
*/

<template>
    <div class="dialog container">
      <el-row>
        <el-col class="bg-blue" :span="12" :offset="6">
          <el-autocomplete class='inline-input' v-model="text" size="large" placeholder="请输入内容"
                    @keyup.enter.native="onEnter"
                    :fetch-suggestions="querySearch"
                    @select="handleSelect"
                           autofocus='true'
                           icon="plus"
          >hi</el-autocomplete>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12" :offset="6">
          <text-list ref="textlist"></text-list>
        </el-col>
      </el-row>

    </div>
</template>

<script>
  import TextList from './textList'
  export default {
    components: {TextList},
    name: 'dialog',
    data () {
      return {
        text: ''
      }
    },
    methods: {
      onEnter (el) {
        if (this.text === '') {
          this.$message({
            message: '请输入内容。',
            type: 'warning',
            date: ''
          })
        } else {
          let date = Date().toLocaleString()
          this.$refs.textlist.texts.push({isComplete: false, value: this.text, date: date})
          this.text = ''
        }
      },
      querySearch (queryString, cb) {
        let texts = this.$refs.textlist.texts
        let results = queryString ? texts.filter(this.createFilter(queryString)) : texts
        cb(results)
      },
      createFilter (queryString) {
        return (texts) => {
          return (texts.value.indexOf(queryString.toLowerCase()) === 0)
        }
      },
      handleSelect (item) {
        this.onEnter(this.$el)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container{
    margin: 20px;
  }
  .inline-input{
    width:100%;
  }
  .bg-blue {
    border-radius: 15px 15px 5px 5px;
    padding: 20px 0px 0px 0px;
    background: #58B7FF;
  }
</style>
