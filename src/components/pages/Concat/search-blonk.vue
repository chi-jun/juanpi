<template>
  <div class="search">
    <app-search-header></app-search-header>
    <app-search-main></app-search-main>
  </div>
</template>

<script>
import AppSearchHeader from './search-header'
import AppSearchMain from './search-main'
export default {
  name: 'search',
  components: {
    AppSearchHeader,
    AppSearchMain
  }
}
</script>


