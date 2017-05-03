<template>
  <div class="iButtonPanel">
    <template v-for="item in icons">
      <iButton class="iButton" :_title="item.title" :_icon="item.icon" :_href="item.href"></iButton>
    </template>
  </div>
</template>


<script>
  import iButton from '@/components/widget/iButton'
  export default {
    name: 'iButtonPanel',
    components: {
      iButton
    },
    data () {
      return {
        icons: this.$store.state.icon
      }
    }
  }
</script>


<style lang="scss" scoped>
  .iButtonPanel {

  .iButton {
    width: 25%;
    margin: .3em 0;
    box-sizing: border-box;
  }

  }
</style>
