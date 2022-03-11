<template>
 <div class="container">
   <div class="search mt"></div>
   <div class="buttons mt"></div>
   <div class="auto-fill mt">
     <el-table
         :data="tableData"
         border
         :cell-class-name="cellClassName"
         height="1px"
         v-el-height-adaptive-table="{bottomOffset:60}"
     >
       <el-table-column prop="name" label="名字"></el-table-column>
       <el-table-column prop="age" label="年龄"></el-table-column>
       <el-table-column prop="sex" label="性别"></el-table-column>
     </el-table>
     <el-pagination></el-pagination>
   </div>

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
  created() {
    for(let i = 0 ; i < 2 ; i++)
      this.tableData.push(...this.tableData)
  },
  methods: {
    cellClassName({row, column, rowIndex, columnIndex}){
      if(rowIndex % 2  && columnIndex % 2){
        return 'red'
      }

    }
  }
}
</script>

<style lang="scss">
.container{
  display: flex;
  flex-direction: column;
  .search{
    width: 100%;
    height: 80px;
    background-color: red;
  }
  .buttons{
    width: 100%;
    height: 40px;
    background-color: green;
  }
}
.auto-fill{
  flex: 1;
}
.mt{
  margin-top: 20px;
}
.red{
  color: red;
}
</style>
