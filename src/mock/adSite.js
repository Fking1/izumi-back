const index = {
    data: {
        status: 0,
        ignore: true,
        total: 1,
        list: [
            {
                site_id: 1,
                site_name: "banner广告",
                describe: "支持android和ios",
                ad_ids: [4, 1],
                ads: [
                    {
                        ad_id: 4,
                        title: "fffxxxx",
                        describe: "vvv",
                        status: 0
                    },
                    {
                        ad_id: 1,
                        title: "阿范德萨",
                        describe: "撒地方士大夫",
                        status: 1
                    }
                ]
            },
            {
                site_id: 2,
                site_name: "banner广告",
                describe: "支持android和ios",
                ad_ids: [4, 1],
                ads: [
                    {
                        ad_id: 4,
                        title: "fffxxxx",
                        describe: "vvv",
                        status: 0
                    },
                    {
                        ad_id: 1,
                        title: "阿范德萨",
                        describe: "撒地方士大夫",
                        status: 1
                    }
                ]
            }
        ]
    }
};

const adList = {
    data: [
        {
            ad_id: 1,
            title: "阿范德萨",
            describe: "撒地方士大夫",
            status: 1
        },
        {
            ad_id: 6,
            title: "侧嗯嗯得到的",
            describe: "车次多的的",
            status: 1
        },
        {
            ad_id: 7,
            title: "hi额接口数据东方丽景",
            describe: "反倒是打发士大夫撒",
            status: 1
        }
    ]
};

const save = {
    data: {
        site_id: 2
    }
};

const edit = {
    data: {
        status: 0,
        message: "success"
    } 
};

const del = {
    data: {
        status: 0,
        message: "success"
    }
};

export default {
    index,
    adList,
    save,
    edit,
    del
};
