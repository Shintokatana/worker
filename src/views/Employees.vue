<template>
    <div class="entry-content">
        <h2>{{this.users.length}} Results</h2>
        <userTable :users="users" :columns="columns"></userTable>
    </div>
</template>

<script>
    import userTable from '@/components/userTable/index'
    import config, {columns} from '@/components/userTable/config'
    import axios from 'axios'

    export default {
        name: "Employees",
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
            axios.get('https://raw.githubusercontent.com/Shintokatana/demo/master/employees.json')
                .then(res => this.users = res.data)
                .catch(err => console.error(err));
            //implement api call to fetch users
            // console.log(config[this.$router.currentRoute.name]);
        }
    }
</script>

<style scoped>

</style>
