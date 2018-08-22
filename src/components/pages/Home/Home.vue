<template>
  <div class="home">
    <app-home-header></app-home-header>
    <app-home-banner></app-home-banner>
    <app-home-nav-wrapper></app-home-nav-wrapper>
    <app-nav></app-nav>
  </div>
</template>

<script>
import AppHomeBanner from './Home-banner'
import AppHomeHeader from './Home-header'
import AppHomeNavWrapper from './Home-nav-wrapper'
export default {
  name: 'app-home',
  components: {
    AppHomeBanner,
    AppHomeHeader,
    AppHomeNavWrapper
  }
}
</script>

<style lang="scss" scoped>
  .home{
    background: #f4f4f8;
  }
</style>


