<template>
  <div class="hello">
    <input type="button" value="按钮" @click="show" class="anniu">
    <btn></btn>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
import btn from "./mui"
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    show() {
      Toast({
        message: '提示',
        position: 'bottom',
        duration: 5000
      })
    }
  },
  components:{
    btn
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .anniu{
    position: relative;
    top:200px;
    margin-bottom:200px;
  }
</style>
