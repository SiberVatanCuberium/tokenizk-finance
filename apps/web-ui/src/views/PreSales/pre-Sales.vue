<template>
  <el-row class="pre-Sales">

    <el-col :span="24">

      <el-row class="row-bg" justify="center">
        <el-col :span="18">
          <h1>Current Presales</h1>
        </el-col>
      </el-row>

      <el-row style="margin:50px auto ;" justify="center">

        <el-col :span="8"></el-col>

        <el-col :span="6">
          <router-link to="/pre-sales">All launchpads</router-link>
        </el-col>

        <el-col :span="6">
          <router-link to="/pre-sales/my-contributions">My Contributions</router-link>
        </el-col>

        <el-col :span="4"></el-col>

      </el-row>

      <!-- 三级路由出口组件 -->
      <el-row>
        <el-col :span="24">
          <router-view />
        </el-col>
      </el-row>

    </el-col>
  </el-row>
</template>

<style lang="less" scoped>
.pre-Sales {
  width: 100%;
  padding-top: 100px;
}

.el-row {
  margin-bottom: 20px;
}

.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>