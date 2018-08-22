<template>
  <div class="app-home-header">
    <div class="jTpZiT">
      <a href="" class="cDNDuJ">
        <span class="search-icon">
          <i class="fa fa-search"></i>
        </span>
        <span class="suo">搜索</span>
      </a>
      <a href="" class="jktfkc">
        <i class="fa fa-list"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home-header'
}
</script>
<style lang="scss" scoped>
  @import '../../../stylesheets/_base.scss';
    .app-home-header{
      width: 100%;
      height: 0.44rem;
      background: #fff;
      padding: 0 0.2rem;
      padding-right: 0;
      .jTpZiT {
          display: flex;
          width: 100%;
          height: 100%;
          -webkit-box-pack: justify;
          justify-content: space-between;
          -webkit-box-align: center;
          align-items: center;
          // background: #ddd;
          .cDNDuJ{
            position: relative;
            height: 0.28rem;
            flex: 1;
            border-radius: 6px;
            background-color: #f2f2f2;
            display: flex;
            align-items: center;
            font-size: 0.12rem;
            .search-icon{
              display: flex;
              margin: 0 5px;
              width: 0.3rem;
              height: 0.3rem;
              font-size: 0.15rem;
              justify-content: center;
              align-items: center;
              // color: rgb(153, 153, 153);
            }
            span{
              color: rgb(153, 153, 153);
            }
          }
          .jktfkc{
            display: flex;
            width: 0.44rem;
            height: 0.44rem;
            justify-content: center;
            font-size: 0.28rem;
            align-items: center;
            color: rgb(153, 153, 153);
          }
      }
    }
</style>
