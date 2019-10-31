<template>
    <div class="entry-content">
        <h2>{{this.users.length}} Results</h2>
        <userTable :users="users" :columns="columns"></userTable>
    </div>
</template>

<script>
    import userTable from '@/components/userTable/index'
    import config, {columns} from '@/components/userTable/config'

    export default {
        name: "Employees",
        components: {
            userTable
        },
        data() {
            return {
                users: [],
                columns: []
            }
        },
        created: function () {
            this.columns = columns[config[this.$router.currentRoute.name]];
            //implement api call to fetch users
            // console.log(config[this.$router.currentRoute.name]);
            this.users = [
                {
                    "id": 1,
                    "name": "Testing1",
                    "email": "email1@email.com",
                    "email_verified_at": null,
                    "role_id": "3",
                    "created_at": "2019-10-28 12:49:15",
                    "updated_at": "2019-10-28 15:13:56"
                }, {
                    "id": 2,
                    "name": "Testing1",
                    "email": "email1@email.com",
                    "email_verified_at": null,
                    "role_id": "3",
                    "created_at": "2019-10-28 12:49:15",
                    "updated_at": "2019-10-28 15:13:56"
                }, {
                    "id": 3,
                    "name": "Testing1",
                    "email": "email1@email.com",
                    "email_verified_at": null,
                    "role_id": "3",
                    "created_at": "2019-10-28 12:49:15",
                    "updated_at": "2019-10-28 15:13:56"
                }, {
                    "id": 4,
                    "name": "Testing1",
                    "email": "email1@email.com",
                    "email_verified_at": null,
                    "role_id": "3",
                    "created_at": "2019-10-28 12:49:15",
                    "updated_at": "2019-10-28 15:13:56"
                }, {
                    "id": 5,
                    "name": "Testing1",
                    "email": "email1@email.com",
                    "email_verified_at": null,
                    "role_id": "3",
                    "created_at": "2019-10-28 12:49:15",
                    "updated_at": "2019-10-28 15:13:56"
                }, {
                    "id": 6,
                    "name": "Testing1",
                    "email": "email1@email.com",
                    "email_verified_at": null,
                    "role_id": "3",
                    "created_at": "2019-10-28 12:49:15",
                    "updated_at": "2019-10-28 15:13:56"
                }, {
                    "id": 7,
                    "name": "Testing1",
                    "email": "email1@email.com",
                    "email_verified_at": null,
                    "role_id": "3",
                    "created_at": "2019-10-28 12:49:15",
                    "updated_at": "2019-10-28 15:13:56"
                }, {
                    "id": 8,
                    "name": "Testing1",
                    "email": "email1@email.com",
                    "email_verified_at": null,
                    "role_id": "3",
                    "created_at": "2019-10-28 12:49:15",
                    "updated_at": "2019-10-28 15:13:56"
                }, {
                    "id": 9,
                    "name": "Testing1",
                    "email": "email1@email.com",
                    "email_verified_at": null,
                    "role_id": "3",
                    "created_at": "2019-10-28 12:49:15",
                    "updated_at": "2019-10-28 15:13:56"
                }, {
                    "id": 10,
                    "name": "Testing1",
                    "email": "email1@email.com",
                    "email_verified_at": null,
                    "role_id": "3",
                    "created_at": "2019-10-28 12:49:15",
                    "updated_at": "2019-10-28 15:13:56"
                }, {
                    "id": 11,
                    "name": "Testing1",
                    "email": "email1@email.com",
                    "email_verified_at": null,
                    "role_id": "3",
                    "created_at": "2019-10-28 12:49:15",
                    "updated_at": "2019-10-28 15:13:56"
                }, {
                    "id": 12,
                    "name": "Testing1",
                    "email": "email1@email.com",
                    "email_verified_at": null,
                    "role_id": "3",
                    "created_at": "2019-10-28 12:49:15",
                    "updated_at": "2019-10-28 15:13:56"
                }, {
                    "id": 13,
                    "name": "Testing1",
                    "email": "email1@email.com",
                    "email_verified_at": null,
                    "role_id": "3",
                    "created_at": "2019-10-28 12:49:15",
                    "updated_at": "2019-10-28 15:13:56"
                },
            ]
        }
    }
</script>

<style scoped>

</style>
