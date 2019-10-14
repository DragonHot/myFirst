<template>
  <div class="food">
    <!-- food page
    <p>{{currRecipe}}</p>
    <ul>
      <li v-for="(item, index) in recipeList" v-bind:key="index">{{item}}</li>
    </ul> -->
    <div class="search">
      <input
        v-model="searchName"
        class="search-input"
        type="text"
        maxlength="7"
        placeholder="搜索名称"
      >
    </div>
    <MyTable :table-data="foodData" :search-name="searchName"/>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import MyTable from '@/components/MyTable';

export default {
  name: 'Food',
  components: {
    MyTable
  },
  computed: {
    ...mapState({
      foodData: state => state.foodData
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
      searchName: ''
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.food {
  padding: 10px 5px;
  height: 500px;
}

.search {
  text-align: center;
  padding: 30px 0;
}

.search-input {
  background: url('../../assets/icon/search.png') no-repeat;
  background-size: 25px;
  background-position-y: 50%;
  width: 150px;
  padding-left: 30px;
  font-size: 20px;
  height: 35px;
  outline: none;
  border: none;
  border-bottom: 2px solid #999;
}
.search-input:focus {
  border-bottom: 2px solid #333;
}
</style>
