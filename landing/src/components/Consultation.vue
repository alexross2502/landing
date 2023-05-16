<template>
<div class="container">
    <div class="content_header"><p class="header_text">LOGISTICS MANAGEMENT</p>
        <p class="header_text">SOFTWARE DEVELOPMENT</p></div>
    <div class="icon">
      <img :src="require(`../assets/imgs/decorativeRoutesPC.svg`)">
    </div>
</div>
</template>

<style scoped lang="scss">
@import "src/styles/styles.scss";

@media screen and (min-width: 1000px) {
    .container {
        position: relative;
        display: flex
    }

    .content_header{
        height: 1100px;
        //width: 710px;
        //margin-left: 252px;
        padding-top: 61px;
        padding-left: 252px;
    }
.icon{
    height: 522px;
    width: 415px;
    margin-left: auto;
}
.header_text{
    @include H1_Text()
}
}
</style>