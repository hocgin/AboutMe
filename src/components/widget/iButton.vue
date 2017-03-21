<template>
  <div class="iButton">
    <a class="link" :href="_href" :target="_target">
      <div v-html="_icon">{{ _icon }}</div>
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
      .title {
        margin-top: .2em;
        font-size: .65em;
        font-weight: 500;
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
