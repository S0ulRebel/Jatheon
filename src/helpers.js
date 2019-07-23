export default {
  paginate: (list, options) => {
    const firstIndex = options.perPage * (options.page - 1);
    const lastIndex = firstIndex + options.perPage;
    return list.slice(firstIndex, lastIndex);
  },
};
