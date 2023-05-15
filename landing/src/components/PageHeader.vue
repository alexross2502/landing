<template>
    <div class="header">
      <div class="logo">
        <div class="logo_content"><img :src="require(`../assets/imgs/headerLogo.svg`)"></div>
      </div>
      <div  class="content" v-if="!isOpen">
        <div class="content_text">Benefits</div>
        <div class="content_text">Advantages</div>
        <div class="content_text">Achievements</div>
      </div>
      <div class="languages">
        <div class="language_content">
          <div class="language_content-item">DE</div>
          <div class="language_content-item">EN</div>
        </div>
      </div>
      <div >
        <div v-if="!isOpen" @click="$emit('open')" ></div>
      </div>
    </div>
  </template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {}
  },
}
</script>

<style scoped lang="scss">
@import "src/styles/styles.scss";

@media screen and (min-width: 1200px) {
  .header {
    display: flex;
    height: 144px;
    align-items: center;
    justify-content: center;
  }
  .logo{
    margin-right: auto;
    .logo_content{
      width: 204px;
        height: 64px;
        margin-left: 53px;
    }
  }

  .content{
    display: flex;
      justify-content: center;
      .content_text {
        width: 144px;
        height: 23px;
        @include Header_Text();
      }
  }

  .languages {
      margin-left: auto;

      .language_content {
        display: flex;
        margin-right: 221px;

        .language_content-item {
          width: 60px;
          height: 24px;
          @include Header_Text();
        }
      }
    }
 
}
</style>