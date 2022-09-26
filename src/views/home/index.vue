<template>
  <div class="home">
    <div class="header">
      <div class="avatar">
        <img src="./img/avatar.png" />
      </div>
      <div class="name">小周的前进之路</div>
    </div>
    <div class="home-template">
      <div class="template-box">
        <a-card class="template-card" v-for="item in this.templateList.slice((page-1) * this.pageSize,this.page * this.pageSize)" :key="item.id" hoverable style="width: 240px" @click="templateHandler(item.to)">
        <img
          slot="cover"
          alt="example"
          src="./img/gameBox.png"
        />
        <a-card-meta title="GameBox" class="meta-GameBox">
          <template slot="description">
            <router-link to="/gameBox" >Click To Enter</router-link>
          </template>
        </a-card-meta>
      </a-card>
      </div>
      <a-pagination class="template-pagination" :total="this.templateList.length" @change="pageChange" :current="this.page" :defaultPageSize="this.pageSize" />
    </div>
    <router-view></router-view>
  
  </div> 
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      page:1,
      pageSize:8,
      templateList:[
        {id:1, name:'GameBox', img:'./img/gameBox.png',to:'/gameBox'},
        {id:2, name:'GameBox', img:'./img/gameBox.png',to:'/gameBox'},
        {id:3, name:'GameBox', img:'./img/gameBox.png',to:'/gameBox'},
        {id:4, name:'GameBox', img:'./img/gameBox.png',to:'/gameBox'},
        {id:5, name:'GameBox', img:'./img/gameBox.png',to:'/gameBox'},
        {id:6, name:'GameBox', img:'./img/gameBox.png',to:'/gameBox'},
        {id:7, name:'GameBox', img:'./img/gameBox.png',to:'/gameBox'},
        {id:8, name:'GameBox', img:'./img/gameBox.png',to:'/gameBox'},
        {id:9, name:'GameBox', img:'./img/gameBox.png',to:'/gameBox'},
        {id:10, name:'GameBox', img:'./img/gameBox.png',to:'/gameBox'},
        {id:11, name:'GameBox', img:'./img/gameBox.png',to:'/gameBox'},
        {id:12, name:'GameBox', img:'./img/gameBox.png',to:'/gameBox'},
        {id:13, name:'GameBox', img:'./img/gameBox.png',to:'/gameBox'},
        {id:14, name:'GameBox', img:'./img/gameBox.png',to:'/gameBox'}
      ],
    };
  },
  created() {
  },
  updated() {
    console.log(this.page);
  },
  computed: {},
  methods: {
    templateHandler(path){
      this.$router.push(path)
    },
    itemRender(current, type, originalElement) {
      if (type === 'prev') {
        return <a>Previous</a>;
      } else if (type === 'next') {
        return <a>Next</a>;
      }
      return originalElement;
    },
    pageChange(page){
      this.page = page;
    }
  },
};
</script>
<style lang="less" scoped>
  .home {
    .header {
      display: flex;
      width: 100%;
      height: 60px;
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      background-color: #f6f8fc07;
      backdrop-filter: saturate(50%) blur(8px);
      z-index: 99;
      font-weight: 500;
      font-size: 22px;
      line-height: 100%;
      padding: 0 10px;
      .avatar {
        margin-top: 10px;
        margin-right: 20px;
        width: 45px;
        height: 45px;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 45px;
        }
      }
      .name {
        display: flex;
        align-items: center;
      }
    }
    .home-template {
      margin-top: 100px;
        .template-box {
          width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 25%);
          .template-card {
            margin: 0 auto 30px;
          }
          .meta-GameBox {
            text-align: center;
          }
        }
        .template-pagination {
          text-align: center;
        }
      
    }
    
    
  }

</style>
