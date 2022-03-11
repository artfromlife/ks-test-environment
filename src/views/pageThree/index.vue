<template>
  <div>
    <el-button @click="download">excel</el-button>
    <el-upload :on-change="handleChange" action="/">111</el-upload>
    <div ref="table">
    <div>
      <el-table :data="tableData" >
        <el-table-column label="1" prop="1"></el-table-column>
        <el-table-column label="2" prop="2"></el-table-column>
        <el-table-column label="3" prop="3"></el-table-column>
      </el-table>
    </div>
    </div>
  </div>
</template>

<script>
import * as XLSX from 'xlsx/xlsx.mjs'
import FileSaver from 'file-saver'
export default {
  name: 'pageThree',
  components: {},
  props: {},
  data() {
  return {
    tableData: [
      { 1 : 1 , 2 : 2 , 3 : 3 }
    ]
  }
  },
  computed: {},
  watch: {},
  created() {

  },
  mounted() {},
  updated() {},
  activated() {},
  deactivated() {},
  beforeDestroy() {},
  destroyed() {},
  methods: {
    handleChange(file){
    console.log(file.raw)
      const fileReader = new FileReader()
      fileReader.onload = (ev) => {
        try {
          const data = ev.target.result
          const workbook = XLSX.read(data, {
            type: 'binary' // 以字符编码的方式解析
          })
          const exlname = workbook.SheetNames[0] // 取第一张表
          const exl = XLSX.utils.sheet_to_json(workbook.Sheets[exlname]) // 生成json表格内容
          console.log(exl)
          // 将 JSON 数据挂到 data 里
          this.tableData = exl
          // document.getElementsByName('file')[0].value = '' // 根据自己需求，可重置上传value为空，允许重复上传同一文件
        } catch (e) {
          console.log('出错了：：')
          return false
        }
      }
      fileReader.readAsBinaryString(file.raw)
    },
    download(){
      console.log(this.$refs.table.$el)
      let xlsxParam = {raw: true};
//#taskTable为我们表格的ID
      let wb = XLSX.utils.table_to_book(this.$refs.table, xlsxParam);
//下面代码阐明了保存的类型为什么
      const wbout = XLSX.write(wb, {
        bookType: "xlsx",
        bookSST: true,
        type: "array"
      });
      try {
        FileSaver.saveAs(new Blob([wbout], {type: "application/octet-stream"}), 'file-name.xlsx');
//file-name为保存的文件的名称
      } catch (e) {
        if (typeof console !== "undefined") console.log(e, wbout);
      }

    }
  }
}
</script>

<style lang='scss' scoped>

</style>

