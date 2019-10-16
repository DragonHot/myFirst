<template>
  <div class="food">
    <div class="search">
      <input
        v-model="searchName"
        class="search-input"
        type="text"
        maxlength="7"
        placeholder="搜索名称"
      >
    </div>
    <table class="item-table">
      <thead>
        <tr>
          <th v-for="(name, index) in foodData.th" :key="index">
            <Tips
              v-if="foodData.description[index]"
              :option="tipStyle"
              :msg="foodData.description[index]"
            />
            <span class="columns-name" @click="changeSort(index)">{{name}}</span>
            <svg
              :class="{ 'arrow-up': sort.up, hide: index !== sort.index}"
              class="arrow"
              viewBox="0 2 20 20">
              <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path>
            </svg>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in filterData" :key="index">
          <td>
            <div class="item" :style="{backgroundImage: 'url(' + item.src + ')'}">
              <router-link to="/critters">{{item.name}}</router-link>
            </div>
          </td>
          <td>{{item.quality}}</td>
          <td>{{item.calories}}</td>
          <td>{{item.spoilTimeDes ? item.spoilTimeDes : item.spoilTime}}</td>
          <td>{{item.cooking}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Tips from '@/components/Tips';

export default {
  name: 'Food',
  components: {
    Tips
  },
  data () {
    return {
      searchName: '',
      sort: {
        index: 0,
        up: false
      },
      tipStyle: {
        width: '20px',
        height: '20px',
        top: '3px'
      }
    };
  },
  computed: {
    ...mapState({
      foodData: state => state.foodData
    }),
    filterData () {
      return this.$store.getters.getDataByName(this.searchName);
    }
  },
  mounted () {
    this.changeSort(1); // 初始按品质排序
  },
  methods: {
    ...mapActions([
      'add_new_recipt',
      'change_curr_tab'
    ]),
    addNewRecipt (type) {
      this.add_new_recipt(type);
    },
    changeSort (index) { // changeSort function (index) 好像没区别
      if (this.sort.index === index) {
        this.sort.up = !this.sort.up;
      } else {
        this.sort.up = false;
        this.sort.index = index;
      }
      var sortName = this.foodData.map[index];
      this.filterData.sort((a, b) => {
        var res;
        if (parseInt(a[sortName])) {
          res = parseInt(a[sortName]) - parseInt(b[sortName]);
        } else {
          res = a[sortName] === b[sortName] ? 0 : a[sortName] > b[sortName] ? 1 : -1;
        }
        return this.sort.up ? res : -res;
      });
    }
  },
  watch: {
    // searchName: function () {
    //   if (this.searchName) {
    //     this.filterData = this.foodData.td.filter((item) => {
    //       return item.name.includes(this.searchName);
    //     });
    //   } else {
    //     this.filterData = this.foodData.td;
    //   }
    // }
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
