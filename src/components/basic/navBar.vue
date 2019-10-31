<template>
    <div class="navigation">
        <router-link to="/"><h2>App Name</h2></router-link>
        <h4 class="navigation-title">Menu</h4>
        <router-link class="nav-item" to="/employers">Employers</router-link>
        <router-link class="nav-item" to="/employees">Employees</router-link>
        <a href="#" class="nav-item" @click.prevent="signOut">Sign Out</a>
    </div>
</template>

<script>
    export default {
        name: "nav-bar",
        methods: {
            signOut: function () {
                this.$store.dispatch('authUser', false)
                    .then(() => {
                        this.$router.push('/login');
                    })
            }
        }
    }
</script>

<style scoped lang="scss">

    .navigation {
        padding-top: 10px;
        padding-left: 10px;
        text-align: left;

        .navigation-title {
            margin-top: 80px;
        }

        .nav-item {
            padding: 10px;
            display: block;

            &.router-link-active,
            &:hover {
                background-color: #ffffff;
            }
        }
    }

</style>
