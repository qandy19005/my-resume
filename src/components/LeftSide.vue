<template>
    <div class="left-side-box">
        <MyProfile />
        <Navbar :key="changeLang"/>
    </div>
</template>

<script>
import MyProfile from './MyProfile'
import Navbar from './Navbar'
export default {
  components: {
    MyProfile,
    Navbar
  },
  computed: {
    changeLang: function () {
      return this.$i18n.locale
    }
  }
}
</script>

<style lang="scss">
.left-side-box{
  width: 350px;
  height: 100%;
  margin-left: 30px;
  text-align: center;
}

@media screen and (max-width:1200px){
    .left-side-box{
    margin: 0 auto;
    }
}
</style>
