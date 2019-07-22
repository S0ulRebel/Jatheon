<template>

    <div class="color-picker">

        <div @click="togglePopover">
            <div class="oval" v-bind:style="{ backgroundColor: color }"></div>

            <div class="toggle">

            <span v-show="showPopover">
                <i class="fa fa-angle-up"></i>
            </span>

                <span v-show="!showPopover">
                <i class="fa fa-angle-down"></i>
            </span>

            </div>
        </div>

        <div class="color-popover" v-if="showPopover">

            <div>Tag Color</div>

            <template v-for="c in colors">

                <div class="color"
                     v-bind:class="{'selected': c === newColor}"
                     v-bind:style="{ borderColor: c }"
                     @click="selectColor(c)">

                    <div class="oval"
                         v-bind:style="{ backgroundColor: c }">

                        <i class="fas fa-check"></i>

                    </div>

                </div>


            </template>

        </div>

    </div>

</template>

<script>

    export default {

        props: {
            color: {
                type: String,
                default: '#CF202E',
            }
        },

        data() {

            return {

                colors: [
                    '#CF202E',
                    '#A41E36',
                    '#67C8C7',
                    '#00A88D',
                    '#006F63',
                    '#C1D42F',
                    '#3DBCE7',
                    '#FC9543',
                    '#FFE105',
                    '#000000',
                ],
                showPopover: false,
                newColor: this.color,

            };

        },

        methods: {

            togglePopover() {
                this.showPopover = !this.showPopover;
            },

            selectColor(color) {
                this.newColor = color;
                this.$emit('update', this.newColor);
            }

        },

    };

</script>
