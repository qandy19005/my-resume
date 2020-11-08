<template>
  <div class="skill-box">
    <h1>{{$t('programmingLang')}}</h1>
    <div class="skill-content-box">
      <div class="shadow-box">
        <h2>{{$t('frontEnd')}}</h2>
        <p><i class="fab fa-html5"></i> HTML</p>
        <p><i class="fab fa-css3-alt"></i> Css, Sass/Scss, Bootstrap, Uikit</p>
        <p><i class="fab fa-js-square"></i> Javascript(ES6), jQuery</p>
        <p><i class="fab fa-vuejs"></i> Vue.js, Vuex, Vue Router, Bootstrap Vue, Vue cli</p>
      </div>
      <div class="background-box">
        <h2>{{$t('backEnd')}}</h2>
        <p><i class="fab fa-php"></i> PHP, Smarty</p>
        <p><i class="fab fa-node-js"></i> Node.js, Express</p>
        <p><i class="fas fa-database"></i> MySQL</p>
      </div>
    </div>
    <hr><br>
    <h1>{{$t('technologyTool')}}</h1>
    <div class="skill-content-box">
      <div class="background-box">
        <p>- RWD, SEO, SPA</p>
        <p>- RESTful API / Ajax / Axios</p>
        <p>- Coding style / ESLint</p>
        <p>- TDD,  Jest, Robot Framework, Unit / UI test</p>
        <p>- Http / WebSocket</p>
        <p>- SMTP server</p>
        <p>- WebRTC / QRcode</p>
        <p>- Line Bot, Google Map API</p>
        <p>- Session / Cookie / LocalStorage</p>
      </div>
      <div class="shadow-box">
        <p>- Scrum / OKR</p>
        <p>- Windows / Linux / Mac</p>
        <p>- Git / Git flow</p>
        <p>- Aws(EC2) / Heroku</p>
        <p>- WordPress CMS</p>
        <p>- Google Analytics / Google Search Console</p>
        <p>- Postman / Insomina</p>
        <p>- Appserv / Xampp / MAMP</p>
        <p>- Npm / Webpack </p>
        <p>- Appium</p>
        <p>- Jira / Trello / bitrix24</p>
        <p>- Chrome / Vue dev tool</p>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.skill-box{
  padding: 10px;
  width:100%;
  h1{
    font-size: 25px;
  }
  .skill-content-box{
    cursor: pointer;
    display: grid;
    grid-template-columns: 50% 50%;
    font-size: 15px;
    i{
      font-size: 22px;
    }
    .fa-html5{
      margin-right: 2px;
      color: #EC691D;
    }
    .fa-css3-alt{
      margin-right: 2px;
      color: #264DBF;
    }
    .fa-js-square{
      color: #FFCE00;
    }
    .fa-vuejs{
      color: #4ABA4F;
    }
    .fa-php{
      color: #B18AE6;
    }
    .fa-node-js{
      margin-right: 8px;
      color: #4ABA4F;
    }
    .fa-database{
      margin-right: 8px;
      color: #D75724;
    }
    div{
      padding:20px;
    }
  }
  .shadow-box{
    background: #FFF;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  }
  .background-box{
    background: #313131;
    color: white;
  }
  hr{
    border:3px solid #FFCE00;
    background: #FFCE00;
  }
}
@media screen and (max-width:1200px){
  .skill-box{
    padding: 0;
    .skill-content-box{
        div{
        padding: 15px;
      }
    }
  }
}

@media screen and (max-width:500px){
  .skill-box{
    h1{
    font-size: 20px;
    }
    .skill-content-box{
      font-size: 15px;
      h2{
        font-size:18px;
      }
      grid-template-columns: 100%;
    }
  }
}
</style>
