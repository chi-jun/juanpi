<template>
  <div class="search-header">
    <div class="fl search-input">
      <span class="search-icon">
        <i class="fa fa-search"></i>
      </span>
      <input type="text" placeholder="搜索商品" autocomplete="off">
      <span class="xfd fr">
        x
      </span>
    </div>
    <a @click="$router.go(-1)" class="fr">取消</a>
  </div>
</template>

<script>
export default {
  name:'search-header'
}
</script>

<style lang="scss" scoped>
  .search-header{
    border-bottom: 1px solid #ccc;
    height: .45rem;
    .search-input{
      // height: 100%;
      width: 3.1rem;
      margin-left: .12rem;
      margin-top: 0.1rem;
      line-height: 100%;
      border-radius:3px;
      border: 1px solid #bbb;
      display: flex;
      background-color: #f2f2f2;
      i{
        line-height: 0.18rem;
        
      }
      input{
        padding-left: 3px;
        border: none;
        line-height: 0.22rem;
        // font-size: 0.16rem
        width: 2.8rem;
        background-color: #f2f2f2;
      }
      .search-icon{
        padding: 3px;
      }
      .xfd{
        line-height:0.22rem;
        width: 0.16rem;
        text-align: center; 
      }
    }
    a{
      width: .48rem;
      line-height: .44rem;
      text-align: center;
    }
  }
</style>