<template>
  <div class="my-table">
    <el-table
        :data="tableData"
        border
        highlight-current-row
    >
      <el-table-column prop="name" label="名字"></el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'pageFour',
  data() {
    return {
      tableData:[
        { name : 'Michael' , age : 22 },
        { name : 'KangKang' , age : 21 },
        { name : 'Jane' , age : 23 }
      ]
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.my-table{
  width: 40%;
  margin: 50px auto;
}
</style>
