<template>
  <div>
    <p class="ml5">
      <span class="text-wrapper">
        <span class="letters">{{$t('hipower')}}</span>
        <span class="letters" style="font-size:18px"> 2019 / 01 - 2020 / 06</span>
      </span>
    </p>
    <p style="font-size:18px"><i class="fas fa-user"></i> {{$t('full-stack-dev')}}</p>
    <div class="grid-box" v-bind:style="[overrideStyles]">
        <div class="hipower-content-box">
            <h3>{{$t('essential-duties')}}</h3>
            <p><i class="fas fa-angle-right"></i> {{$t('independent-dev')}}</p>
            <p><i class="fas fa-angle-right"></i> {{$t('front-end-web-dev')}} (HTML, CSS, JavaScript, Vue.js, jQuery, NPM, Webpack)</p>
            <p><i class="fas fa-angle-right"></i> RWD (Uikit/Bootstrap/Media Query)</p>
            <p><i class="fas fa-angle-right"></i> SPA (Vue.js, Vue Router)</p>
            <p><i class="fas fa-angle-right"></i> {{$t('multiple-languages')}}(i18n)</p>
            <p><i class="fas fa-angle-right"></i> {{$t('back-end-dev')}} (PHP,Smarty, MySQL(PDO))</p>
            <p><i class="fas fa-angle-right"></i> {{$t('website-setup')}} (Appserv)</p>
            <p><i class="fas fa-angle-right"></i> WebSocket Server & API(Nodejs, PHP) </p>
            <p><i class="fas fa-angle-right"></i> Mocha & should unit test</p>
            <p><i class="fas fa-angle-right"></i> API (Google Map / VXG )</p>
            <p><i class="fas fa-angle-right"></i> Line Bot / SMTP server </p>
            <p><i class="fas fa-angle-right"></i> WebRTC / QRcode</p>
            <br><hr><br>
            <h3><i class="fas fa-tasks"></i> {{$t('project')}}</h3>
            <p><i class="far fa-file"></i> 國防部車辨系統 : WebSocket API, {{$t('hi-pro-1')}}</p>
            <p class="click-project" @click="showImg = 'ops'"><i class="far fa-file"></i> 營運平台系統 : {{$t('hi-pro-2')}}<i class="far fa-hand-point-left"></i></p>
            <p class="click-project" @click="showImg = 'police'"><i class="far fa-file"></i> 台南刑大系統 : {{$t('hi-pro-3')}}<i class="far fa-hand-point-left"></i></p>
            <p><i class="far fa-file"></i> 高雄落石系統 : {{$t('hi-pro-3')}}</p>
            <p><i class="far fa-file"></i> 警察贓車系統 : {{$t('back-end-dev')}}</p>
            <p><i class="far fa-file"></i> 南投環保局,台南環保局,台南落石系統,南投落石系統 : {{$t('hi-pro-3')}}</p>
        </div>
        <div class="hipower-picture-box" @mouseover="imgMouseOver" @mouseleave="imgMouseLeave">
            <div v-if="showImg === 'ops'" class="fade">
            <h2>營運平台系統{{$t('image')}}</h2>
            <div style="display:grid; grid-template-columns: 50% 50%;">
            <img src="./../assets/ops-1.png"/>
            <img src="./../assets/ops-2.png"/>
            </div>
            </div>
            <div v-else-if="showImg === 'police'" class="fade">
            <h2>台南刑大系統{{$t('image')}}</h2>
            <img src="./../assets/police-2.png"/>
            <img src="./../assets/police-1.png"/>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js'
export default {
  data () {
    return {
      overrideStyles: {},
      showImg: 'ops'
    }
  },
  methods: {
    imgMouseOver () {
      if (screen.width > 700) {
        this.overrideStyles = {
          'grid-template-columns': '30% 70%'
        }
      }
    },
    imgMouseLeave () {
      if (screen.width > 700) {
        this.overrideStyles = {
          'grid-template-columns': '70% 30%'
        }
      }
    },
    textAnimation () {
      const textWrapper = document.querySelector('.ml5')
      textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>")

      anime.timeline({ loop: true })
        .add({
          targets: '.ml5',
          translateY: ['1.1em', 0],
          translateZ: 0,
          duration: 2500,
          delay: (el, i) => 500 * i
        }).add({
          targets: '.ml5',
          opacity: 0,
          duration: 1000,
          easing: 'easeOutExpo',
          delay: 300000
        })
    }
  },
  mounted () {
    this.textAnimation()
  }
}
</script>

<style lang="scss" scoped>
div{
    span{
        font-size: 20px;
        color: #C63F3F;
    }
    .grid-box{
        display: grid;
        grid-template-columns: 70% 30%;
        .hipower-content-box{
            font-size: 15px;
            padding: 5px;
            border-right: 3px solid #F2F2F2;
            .click-project:hover{
              cursor: pointer;
              color: #A50000;
              font-size: 17px;
              transition: all 0.4s ease 0s;
            }
            h3{
                background: #313131;
                color: white;
                width:200px;
                padding: 3px 3px 3px 10px;
                margin-bottom: 5px;
            }
            hr{
                border:3px solid #FFCE00;
                background: #FFCE00;
            }
        }
        .hipower-picture-box{
            h2{
                background: #313131;
                color: white;
                padding: 3px 5px 3px 5px;
                width: 250px;
                margin: 0 auto;
            }
            text-align: center;
            img{
                cursor: pointer;
                width: 85%;
                margin: 5px;
                box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
            }
            img:hover{
                transition: all 0.4s ease 0s;
                width: 95%;
            }
        }
    }
}
@media screen and (max-width:500px){
    div{
        .grid-box{
            grid-template-columns: 100%;
            .hipower-content-box{
                border-right: none;
                border-bottom: 3px solid #F2F2F2;
            }
            .hipower-picture-box{
                margin-top: 20px;
            }
        }
    }
}
@media (hover: none) {
    div{
        .grid-box{
            .hipower-content-box{
                .click-project:hover{
                    color: inherit;
                    font-size: 15px;
                }
            }
        }
    }
}
.ml5 {
  position: relative;
  font-weight: 900;
  font-size: 20px;
  color: #C63F3F;
}

.ml5 .text-wrapper {
  position: relative;
  display: inline-block;
  padding-top: 0.2em;
  padding-right: 0.05em;
  padding-bottom: 0.1em;
  overflow: hidden;
}

.ml5 .letter {
  display: inline-block;
  line-height: 1em;
}
</style>
