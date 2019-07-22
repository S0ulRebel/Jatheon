<template>

    <div class="checkbox" v-bind:class="{ 'checked': isChecked }" @click="toggleCheckbox">

        <i class="fa fa-check"></i>

    </div>

</template>

<script>
    export default {

        props: {
            checked:{
                type: Boolean,
                default: false,
            },
            value: {
                type: [Boolean, String, Number],
            }
        },

        data() {

            return {
                isChecked: false,
            };

        },

        watch: {
            checked(newValue) {
                this.isChecked = newValue;
            },
        },

        created() {
          this.isChecked = this.checked;
        },

        methods: {

            toggleCheckbox() {
                this.isChecked = !this.isChecked;
                this.$emit('toggle', {
                    value: this.value,
                })
            }

        }

    };
</script>
