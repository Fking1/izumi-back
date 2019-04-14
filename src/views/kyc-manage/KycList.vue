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
			<el-table-column label="邮箱" prop="email_address" fixed></el-table-column>
			<el-table-column label="护照号" prop="passport_id" fixed></el-table-column>
			<el-table-column label="手机号码" prop="phone_number" with="300" :show-overflow-tooltip="true"></el-table-column>
			<el-table-column label="metamask地址" prop="metamask_address"></el-table-column>
			<el-table-column label="状态" prop="status">
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
					email_address: "455039690@qq.com",
					passport_id: "E38984923923",
					phone_number: "17772712727",
					metamask_address: "jcakjdjlkasdasdkasd",
					status: "ongoing"
				},
				{
					email_address: "455039690@qq.com",
					passport_id: "E88828288828",
					phone_number: "13728282828",
					metamask_address: "dajdhkjashdkaskd",
					status: "ongoing"
				},
				{
					email_address: "455039690@qq.com",
					passport_id: "P438832899393",
					phone_number: "15626262626",
					metamask_address: "dajsdaksdlkasjdk",
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