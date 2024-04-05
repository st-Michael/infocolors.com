<template>
  <div>
    <section>
            <div class="sec3 about-us">
                <div class="abt-txt-img about-img">
                    <img src="@/assets/images/sec2.png" alt="">
                </div>
    
                <div class="abt-txt-img about-txt flex-column">
                    <div class="about-title">
                        <p>MORE ABOUT US</p>
                        <h1>OUR MODEL <br> WHO WE ARE</h1>
                    </div>
    
                    <div class="about-body flex-column">
                        <p>We are dedicated to using the media as a platform for extending creative minds to of the rest world. We do this via content creation, creative writing, entertainment series and many more, collaborating with the most talented minds and brilliant creators the world has ever seen. <br>
                        We achieve this via our in-house creatives, strategic collaborations and partnerships with creative individuals and businesses across the globe.
                        </p>
                        <div class="about-hilght flex-column">
                            <div class="hghlght">
                                We believe in teamwork and collaboration
                            </div>
                            <div class="hghlght">
                                We are open to new networks and partners
                            </div>
                        </div>
                    </div>
    
                    <div>
                        learn more
                    </div>
                </div>
            </div>
    </section>
  </div>
</template>

<script >

</script>

<style scoped>
.about-us{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}
.abt-txt-img{
    width: 575px;
    height: 676px;
}

.about-txt{
    justify-content: center;
    padding: 80px;
    background: #191919;
    gap: 30px;
    color: white;
}

.about-body{
    gap: 20px;
}

.about-hilght{
    gap: 20px;
}

.hghlght{
    width: 415px;
    height: 40px;
    flex-shrink: 0;
    background: #131313;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>