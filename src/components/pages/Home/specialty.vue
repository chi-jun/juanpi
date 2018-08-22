<template>
  <div class="eAzbYJ" v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="5">
    <div v-for="good in goods" :key="good.id" class="goods-list">
      <a>
        <div class="good_img">
          <img :src="good.pic_url" class="idxkID">
          <div class="lcVTjL">
            <img :src="good.logo_url" alt="" >
          </div>
          <img :src="good.corner" alt="" class="hovOpk">
        </div>
        <p class="cEQZgN">{{good.coupon_tips}}</p>
        <p class="dFUsnh">
          <span class="fl title">{{good.title}}</span>
          <span class="fr time">{{good.time_left}}</span>
        </p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name:"specialty",
  data () {
    return {
      goods: [],
      num: 0,
      // page: 1
    }
  },
  methods: {
    getGoods(){
      this.$http.get('https://webservice.juanpi.com/api/getGoods',{
        params: {
          page: ++this.num,
          zy_ids: 'p8_c4_l4_1456_1186_1220_1406_1184_1217_1371_5_128_106_51_18_1391',
          app_name: 'zhe',
          catname: 'tab_hpzc',
          flag: 'tab_hpzc'
        }
      }).then(res => {
        // console.log(res)
        this.goods =this.goods.concat(res.data.data.goods) 
        // console.log(this.goods);
      })
    },
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        this.getGoods()
        this.loading = false;
      });
}
  },
  created(){
    this.getGoods()
  }
}
</script>

<style lang="scss" scoped>
  .eAzbYJ {
    
    width: 100%;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    flex-wrap: wrap;
    .goods-list{
      width: 49%;
      height: 2.43rem;
      background: #fff;
      // background: cyan;
      // border: 1px solid #ccc;
      margin-top: 4px;
      margin-right: 3px;
      .good_img{
        position: relative;

        .idxkID{
          width: 100%;
        }
        .lcVTjL{
          position: absolute;
          width: 0.5rem;
          height: 0.25rem;
          bottom: -0.125rem;
          right: 0.1rem;
          background: #fff;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .hovOpk{
          position: absolute;
          left: 0;
          top: 0;
          width: 0.45rem;
          height: 0.45rem;
        }


      }
      
      .cEQZgN {
          padding: 0 0.12rem;
          margin-top: 0.06rem;
          font-size: 0.16rem;
          color: #ff464e;
          align-items: center;
      }
      .dFUsnh{
        font-size: 0.14rem;
        color: #3b3b3b;
        padding-left: 0.12rem;
        overflow: hidden;
        margin-bottom: 0.16rem;
        .title{
          width: 1.2rem;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .time{
          color: #bbb;
        }
      }
      
    }
}
</style>
