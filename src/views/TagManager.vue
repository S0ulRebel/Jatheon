<template>
    <div class="page-wrap">

        <sidebar @click.native="onClick"></sidebar>

        <div id="main-content">

            <div id="search-area">

                <search></search>

            </div>

            <div id="button-area">

                <button class="btn-delete"
                        @click="onDeleteClicked"
                        :disabled="checkedIds.length < 1">Delete</button>

            </div>

            <tag-manager-table ref="tagManagerTable"
                               :entries="paginatedTags"
                               v-on:checkedUpdate="updateCheckedIds($event)"
                               v-on:rowDelete="onTableRowDelete($event)"></tag-manager-table>

            <pagination :numEntries="tags.length"
                        @update="onPaginationUpdate($event)"></pagination>

        </div>

        <modal-delete ref="deleteModal"
                      :title="'Delete Tag'"
                      v-on:confirm="deleteTags"></modal-delete>
    </div>

</template>

<script>
    import Sidebar from '@/components/Shared/Sidebar';
    import Search from '@/components/Shared/Search';
    import TagManagerTable from '@/components/TagManager/Table';
    import Pagination from '@/components/Shared/Pagination';
    import ModalDelete from '@/components/Shared/ModalDelete';
    import Helpers from '@/helpers';

    export default {

        components: {
            Sidebar,
            Search,
            TagManagerTable,
            Pagination,
            ModalDelete
        },

        data() {

            return {
                tags: [],
                checkedIds: [],
                idsToDelete: [],
                paginatedTags: [],
                paginationOptions: {
                  perPage: 10,
                  page: 1,
                },
                tags:[
                    {
                        id: 1,
                        color: '#CF202E',
                        tagName: 'REVIEW',
                        taggedItems: 0,
                        assignedTo: 'Marko M',
                        expungeDate: 'Nov 24, 2020',
                        options: '',
                        dateCreated: 'Nov 26, 2017',
                        createdBy: 'Marko A',
                    },

                    {
                        id: 2,
                        color: '#CF202E',
                        tagName: 'REVIEW',
                        taggedItems: 18,
                        assignedTo: '',
                        expungeDate: '',
                        options: 'Notifies',
                        dateCreated: 'Nov 23, 2017',
                        createdBy: 'Marko A',
                    },

                    {
                        id: 3,
                        color: '#CF202E',
                        tagName: 'REVIEW',
                        taggedItems: 22,
                        assignedTo: 'Marko M',
                        expungeDate: 'Nov 22, 2020',
                        options: '2 Rules',
                        dateCreated: 'Nov 29, 2017',
                        createdBy: 'Marko A',
                    },

                    {
                        id: 4,
                        color: '#CF202E',
                        tagName: 'REVIEW',
                        taggedItems: 22,
                        assignedTo: 'Marko M',
                        expungeDate: 'Nov 22, 2020',
                        options: '2 Rules',
                        dateCreated: 'Nov 29, 2017',
                        createdBy: 'Marko A',
                    },

                    {
                        id: 5,
                        color: '#CF202E',
                        tagName: 'REVIEW',
                        taggedItems: 22,
                        assignedTo: 'Marko M',
                        expungeDate: 'Nov 22, 2020',
                        options: '2 Rules',
                        dateCreated: 'Nov 29, 2017',
                        createdBy: 'Marko A',
                    },

                    {
                        id: 6,
                        color: '#CF202E',
                        tagName: 'REVIEW',
                        taggedItems: 22,
                        assignedTo: 'Marko M',
                        expungeDate: 'Nov 22, 2020',
                        options: '2 Rules',
                        dateCreated: 'Nov 29, 2017',
                        createdBy: 'Marko A',
                    },

                    {
                        id: 7,
                        color: '#CF202E',
                        tagName: 'REVIEW',
                        taggedItems: 22,
                        assignedTo: 'Marko M',
                        expungeDate: 'Nov 22, 2020',
                        options: '2 Rules',
                        dateCreated: 'Nov 29, 2017',
                        createdBy: 'Marko A',
                    },

                    {
                        id: 8,
                        color: '#CF202E',
                        tagName: 'REVIEW',
                        taggedItems: 22,
                        assignedTo: 'Marko M',
                        expungeDate: 'Nov 22, 2020',
                        options: '2 Rules',
                        dateCreated: 'Nov 29, 2017',
                        createdBy: 'Marko A',
                    },

                    {
                        id: 9,
                        color: '#CF202E',
                        tagName: 'REVIEW',
                        taggedItems: 22,
                        assignedTo: 'Marko M',
                        expungeDate: 'Nov 22, 2020',
                        options: '2 Rules',
                        dateCreated: 'Nov 29, 2017',
                        createdBy: 'Marko A',
                    },

                    {
                        id: 10,
                        color: '#CF202E',
                        tagName: 'REVIEW',
                        taggedItems: 22,
                        assignedTo: 'Marko M',
                        expungeDate: 'Nov 22, 2020',
                        options: '2 Rules',
                        dateCreated: 'Nov 29, 2017',
                        createdBy: 'Marko A',
                    },

                    {
                        id: 11,
                        color: '#CF202E',
                        tagName: 'REVIEW',
                        taggedItems: 22,
                        assignedTo: 'Marko M',
                        expungeDate: 'Nov 22, 2020',
                        options: '2 Rules',
                        dateCreated: 'Nov 29, 2017',
                        createdBy: 'Marko A',
                    },

                    {
                        id: 12,
                        color: '#CF202E',
                        tagName: 'REVIEW',
                        taggedItems: 22,
                        assignedTo: 'Marko M',
                        expungeDate: 'Nov 22, 2020',
                        options: '2 Rules',
                        dateCreated: 'Nov 29, 2017',
                        createdBy: 'Marko A',
                    },

                ],
            };

        },
        methods: {

            onDeleteClicked() {
                this.idsToDelete = this.checkedIds;
                this.$refs.deleteModal.show();
            },

            onTableRowDelete(e) {
                this.idsToDelete = [e];
                this.$refs.deleteModal.show();
            },

            updateCheckedIds(e) {
                this.checkedIds = e;
            },

            deleteTags() {
                let t = this.tags.filter(tag => {
                    return this.idsToDelete.indexOf(tag.id) === -1;
                });

                this.tags = t;
                this.paginatedTags = Helpers.paginate(this.tags, this.paginationOptions);
            },

            onPaginationUpdate(e) {
                this.paginationOptions = e;
                this.paginatedTags = Helpers.paginate(this.tags, this.paginationOptions);
            },

        },

    };
</script>
