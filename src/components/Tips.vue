<template>
  <div class="tips" :style="option">
    <div class="msg">
        <span>{{msg}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tips',
  props: ['option', 'msg']
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tips {
    background: url('../assets/icon/question.png') no-repeat;
    background-size: 100%;
    background-position-y: 50%;
    display: inline-block;
    position: relative;
}

.msg {
    display: none;
    position: absolute;
    top: 30px;
    left: -100px;
    width: 200px;
    font-size: 14px;
    background: #666;
    padding: 10px;
    border-radius: 10px;
    color: #fff;
    line-height: 20px;
}
.tips:hover .msg {
    display: block;
}
</style>
