<template>
  <div class="iProject">
    <div class="photo">
      <img :src="_photo" data-src="holder.js/50x50" alt="">
      <div class="info">
        <p class="name">{{ _title }}</p>
        <p class="version">{{ _version }}</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .iProject {
      margin-top: .9em;
      .photo {
          img {
            border: solid 2px #fff;
            width: 50px;
            height: 50px;
            border-radius: 50%;
          }
          .info {
            display: inline-block;
            position: relative;
            top: -10px;
            margin-left: .4em;
            .name {
              font-weight: bolder;
            }
            .version {
              font-size: .7em;
              text-align: left;
              color: #96948f;
            }
          }
      }
  }
</style>
<script>
  export default {
    name: 'iProject',
    props: {
      _photo: {
        type: String
      },
      _title: {
        type: String,
        default: 'Project Name'
      },
      _version: {
        type: String,
        default: 'Version 1.0'
      }
    }
  }
</script>
