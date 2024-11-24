<script setup lang="tsx">
const name = ref('John')
const changeName = () => {
  if (name.value === 'John') {
    name.value = 'Jane'
  } else {
    name.value = 'John'
  }
}
const MyButton = ({ msg }: { msg: number }) => (
  <button onClick={changeName} class="btn-primary">
    Hello {name.value} - {msg}
  </button>
)

const msg = ref(0)
const showMessage = () => {
  ElMessage.success('Hello World')
}
</script>

<template>
  <main class="p-4">
    <h1 class="mb-4 text-2xl font-bold">Home</h1>
    <CompDemo />
    <div class="flex items-center space-x-2">
      <el-button type="primary" @click="showMessage">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
      <el-button>默认按钮</el-button>
      <el-button type="primary" @click="msg++">change msg</el-button>
      <CompDemo />
      <MyButton :msg />
    </div>
    <ButtonDemo />
  </main>
</template>

<style></style>
