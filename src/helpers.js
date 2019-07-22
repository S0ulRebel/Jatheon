export default {
    paginate: (list, options) => {
        let firstIndex = options.perPage * (options.page - 1);
        let lastIndex = firstIndex + options.perPage;
        return list.slice(firstIndex, lastIndex);
    },
};
