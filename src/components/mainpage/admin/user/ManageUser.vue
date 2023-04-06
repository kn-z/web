<template>
    <div class="p-0 p-lg-4">
        <div class="ant-spin-nested-loading">
            <div class="ant-spin-container">
                <div :class="isLoading ? 'block block-bottom block-mode-loading':'block border-bottom'">
                    <div class="bg-white">
                        <div class="v2board-table-action" style="padding: 15px;">
                            <div class="ant-btn-group">
                                <button @click="filter" type="button" class="ant-btn"
                                        ant-click-animating-without-extra-node="false"><i
                                        aria-label="图标: filter" class="anticon anticon-filter">
                                    <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="filter"
                                         width="1em" height="1em"
                                         fill="currentColor" aria-hidden="true">
                                        <path
                                                d="M880.1 154H143.9c-24.5 0-39.8 26.7-27.5 48L349 597.4V838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V597.4L907.7 202c12.2-21.3-3.1-48-27.6-48zM603.4 798H420.6V642h182.9v156zm9.6-236.6l-9.5 16.6h-183l-9.5-16.6L212.7 226h598.6L613 561.4z"></path>
                                    </svg>
                                </i><span> 过滤器</span></button>
                            </div>
                            <button @click="add" type="button" class="ant-btn ml-2"><i aria-label="图标: user-add"
                                                                                       class="anticon anticon-user-add">
                                <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="user-add" width="1em"
                                     height="1em"
                                     fill="currentColor" aria-hidden="true">
                                    <path
                                            d="M678.3 642.4c24.2-13 51.9-20.4 81.4-20.4h.1c3 0 4.4-3.6 2.2-5.6a371.67 371.67 0 0 0-103.7-65.8c-.4-.2-.8-.3-1.2-.5C719.2 505 759.6 431.7 759.6 349c0-137-110.8-248-247.5-248S264.7 212 264.7 349c0 82.7 40.4 156 102.6 201.1-.4.2-.8.3-1.2.5-44.7 18.9-84.8 46-119.3 80.6a373.42 373.42 0 0 0-80.4 119.5A373.6 373.6 0 0 0 137 888.8a8 8 0 0 0 8 8.2h59.9c4.3 0 7.9-3.5 8-7.8 2-77.2 32.9-149.5 87.6-204.3C357 628.2 432.2 597 512.2 597c56.7 0 111.1 15.7 158 45.1a8.1 8.1 0 0 0 8.1.3zM512.2 521c-45.8 0-88.9-17.9-121.4-50.4A171.2 171.2 0 0 1 340.5 349c0-45.9 17.9-89.1 50.3-121.6S466.3 177 512.2 177s88.9 17.9 121.4 50.4A171.2 171.2 0 0 1 683.9 349c0 45.9-17.9 89.1-50.3 121.6C601.1 503.1 558 521 512.2 521zM880 759h-84v-84c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v84h-84c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h84v84c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-84h84c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"></path>
                                </svg>
                            </i></button>
                        </div>
                        <div class="ant-table-wrapper v2board-table">
                            <div class="ant-spin-nested-loading">
                                <div class="ant-spin-container">
                                    <div class="ant-table ant-table-default ant-table-scroll-position-left">
                                        <div class="ant-table-content">
                                            <div class="ant-table-scroll">
                                                <div tabindex="-1" class="ant-table-body" style="overflow-x: scroll;">
                                                    <table class="ant-table-fixed" style="width: 900px;">
                                                        <colgroup>
                                                            <col>
                                                            <col>
                                                            <col>
                                                            <col>
                                                            <col>
                                                            <col>
                                                            <col>
                                                            <col>
                                                            <col>
                                                            <col>
                                                            <col>
                                                            <col>
                                                        </colgroup>
                                                        <thead class="ant-table-thead">
                                                        <tr>
                                                            <th @click="sortByKey('id')"
                                                                class="ant-table-column-has-actions ant-table-column-has-sorters"><span
                                                                    class="ant-table-header-column"><div
                                                                    class="ant-table-column-sorters"><span
                                                                    class="ant-table-column-title">ID</span><span
                                                                    class="ant-table-column-sorter"><div
                                                                    title="排序"
                                                                    class="ant-table-column-sorter-inner ant-table-column-sorter-inner-full"><i
                                                                    aria-label="图标: caret-up"
                                                                    :class="(sort.key==='id' && sort.type==='desc') ? 'anticon anticon-caret-up ant-table-column-sorter-up on' : 'anticon anticon-caret-up ant-table-column-sorter-up off'"><svg
                                                                    viewBox="0 0 1024 1024" focusable="false" class=""
                                                                    data-icon="caret-up" width="1em"
                                                                    height="1em" fill="currentColor" aria-hidden="true"><path
                                                                    d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"></path></svg></i><i
                                                                    aria-label="图标: caret-down"
                                                                    :class="(sort.key==='id' && sort.type==='asc') ? 'anticon anticon-caret-up ant-table-column-sorter-up on' : 'anticon anticon-caret-up ant-table-column-sorter-up off'"><svg
                                                                    viewBox="0 0 1024 1024" focusable="false" class=""
                                                                    data-icon="caret-down" width="1em"
                                                                    height="1em" fill="currentColor" aria-hidden="true"><path
                                                                    d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path></svg></i></div></span></div></span>
                                                            </th>

                                                            <th class=""><span class="ant-table-header-column"><div><span
                                                                    class="ant-table-column-title">邮箱</span><span
                                                                    class="ant-table-column-sorter"></span></div></span>
                                                            </th>
                                                            <th class="ant-table-column-has-actions ant-table-column-has-sorters"><span
                                                                    class="ant-table-header-column"><div
                                                                    class="ant-table-column-sorters"><span
                                                                    class="ant-table-column-title">状态</span><span
                                                                    class="ant-table-column-sorter"><div
                                                                    title="排序"
                                                                    class="ant-table-column-sorter-inner ant-table-column-sorter-inner-full"><i
                                                                    aria-label="图标: caret-up"
                                                                    class="anticon anticon-caret-up ant-table-column-sorter-up off"><svg
                                                                    viewBox="0 0 1024 1024" focusable="false" class=""
                                                                    data-icon="caret-up" width="1em"
                                                                    height="1em" fill="currentColor" aria-hidden="true"><path
                                                                    d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"></path></svg></i><i
                                                                    aria-label="图标: caret-down"
                                                                    class="anticon anticon-caret-down ant-table-column-sorter-down off"><svg
                                                                    viewBox="0 0 1024 1024" focusable="false" class=""
                                                                    data-icon="caret-down" width="1em"
                                                                    height="1em" fill="currentColor" aria-hidden="true"><path
                                                                    d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path></svg></i></div></span></div></span>
                                                            </th>
                                                            <th @click="sortByKey('role')"
                                                                class="ant-table-column-has-actions ant-table-column-has-sorters"><span
                                                                    class="ant-table-header-column"><div
                                                                    class="ant-table-column-sorters"><span
                                                                    class="ant-table-column-title">权限组</span><span
                                                                    class="ant-table-column-sorter"><div
                                                                    title="排序"
                                                                    class="ant-table-column-sorter-inner ant-table-column-sorter-inner-full"><i
                                                                    aria-label="图标: caret-up"
                                                                    :class="(sort.key==='role' && sort.type==='desc') ? 'anticon anticon-caret-up ant-table-column-sorter-up on' : 'anticon anticon-caret-up ant-table-column-sorter-up off'"><svg
                                                                    viewBox="0 0 1024 1024" focusable="false" class=""
                                                                    data-icon="caret-up" width="1em"
                                                                    height="1em" fill="currentColor" aria-hidden="true"><path
                                                                    d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"></path></svg></i><i
                                                                    aria-label="图标: caret-down"
                                                                    :class="(sort.key==='role' && sort.type==='asc') ? 'anticon anticon-caret-up ant-table-column-sorter-up on' : 'anticon anticon-caret-up ant-table-column-sorter-up off'"><svg
                                                                    viewBox="0 0 1024 1024" focusable="false" class=""
                                                                    data-icon="caret-down" width="1em"
                                                                    height="1em" fill="currentColor" aria-hidden="true"><path
                                                                    d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path></svg></i></div></span></div></span>
                                                            </th>
                                                            <th @click="sortByKey('created_at')"
                                                                class="ant-table-column-has-actions ant-table-column-has-sorters"><span
                                                                    class="ant-table-header-column"><div
                                                                    class="ant-table-column-sorters"><span
                                                                    class="ant-table-column-title">加入时间</span><span
                                                                    class="ant-table-column-sorter"><div
                                                                    title="排序"
                                                                    class="ant-table-column-sorter-inner ant-table-column-sorter-inner-full"><i
                                                                    aria-label="图标: caret-up"
                                                                    :class="(sort.key==='created_at' && sort.type==='desc') ? 'anticon anticon-caret-up ant-table-column-sorter-up on' : 'anticon anticon-caret-up ant-table-column-sorter-up off'"><svg
                                                                    viewBox="0 0 1024 1024" focusable="false" class=""
                                                                    data-icon="caret-up" width="1em"
                                                                    height="1em" fill="currentColor" aria-hidden="true"><path
                                                                    d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"></path></svg></i><i
                                                                    aria-label="图标: caret-down"
                                                                    :class="(sort.key==='created_at' && sort.type==='asc') ? 'anticon anticon-caret-up ant-table-column-sorter-up on' : 'anticon anticon-caret-up ant-table-column-sorter-up off'"><svg
                                                                    viewBox="0 0 1024 1024" focusable="false" class=""
                                                                    data-icon="caret-down" width="1em"
                                                                    height="1em" fill="currentColor" aria-hidden="true"><path
                                                                    d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path></svg></i></div></span></div></span>
                                                            </th>
                                                            <th class="ant-table-fixed-columns-in-body ant-table-align-right ant-table-row-cell-last"
                                                                style="text-align: right;"><span
                                                                    class="ant-table-header-column"><div><span
                                                                    class="ant-table-column-title">操作</span><span
                                                                    class="ant-table-column-sorter"></span></div></span>
                                                            </th>
                                                        </tr>
                                                        </thead>
                                                        <tbody class="ant-table-tbody">
                                                        <AdminUserItem
                                                                v-for="user in this.data"
                                                                :key="user.id"
                                                                :user="user"
                                                        />
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div class="ant-table-placeholder" v-show="!data">
                                                    <div class="ant-table-placeholder" v-show="!data">
                                                        <div class="ant-empty ant-empty-normal">
                                                            <div class="ant-empty-image">
                                                                <svg width="64" height="41" viewBox="0 0 64 41"
                                                                     xmlns="http://www.w3.org/2000/svg">
                                                                    <g transform="translate(0 1)" fill="none"
                                                                       fill-rule="evenodd">
                                                                        <ellipse fill="#F5F5F5" cx="32" cy="33" rx="32"
                                                                                 ry="7"></ellipse>
                                                                        <g fill-rule="nonzero" stroke="#D9D9D9">
                                                                            <path
                                                                                    d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"></path>
                                                                            <path
                                                                                    d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z"
                                                                                    fill="#FAFAFA"></path>
                                                                        </g>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                            <p class="ant-empty-description">暂无数据</p></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="ant-table-fixed-right">
                                                <div class="ant-table-body-outer">
                                                    <div class="ant-table-body-inner">
                                                        <table class="ant-table-fixed">
                                                            <colgroup>
                                                                <col>
                                                            </colgroup>
                                                            <thead class="ant-table-thead">
                                                            <tr style="height: 54px;">
                                                                <th class="ant-table-align-right ant-table-row-cell-last"
                                                                    style="text-align: right;">
                                  <span class="ant-table-header-column"><div><span
                                          class="ant-table-column-title text-center">操作</span><span
                                          class="ant-table-column-sorter"></span></div></span></th>
                                                            </tr>
                                                            </thead>
                                                            <!--                              <UserSetList :data="data" v-if="!isLoading"/>-->
                                                            <tbody class="ant-table-tbody">
                                                            <AdminUserSetItem :pageDict="pageDict"
                                                                              :dictKey="dictKey"
                                                                              v-for="user in this.data"
                                                                              :key="user.id"
                                                                              :user="user"
                                                            />
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <PageNo :dictKey="dictKey" :pageDict="pageDict" :count="pageNo.count"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import AdminUserItem from "@/components/mainpage/admin/user/AdminUserItem";
import AdminUserSetItem from "@/components/mainpage/admin/user/AdminUserSetItem";
import PageNo from "@/components/tools/PageNo";

