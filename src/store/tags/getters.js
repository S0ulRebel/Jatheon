export default {

    findById: (state) => (id) => {

        var tag = null;

        state.tags.forEach((t) => {

            if (t.id == id) {

                tag = t;
            }

        });

        return tag;
    },
};
