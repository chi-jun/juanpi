<template>
  <div class="classify-header">
    <router-link :to="{name: 'search'}" class="head">
      <span class="search-icon">
        <i class="fa fa-search"></i>
      </span>
      <input type="text" placeholder="搜索商品" autocomplete="off">
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'classify-header'
}
</script>

<style lang="scss" scoped>
  .classify-header{
    // width: 100%;
    height: 0.36rem;
    // background: #ddd;
    padding:0.05rem;
    margin:0.1rem;
    border: 1px solid #bbb;
    border-radius:3px;
    .head{
      display: flex;
      .search-icon{
        font-size: 0.2rem;
        color: #bbb;
        padding-right: 3px;
      }
      input{
        border: none;
        color: #999;
      } 
    }
    
  }
</style>
