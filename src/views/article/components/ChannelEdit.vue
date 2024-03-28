<!--添加 和 编辑，可以共用一个弹层，所以可以将弹层封装成一个组件-->
<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { artAddChannelService, artEditChannelService } from '@/api/article.js'
const dialogVisible = ref(false)

const fromModel = ref({
  cate_name: '',
  cate_alias: ''
})
const rules = {
  cate_name: [
    { required: true, message: '请输入分类名称', trigger: 'blur' },
    {
      pattern: /^\S{1,10}$/,
      message: '分类名必须是1-10位的非空字符',
      trigger: 'blur'
    }
  ],
  cate_alias: [
    { required: true, message: '请输入分类别名', trigger: 'blur' },
    {
      pattern: /^[a-zA-Z0-9]{1,15}$/,
      message: '分类别名必须是1-15位的字母数字',
      trigger: 'blur'
    }
  ]
}
const fromRef = ref()
const emit = defineEmits(['success'])
const onSubmit = async () => {
  await fromRef.value.validate()
  fromModel.value.id
    ? await artEditChannelService(fromModel.value)
    : await artAddChannelService(fromModel.value)
  ElMessage({
    type: 'success',
    message: fromModel.value.id ? '编辑成功' : '添加成功'
  })
  dialogVisible.value = false
  emit('success')
}
const open = (row) => {
  console.log(row)
  dialogVisible.value = true
  fromModel.value = { ...row }
}
defineExpose({
  open
})
</script>

<template>
  <el-dialog
    v-model="dialogVisible"
    :title="fromModel.id ? '修改分类' : '添加分类'"
    width="30%"
  >
    <el-form
      :model="fromModel"
      :rules="rules"
      ref="fromRef"
      label-width="100px"
      style="padding-right: 30px"
    >
      <el-form-item label="分类名称" prop="cate_alias">
        <el-input
          v-model="fromModel.cate_alias"
          placeholder="请输入分类名称"
        ></el-input>
      </el-form-item>
      <el-form-item label="分类别名" prop="cate_name">
        <el-input
          v-model="fromModel.cate_name"
          placeholder="请输入分类别名"
        ></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="onSubmit"> 确认 </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped></style>
