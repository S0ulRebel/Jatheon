<template>

    <table>

        <thead>

            <th>

                <div class="checkbox" @click="deselectAll">
                    <i class="fas fa-minus"></i>
                </div>

            </th>

            <th>Color</th>

            <th>Tag Name</th>

            <th>Tagged Items</th>

            <th>Assigned to</th>

            <th>Expunge Date</th>

            <th>Options</th>

            <th class="sortable"
                @click="sortByDateCreated">

                Date Created &nbsp;

                <span v-show="reverseSortDirection">
                    <i class="fa fa-angle-up"></i>
                </span>

                <span v-show="!reverseSortDirection">
                    <i class="fa fa-angle-down"></i>
                </span>

            </th>

            <th>Created by</th>

            <th>Actions</th>

        </thead>

        <tbody>

            <tr v-for="entry in sortedEntries" :key="entry.id">

                <td>
                    <checkbox :value="entry.id"
                              :checked="isChecked(entry.id)"
                              v-on:toggle="toggleCheckbox($event)"></checkbox>
                </td>

                <td>
                    <color-picker :color="entry.color" v-on:update="updateColor($event, entry)"></color-picker>
                </td>

                <td><span class="rectangle" v-bind:style="{ backgroundColor: entry.color }">{{entry.tagName}}</span></td>

                <td v-bind:class="{ 'light' : !entry.taggedItems }">{{entry.taggedItems | emails }}</td>

                <td v-bind:class="{ 'bold': entry.assignedTo, 'light': !entry.assignedTo }">{{entry.assignedTo | isSet }}</td>

                <td v-bind:class="{ 'light': !entry.expungeDate }">{{entry.expungeDate | isSet }}</td>

                <td v-bind:class="{ 'bold': entry.options, 'light': !entry.options }">{{entry.options | isSet }}</td>

                <td>{{entry.dateCreated}}</td>

                <td>{{entry.createdBy}}</td>

                <td><span class="delete" @click="onRowDelete(entry.id)">Delete</span></td>

            </tr>

        </tbody>

        <div class="colorPicker"></div>

    </table>

</template>

<script>
    import Checkbox from '@/components/Shared/Checkbox';
    import ColorPicker from './ColorPicker';
    import moment from 'moment'

    export default {

        components: {
            Checkbox,
            ColorPicker
        },

        props: {
            entries: {
                type: Array,
                default: [],
            }
        },

        data() {
            return {
                reverseSortDirection: false,
                checkedIds: [],
                sortedEntries: [],
            };
        },

        filters: {
            isSet: value => {
                return value ? value : 'Not Set';
            },

            emails: value => {
                return value ? value + ' Emails' : 'No Emails';
            },
        },

        watch: {

            entries(newValue) {
                this.initList();
            },

            checkedIds(newValue) {
                this.$emit('checkedUpdate', this.checkedIds);
            },
        },

        created() {
            this.initList();
        },

        methods: {

            initList() {
                this.sortedEntries = this.entries.map(entry => {
                    return entry;
                });
            },

            updateColor(e, entry) {
                entry.color = e;
                entry.update();
            },

            isChecked(id) {
                return this.checkedIds.indexOf(id) > -1;
            },

            toggleCheckbox(e) {
                let index = this.checkedIds.indexOf(e.value);
                index > -1 ? this.checkedIds.splice(index, 1) : this.checkedIds.push(e.value);
            },

            deselectAll() {
                this.checkedIds = [];
            },

            sortByDateCreated() {
                this.sortedEntries = this.entries.sort((a,b) => {
                    let m1 = moment(a.dateCreated).unix();
                    let m2 = moment(b.dateCreated).unix();

                    return this.reverseSortDirection ? m2 - m1 : m1 - m2;

                });
                this.reverseSortDirection = !this.reverseSortDirection;
            },

            onRowDelete(id) {
                this.$emit('rowDelete', id);
            }
        }
    };
</script>
