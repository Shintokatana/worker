<template>
    <header class="header">
        <h2 class="dashboard-title">{{title.charAt(0).toUpperCase() + title.slice(1)}}</h2>
    </header>
</template>

<script>
    export default {
        name: "dashboardHeader",
        props: ['title']
    }
</script>

<style scoped lang="scss">

    header.header {
        padding: 5px;
        background-color: #35495e;
        color: white;

        .dashboard-title {
            text-align: center;
        }
    }
</style>
