<template>
  <div>
    <AuiTable ref="table" :config="config" @dataLoaded="listDataLoaded">
      <div slot="headerButtons" style="margin-right: 10px;display: flex;" v-if="hasFlow">
        <el-button type="primary" size="medium" plain @click="createHandler" :loading="flowInitting">111</el-button>
        <el-button type="primary" size="medium" plain @click="flowHanlder">222</el-button>
      </div>
    </AuiTable>
    <ApplianceFlowCreate v-model="dialogFormVisible" :selectionData.sync="selectionData" :flowInitting.sync="flowInitting"/>
  </div>
</template>
