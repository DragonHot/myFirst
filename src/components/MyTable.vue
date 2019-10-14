<template>
  <table>
      <thead>
        <tr>
          <th v-for="(name, index) in tableData.th" :key="index">
            <Tips
              v-if="tableData.description[index]"
              :option="tipStyle"
              :msg="tableData.description[index]"
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
            <div class="item" :style="{backgroundImage: 'url(' + item.name.src + ')'}">
              <router-link to="/critters">{{item.name.text}}</router-link>
            </div>
          </td>
          <td>{{item.quality}}</td>
          <td>{{item.calories}}</td>
          <td>{{item.spoilTimeDes ? item.spoilTimeDes : item.spoilTime}}</td>
          <td>{{item.cooking}}</td>
        </tr>
      </tbody>
    </table>
</template>

<script>
import Tips from '@/components/Tips';

export default {
  name: 'MyTable',
  props: ['tableData', 'searchName'],
  components: {
    Tips
  },
  watch: {
    searchName: function () {
      if (this.searchName) {
        this.filterData = this.tableData.td.filter((item) => {
          return item.name.includes(this.searchName);
        });
      } else {
        this.filterData = this.tableData.td;
      }
    }
  },
  methods: {
    changeSort (index) { // changeSort function (index) 好像没区别
      if (this.sort.index === index) {
        this.sort.up = !this.sort.up;
      } else {
        this.sort.up = false;
        this.sort.index = index;
      }
      var sortName = this.tableData.map[index];
      this.filterData.sort((a, b) => {
        var res;
        if (sortName !== 'name') {
          res = parseInt(a[sortName]) - parseInt(b[sortName]);
        } else {
          res = a[sortName] === b[sortName] ? 0 : a[sortName] > b[sortName] ? 1 : -1;
        }
        return this.sort.up ? res : -res;
      });
    }
  },
  data () {
    return {
      sort: {
        index: 0,
        up: false
      },
      filterData: this.tableData.td.slice(),
      tipStyle: {
        width: '20px',
        height: '20px',
        top: '3px'
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  text-align: left;
  border-collapse: collapse;
  width: 100%;
  box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)
}

td, th {
  height: 40px;
  padding-left: 40px;
  border-bottom: 1px solid rgba(224, 224, 224, 1);
  line-height: 40px;
}

td {
  font-weight: normal;
}

a {
  text-decoration: none;
}

.columns-name {
  user-select:none;
  cursor: pointer;
}

.arrow {
  width: 20px;
  height: 20px;
  position: relative;
  top: 3px;
  transition: transform 0.2s;
}

.hide {
  opacity: 0;
}

.arrow-up {
  transform: rotate(180deg);
}

.item {
  background-size: 40px;
  background-position: left center;
  background-repeat: no-repeat;
  height: 100%;
  display: inline-block;
  padding-left: 70px;
}
</style>
