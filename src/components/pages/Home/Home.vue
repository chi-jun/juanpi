<template>
  <div class="home">
    <app-home-header></app-home-header>
    <app-home-banner></app-home-banner>
    <app-nav></app-nav>
  </div>
</template>

<script>
import AppHomeBanner from './Home-banner'
import AppHomeHeader from './Home-header'
export default {
  name: 'app-home',
  components: {
    AppHomeBanner,
    AppHomeHeader
  }
}
</script>

