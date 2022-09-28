<template>
  <div class="home">
    <div class="header">
      <div class="personal-details">
      <div class="avatar">
        <img src="./img/avatar.png" />
      </div>
      <div class="name">小周的前进之路</div>
      </div>
      <div class="link">
        <a-icon class="header-icon" type="ant-design" style="color: #448ef7" @click="$tool.linkTo('outside','https://1x.antdv.com/docs/vue/introduce-cn/')" />
        <a-icon class="header-icon" type="github" @click="$tool.linkTo('outside','https://github.com/Dmw-ZJL/H5Game')" />
      </div>
    </div>
    <router-view />
    <div class="footer"></div>
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
        // {id:2, name:'GameBox', img:'./img/gameBox.png',to:'/gameBox'},
        // {id:3, name:'GameBox', img:'./img/gameBox.png',to:'/gameBox'},
        // {id:4, name:'GameBox', img:'./img/gameBox.png',to:'/gameBox'},
        // {id:5, name:'GameBox', img:'./img/gameBox.png',to:'/gameBox'},
        // {id:6, name:'GameBox', img:'./img/gameBox.png',to:'/gameBox'},
        // {id:7, name:'GameBox', img:'./img/gameBox.png',to:'/gameBox'},
        // {id:8, name:'GameBox', img:'./img/gameBox.png',to:'/gameBox'},
        // {id:9, name:'GameBox', img:'./img/gameBox.png',to:'/gameBox'},
        // {id:10, name:'GameBox', img:'./img/gameBox.png',to:'/gameBox'},
        // {id:11, name:'GameBox', img:'./img/gameBox.png',to:'/gameBox'},
        // {id:12, name:'GameBox', img:'./img/gameBox.png',to:'/gameBox'},
        // {id:13, name:'GameBox', img:'./img/gameBox.png',to:'/gameBox'},
        // {id:14, name:'GameBox', img:'./img/gameBox.png',to:'/gameBox'}
      ],
    };
  },
  created() {
  
  },
  updated() {
  
  },
  computed: {},
  methods: {
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
    background-image: linear-gradient(90deg, #d3d5e2,#dddfef,#e2e4f0,#e2e5f0,#e2e5ef,#cccde0);
    // background-color: #e0e4f1;
    padding-top: 100px;
    position: relative;
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
      justify-content: space-between;
      filter: drop-shadow(2px 4px 6px #999);
      .personal-details {
        display: flex;
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
      .link {
        display: flex;
        align-items: center;
        .header-icon {
          font-size: 30px;
          margin-left: 15px;
        }
      }
    }
    
    .footer {
      width: 100%;
      height: 588px;
      background: url(./img/bg.jpeg) no-repeat 50% 100% #e0e4f1;
      background-size: cover;
      &::before {
        content: '';
        width: 100%;
        height: 40px;
        filter: blur(20px);
        background-color: #e2e4f0;
        position: absolute;
        bottom: 50%;
      }
    }
    
  }

</style>
