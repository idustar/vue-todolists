/**
* Created by dustar on 2017/4/18.
*/

<template>
    <div class="textList">
      <transition-group name="list-complete" tag="p">
        <div v-for="(value, index) in texts" v-bind:key="value.value" class="textlist list-complete-item"
             :class="{activelist: value.isComplete}"
             draggable="true"
             @dragstart="drag($event, index)" @drop="drop($event, index)" @dragover="allowDrop($event, index)"
             @dragstart.meta="isCopy = true"
             @drop.meta="dropCopy($event, index)">
          <el-row>
            <el-col :span="1">
              <a class="el-icon-circle-check" :class="{active: value.isComplete}" @click="changeActive(index)"></a>
            </el-col>
            <el-col v-if="current===index && !isDetail" :span="19"><input v-model="currentText"
                                                             @keyup.enter="onEnter"
                                                             autofocus="true"
                                                             @blur="onBlur"
                                                             ></input></el-col>
            <el-col v-else :span="19">
              <div @click="showDetail(index)" @dblclick="onEdit(index)">{{value.value}}</div>
              <div v-if="current===index && !isOnDrug" class="date">{{value.date}}</div>
            </el-col>
              <el-col :span="4">
                <a class="el-icon-close" @click="onClose(index)"></a>
                <a class="el-icon-edit" @click="onEdit(index)"></a>
              </el-col>
          </el-row>
        </div>
      </transition-group>
    </div>
</template>


<script>
  import TextBar from './textBar'

  export default {
    components: {TextBar},
    name: 'textList',
    data () {
      return {
        current: -1,
        dom: '#',
        isDetail: true,
        isOnDrug: false,
        isCopy: false,
        currentText: '',
        texts: [
          {isComplete: true, value: '这是一条已完成的项目。', date: Date().toLocaleString()},
          {isComplete: false, value: '这是一条未完成的项目。', date: Date().toLocaleString()},
          {isComplete: false, value: 'This is an English calender.', date: Date().toLocaleString()},
          {isComplete: false, value: 'Enter 提交项目 | 双击 编辑项目 | 拖动 移动项目 | ⌘+拖动 复制项目', date: Date().toLocaleString()}
        ]
      }
    },
    methods: {
      onClose (id) {
        this.texts.splice(id, 1)
      },
      onEdit (id) {
        this.current = id
        this.isDetail = false
        this.currentText = this.texts[id].value
      },
      changeActive (id) {
        this.texts[id].isComplete = !this.texts[id].isComplete
      },
      showDetail (id) {
        if (this.current !== id) {
          this.current = id
          this.isDetail = true
        } else {
          this.current = -1
        }
      },
      onEnter () {
        if (this.text === '') {
          this.$message({
            message: '请输入内容。',
            type: 'warning'
          })
        } else {
          this.texts[this.current].value = this.currentText
          this.current = -1
          this.isDetail = true
        }
      },
      onBlur () {
        this.current = -1
        this.isDetail = false
      },
      drag (event, id) {
        console.log('dragStart: ' + id)
        this.current = id
        this.isOnDrug = true
      },
      drop (event, id) {
        if (!this.isCopy) {
          event.preventDefault()
          console.log('drag: ' + this.current + ' => ' + id)
          if (this.current > id) {
            this.texts.splice(id, 0, this.texts[this.current])
            this.texts.splice(this.current + 1, 1)
          } else if (this.current < id) {
            this.texts.splice(id + 1, 0, this.texts[this.current])
            this.texts.splice(this.current, 1)
          }
          this.current = -1
          this.isOnDrug = false
        }
        setTimeout(() => { this.isCopy = false }, 100)
      },
      dropCopy (event, id) {
        event.preventDefault()
        console.log('dragCopy: ' + this.current + ' => ' + id)
        this.texts.splice(id, 0, this.texts[this.current])
        this.texts[id].isComplete = false
        this.texts[id].date = Date().toLocaleString()
        this.isOnDrug = false
        this.isCopy = false
      },
      allowDrop (event, id) {
        event.preventDefault()
        this.isOnDrug = false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .textlist{
    padding: 0;
    margin: 0;
  }
  .el-icon-close {
     float: right;
   }

  .el-icon-edit {
    float: right;
    padding-right: 5px;
  }
  .el-icon-circle-check {
    color: #D3DCE6;
  }
  .el-icon-circle-check:hover {
    color: #F7BA2A;
  }
  .el-icon-close:hover {
    color: #FF4949;
  }
  .el-icon-edit:hover{
    color: #13CE66;
  }
  .active {
    color: #13CE66;
  }
  input{
    border:0;
    background: rgba(0,0,0,0);
    color: #F7BA2A;
    font-size:large;
    word-wrap:break-word;
    width: 100%;
    padding: 0;
    margin:0;
  }
  .date {
    font-size: 13px;
    color: #99A9BF;
    padding-top: 5px;
  }
  .list-complete-item {
    transition: all 0.5s;
    margin:5px 0px 5px 0px;
    background: #324057;
    color: #ffffff;
    padding:10px 15px 10px 20px;
    border-radius: 5px;
  }
  .list-complete-enter, .list-complete-leave-active {
    opacity: 0;
    transform: translateX(-50%);
    width: 50%;
  }
  .activelist {
    background: #1D8CE0;
  }

  .list-complete-item:hover
  {
    background-color:#1F2D3D;
    font-size: large;
  }

</style>
