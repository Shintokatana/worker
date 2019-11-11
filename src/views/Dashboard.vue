<template>
    <div class="dashboard-container" v-bind:class="{navBarVisibility: navBarVisibility}">
        <transition name="fade" mode="out-in">
            <div class="nav-bar" v-show="navBarVisibility">
                <navBar v-on:toggleNavBar="expandNavBar"/>
            </div>
        </transition>
        <a href="#" class="nav-bar-button" @click.prevent="expandNavBar">Expand</a>
        <transition name="fade" mode="out-in">
            <div class="content">
                <dashboardHeader :title="pageTitle"/>
                <transition name="fade" mode="out-in">
                    <router-view/>
                </transition>
                <dashboardFooter/>
            </div>
        </transition>
    </div>
</template>

<script>
    // @ is an alias to /src
    import dashboardHeader from '@/components/basic/dashboardHeader'
    import navBar from '@/components/basic/navBar'
    import dashboardFooter from '@/components/basic/dashboardFooter'

    export default {
        name: 'dashboard',
        data() {
            return {
                pageTitle: '',
                navBarVisibility: true
            }
        },
        components: {
            dashboardHeader,
            navBar,
            dashboardFooter
        },
        mounted() {
            addEventListener('resize', this.navBarVisibilityStatus);
            this.pageTitle = this.$route.name
        },
        beforeUpdate() {
            this.pageTitle = this.$route.name
        },
        methods: {
            expandNavBar() {
                this.navBarVisibility = !this.navBarVisibility;
            },
            navBarVisibilityStatus() {
                if (window.innerWidth > 767)
                    this.navBarVisibility = true;
                else if (window.innerWidth < 767)
                    this.navBarVisibility = false
            }
        }
    }
</script>

<style lang="scss" scoped>

    .dashboard-container {
        display: flex;
        flex-direction: row;
        position: relative;

        .nav-bar-button {
            position: absolute;
            top: 30px;
            left: 20px;
            z-index: 999;
            @media (min-width: 767px) {
                display: none;
            }

            &:hover {
                color: white;
            }
        }

        .nav-bar {
            background-color: #eee;
            flex: 0 1 15%;
            max-width: 15%;
            @media (max-width: 767px) {
                position: absolute;
                z-index: 1;
                display: block;
                width: 75%;
                height: 100vh;
                flex: 0 1 75%;
                max-width: 75%;
            }
        }

        &.navBarVisibility {
            .nav-bar-button {
                left: 180px;
                color: #35495e;
            }
        }

        .content {
            flex: 0 1 85%;
            max-width: 85%;
            @media (max-width: 767px) {
                flex: 0 1 100%;
                max-width: 100%;
            }
        }

    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
        opacity: 1;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */
    {
        opacity: 0;
    }

</style>
