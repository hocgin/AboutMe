<template>
  <div class="iButton2Group">
    <template v-for="item in 10">
      <iButton2 class="ibutton2" _title="500PX" _icon="fa-camera-retro fa-lg"></iButton2>
    </template>
  </div>
</template>


<script>
  import iButton2 from '@/components/widget/iButton2'
  export default {
    name: 'iButton2Group',
    components: {
      iButton2
    }
  }
</script>


<style lang="scss" scoped>
  .iButton2Group {
    margin-left: 1em;
    margin-right: 1em;
    .ibutton2 {
      width: 50%;
      text-align: left;
      margin-top: .45em;
      margin-bottom: .45em;
    }
  }
</style>
