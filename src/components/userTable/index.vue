<template>
    <div>
        <v-client-table v-model="users"
                        :columns="columns"
                        :options="options">
            <a slot="delete" slot-scope="users" @click.prevent="popupInit(users.row.id)">Delete</a>
        </v-client-table>
        <modalView v-if="modalView"
                   :id="deleteUserId"
                   @close="userDelete(deleteUserId)"
                   @closeDelete="userDeleteCancel"/>
    </div>
</template>

<script>
    import {tableOptions} from '@/components/userTable/config'
    import modalView from './modalWindow'

    export default {
        name: "usersTable",
        props: ['users', 'columns'],
        components: {
            modalView
        },
        data() {
            return {
                options: tableOptions,
                modalView: false,
                deleteUserId: 0
            }
        },
        methods: {
            popupInit: function (id) {
                this.deleteUserId = id;
                this.modalView = true;
            },
            userDelete: function (id) {
                this.users.splice(this.users.map(x => {
                    return x.id
                }).indexOf(id), 1);
                this.modalView = false;
            },
            userDeleteCancel: function () {
                this.modalView = false;
            }
        },
    }
</script>

<style scoped></style>
