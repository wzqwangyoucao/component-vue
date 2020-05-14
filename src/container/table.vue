<!--
 * @Author: your name
 * @Date: 2020-05-13 10:08:03
 * @LastEditTime: 2020-05-14 17:00:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /component-vue/src/container/switch.vue
 -->
<template>
	<div>
		你好世界
		<own-table :data="tableTable"></own-table>
    <pagenation :size="pageSize" :total="total" :current="currentPage"></pagenation>
	</div>
</template>

<script>
import pagenation from '@/components/pagenation.vue'
import OwnTable from '@/components/owntable.vue';
export default {
	components: { OwnTable, pagenation },
	data: () => {
		return {
			tableTable: [{
				date: '2016-05-02',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1518 弄'
			}, {
				date: '2016-05-04',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1517 弄'
			}, {
				date: '2016-05-01',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1519 弄'
			}, {
				date: '2016-05-03',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1516 弄'
      }],
      pageSize: 10,
      total: 100,
      currentPage: 1
		};
	}
};
</script>
