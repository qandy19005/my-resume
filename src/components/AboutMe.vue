<template>
  <div class="about-box">
    <div class="my-info">
      <h1>{{$t('about')}}</h1><br>
      <p><i class="fas fa-briefcase"></i> {{$t('position')}} <a href="https://github.com/qandy19005?tab=repositories" target="_blank"><i class="fab fa-github"></i></a></p>
      <p><i class="fas fa-envelope"></i> qandy19005@gmail.com</p>
      <p><i class="fas fa-phone-square-alt"></i> 0980780087</p>
      <p><i class="fas fa-map-marker-alt"></i> {{$t('taichung')}} / {{$t('taiwan')}}</p>
    </div>
    <div class="autobiography-box">
      <h2>{{$t('autobiography')}}</h2>
      <div class="autobiography-content">
      <p>{{$t('cutobiography-content')}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.about-box{
  .my-info{
    cursor: pointer;
    width:90%;
    margin: 20px auto;
    font-size: 20px;
    border-bottom: 4px solid #FFCE00;
    h1{
      font-size: 30px;
    }
    p{
      .fa-briefcase{
        color: #713315;
      }
      .fa-envelope{
        color: #313131;
      }
      .fa-phone-square-alt{
        color: #313131;
      }
      .fa-map-marker-alt{
        color:#C70039;
      }
    }
  }
  .autobiography-box{
    cursor: pointer;
    width: 90%;
    margin: 20px auto;
    h2{
      font-size: 25px;
    }
    .autobiography-content{
      padding: 20px;
      font-size: 18px;
      color: white;
      background: #313131;
      border-bottom: 4px solid #FFCE00;
    }
  }
}
@media screen and (max-width:1200px){
    .about-box{
      .my-info{
        margin: 10px auto;
        h1{
          font-size: 40px;
        }
      }
      .autobiography-box{
        margin: 10px auto;
        h2{
          font-size: 35px;
        }
        p{
          font-size: 22px;
        }
      }
    }
}

@media screen and (max-width:500px){
    .about-box{
      .my-info{
        width:100%;
        h1{
          font-size: 30px;
        }
      }
      .autobiography-box{
        width:100%;
        h2{
          font-size: 25px;
        }
        p{
          font-size: 15px;
        }
      }
    }
}
</style>
