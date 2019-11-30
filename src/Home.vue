<template>
  <div class="home">
    <h1>工具箱</h1>
    <ul class="tool_list">
      <li><h2 @click="stuff">老黄历查询</h2></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
    }
  },
  methods: {
    stuff(){
      this.$router.push('/stuff')
    }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.tool_list{
  width: 30%;
  padding: 20px;
  margin: 0 auto;
  text-align: left;
  border: 1px dashed darkgoldenrod;
  li:hover{
    color: aquamarine;
    cursor:pointer;
  }
}
</style>
