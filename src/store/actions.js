import mutationTypes from '@/store/mutationTypes.js';

const actions = {
  add_new_recipt: ({commit, state}, type) => {
    commit(mutationTypes.ADD_NEW_RECIPT, type);
  },
  change_curr_tab: ({commit}, index) => {
    commit(mutationTypes.CHANGE_CURR_TAB, index);
  }
};

export default actions;
