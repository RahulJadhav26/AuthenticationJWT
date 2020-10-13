<template>
  <div class="container">
      <div class="mx-auto alert alert-danger" style="width:18rem;">
          {{msg}}
      </div>
  </div>
</template>

<script>
export default {
  props: ['msg']
}
</script>

<style scoped>

</style>
