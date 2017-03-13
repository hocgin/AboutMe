<template>
  <div class="iButton">
    <a class="link" :href="_href" :target="_target">
      <i class="fa" :class="_icon"></i>
      <div class="title">{{ _title }}</div>
    </a>
  </div>
</template>
<script>
  export default {
    name: 'iButton',
    props: {
      _title: {
        type: String,
        required: true
      },
      _icon: {
        type: String,
        required: true
      },
      _href: {
        type: String,
        default: '#'
      },
      _target: String
    }
  }
</script>
<style lang="scss" scoped>
  .iButton {
    display: inline-block;
    text-align: center;

    .link {
      text-decoration: none;
      color: #000;
      :hover{
      }
      .title {
        margin-top: .2em;
        font-size: .65em;
      }
    }
  }


</style>
<!--
 fa-lg
 fa-2x
 fa-3x
 fa-4x
 fa-5x
-->
