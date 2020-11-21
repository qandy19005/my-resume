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
            <p :class="['click-project', showContent==='wuwowEx'?'project-selected':'']" @click="showContent='wuwowEx'"><i class="far fa-file" ></i> WUWOW線上學習平台網站 <i v-if="showContent!=='wuwowEx'" class="far fa-hand-point-left"></i></p>
            <div v-show="showContent==='wuwowEx'" class="fade object-detail">
                <ol>
                    <li>前後端分離開發</li>
                    <li>利用Vuex變數管理，Vue Router路徑管理，i18n語言管理，Axios串接後台資料</li>
                    <li>使用WebSocket技術，自動發送上課通知</li>
                    <li>使用LocalStorage與Cookie儲存前台相關資訊</li>
                    <li>Boostrap 與 Css RWD製作</li>
                    <li>Ｗebpack程式碼編譯、打包以及壓縮</li>
                </ol>
                <div class="detail-imgs images-wrapper">
                    <div @click="imgLightBox('wuwowEx',0)" class="image">
                        <img src="./../assets/external-1.png"/>
                        <p><i class="far fa-arrow-alt-circle-right"></i> 搭配 Vue Calendar 提高使用者體驗的訂課頁面</p>
                    </div>
                    <div @click="imgLightBox('wuwowEx',1)" class="image">
                        <img src="./../assets/external-2.png"/>
                        <p><i class="far fa-arrow-alt-circle-right"></i> 根據UI/UX設計師草稿圖，進行畫面排版與RWD製作</p>
                    </div>
                </div>
                <br>
            </div>
            <hr v-if="showContent==='wuwowEx'">
            <p :class="['click-project', showContent==='wuwowIn'?'project-selected':'']" @click="showContent='wuwowIn'"><i class="far fa-file"></i> 公司內部CRM管理網站 <i v-if="showContent!=='wuwowIn'" class="far fa-hand-point-left"></i></p>
            <div v-show="showContent==='wuwowIn'" class="fade object-detail">
                <p>開發方式跟使用技術與WUWOW線上學習平台網站相同</p>
                <div class="detail-imgs images-wrapper">
                    <div @click="imgLightBox('wuwowIn',0)" class="image">
                        <img src="./../assets/internal-1.jpg"/>
                        <p><i class="far fa-arrow-alt-circle-right"></i> 客服人員學員問題處理畫面，使用WebSocket技術發出告知訊息</p>
                    </div>
                    <div @click="imgLightBox('wuwowIn',1)" class="image">
                        <img src="./../assets/internal-2.jpg"/>
                        <p><i class="far fa-arrow-alt-circle-right"></i> 搭配 Vue Chartjs 讓資料以圖像的方式呈現</p>
                    </div>
                </div>
                <br>
            </div>
            <hr v-if="showContent==='wuwowIn'">
            <p :class="['click-project', showContent==='wushare'?'project-selected':'']" @click="showContent='wushare'"><i class="far fa-file"></i> Wordpress電商與自媒體平台 <i v-if="showContent!=='wushare'" class="far fa-hand-point-left"></i></p>
            <div v-show="showContent==='wushare'" class="fade object-detail">
                <ol>
                    <li>使用Wordpress內容管理系統</li>
                    <li>LearnDash課程系統建立線上課程</li>
                    <li>WooCommerce建立商品與購物車系統，並搭配藍新金流，完成購物流程</li>
                    <li>以Hook的方式，更改後台程式碼客製化內容</li>
                    <li>使用OAuth外掛，提供FB及Google第三方登入</li>
                </ol>
                <br>
            </div>
            <hr v-if="showContent==='wushare'">
        </div>
        <CoolLightBox
            :items="items"
            :index="index"
            @close="closeImgLightBox">
        </CoolLightBox>
  </div>
</template>

<script>
import anime from 'animejs/lib/anime.js'

export default {
  data () {
    return {
      showContent: '',
      items: [],
      index: null
    }
  },
  methods: {
    imgLightBox (object, index) {
      this.index = index
      if (object === 'wuwowEx') {
        this.items = [
          './../src/assets/external-1.png',
          './../src/assets/external-2.png'
        ]
      } else if (object === 'wuwowIn') {
        this.items = [
          './../src/assets/internal-1.jpg',
          './../src/assets/internal-2.jpg'
        ]
      }
    },
    closeImgLightBox () {
      this.items = [0]
      this.index = null
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
    .lioshutan-content-box{
        font-size:15px;
        padding: 5px;
        .object-detail{
            margin-left: 30px;
            .detail-imgs{
                padding: 5px;
                display: grid;
                grid-template-columns: 50% 50%;
                width:100%;
                div{
                    margin: 10px;
                    img{
                        cursor: pointer;
                        width: 85%;
                        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
                    }
                }
            }
        }
        .click-project:hover{
            cursor: pointer;
            color: #A50000;
            transition: all 0.4s ease 0s;
        }
        .project-selected{
            transition: all 0.4s ease 0s;
            color: #A50000;
            font-size: 20px;
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
}
@media screen and (max-width:1200px){
}

@media screen and (max-width:500px){
    div{
        .lioshutan-content-box{
            border-right: none;
            border-bottom: 3px solid #F2F2F2;
            .object-detail{
                .detail-imgs{
                    grid-template-columns: 100%;
                    div{
                        margin: 0;
                        img{
                            width: 90%;
                        }
                    }
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
