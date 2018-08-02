<template>
  <div class="home">
   <app-home-banner></app-home-banner>
   <app-nav></app-nav>
  </div>
</template>

<script>
import AppHomeBanner from './Home-banner'
export default {
  name: 'app-home',
  components: {
    AppHomeBanner
  }
}
</script>

