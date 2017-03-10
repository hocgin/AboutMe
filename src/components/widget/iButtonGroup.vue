<template>
  <div class="iButtonGroup">
    <template v-for="item in 20">
      <iButton class="ibutton" _title="500PX" _icon="fa-camera-retro fa-lg"></iButton>
    </template>
  </div>
</template>


<script>
  import iButton from '@/components/widget/iButton'
  export default {
    name: 'iButtonGroup',
    components: {
      iButton
    }
  }
</script>


<style lang="scss" scoped>
  .iButtonGroup {
    margin-top: 1em;
    margin-bottom: 1em;
    .ibutton {
      margin: .9em;
    }
  }
</style>
