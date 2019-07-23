export default {

  findById: state => (id) => {
    let tag = null;

    state.tags.forEach((t) => {
      if (t.id == id) {
        tag = t;
      }
    });

    return tag;
  },
};
