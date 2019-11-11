<template>
    <div class="entry-content">
        <h2>{{this.users.length}} Results</h2>
        <userTable :users="users" :columns="columns" :userType="22"></userTable>
    </div>
</template>

<script>
    import userTable from '@/components/userTable/index'
    import config, {columns} from '@/components/userTable/config'
    import axios from 'axios'

    export default {
        name: "Employers",
        components: {
            userTable
        },
        data() {
            return {
                users: [],
                columns: columns[config[this.$router.currentRoute.name]],
            }
        },
        created() {
            //redo to actual api
            axios.get('https://raw.githubusercontent.com/Shintokatana/demo/master/employers.json')
                .then(res => this.users = res.data)
                .catch(err => console.error(err));
        }
    }
</script>

<style scoped>

</style>
