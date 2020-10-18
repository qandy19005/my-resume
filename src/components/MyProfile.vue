<template>
  <div class="profile-box">
        <img class="my-picture" src="./../assets/me.jpg">
        <div class="introduction">
            <p class="my-name">張家銓 Asa</p>
            <p class="my-slogan">沒有做不到的事，做就對了</p>
        </div>
  </div>
</template>

<style lang="scss">
.profile-box{
    .my-picture{
        margin: 10px auto;
        border-radius: 50%;
        max-width: 500px;
        min-width: 100px;
        padding: 50px;
        cursor: pointer;
    }
    .introduction{
        margin: 0 auto;
        text-align: center;
        padding: 15px;
        width: 500px;
        background: #313131;
        color: #FFF;
        border-radius: 10px;
        box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.9);
        border-bottom: 8px solid #FFCE00;
        .my-name{
            font-size: 50px;
            font-weight: 900;
        }
        .my-slogan{
            font-size: 25px;
        }
    }
}

@media screen and (max-width:500px){
    .profile-box{
        .my-picture{
            padding: none;
            width: 90%;
        }
        .introduction{
            width: 280px;
            .my-name{
                font-size: 30px;
                font-weight: 900;
            }
            .my-slogan{
                font-size: 17px;
            }
        }
    }
}
</style>
