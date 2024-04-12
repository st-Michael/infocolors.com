<template>
  <div>
    <section class="">
        <div class="hero-cont">
            <div class="herobg"></div>
            <div class="hero-info">
               
                <div class="title-area box-screen mt-10">
                    <div class="socials">
                        <img src="@/assets/icons/instagram.png" alt="in">
                        <img src="@/assets/icons/tiktok.png" alt="tk">
                        <img src="@/assets/icons/snapchat.png" alt="sn">
                        <img src="@/assets/icons/x.png" alt="x">
                        <img src="@/assets/icons/fb.png" alt="fb">
                    </div>
                    <div class="hero-title">
                        <h1 class="heading">WELCOME TO <br/>INFOCOLORS</h1>
                        <p class="sub-heading">A Trusted media for Variety of Information</p>
                    </div>
                    
                </div>
                <div class="val-offer">
                    <div class="val creative">
                        <div class="val-img">
                            <img src="@/assets/icons/Ink.png" alt="">
                        </div>
                        <div class="val-txt">
                            <h3>CREATIVITY</h3>
                            <p>We work with the best creatives in the industry</p>
                        </div>
                    </div>
                    <div class="val quality">
                        <div class="val-img">
                            <img src="@/assets/icons/Warranty.png" alt="">
                        </div>
                        <div class="val-txt">
                            <h3>QUALITY</h3>
                            <p>We bring top notch quality in all our deliveries </p>
                        </div>
                    </div>
                    <div class="val consistent">
                        <div class="val-img">
                            <img src="@/assets/icons/Rotate Right.png" alt="">
                        </div>
                        <div class="val-txt">
                            <h3>CONSISTENCY</h3>
                            <p>We are tireless and we stay consistent with our values</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script >

</script>

<style scoped>
.hero-cont{
    flex-direction: column;
    height: 100vh;
}

.herobg{
    background-image: url("../../assets/images/herobg.jpg");
    background: hsla(100%, 50%, 50%, 0.1);
    background-size: stretch;
    filter: brightness(27%) blur(13px) contrast(1021) saturate(115%);
        -webkit-filter: brightness(27%) blur(13px) contrast(101%) saturate(115%);
    height: 100%;
    
}

.hero-info{
    position: absolute;
    display: block;
    flex-direction: column;
    top: calc(30px);
    width: 100vw;
    align-items: center; 
}

.title-area{
    display: flex;
    flex-direction: row;
    /* display: grid;
    grid-template-columns: 1fr 2fr 1fr; */
    align-items: center;
    color: var(--white);
    margin-top: 180px;
    gap: 20%;
}
.hero-title h1{
    font-size: 140px;
    font-style: normal;
    font-weight: 700;
    line-height: 105px; /* 150% */
    letter-spacing: 2px;
}

.hero-title p{
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 50px; /* 291.667% */
    letter-spacing: 10px;
}

.socials{
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.val-offer{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 30px;
    margin-top: 180px;
}

.val{
    display: flex;
    flex-direction: row;
    width:250px;
    align-items: center;
    color: var(--white);
    gap: 10px;
}
.val-txt p{
    font-family: 'Poppins';
    font-size: 12px;
    font-style: normal;
    font-weight: 200;
    line-height: 19.5px; /* 139.286% */
}

.val-txt h3{
   
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20.8px; /* 130% */
    letter-spacing: 2px;
    text-transform: uppercase;
}

.val-img img{
    width: 70px;
}
</style>