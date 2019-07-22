<template>

    <div class="modal-background" v-if="showModal">

        <div class="modal-content">

            <div class="modal-header">

                <h3>{{title}}</h3>

                <span @click="hide">

                    <i class="fas fa-times"></i>

                </span>

            </div>

            <div class="modal-body">

                <div class="modal-graphic">

                    <!--<img src="@/assets/svgs/img-delete@2x.svg" onerror="this.src='@/assets/images/img-delete.png'"/>-->

                    <!--SVG not used because it uses FontAwesomePro font and is not showing correctly-->
                    <img src="@/assets/images/img-delete.png"/>

                </div>

                <p>Are you sure you want to <span class="bold">delete this tag</span>?</p>

            </div>

            <div class="modal-footer">

                <span @click="cancel">Cancel</span>

                <button class="btn-delete" @click="confirm">Delete</button>

            </div>

        </div>

    </div>

</template>

<script>
    export default {

        props: {
          title: {
              type: String,
              default: 'Delete'
          }
        },

        data() {
            return {
                showModal: false,
            };
        },

        methods: {

            show() {
                this.showModal = true;
            },

            hide() {
                this.showModal = false;
            },

            cancel() {
                this.$emit('cancel');
                this.showModal = false;
            },

            confirm() {
                this.$emit('confirm');
                this.showModal = false;
            },

        }
    }
</script>
