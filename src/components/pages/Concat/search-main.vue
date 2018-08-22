<template>
  <div class="search-main">
    <p search-title>热搜</p>
    <ul>
      <a href="" v-for="(search,i) in searchs.jump_keywords" :key="search.i" class="search__tag red">
        {{search.text}}
      </a>
      <a href="" v-for="(hot,n) in searchs.hot_keywords" :key="hot.n" class="search__tag">
        {{hot.text}}
      </a>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'search-main',
  data () {
    return {
      searchs: []
    }
  },
  methods: {
    getSearchs(){
      this.$http.get('/jup/keywords/search?plateform=m&zy_ids=c4_l4_1456_1186_1220_1406_1184_1217_1371_5_128_106_51_18_1391&item=').then( res => {
        this.searchs = res.data
        console.log(this.searchs)
      })
    }
  },
  created () {
    this.getSearchs()
  }
}
</script>

<style lang="scss" scoped>
  .search-main{
    padding: 0 0.14rem;
    margin-top: 0.2rem;
    p{
      color: #999;
    }
    .search__tag{
      // margin: 0.1rem 0.16rem;
      display: inline-block;
      margin-right: 10px;
      margin-top: 0.1rem;
      // font-size: 0.14rem;
      background: #f4f4f4;
      padding-top: 8px;
      padding-left: 0.1rem;
      padding-right: 0.1rem;
      padding-bottom: 10px;
    }
    .red{
      color: red;
    }
  }
</style>

