<template>
	<div class="ticket-list">
		<el-form :inline="true" :model="query" class="query-form">
			<el-form-item class="query-form-item">
				<el-input v-model="query.email_address" placeholder="邮箱地址"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button-group>
					<el-button type="primary" icon="search" @click="onSubmit">查询</el-button>
					<el-button type="primary" @click.native="handleForm(null,null)">新增</el-button>
				</el-button-group>
			</el-form-item>
		</el-form>

		<el-table v-loading="loading" :data="list" style="width: 100%;">
			<el-table-column label="流水号" prop="id" fixed></el-table-column>
			<el-table-column label="用户ID" prop="user_id" fixed></el-table-column>
			<el-table-column label="交易方向" prop="direction" with="300" :show-overflow-tooltip="true"></el-table-column>
			<el-table-column label="交易通道" prop="transaction_type"></el-table-column>
			<el-table-column label="明细" prop="detail">
				<!-- <template slot-scope="scope">
					<i class="el-icon-time" v-if="scope.row.status=='ongoing'"></i>
					<i class="el-icon-circle-check-outline" v-else></i>
				</template>-->
			</el-table-column>
			<el-table-column label="操作" fixed="right">
				<template slot-scope="scope">
					<el-button type="text" size="small" @click.native="handleForm(scope.$index, scope.row)">编辑</el-button>
					<el-button type="text" size="small" @click.native="handleDel(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>

		<el-pagination
			:page-size="query.limit"
			@current-change="handleCurrentChange"
			layout="prev, pager, next"
			:total="total"
		></el-pagination>
	</div>
</template>

<script>
export default {
	data() {
		return {
			query: {
				ticket_id: "",
				page: 1,
				limit: 20
			},
			list: [
				{
					id: "10001",
					user_id: "38984923923",
					direction: "1",
					transaction_type: "1",
					detail: "详情"
				},
				{
					id: "10001",
					user_id: "38984923923",
					direction: "1",
					transaction_type: "1",
					detail: "详情"
				},
				{
					id: "10001",
					user_id: "38984923923",
					direction: "1",
					transaction_type: "1",
					detail: "详情"
				},
			],
			total: 3,
			loading: false,
			formMap: {
				add: "新增",
				edit: "编辑"
			},
			formVisible: false,
			deleteLoading: false
		};
	},
	components: {},
	created() {},
	methods: {
		onSubmit() {},
		handleCurrentChange() {},
		getList() {},
		handleForm(index, row) {
			// console.log(row);
		},
		formSubmit() {},
		handleDel(index, row) {
			// console.log(row);
		}
	}
};
</script>

<style type="text/scss" lang="scss">
</style>