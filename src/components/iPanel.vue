<template>
  <div class="iPanel">
    <div class="slider">
      <div class="box">
        <iButtonPanel :_icons="icons"></iButtonPanel>
      </div>
      <template v-for="item in project">
        <div class="box">
          <iProjectPanel :_project="item"></iProjectPanel>
        </div>
      </template>
    </div>
    <ul class="slider-nav">
      <li v-for="(item, index) in project.length + 1">
        <a class="bullet" :class="{active: index == 0}" :data-index="index" href="#" @mousemove.stop.prevent="eventMove"></a>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
  .iPanel {
    .slider {
      margin-top: 1em;
      .box {
        height: 205px;
        &:not(:first-child) {
            display: none;
         }
      }
    }

    .slider-nav {
      text-align: center;

    li {
      display: inline;
      margin-left: .1em;
      margin-right: .1em;

        .bullet {
          background-color: rgba(255, 110, 0, 0.49);
          border-radius: 50%;
          display: inline-block;
          text-indent: -9000px;
          overflow: hidden;
          height: 5px;
          width: 5px;
        }

        .bullet.active {
          background-color: #ff6e00;
        }

      }
    }
  }
</style>
<script>
  import iButtonPanel from '@/components/iButtonPanel'
  import iProjectPanel from '@/components/iProjectPanel'
  import $ from 'jquery'

  export default {
    name: 'iPanel',
    components: {
      iButtonPanel,
      iProjectPanel
    },
    methods: {
      eventMove: function (event) {
        let $this = $(event.target)
        if (!$this.hasClass('active')) {
          $('.slider-nav .bullet.active').removeClass('active')
          $this.addClass('active')
          $('.box').css('display', 'none').eq($this.data('index')).css('display', 'block')
        }
      }
    },
    data () {
      return {
        project: this.$store.state.project,
        icons: this.$store.state.icon
      }
    }
  }
</script>
