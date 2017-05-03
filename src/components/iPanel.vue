<template>
  <div class="iPanel">
    <div class="slider">
      <transition mode="out-in"
        enter-active-class="animated pulse" keep-alive>
        <router-view name="panel" :key="key"></router-view>
      </transition>
    </div>
    <ul class="slider-nav">
      <li v-for="(item, index) in project.length + 1">
        <router-link class="bullet" active-class="active" @mouseover.native="eventMove" :data-index="index" :to="'/0/' + (index - 1)"></router-link>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
  /*$boxWidth: 335px;*/
  $boxHeight: 210px;

  .iPanel {
    display: inline-block;
    .slider {
      /* 335px * number*/
      margin-top: 1em;
      height: $boxHeight;
    }

    .slider-nav {
      text-align: center;
      display: inline-block;

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
          cursor: pointer;
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
        let index = $this.data('index')
        if (index !== undefined) {
          this.$router.push({path: '/0/' + (index - 1)})
        }
      }
    },
    computed: {
      key () {
        return this.$route.path.replace(/\//g, '_')
      }
    },
    data () {
      return {
        project: this.$store.state.project
      }
    }
  }

</script>
