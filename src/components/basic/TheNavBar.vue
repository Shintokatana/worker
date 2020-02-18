<template>
    <div class="navigation">
        <router-link to="/" class="home-navigation" @click.native="toggleBar"><h2>Worker</h2></router-link>
        <h4 class="navigation-title">Menu</h4>
        <router-link class="nav-item" to="/employer" @click.native="toggleBar">Employers</router-link>
        <router-link class="nav-item" to="/employee" @click.native="toggleBar">Employees</router-link>
        <a href="#" class="nav-item" @click.prevent="signOut">Sign Out</a>
    </div>
</template>

<script>
    export default {
        name: "nav-bar",
        methods: {
            signOut: function () {
                this.$store.dispatch('logoutUser', false)
                    .then(() => {
                            this.$router.push('/login');
                        }
                    )
            },
            toggleBar() {
                if (window.innerWidth < 767)
                    this.$emit('toggleNavBar')
            }
        }
    }
</script>

<style scoped lang="scss">

    .navigation {
        text-align: left;

        .home-navigation {
            background-color: white;

            a {
                color: #35495e;
            }

            &.router-link-exact-active {
                a {
                    color: #42b883;
                }
            }

            display: block;

            h2 {
                padding: 25px 15px;
                margin: 0;
            }
        }

        .navigation-title {
            margin-top: 80px;
            margin-left: 10px;
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
