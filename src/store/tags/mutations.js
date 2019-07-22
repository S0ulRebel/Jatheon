export default {

    'ADD_NEW'(state, data) {

        state.tags.push(data);

    },

    'UPDATE'(state, data) {

        state.tags.forEach(tag => {

            if (tag.id === data.id )tag = data;

        });

    },

    'DESTROY'(state, id) {

        state.tags = state.tags.filter(tag => {

            return tag.id !== id;

        });

    },
}
