<template>
 <div class="table-container">
   <el-table
       :data="tableData"
       border
       :cell-class-name="cellClassName"
   >
     <el-table-column prop="name" label="名字"></el-table-column>
     <el-table-column prop="age" label="年龄"></el-table-column>
     <el-table-column prop="sex" label="性别"></el-table-column>
   </el-table>
 </div>
</template>

<script>
export default {
  name: 'pageFour',
  data() {
    return {
      tableData:[
        { name : 'Michael' , age : 23, sex:'male' },
        { name : 'Jane' , age : 22 , sex:'female'},
        { name : 'KangKang' , age : 21 , sex:'male'},
      ]
    }
  },
  methods: {
    cellClassName({row, column, rowIndex, columnIndex}){
      console.log({row, column, rowIndex, columnIndex})
      if(rowIndex % 2  && columnIndex % 2){
        return 'red'
      }

    }
  }
}
</script>

<style lang="scss">
.table-container{
  width: 30%;
  margin: 50px auto;
}
.red{
  color: red;
}
</style>
