<template>
  <div>
    <div class="goodsNavWrapper" >
      <span class="kJVijN" v-for="selected in selecteds" :key="selected.id">
        <router-link :to="{name:selected.name}" active-class="active">
          {{selected.title}}
        </router-link>
      </span>
    </div>
    
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'home-nav-wrapper',
  data () {
    return {
      selecteds: [
        {id:1,title: '精选专场',name: 'specialty'},
        {id:2,title:'精选单品',name:'single'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../stylesheets/_base.scss';
  .goodsNavWrapper{
    width: 100%;
    height: 0.44rem;
    background-color: #fff;
    overflow: hidden;
    margin-top: .1rem;
      span{
        height: 100%;
        display: inline-block;
        text-align: center;
        padding: 0 0.1rem;
        word-wrap: break-word;
          a{
            display: block;
            line-height: .44rem;
            font-size: 0.16rem;
            color: #333;
            height: 100%;
            &.active {
              color: $base-color;
              border-bottom: 4px solid$base-color;
            }
          }
      }
    
    
  }
</style>


