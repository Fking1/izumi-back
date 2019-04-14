<template>
	<div class="ticket-list">
		<el-form :inline="true" :model="query" class="query-form">
			<el-form-item class="query-form-item">
				<el-input v-model="query.ticket_id" placeholder="工单ID"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button-group>
					<el-button type="primary" icon="search" @click="onSubmit">查询</el-button>
					<el-button type="primary" @click.native="handleForm(null,null)">新增</el-button>
				</el-button-group>
			</el-form-item>
		</el-form>

		<el-table v-loading="loading" :data="list" style="width: 100%;">
			<el-table-column label="工单号" prop="ticket_id" fixed></el-table-column>
			<el-table-column label="问题描述" prop="message" fixed></el-table-column>
			<el-table-column label="问题类别" prop="topic" with="300" :show-overflow-tooltip="true"></el-table-column>
			<el-table-column label="提交时间" prop="timestamp"></el-table-column>
			<el-table-column label="状态" prop="status">
				<template slot-scope="scope">
					<i class="el-icon-time" v-if="scope.row.status=='ongoing'"></i>
					<i class="el-icon-circle-check-outline" v-else></i>
				</template>
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
const formJson = {
	ticket_id: "",
	message: "",
	topic: "",
	timestamp: "",
	status: ""
};

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
					ticket_id: "21212",
					message: "dkajbdsdssa",
					topic: "0-2",
					timestamp: "2019-04-11",
					status: "ongoing"
				},
				{
					ticket_id: "21212",
					message: "dkajbdsdssa",
					topic: "0-2",
					timestamp: "2019-04-11",
					status: "closed"
				},
				{
					ticket_id: "21212",
					message: "dkajbdsdssa",
					topic: "0-2",
					timestamp: "2019-04-11",
					status: "ongoing"
				}
			],
			total: 3,
			loading: false,
			formMap: {
				add: "新增",
				edit: "编辑"
			},
			formVisible: false,
			formData: formJson,
			formRules: {
				site_name: [
					{
						required: true,
						message: "请输入广告位名称",
						trigger: "blur"
					}
				]
			},
			deleteLoading: false
		};
	},
	components: {},
	created() {},
	methods: {
		getList() {},
		onSubmit() {},
		handleCurrentChange() {},
		handleForm(index, row) {
			console.log(row);
		},
		formSubmit() {},
		handleDel(index, row) {
			console.log(row);
		}
	}
};
</script>

<style type="text/scss" lang="scss">
</style>