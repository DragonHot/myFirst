export default {
  getDataByName: (state) => (name) => {
    if (name) {
      return state.foodData.td.filter(item => item.name.includes(name));
    } else {
      return state.foodData.td;
    }
  }
};
