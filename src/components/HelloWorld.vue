<template>
  <div class="hello">
    <div class="t">
      100%
      <div class="s">
        ss
      </div>
    </div>
    {{t}}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      t: this.$store.state.test,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  html, body {
    margin:0;
    padding: 0;
  }
  .t {
    width:750px;
    background: red;
    .s {
      width: 10px;
      height:20px;
      background: blue;
    }
  }

</style>
