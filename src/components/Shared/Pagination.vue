<template>

    <div id="pagination">

        <div class="items-per-page">

            items per page

            <span class="num-per-page">

                {{perPage}}

                <i class="fa fa-angle-down"></i>

            </span>

        </div>

        <div class="page-select">

            <button @click="goToFirstPage" :disabled="isFirstPage">

                <i class="fas fa-angle-double-left"></i>

            </button>

            <button @click="back" :disabled="isFirstPage">

                <i class="fas fa-angle-left"></i>

            </button>

            <span class="page-number">{{page}}</span>

            <span>OF {{numPages}}</span>

            <button @click="next" :disabled="isLastPage">

                <i class="fas fa-angle-right"></i>

            </button>

            <button @click="goToLastPage" :disabled="isLastPage">

                <i class="fas fa-angle-double-right"></i>

            </button>

        </div>

    </div>

</template>

<script>
    export default {

        props: {
            numEntries: {
                type: Number,
                default: 0,
            }
        },

        data() {
            return {
                perPage: 10,
                page: 1,
            };
        },

        computed: {

            numPages() {
                return Math.ceil(this.numEntries / this.perPage);
            },

            isFirstPage() {
                return this.page === 1;
            },

            isLastPage() {
                return this.page === this.numPages;
            },

        },

        watch: {

            perPage() {
                this.$emit('update', { perPage: this.perPage, page : this.page });
            },

            page() {
                this.$emit('update', { perPage: this.perPage, page : this.page });
            },

        },

        created() {
            this.$emit('update', { perPage: this.perPage, page : this.page });
        },

        methods: {

            goToFirstPage() {
                this.page = 1;
            },

            goToLastPage() {
                this.page = this.numPages;
            },

            next() {
                this.page++;
            },

            back() {
                this.page--;
            },

        },
    };
</script>
