<template>
  <el-container>
    <el-aside>
      <el-menu>
        <el-menu-item v-for="{ menuName ,menuRouteName} in menuConfig" :key="menuRouteName"
                      @click="e=>handleMenuClick(e,menuRouteName)">{{ menuName }}
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        {{headerContent}}
      </el-header>
      <el-main>
        <transition>
          <router-view/>
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      headerContent: 'T E S T',
      menuConfig: [
        {menuName: '1', menuRouteName: 'page1'},
        {menuName: '2', menuRouteName: 'page2'},
        {menuName: '3', menuRouteName: 'page3'},
        {menuName: '4', menuRouteName: 'page4'},
        {menuName: '5', menuRouteName: 'page5'},
        {menuName: '6', menuRouteName: 'page6'},
      ]
    }
  },
  methods: {
    handleMenuClick(e, menuRouteName) {
        if(this.$route.path.includes(menuRouteName)) return
        this.$router.push(menuRouteName)

    }
  }
}
</script>
<style lang="scss" scoped>
.el-container {
  height: 100%;
}

.el-menu {
  height: 100%;
  background-image: linear-gradient(#FEAC5E, #C779D0, #4BC0C8);
}
.el-header{
  background-image: linear-gradient(to right,#FEAC5E, #C779D0, #4BC0C8);
}
.el-main {
  background-color: #bdc3c7;
  background-image:  linear-gradient(#ffffff,#bdc3c7) ;
}
</style>
