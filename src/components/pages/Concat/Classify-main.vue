<template>
  <div class="classify-main">
    <div class="list-left">
      <div class="classify-item" v-for="(classify,v) in classifys" :key="classify.v">
        <p>{{classify.name}}</p>
      </div>
    </div>
    <div class="list-r">
      <div v-for="cate of classifys[0].secondCateList" :key="cate.id" class="cate">
        <a href="">
          <img :src="url+cate.icon">
          <span>{{cate.name}}</span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'ClassifyMain',
  data () {
    return {
      classifys: [],
      url:'http://s2.juancdn.com'
    }
  },
  methods: {
    getClassify(){
      this.$jsonp('/jup/cate/catelist',{
          pf: 8,
          area: 4,
          bi: 222,
          dtype: 'jsonp',
          _: 1533716631228,
          callback: 'jsonp2'
      }).then(res=> {
        
        this.classifys = res
        // console.log(this.classifys[0].secondCateList)
      })
    }
  },
  created(){
    this.getClassify()
  }
}
</script>

<style lang="scss" scoped>
  .classify-main{
    display: flex;
    // height: 10rem;
    .list-left{
      width: 25%;
      background: #f9f9f9;
      
      .classify-item{
        width: 0.93rem;
        height: 0.45rem;
        border-left: 4px solid #f9f9f9;
        border-bottom: 1px solid #ebebeb;
        p{
          text-indent: 0.24rem;
          line-height: 0.45rem;
          font-size: 0.16rem
        }
      }
    }
    .list-r{
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      margin-top: 0.2rem;
      .cate{
        width: 33.333%;
        padding: 0 4% 0.1rem;
        text-align: center;
        a{
          
          img{
            width: 100%;
            // height: 0.58rem;
          }
          span{
            line-height: 0.24rem;
          }
        }
      }
      
    }
  }
</style>
