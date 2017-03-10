<template>
  <hr class="iHr" :style="{color:_color}">
</template>
<script>
  export default {
    name: 'iHr',
    props: {
      _color: String
    }
  }
</script>
<style lang="scss" scoped>
  hr.iHr {
    border-style: dashed;
  }
</style>
