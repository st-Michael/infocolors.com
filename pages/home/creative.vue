<template>
  <div>
    <section>
        <div class="sec1">
            <div class=" fancy-txt-img">
                <div class="fancy-items fancy-txt">
                    <div class="fncy-heading">
                        <h1 > <span class="fncy">WE LOVE</span>  &ensp;&ensp;</h1>
                        <h1>GREAT ART</h1>
                        <h1>& CREATIVITY</h1>
                    </div>
                    <div class="fncy-body">
                        <p>Infocolors is a media brand dedicated to bringing the best of arts and creativity to its audience. We use our creative contents and channels to inform, educate and entertain our audience.</p>
                    </div>
                    
                </div>
                <div class="fancy-items fancy-img">
                    <img src="@/assets/images/sec01.jpg" alt="">
                </div>
            </div>
            <div class="lndscp-img">
                <img src="@/assets/images/sec1.jpg" alt="">
            </div>
        </div>
    </section>
  </div>
</template>

<script>

</script>

<style scoped>
.sec1{
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 80px 0px;
}

.fancy-txt-img{
    display: flex;
    flex-direction: row;
}

.fancy-items{
    width: 590px;
    text-align: right;
}

.fancy-txt h1 {
    font-family: Roboto;
    color: var(--white);
    font-size: 90px;
    font-style: normal;
    font-weight: 400;
    line-height: 80px;
    letter-spacing: 2px;
 
}

.fncy{
    color: #000;
    text-shadow: 1px 1px 0 #fff,
    -1px 1px 0 #fff,
    -1px -1px 0 #fff,
    1px -1px 0 #fff;
    -webkit-text-stroke-color: white;
}

.fncy-body{
    width: 350px;
}

.fancy-txt{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 20px;
}

.fncy-body > p{
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; 
}

span{
    width: 20px;
}

.lndscp-img{
    position: relative;
    bottom: 50px;
}

.lnscp-img > img{
    width: 70%;
    height: 70%;
}
</style>