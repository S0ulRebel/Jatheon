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
import { mapState, mapGetters } from 'vuex';
import Sidebar from '@/components/Shared/Sidebar';
import Search from '@/components/Shared/Search';
import TagManagerTable from '@/components/TagManager/Table';
import Pagination from '@/components/Shared/Pagination';
import ModalDelete from '@/components/Shared/ModalDelete';
import Helpers from '@/helpers';
import RandomTagFactory from '@/factories/RandomTagFactory';

export default {

  components: {
    Sidebar,
    Search,
    TagManagerTable,
    Pagination,
    ModalDelete,
  },

  data() {
    return {
      checkedIds: [],
      idsToDelete: [],
      paginatedTags: [],
      paginationOptions: {
        perPage: 10,
        page: 1,
      },
    };
  },

  computed: {

    ...mapState({
      tags: state => state.tags.tags,
    }),

    ...mapGetters({
      findTagById: 'tags/findById',
    }),

  },

  created() {
    const factory = new RandomTagFactory();
    const numTags = 12;

    for (let i = 0; i < numTags; i++) {
      const tag = factory.createRandomTag(i);
      tag.create();
    }
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

      this.idsToDelete.forEach((id) => {
        const tag = this.findTagById(id);
        tag.destroy();
      });

      this.$refs.tagManagerTable.deselectAll();
      this.paginatedTags = Helpers.paginate(this.tags, this.paginationOptions);
    },

    onPaginationUpdate(e) {
      this.paginationOptions = e;
      this.paginatedTags = Helpers.paginate(this.tags, this.paginationOptions);
    },

  },

};
</script>
