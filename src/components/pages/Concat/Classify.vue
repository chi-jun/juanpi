<template>
  <div class="classify">
    <app-classify-header></app-classify-header>
    <app-classify-main></app-classify-main>
    <app-nav></app-nav>
  </div>
</template>
<script>
import AppClassifyHeader from './Classify-header'
import AppClassifyMain from './Classify-main'
export default {
  name: 'classify',
  components: {
    AppClassifyHeader,
    AppClassifyMain
  }
}
</script>
