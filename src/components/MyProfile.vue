<template>
  <div class="profile-box" @mouseover="imgMouseOver" @mouseleave="imgMouseLeave">
    <img v-if="!showPictures" class="my-picture" src="./../assets/me.jpg">
    <div v-else-if="showPictures" class="my-picture pictures-box">
        <div class="pictuers-top">
            <img class="top-left-slide" src="./../assets/me-river.jpg">
            <img class="top-right-slide" src="./../assets/me-glacier.jpg">
        </div>
        <div class="pictuers-bottom">
            <img class="bottom-left-slide" src="./../assets/me-horse.jpg">
            <img class="bottom-right-slide" src="./../assets/me-cat.jpg">
        </div>
    </div>
    <div class="introduction">
        <h1 class="my-name">
            <span class="word">張家銓</span> <span class="word">Asa</span>
        </h1>
        <p class="my-slogan">{{$t('my-slogan')}}</p>
    </div>
  </div>
</template>

<script>
// import anime from 'animejs/lib/anime.es.js'
export default {
  data: function () {
    return {
      showPictures: false
    }
  },
  methods: {
    imgMouseOver () {
      if (screen.width > 700) {
        this.showPictures = true
      }
    },
    imgMouseLeave () {
      if (screen.width > 700) {
        this.showPictures = false
      }
    },
    textAnimation () {
    }
  },
  mounted () {
    this.textAnimation()
  }
}
</script>

<style lang="scss">
@mixin pictuers-img{
    max-width: 200px;
}
.profile-box{
    margin: 0 auto;
    margin-top: 50px;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.8);
    .my-picture{
        margin: 0px auto;
        max-width: 350px;
        min-width: 100px;
        min-height: 350px;
        overflow: hidden;
        cursor: pointer;
        .pictuers-top{
            display: grid;
            grid-template-columns: 50% 50%;
            img{
                @include pictuers-img;
            }
        }
        .pictuers-bottom{
            display: grid;
            grid-template-columns: 50% 50%;
            margin-bottom: 15px;
            img{
                @include pictuers-img;
            }
        }
    }
    .introduction{
        margin: -5px auto;
        text-align: center;
        width: 350px;
        background: #313131;
        color: #FFF;
        box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.9);
        padding: 5px;
        // border-bottom: 8px solid #FFCE00;
        .my-name{
            font-size: 30px;
            font-weight: 900;
        }
        .my-slogan{
            font-size: 20px;
        }
    }
}

.profile-box:hover{
    transition: all 0.4s ease 0s;
    box-shadow: 0px 0px 30px rgba(243, 205, 78, 0.8);
}
.pictures-box{
    background: #313131;
    img{
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.9);
    }
}
// .profile-box:hover .top-left-slide{
//     transition: 1s;
//     left: 0;
//     top: 0;
// }

.top-left-slide {
    margin-top: 20px;
    // position: relative;
    // left: -100px;
    // top: -100px;
    // transition: 1s;
}

// .profile-box:hover .top-right-slide{
//     transition: 1s;
//     right: 0;
//     top: 0;
// }

.top-right-slide {
    margin-top: 5px;
    // position: relative;
    // right: -100px;
    // top: -100px;
    // transition: 1s;
}

// .profile-box:hover .bottom-left-slide{
//     transition: 1s;
//     left: 0;
//     top: 0;
// }

.bottom-left-slide {
    margin-top: 15px;
    // position: relative;
    // left: -100px;
    // top: 100px;
    // transition: 1s;
}

// .profile-box:hover .bottom-right-slide{
//     transition: 1s;
//     right: 0;
//     top: 0;
// }

.bottom-right-slide {
    margin-top: 5px;
    // position: relative;
    // right: -100px;
    // top: 100px;
    // transition: 1s;
}

@media screen and (max-width:500px){
    .profile-box{
        width: 280px;
        .my-picture{
            padding: none;
            width: 280px;
            min-height: 0;
        }
        .introduction{
            width: 280px;
            .my-name{
                font-size: 25px;
                font-weight: 900;
            }
            .my-slogan{
                font-size: 15px;
            }
        }
    }
}
</style>
