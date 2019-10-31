<template>
    <div class="dashboard-container">
        <div class="nav-bar">
            <navBar/>
        </div>
        <div class="content">
            <dashboardHeader :title="pageTitle"/>
            <router-view/>
            <dashboardFooter/>
        </div>
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
                pageTitle: ''
            }
        },
        components: {
            dashboardHeader,
            navBar,
            dashboardFooter
        },
        mounted: function() {
            this.pageTitle = this.$route.name;
        },
        beforeUpdate: function () {
            this.pageTitle = this.$route.name;
        }
    }
</script>

<style lang="scss" scoped>

    .dashboard-container {
        display: flex;
        flex-direction: row;

        .nav-bar {
            background-color: #eee;
            flex: 0 1 15%;
            max-width: 15%;
        }

        .content {
            flex: 0 1 85%;
            max-width: 85%;
        }

    }

</style>
