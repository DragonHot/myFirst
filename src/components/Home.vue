<template>
  <div class="hello">
    <header><Nav/></header>
    <body>
      <div class="body">
        <router-view/>
      </div>
    </body>
    <footer></footer>
  </div>
</template>

<script>
import Nav from '@/components/Nav';
import Food from '@/components/body/Food';
import Critters from '@/components/body/Critters';
import Http from '@/fetch/api.js';

export default {
  name: 'Home',
  components: {
    Nav,
    Food,
    Critters
  },
  beforeMount () {
    Http.getDefaultData()
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(1111, error);
      })
      .then(function () {
        // always executed
      });
  },
  mounted () {
    // console.log(66666, getDefaultData)
  },
  methods: {
    plus: function () {
      this.a++;
    }
  },
  data () {
    return {
      a: 1
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body {
  width: 1200px;
  margin: 0 auto;
}
</style>
