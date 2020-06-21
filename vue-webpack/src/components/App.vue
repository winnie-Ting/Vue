<template>
  <div>
    <h1>单文件组件</h1>
  </div>
</template>

<script>
export default{
  data(){
    return{}
  },
  methods:{}
}
</script>

<!----- scoped 表示样式私有，防止其他组件的样式冲突--->
<style scoped>
h1{
  color:red;
}
</style>