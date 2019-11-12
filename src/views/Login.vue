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
            <input type="submit" value="Go" @click.prevent="loginUser">
        </form>
        <div class="error-message" v-if="errorMessage">{{errorMessage}}</div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                userInfo: {
                    email: '',
                    password: ''
                },
                errorMessage: ''
            }
        },
        methods: {
            loginUser: function () {
                if (!this.userInfo.email || !this.userInfo.password) {
                    this.errorMessage = 'Please Fill All required fields'
                } else if (this.userInfo.password.length < 3) {
                    this.errorMessage = 'Password should contain at least 4 characters'
                } else {
                    this.$store.dispatch('loginUser', true)
                        .then(() => {
                            this.$router.push('dashboard');
                        });
                }
            }
        }
    }
</script>

<style scoped lang="scss">

    .error-message {
        color: red;
        text-align: center;
    }

    .login-page {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
    }

    .login-title {
        padding: 25px 0;
        margin: 0;
        text-align: center;
    }

    .login-form {
        max-width: 400px;
        margin: 0 auto;
        padding: 0 15px;

        input {
            box-sizing: border-box;
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
