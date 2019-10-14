<template>
  <div class="nav">
    <div class="main">
      <div class="title">缺氧百科</div>
      <div
        class="item"
        v-for="(item, key) in items"
        v-bind:key="key"
        v-bind:class="{ current: key === currentItem }"
        @click="goto(key)"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  computed: {
    currentItem: function () {
      return this.$route.path.split('/')[1];
    }
  },
  methods: {
    goto: function (name) {
      if (this.$route.path.split('/')[1] !== name) {
        this.$router.push({path: '/' + name});
      }
    }
  },
  data () {
    return {
      items: {
        elements: '元素',
        buildings: '建筑',
        critters: '生物和蛋',
        plants: '植物和种子',
        food: '食物',
        space: '太空',
        geysers: '喷泉和火山',
        medicine: '药物和疾病',
        others: '其他'
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: inherit;
  text-decoration: none;
}

.nav {
  background: #333;
  color: #fff;
}

.main {
  display: flex;
  height: 50px;
  width: 1200px;
  margin: 0 auto;
}

.title {
  font-weight: bold;
  font-size: 26px;
  line-height: 50px;
  padding: 0 80px;
  background: url('../assets/image/head.png') no-repeat;
  background-size: 50px;
}

.item {
  line-height: 50px;
  padding: 0 20px;
  position: relative;
}
.item:hover {
  cursor: pointer;
}
.item::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  width: 0;
  height: calc(100% - 2px);
  border-bottom: 2px solid #f28234;
  transition: 0.2s all linear;
}
.item:hover::before {
  width: 100%;
  left: 0;
  transition-delay: 0.1s;
}

.current::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% - 2px);
  border-bottom: 2px solid #f28234;
}
</style>
