<template>
  <div class="food">
    food page
    <p>{{currRecipe}}</p>
    <ul>
      <li v-for="(item, index) in recipeList" v-bind:key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Food',
  computed: {
    ...mapState({
      recipeList: state => state.recipeList,
      currRecipe: state => state.currRecipe
    })
  },
  methods: {
    ...mapActions([
      'add_new_recipt',
      'change_curr_tab'
    ]),
    addNewRecipt (type) {
      this.add_new_recipt(type);
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.food {
    height: 500px;
    background: #345;
}
</style>
