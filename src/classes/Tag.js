import store from '../store/store';

export default class Tag {

    constructor(

    id,
    color,
    tagName,
    taggedItems,
    assignedTo,
    expungeDate,
    options,
    dateCreated,
    createdBy

    ) {

        this.id = id;
        this.color = color;
        this.tagName = tagName;
        this.taggedItems = taggedItems;
        this.assignedTo = assignedTo;
        this.expungeDate = expungeDate;
        this.options = options;
        this.dateCreated = dateCreated;
        this.createdBy = createdBy;

    }

    create() {
        store.dispatch('tags/create', this);
    }

    update() {
        store.dispatch('tags/update', this);
    }

    destroy() {
        store.dispatch('tags/destroy', this);
    }

}
