<template>
  <div class="app-home-header">
    <div class="jTpZiT">
      <a href="" class="cDNDuJ fl">

      </a>
      <a href="" class="jktfkc fr"></a>
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
          }
          .jktfkc{
            width: 0.44rem;
            height: 0.44rem;
          }
      }
    }
</style>
