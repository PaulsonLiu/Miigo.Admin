<template>
  <div class="siteMstr-container">
    <el-card shadow="hover" :body-style="{ paddingBottom: '0' }">
      <el-form :model="queryParams" ref="queryForm" :inline="true">
            <el-form-item label="关键字">
              <el-input v-model="queryParams.searchKey" clearable="" placeholder="请输入模糊查询关键字"/>
            </el-form-item>
          
            <el-form-item label="Id" v-if="showAdvanceQueryUI">
              <el-input v-model="queryParams.id" clearable="" placeholder="请输入Id"/>
            </el-form-item>
            <el-form-item label="名称" v-if="showAdvanceQueryUI">
              <el-input v-model="queryParams.name" clearable="" placeholder="请输入名称"/>
            </el-form-item>
            <el-form-item label="描述" v-if="showAdvanceQueryUI">
              <el-input v-model="queryParams.desc" clearable="" placeholder="请输入描述"/>
            </el-form-item>
            <el-form-item label="状态">
              <el-select clearable="" v-model="queryParams.status" placeholder="请选择状态">
                <el-option v-for="(item,index) in getEnumStatusData" :key="index" :value="item.value" :label="`[${item.value}] ${item.describe}`" />
                
              </el-select>
              
            </el-form-item>
            
            <el-form-item>
              <el-button-group>
                <el-button type="primary"  icon="ele-Search" @click="handleQuery" v-auth="'siteMstr:page'"> 查询 </el-button>
                <el-button icon="ele-Refresh" @click="() => queryParams = {}"> 重置 </el-button>
                <el-button icon="ele-ZoomIn" @click="changeAdvanceQueryUI" v-if="!showAdvanceQueryUI"> 高级 </el-button>
                <el-button icon="ele-ZoomOut" @click="changeAdvanceQueryUI" v-if="showAdvanceQueryUI"> 隐藏 </el-button>
              </el-button-group>
              
              <el-button-group style="margin-left:20px">
                <el-button type="primary" icon="ele-Plus" @click="openAddSiteMstr" v-auth="'siteMstr:add'"> 新增 </el-button>
              </el-button-group>
            </el-form-item>
            
      </el-form>
    </el-card>
    <el-card class="full-table" shadow="hover" style="margin-top: 8px">
      <el-table
				:data="tableData"
				style="width: 100%"
				v-loading="loading"
				tooltip-effect="light"
				row-key="id"
				border="">
        <el-table-column type="index" label="序号" width="55" align="center"/>
        <el-table-column prop="id" label="Id" width="140" show-overflow-tooltip="" />
        <el-table-column prop="name" label="名称" width="140" show-overflow-tooltip="" />
        <el-table-column prop="logo" label="图标" width="120" show-overflow-tooltip="">
          <template #default="scope">
            <el-image
            v-if="scope.row.logo"
            style="width: 60px; height: 60px"
            :src="scope.row.logo"
            :lazy="true"
            :hide-on-click-modal="true"
            :preview-src-list="[scope.row.logo]"
            :initial-index="0"
            fit="scale-down"
            preview-teleported=""/>
            
          </template>
          
        </el-table-column>
        <el-table-column prop="desc" label="描述" width="140" show-overflow-tooltip="" />
          <el-table-column prop="status" label="状态" width="140" show-overflow-tooltip="" >
            <template #default="scope">
              <el-tag>{{ getEnumDesc(scope.row.status, getEnumStatusData)}}</el-tag>
            </template>
          </el-table-column>
        <el-table-column prop="expiredTime" label="过期时间" width="140" show-overflow-tooltip="" />
        <el-table-column prop="url" label="Url地址" width="140" show-overflow-tooltip="" />
        <el-table-column label="操作" width="140" align="center" fixed="right" show-overflow-tooltip="" v-if="auth('siteMstr:edit') || auth('siteMstr:delete')">
          <template #default="scope">
            <el-button icon="ele-Edit" size="small" text="" type="primary" @click="openEditSiteMstr(scope.row)" v-auth="'siteMstr:edit'"> 编辑 </el-button>
            <el-button icon="ele-Delete" size="small" text="" type="primary" @click="delSiteMstr(scope.row)" v-auth="'siteMstr:delete'"> 删除 </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
				v-model:currentPage="tableParams.page"
				v-model:page-size="tableParams.pageSize"
				:total="tableParams.total"
				:page-sizes="[10, 20, 50, 100, 200, 500]"
				small=""
				background=""
				@size-change="handleSizeChange"
				@current-change="handleCurrentChange"
				layout="total, sizes, prev, pager, next, jumper"
	/>
      <editDialog
        ref="editDialogRef"
        :title="editSiteMstrTitle"
        @reloadTable="handleQuery"
      />
    </el-card>
  </div>
</template>

<script lang="ts" setup="" name="siteMstr">
  import { ref } from "vue";
  import { ElMessageBox, ElMessage } from "element-plus";
  import { auth } from '/@/utils/authFunction';
  import { getDictDataItem as di, getDictDataList as dl } from '/@/utils/dict-utils';
  //import { formatDate } from '/@/utils/formatTime';

  import editDialog from '/@/views/main/siteMstr/component/editDialog.vue'
  import { pageSiteMstr, deleteSiteMstr } from '/@/api/main/siteMstr';
	import { getAPI } from '/@/utils/axios-utils';
	import { SysEnumApi } from '/@/api-services/api';
  import commonFunction from '/@/utils/commonFunction';

  const getEnumStatusData = ref<any>([]);

	const { getEnumDesc } = commonFunction();
  const showAdvanceQueryUI = ref(false);
  const editDialogRef = ref();
  const loading = ref(false);
  const tableData = ref<any>([]);
  const queryParams = ref<any>({});
  const tableParams = ref({
    page: 1,
    pageSize: 10,
    total: 0,
  });
  const editSiteMstrTitle = ref("");

  // 改变高级查询的控件显示状态
  const changeAdvanceQueryUI = () => {
    showAdvanceQueryUI.value = !showAdvanceQueryUI.value;
  }
  

  // 查询操作
  const handleQuery = async () => {
    loading.value = true;
    var res = await pageSiteMstr(Object.assign(queryParams.value, tableParams.value));
    tableData.value = res.data.result?.items ?? [];
    tableParams.value.total = res.data.result?.total;
    loading.value = false;
    getEnumStatusData.value = (await getAPI(SysEnumApi).apiSysEnumEnumDataListGet('SiteStatusEnum')).data.result ?? [];
  };

  // 打开新增页面
  const openAddSiteMstr = () => {
    editSiteMstrTitle.value = '添加SiteMstr';
    editDialogRef.value.openDialog({});
  };

  // 打开编辑页面
  const openEditSiteMstr = (row: any) => {
    editSiteMstrTitle.value = '编辑SiteMstr';
    editDialogRef.value.openDialog(row);
  };

  // 删除
  const delSiteMstr = (row: any) => {
    ElMessageBox.confirm(`确定要删除吗?`, "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  })
  .then(async () => {
    await deleteSiteMstr(row);
    handleQuery();
    ElMessage.success("删除成功");
  })
  .catch(() => {});
  };

  // 改变页面容量
  const handleSizeChange = (val: number) => {
    tableParams.value.pageSize = val;
    handleQuery();
  };

  // 改变页码序号
  const handleCurrentChange = (val: number) => {
    tableParams.value.page = val;
    handleQuery();
  };

  handleQuery();
</script>
<style scoped>
:deep(.el-ipnut),
:deep(.el-select),
:deep(.el-input-number) {
	width: 100%;
}
</style>

