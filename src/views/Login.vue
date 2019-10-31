<template>
    <div class="login-page">
        <h1 class="login-title">Sign In</h1>
        <form class="login-form">
            <label for="login">
                <input type="text" id="login" placeholder="Login" v-model="login">
            </label>
            <label for="password">
                <input type="password" id="password" placeholder="Password" v-model="password">
            </label>
            <input type="submit" value="Login" @click.prevent="pushHome">
        </form>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                login: '',
                password: ''
            }
        },
        methods: {
            pushHome: function () {
                this.$store.dispatch('authUser', true)
                    .then(() => {
                        this.$router.push('/');
                    });
            }
        }
    }
</script>

<style scoped lang="scss">

    .login-title {
        text-align: center;
    }
    .login-form {
        max-width: 400px;
        margin: 0 auto;

        input {
            display: block;
            padding: 10px;
            background-color: #eee;
            border: none;
            color: black;
            border-radius: 25px;
            width: 100%;
            margin: 0 auto 10px;

            &[type="submit"] {
                max-width: 120px;
            }
        }
    }
</style>
