<template>
    <div>
        <h2>{{this.total}} Results</h2>
        <v-client-table
                v-model="userList"
                :columns="columnsOptions"
                :options="options"
        >
            <a slot="delete" slot-scope="users" @click.prevent="popupInit(users.row.id)">Delete</a>
        </v-client-table>
        <Paginate v-if="pageCount !== 1"
                  v-model="currentPage"
                  :page-count="pageCount"
                  :container-class="'pagination'"
                  :page-class="'page-item'"
                  :prev-text="'<'"
                  :next-text="'>'"
                  :prev-class="'page-item'"
                  :next-class="'page-item'"
                  :click-handler="paginationHandler"/>
        <ModalView v-if="modalView"
                   :id="deleteUserId"
                   @close="userDelete(deleteUserId)"
                   @closeDelete="userDeleteCancel"/>
    </div>
</template>

<script>
	import axios from 'axios'
	import Cookie from 'js-cookie'
	import Paginate from 'vuejs-paginate'

	import {tableOptions, columns} from '@/components/userTable/config'
	import ModalView from './ModalWindow'
	import api from '@/api'

	export default {
		name: "usersTable",
		components: {
			ModalView,
			Paginate
		},
		data() {
			return {
				options: tableOptions,
				modalView: false,
				deleteUserId: 0,
				userList: [],
				columnsOptions: [],
				pageCount: 0,
				prefix: '',
				currentPage: 1,
				total: 0
			}
		},
		mounted() {
			if ('employee' === this.$router.currentRoute.path.replace('/', ''))
				this.columnsOptions = columns[1];
			if ('employer' === this.$router.currentRoute.path.replace('/', ''))
				this.columnsOptions = columns[2];

			this.prefix = this.$router.currentRoute.path.replace('/', '');
			this.fetchUsers();
		},
		methods: {
			fetchUsers: function () {
				axios.post(`${api.basicUrl}/admin/users`, {
					type: this.prefix
				}, {
					params: {
						page: this.currentPage
					},
					headers: {
						Authorization: `Bearer ${Cookie.get('authToken')}`
					}
				}).then(res => {
					let newUserList = [];
					res.data.data.map(item => {
						item.name = `${item.first_name && item.first_name} ${item.last_name && item.last_name}`;
						item.category = item.category && item.category.name;
						item.business = item.business_name && item.business_name;
						newUserList.push(item);
					});
					this.total = res.data.total;
					this.pageCount = res.data.last_page;
					this.userList = newUserList;
				})
			},
			paginationHandler: function (props) {
				this.currentPage = props;
				this.fetchUsers();
			},
			popupInit: function (id) {
				this.deleteUserId = id;
				this.modalView = true;
			},
			userDeleteCancel: function () {
				this.modalView = false;
			},
			userDelete: function (id) {
				const type = this.prefix === 'employee' ? 'employee' : 'employer';
				axios.delete(`${api.basicUrl}/${type}/${id}`, {
					headers: {
						Authorization: `Bearer ${Cookie.get('authToken')}`
					}
				}).then(() => {
					if (this.userList.length === 1) {
						this.currentPage = this.currentPage -1;
                    }
					this.modalView = false;
					this.fetchUsers();
				});
			}
		}
	}
</script>

<style lang="scss">
    .pagination {
        list-style: none;
        display: flex;
        justify-content: center;
        padding: 0;

        .page-item {
            transition: .4s ease all;
            background-color: #42b883;

            a {
                display: inline-block;
                padding: 6px 10px;
                color: white;
                border-radius: 15px;
            }

            &.active {
                background-color: #35495e;
            }

            &.disabled {
                a {
                    color: #35495e;
                    cursor: not-allowed;
                }

                &:hover {
                    background-color: #eeeeee;
                }

                background-color: #eeeeee;
            }

            margin: 3px;
            border-radius: 15px;

            &:hover {
                a {
                    color: white;
                }

                background-color: #35495e;
            }
        }
    }
</style>
