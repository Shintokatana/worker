<template>
    <div class="entry-content">
        <h2>Users</h2>
        <div class="main-navigation-wrapper">
            <router-link class="nav-item" to="/employers">
                <div class="navigation-item"></div>
                Employers
            </router-link>
            <router-link class="nav-item" to="/employees">
                <div class="navigation-item"></div>
                Employees
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MainView"
    }
</script>

<style scoped lang="scss">

    .main-navigation-wrapper {

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        .nav-item {
            margin-right: 20px;
            margin-bottom: 20px;
        }

        .navigation-item {
            padding: 25px;
            border-radius: 15px;
            border: 1px solid #eee;
            max-width: 20px;
            width: 20px;
            margin: 0 auto;
            height: 20px;
        }

    }


</style>
