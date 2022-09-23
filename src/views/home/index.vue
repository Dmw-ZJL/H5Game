<template>
  <div>
    home
    <router-link to="/gameBox" >gameBox</router-link>
    <router-view></router-view>
  </div> 
</template>
<script>
export default {
  name: "home",
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {},
};
</script>
<style lang="less" scoped></style>
