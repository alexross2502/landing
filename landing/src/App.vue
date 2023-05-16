<template>
  <div class="background">
    <PageHeader :isOpen="isOpen" @open="setOpenNavbarBurger" />
    <Consultation />
  </div>
  
</template>

<script>
import Consultation from './components/Consultation.vue';
import PageHeader from './components/PageHeader.vue'

export default {
  name: 'App',
  components: {
    PageHeader,
    Consultation
},
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    setOpenNavbarBurger() {
      this.isOpen = !this.isOpen
    },
  }
}
</script>

<style lang="scss">

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.background {
  background-image: linear-gradient(166deg, #fff, #f8f8f8);
}

</style>