export default {
    name: "ManageUser",
    props: ['pageDict'],
    components: {
        AdminUserItem,
        AdminUserSetItem,
        PageNo
    },
    data() {
        return {
            sort: {
                key: '',
                type: '',
            },
            pageNo: {
                flag: 1,
                count: 0,
            },
            dictKey: "01",
            isLoading: true,
            data: '',
            noData: true,
        }
    },
    methods: {
        async getUsers() {
            // this.isLoading = true
            let url = 'user/all?pageSize=10&pageNum=' + this.pageNo.flag + '&sortKey=' + this.sort.key + '&sortType=' + this.sort.type
            this.isLoading = true
            const {data: res} = await this.$http.get(url)
            this.isLoading = false
            this.data = res.data.users
            this.pageNo.count = res.data.count
        },
        filter() {
            this.$bus.$emit('openRB', this.dictKey + 'F')
        },
        add() {
            this.$bus.$emit(this.pageDict[this.dictKey].getRBTName, 'A')
            this.$bus.$emit('openRB', this.dictKey)
        },

        sortByKey(key) {
            if (this.sort.key !== key) {
                this.sort.key = key
                this.sort.type = 'desc'
            } else {
                switch (this.sort.type) {
                    case '':
                        this.sort.type = 'desc'
                        break;
                    case 'desc':
                        this.sort.type = 'asc'
                        break;
                    case 'asc':
                        this.sort.type = ''
                }
            }
            this.getUsers()
        },
    },

    mounted() {
        this.getUsers()
        const newArr = [{id:0,name:'正常'},{id:1,name:'封禁'}];
        //Send selector's data list to SelectDropDownMenu
        this.$bus.$emit('selectorData', newArr)

        this.$bus.$on(this.pageDict[this.dictKey].methodName, (data) => {
            if (data) {
                this.pageNo.flag = data
            }
            this.getUsers()
        })
    }
}
</script>

<style scoped>

</style>