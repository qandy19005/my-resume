<template>
  <div>
    <p class="ml5">
      <span class="text-wrapper">
        <span class="letters">{{$t('lioshutan')}}</span>
        <span class="letters" style="font-size:18px"> 2020 / 02 - {{$t('now')}}</span>
      </span>
    </p>
    <!--<span class="ml5">{{$t('lioshutan')}}</span> <span style="font-size:18px"> 2020 / 02 - {{$t('now')}}</span>-->
    <p style="font-size:18px"> <i class="fas fa-user"></i> {{$t('front-end-dev')}}</p>
    <div class="grid-box" v-bind:style="[overrideGridStyles]">
        <div class="lioshutan-content-box">
            <h3>{{$t('essential-duties')}}</h3>
            <p><i class="fas fa-angle-right"></i> {{$t('front-end-web-dev')}}(HTML, CSS, Sass, Bootstrap, Javascript, Vue.js, Bootstrap Vue, NPM)</p>
            <p><i class="fas fa-angle-right"></i> {{$t('front-end-web-maintenance')}}(Coding Style, Code {{$t('optimization')}}, Bug {{$t('handle')}})</p>
            <p><i class="fas fa-angle-right"></i> RWD</p>
            <p><i class="fas fa-angle-right"></i> {{$t('with-bakc-end')}} RESTful APIs</p>
            <p><i class="fas fa-angle-right"></i> Git Flow {{$t('ci')}}</p>
            <p><i class="fas fa-angle-right"></i> {{$t('with-ui-ux')}}</p>
            <p><i class="fas fa-angle-right"></i> {{$t('e-commerce')}} (Wordpress, WooCommerce, LearnDash LMS, 外掛安全性, Oauth)</p>
            <p><i class="fas fa-angle-right"></i> {{$t('teamwork')}}</p>
            <p><i class="fas fa-angle-right"></i> {{$t('okr')}}</p>
            <br><hr><br>
            <h3><i class="fas fa-tasks"></i> {{$t('project')}}</h3>
            <p class="click-project" @click="showImg='wuwowEx'"><i class="far fa-file" ></i> WUWOW線上學習平台網站 <i class="far fa-hand-point-left"></i></p>
            <p class="click-project" @click="showImg='wuwowIn'"><i class="far fa-file"></i> 公司內部CRM管理網站 <i class="far fa-hand-point-left"></i></p>
            <p><i class="far fa-file"></i> Wordpress電商與自媒體平台</p>
            <p><i class="far fa-file"></i> 自媒體內容網站</p>
        </div>
        <div class="lioshutan-picture-box" @mouseover="imgMouseOver" @mouseleave="imgMouseLeave">
            <div v-if="showImg === 'wuwowEx'" class="fade">
            <h2>線上學習平台{{$t('image')}}</h2>
            <img src="./../assets/external-1.png"/>
            <img src="./../assets/external-2.png"/>
            </div>
            <div v-else-if="showImg === 'wuwowIn'" class="fade">
            <h2>內部CRM網站{{$t('image')}}</h2>
            <img src="./../assets/internal-1.jpg"/>
            <img src="./../assets/internal-2.jpg"/>
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
      overrideGridStyles: {},
      showImg: 'wuwowEx'
    }
  },
  methods: {
    imgMouseOver () {
      if (screen.width > 700) {
        this.overrideGridStyles = {
          'grid-template-columns': '25% 75%'
        }
      }
    },
    imgMouseLeave () {
      if (screen.width > 700) {
        this.overrideGridStyles = {
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
          duration: 3000,
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
    transition: all 0.4s ease 0s;
    span{
        font-size: 20px;
        color: #C63F3F;
    }
    .grid-box{
        display: grid;
        grid-template-columns: 70% 30%;
        .lioshutan-content-box{
            font-size:15px;
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
        .lioshutan-picture-box{
            text-align: center;
            h2{
                background: #313131;
                color: white;
                padding: 3px 5px 3px 5px;
                width: 250px;
                margin: 0 auto;
            }
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
@media screen and (max-width:1200px){
}

@media screen and (max-width:500px){
    div{
        .grid-box{
            grid-template-columns: 100%;
            .lioshutan-content-box{
                border-right: none;
                border-bottom: 3px solid #F2F2F2;
            }
            .lioshutan-picture-box{
                margin-top: 20px;
            }
        }
    }
}
@media (hover: none) {
    div{
        .grid-box{
            .lioshutan-content-box{
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
