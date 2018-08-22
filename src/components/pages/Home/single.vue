<template>
  <div class="eAzbYJ" v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="5">
    <div v-for="good in goods" :key="good.id" class="goods-item">
      <a>
        <div class="good_img">
          <img :src="good.pic_url" class="idxkID">
          <img :src="good.corner" alt="" class="hovOpk">
        </div>
        <div class="cEQZgN">
          <span class="gVLSd">￥{{good.cprice}}</span>
          <span class="dgjaoA">￥{{good.oprice}}</span>
        </div>
        <div class="dFUsnh">
          <span>
            {{good.title}}
          </span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name:'single',
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
          page: ++ this.num,
          zy_ids: 'p8_c4_l4_1456_1186_1220_1406_1184_1217_1371_5_128_106_51_18_1391',
          app_name: 'zhe',
          catname: 'tab_hpdp',
          flag: 'tab_hpdp'
        }
      }).then(res => {
        this.goods =this.goods.concat(res.data.data.goods) 
        // console.log(this.goods);
      })
    },
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        // console.log('123')
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
      .goods-item{
        width: 49%;
        height: 2.43rem;
        background: #fff;
        // background: cyan;
        // border: 1px solid #ccc;
        margin-top: 4px;
        margin-right: 3px;
        .good_img{
          position: relative;
          .hovOpk {
            position: absolute;
            left: 0;
            top: 0;
            width: 0.45rem;
            height: 0.45rem;
          }
          .idxkID{
            width: 100%;
          }
          
        }
        .cEQZgN {
          padding: 0 0.08rem;
          height: 0.22rem;
          margin-top: 0.06rem; 
          align-items: center;
          // position: relative;
          span{
            line-height: 0.22rem;
            display: inline-block;
          }
          .gVLSd{
            font-size: 0.16rem;
            color:#ff464e;
            margin-right: 2px;
            // height: 100%;
          }
          .dgjaoA{
            text-decoration: line-through;
                color: #bbb;
          }
        }
        .dFUsnh{
          position: relative;
          // font-size: 0.13rem;
          color: #3b3b3b;
          padding-left: 0.08rem;
          padding-right:0.62rem;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          margin-bottom: 0.2rem;
        }
      }
    }
</style>


