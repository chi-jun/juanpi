<template>
  <div class="concat">
    <div ref="el" class="app-home-banner swiper-container">
      <div class="swiper-wrapper">
        <div v-for="(banner,i) in banners" :key="i" class="swiper-slide loading-img">
          <img :src="banner.pic" alt="" class="swiper-lazy">
          <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination-white"></div>
    </div>
    <div class="sc-iRbamj idVxVO">
      <div v-for="(multi,i) in multis" :key="i">
        <img :src="multi.child['0'].pic" alt="">
      </div>
    </div>
    <div class="sc-iRbamj qykHL">
      <img :src="cube.pic" alt="">
    </div>
  </div>
  <!-- data.adsInfo.block[""0""].multi_block[1].data[""0""].child[""0""].pic

  data.adsInfo.block[""0""].multi_block[""0""].data[""0""].child[""0""].pic -->
</template>


<script>
import Vue from 'vue'
import Swiper from 'swiper'
export default {
  name: 'app-concat',
  data () {
    return {
      banners: [],
      multis: [],
      cube: []
    }
  },
  methods: {
    getBanners () {
      this.$http.get('https://webservice.juanpi.com/api/getIndexFirstPaintInfo',{
        params: {
          cid: '',
          zy_ids: 'p8_c4_l4_1456_1186_1220_1406_1184_1217_1371_5_128_106_51_18_1391',
          app_name: 'zhe',
          app_version:'' , 
          platform:'' ,
          catname: 'newest_zhe',
        }
      }).then(res => {
        this.banners = res.data.adsInfo.slide_ads.config.slide
        this.multis = res.data.adsInfo.block["0"].multi_block["0"].data
        this.cube = res.data.adsInfo.block["0"].multi_block["1"].data["0"].child["0"]
        // console.log(banners)
        Vue.nextTick(() => {
          new Swiper(this.$refs.el, {
            pagination: {
              el: '.swiper-pagination',
              //点击下标切换
              clickable: true,
            },
            lazy: true,
            //自动切换
            autoplay: {
              delay: 3000,
              disableOnInteraction: false,
            },
            loop:true,
          })
        })
      })
    }
  },
  created (){
    this.getBanners()
  }
}
</script>

<style lang="scss" scoped>
  .concat{
    display: flex;
    flex-direction: column;
    .app-home-banner{
      margin: 0 0 ;
      img{
        width: 100%;
        height: 1.6rem;
      }
    }
    .sc-iRbamj{
      display: flex;
      div{
        flex: 25%;
        height: 0.83rem;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
    .qykHL{
      width: 100%;
      height: 1.4rem;
      margin-bottom:0.1rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
    
    // .data.adsInfo.block["0"].multi_block["0"].data["0"].child["0"].pic
    
    
  }
</style>
