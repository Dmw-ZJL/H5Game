<template>
 <div class="gameBox">
    <div class="title">gameBox</div>
    <div class="gameBox-list">
        <ul>
            <li v-for="item in this.gameBoxList" :key="item.id" @click="$tool.linkTo('inside',item.to)">{{item.name}}</li>
        </ul>
    </div>
 </div>
</template>
<script>
export default{
    name:'gameBox',
    data () {
        return {
            gameBoxList:[
                {id:1,name:'getStar',to:"/gameBox/getStar"}
            ]
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
    .gameBox {
        .title {
            font-size: 50px;
            font-weight: 700;
            text-align: center;
            margin-bottom: 100px;
        }
        .gameBox-list {
            width: 700px;
            margin: 0 auto;
            margin-bottom: 180px;
            ul {
                display: flex;
                justify-content: center;
                margin: 0;
                padding: 0;
                li {
                width: 600px;
                height: 60px;
                list-style-type: none;
                background-color: #fff;
                }
            }
            
        }
    }
</style>
