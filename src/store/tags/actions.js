import getters from './getters';

export const create = ({ commit }, data) => {
    commit('ADD_NEW', data);
};

export const update = ({ commit }, data) => {
    commit('UPDATE', data);
};

export const destroy = ({ commit }, data ) => {
    commit('DESTROY', data.id);
};

export default {
    create,
    update,
    destroy,
}
