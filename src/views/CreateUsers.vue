<template>
    <div class="create-user-page-wrapper">
        <div class="preloader-wrapper" v-if="preloaderVisibility">
            <div class="loader"></div>
        </div>
        <div class="create-user-page">
            <form @submit.prevent="createUserRequest" class="create-user-form">
                <label id="users-count-label" for="users-count">Create Test Users</label>
                <input required id="users-count" min="0" type="number" v-model="itemsNumber" @change="inputChange">
                <input class="photos-upload-input" type="file" id="img" name="img" accept="image/*" @change="getImage">
                <select name="user-type" v-model="userType" id="user-type">
                    <option value="employee">Employee</option>
                    <option value="employer">Employer</option>
                </select>
                <div class="buttons-wrapper">
                    <input type="submit" value="Create Users">
                    <button @click.prevent="deleteTestUsers" class="delete-user-button">Delete All Test Users</button>
                </div>
            </form>
            <div class="create-user-response-message">{{responseMessage}}</div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import api from "../api";
    import Cookie from "js-cookie";

    export default {
        data() {
            return {
                itemsNumber: 0,
                userType: 'employee',
                responseMessage: '',
                preloaderVisibility: false,
                image: ''
            }
        },
        name: "CreateUsers",
        methods: {
            createUserRequest() {
                if (this.itemsNumber) {
                    this.preloaderVisibility = true;
                    axios.post(`${api.basicUrl}/admin/fake-users/`, {
                        user_count: parseInt(this.itemsNumber),
                        ...(this.image && {logo: this.image}),
                        account_type: this.userType
                    }, {
                        headers: {
                            Authorization: `Bearer ${Cookie.get('authToken')}`
                        }
                    }).then(res => {
                        if (res.status === 200) {
                            this.responseMessage = 'Users created successfully';
                            this.preloaderVisibility = false;
                            this.itemsNumber = 0;
                            this.image = ''
                        }
                    })
                } else {
                    this.responseMessage = 'Please Enter Users count';
                }
            },
            inputChange() {
                this.responseMessage = '';
            },
            getImage(e) {
                const image = e.target.files[0]
                const reader = new FileReader()
                reader.readAsDataURL(image)
                reader.onload = e => {
                    this.image = e.target.result;
                };
            },
            deleteTestUsers() {
                this.preloaderVisibility = true;
                axios.delete(`${api.basicUrl}/admin/fake-users/`, {
                    headers: {
                        Authorization: `Bearer ${Cookie.get('authToken')}`
                    }
                }).then(res => {
                    if (res.status === 200) {
                        this.preloaderVisibility = false;
                        this.responseMessage = 'Test Users successfully deleted';
                    }
                })
            }
        }
    }
</script>

<style scoped lang="scss">

    .loader {
        border: 16px solid #f3f3f3; /* Light grey */
        border-top: 16px solid #42b883; /* Blue */
        border-radius: 50%;
        width: 120px;
        height: 120px;
        animation: spin 2s linear infinite;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .photos-upload-input::-webkit-file-upload-button {
        visibility: hidden;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    select {
        -webkit-appearance: none;
        appearance: none;
    }

    .preloader-wrapper {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #ccccccd6;
        z-index: 1009;
    }

    .create-user-page {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;

        .create-user-response-message {
            padding-top: 10px;
            text-align: center;
        }
    }

    .create-user-form {
        max-width: 400px;
        margin: 0 auto;
        padding: 0 15px;

        input.photos-upload-input {
            padding-left: 25px;
            position: relative;

            &:hover {
                &:before {
                    background: #42b883;
                    color: white;
                }
            }

            &:before {
                transition: .4s ease all;
                left: 4px;
                top: 50%;
                transform: translateY(-50%);
                position: absolute;
                content: 'Select image';
                display: inline-block;
                outline: none;
                white-space: nowrap;
                -webkit-user-select: none;
                cursor: pointer;

                box-sizing: border-box;
                background-color: white;
                border: none;
                color: black;
                border-radius: 25px;
                padding: 10px;
            }
        }

        #users-count-label {
            display: block;
            text-align: center;
            padding-bottom: 10px;
        }

        .buttons-wrapper {
            display: flex;
            flex-direction: row;
            justify-content: center;

            .delete-user-button,
            input[type=submit] {
                transition: .4s ease all;
                margin: 0 5px;

                &:focus {
                    outline: none;
                }
            }

            input[type=submit] {
                background-color: #42b883;
                color: white;

                &:hover {
                    background-color: rgba(66, 184, 131, 0.5);
                }
            }

            .delete-user-button {
                cursor: pointer;
                background-color: red;
                color: white;
                &:hover {
                    background-color: rgba(255, 0, 0, 0.5);
                }
            }
        }

        .delete-user-button {
            box-sizing: border-box;
            padding: 10px;
            background-color: #eee;
            border: none;
            color: black;
            border-radius: 25px;
            width: auto;
            margin: 0 auto 10px;
        }

        input,
        select {
            box-sizing: border-box;
            display: block;
            padding: 10px;
            background-color: #eee;
            border: none;
            color: black;
            border-radius: 25px;
            width: 100%;
            margin: 0 auto 10px;

            &:focus {
                outline: none;
            }

            &[type="submit"] {
                max-width: 120px;
            }
        }
    }


</style>