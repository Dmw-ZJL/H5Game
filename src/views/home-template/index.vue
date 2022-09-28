<template>
    <div class="home-template">
        <div class="template-box">
            <a-card 
            class="template-card" 
            v-for="item in this.$parent.templateList.slice((page-1) * this.$parent.pageSize,this.$parent.page * this.$parent.pageSize)" 
            :key="item.id" 
            hoverable 
            style="width: 240px" 
            @click="$tool.linkTo('inside',item.to)">
            <img
            slot="cover"
            alt="example"
            src="./img/gameBox.png"
            />
            <a-card-meta :title="item.name" class="meta-GameBox">
            <template slot="description">
                <router-link :to="item.to" >Click To Enter</router-link>
            </template>
            </a-card-meta>
        </a-card>
        </div>
        <a-pagination 
        class="template-pagination" 
        :total="this.$parent.templateList.length" 
        @change="pageChange" 
        :current="this.$parent.page" 
        :defaultPageSize="this.$parent.pageSize" />
    </div>
</template>
<script>
export default{
    name:'home-template',
    props:[''],
    data () {
        return {
                aaa:'888'
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
