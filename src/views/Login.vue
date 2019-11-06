<template>
    <div class="login-page">
        <h1 class="login-title">Sign In</h1>
        <form class="login-form">
            <label for="email">
                <input type="email" id="email" placeholder="Email" v-model="userInfo.email">
            </label>
            <label for="password">
                <input type="password" id="password" placeholder="Password" v-model="userInfo.password">
            </label>
            <input type="submit" value="Login" @click.prevent="loginUser">
        </form>
    </div>
</template>

<script>
    // import axios from 'axios'
    // import {workerAPIEndpoints} from '@/config'

    export default {
        name: "Login",
        data() {
            return {
                userInfo: {
                    email: '',
                    password: ''
                },
            }
        },
        methods: {
            loginUser: function () {
                this.$store.dispatch('loginUser', true)
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
