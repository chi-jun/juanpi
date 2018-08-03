<template>
  <div ref="el" class="concat app-home-banner swiper-container">
    <div class="swiper-wrapper">
      <div v-for="(banner,i) in banners" :key="i" class="swiper-slide loading-img">
        <img :src="banner.pic" alt="" class="swiper-lazy">
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </div>
    </div>
    <div class="swiper-pagination swiper-pagination-white"></div>
  </div>
</template>


<script>
import Vue from 'vue'
import Swiper from 'swiper'
export default {
  name: 'app-concat',
  data () {
    return {
      banners: []
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
        console.log(res)
        this.banners = res.data.adsInfo.slide_ads.config.slide
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
    img{
      width: 100%;
      height: 1.6rem;
    }
    
    
  }
</style>
