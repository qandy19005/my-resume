<template>
    <div class="left-side-box fade">
        <MyProfile />
        <Navbar />
    </div>
</template>

<script>
import MyProfile from './MyProfile'
import Navbar from './Navbar'
export default {
  components: {
    MyProfile,
    Navbar
  }
}
</script>

<style lang="scss">
.left-side-box{
  width: 500px;
  height: 100%;
  margin-left: 20px;
  text-align: center;
}

@media screen and (max-width:1200px){
    .left-side-box{
    margin: 0 auto;
    }
}
</style>
