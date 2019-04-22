<template>
	<div class="ticket-list">
		<el-form :inline="true" :model="query" class="query-form">
			<el-form-item class="query-form-item">
				<el-input v-model="query.project_name" placeholder="项目名"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button-group>
					<el-button type="primary" icon="search" @click="onSubmit">查询</el-button>
					<el-button type="primary" @click.native="handleInsert">新增</el-button>
				</el-button-group>
			</el-form-item>
		</el-form>

		<el-table v-loading="loading" :data="list" style="width: 100%;" stripe>
			<el-table-column label="project_id" prop="project_id" fixed></el-table-column>
			<el-table-column label="project_name" prop="project_name" fixed></el-table-column>
			<el-table-column label="eth_rate" prop="eth_rate" with="300"></el-table-column>
			<el-table-column label="project_token_name" prop="project_token_name" with="300"></el-table-column>
			<el-table-column label="unit_price_in_wei" prop="unit_price_in_wei"></el-table-column>
			<el-table-column label="unit_price_in_usd" prop="unit_price_in_usd"></el-table-column>
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
import { getProject, getList, removeProject, getProjectByName, insert} from "@/api/project/project.js";

export default {
	data() {
		return {
			query: {
				project_name: '',
				page: 1,
				pageSize: 20
			},
			list: [],
			total: 3,
			loading: false,
			formMap: {
				add: "新增",
				edit: "编辑"
            },
            projectInfo: {},
			formVisible: false,
			deleteLoading: false
		};
	},
	components: {},
	created() {
        this.getInit()
    },
	methods: {
		onSubmit() {
            getProjectByName(this.query.project_name)
            .then(res => {
                console.log(res)
                this.list = res.data.list
            })
            .catch(err => {
                console.log(err)
            })
        },
		handleCurrentChange() {},
		getInit() {
			getList()
				.then(res => {
					this.list = res.data.list;
				})
				.catch(err => {
					console.log(err);
				});
		},
		handleForm(index, row) {
            console.log(index)
			getProject(row.project_id)
				.then(res => {
                    console.log(res);
				})
				.catch(err => {
					console.log(err);
				});
		},
		handleInsert() {
            insert(this.projectInfo)
            .then(res => {

            })
            .catch(err => {

            })
        },
		handleDel(index, row) {
			removeProject(row.project_id)
				.then(res => {
					console.log(res);
				})
				.catch(err => {
					console.log(error);
				});
		}
	}
};
</script>

<style type="text/scss" lang="scss">
</style>