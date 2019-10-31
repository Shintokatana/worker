<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <h2 class="modal-title">Confirm Deletion</h2>
                    <p class="modal-text">Are you sure you want to delete this user?</p>
                    <div class="modal-buttons">
                        <a class="btn" @click.prevent="closeModal">close</a>
                        <a class="btn" @click.prevent="deleteUser">Delete</a>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "modalWindow",
        props: ['id'],
        methods: {
            deleteUser: function () {
                this.$emit('close');
            },
            closeModal: function () {
                this.$emit('closeDelete');
            }
        }
    }
</script>

<style scoped lang="scss">

    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        width: 200px;
        margin: 0 auto;
        padding: 20px 30px;
        background-color: #fff;
        border-radius: 15px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;

        .modal-buttons {
            display: flex;
            flex-direction: row;
            justify-content: center;

            .btn {
                margin: 5px;
            }
        }

        h2.modal-title,
        p.modal-text {
            text-align: center;
        }
    }

</style>
