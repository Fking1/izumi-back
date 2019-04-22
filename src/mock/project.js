const list = {
    data: {
        status: 0,
        message: 'success',
        ignore: true,
        total: 4,
        list: [
            {
                project_id: '1',
                eth_rate: '139',
                project_intro: 'dslkfnlfnalsff',
                project_name: 'Mesh',
                project_token_name: 'MESH',
                unit_price_in_wei: 30000000,
                unit_price_in_usd: 45000000
            },
            {
                project_id: '2',
                eth_rate: '139',
                project_intro: 'dslkfnlfnalsff',
                project_name: 'Zas',
                project_token_name: 'ZAS',
                unit_price_in_wei: 30000000,
                unit_price_in_usd: 45000000
            },
            {
                project_id: '3',
                eth_rate: '149',
                project_intro: 'dslkfnlfnalsff',
                project_name: 'btc',
                project_token_name: 'BTC',
                unit_price_in_wei: 30000000,
                unit_price_in_usd: 45000000
            },
            {
                project_id: '4',
                eth_rate: '149',
                project_intro: 'dslkfnlfnalsff',
                project_name: 'Eth',
                project_token_name: 'ETH',
                unit_price_in_wei: 30000000,
                unit_price_in_usd: 45000000
            }
        ]
    }
}

const remove = {
    data: {
        status: 0,
        message: "删除项目成功",
    }
}

const getProject = {
    data: {
        status: 0,
        ignore: true,
        projectInfo:{
            project_id: '2',
            eth_rate: '139',
            project_intro: 'dslkfnlfnalsff',
            project_name: 'Zas',
            project_token_name: 'ZAS',
            unit_price_in_wei: 30000000,
            unit_price_in_usd: 45000000
        }
    }
}

const getProjectByName = {
    data: {
        status: 0,
        ignore: true,
        list: [
            {
                project_id: '2',
                eth_rate: '139',
                project_intro: 'dslkfnlfnalsff',
                project_name: 'ABC',
                project_token_name: 'ZAS',
                unit_price_in_wei: 30000000,
                unit_price_in_usd: 45000000
            }
        ]
    }
}

const insert = {
    data: {
        status: 0,
        message: "新增项目成功"
    }
}

export default {
    list,
    remove,
    getProject,
    getProjectByName,
    insert
}