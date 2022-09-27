<template>
    <div class="home-template">
        <div class="template-box">
            <a-card 
            class="template-card" 
            v-for="item in this.templateList.slice((page-1) * this.pageSize,this.page * this.pageSize)" 
            :key="item.id" 
            hoverable 
            style="width: 240px" 
            @click="$tool.linkTo('inside',item.to)">
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
        <a-pagination 
        class="template-pagination" 
        :total="this.templateList.length" 
        @change="pageChange" 
        :current="this.page" 
        :defaultPageSize="this.pageSize" />
    </div>
</template>
<script>
export default{
    name:'home-template',
    data () {
        return {
                
        }
    },
    created () {
    },
    computed:{
    },
    methods:{
    }
}
</script>
<style lang='less'  scoped>
    .home-template {
      padding-top: 100px;
      padding-bottom: 60px;
      .ant-card-bordered {
        border: 0;
      }
        .template-box {
          width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 25%);
          .template-card {
            margin: 0 auto 30px;
            background-color: transparent;
            &:hover {
              background-color: #fff;
              transition: 1.5s;
            }
          }
          .meta-GameBox {
            text-align: center;
          }
        }
        .template-pagination {
          text-align: center;
        }
      
    }
</style>
