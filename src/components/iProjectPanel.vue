<template>
  <div class="iProjectPanel">
    <iProject :_title="project.name" :_version="project.version" :_photo="project.photo"></iProject>
    <div class="iButton2Panel">
      <template v-for="item in project.icons">
        <iButton2 class="iButton2" :_title="item.title" :_icon="item.icon" :_href="item.href"></iButton2>
      </template>
    </div>
  </div>
</template>

<script>
  import iProject from '@/components/widget/iProject'
  import iButton2 from '@/components/widget/iButton2'
  export default {
    name: 'iProjectPanel',
    components: {
      iProject,
      iButton2
    },
    watch: {
      $route () {
        this.project = this.$store.state.project[this.$route.params.index]
      }
    },
    data () {
      return {
        project: this.$store.state.project[this.$route.params.index],
        icons: this.$store.state.icon
      }
    }
  }
</script>
<style lang="scss" scoped>
  .iProjectPanel {
      background-color: #fff;
       .iButton2 {
          width: 50%;
          text-align: left;
          margin-top: .45em;
          margin-bottom: .45em;
          box-sizing: border-box;

          &:nth-child(odd) {
            padding-left: 1.45em;
          }

          &:nth-child(even) {
            padding-right: 1.45em;
          }
        }
    }

</style>
