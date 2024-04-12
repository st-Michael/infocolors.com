<template>
  <div>
    <div class="services">
                <div class="service serv1">
                    <div class="serv-ti-icon">
                        <div class="serv-icon">
                            <img src="@/assets/icons/vidcam.png" alt="">  
                        </div>
                        <div class="serv-title">
                            <h3>CINEMATOGRAPY</h3>
                        </div>
                    </div>
                    <div class="serv-body">
                        <div class="serv-desc">
                            <p>Web design encompasses many different skills and disciplines in the production of all web.</p>
                        </div>
                        
                        <P>LEARN MORE</P>
                    </div>
                </div>

                <div class="service serv2">
                    <div class="serv-ti-icon">
                        <div class="serv-icon">
                            <img src="@/assets/icons/cam.png" alt="">
                        </div>
                        <div class="serv-title">
                            <h3>PHOTOGRAPHY</h3>
                        </div>
                    </div>
                    
                    <div class="serv-body">
                        <div class="serv-desc">
                            <p>Web design encompasses many different skills and disciplines in the production of all web.</p>
                        </div>
                        
                        <P>LEARN MORE</P>
                    </div>
                </div>

                <div class="service serv3">
                    <div class="serv-ti-icon">
                        <div class="serv-icon">
                            <img src="@/assets/icons/Scroll.png" alt="">
                        </div>
                        <div class="serv-title">
                            <h3>CONTENT CREATION</h3>
                        </div>
                    </div>
                    
                    <div class="serv-body">
                        <div class="serv-desc">
                            <p>Web design encompasses many different skills and disciplines in the production of all web.</p>
                        </div>
                        

                        <P>LEARN MORE</P>
                    </div>
                </div> 
            </div>

  </div>
</template>

<script>

</script>

<style scoped>

.services{
    position: relative;
    display: flex;
    flex-direction: row;
    gap: 30px;
    align-items: center;
    justify-content: center;
    height: 700px;
    margin-bottom: 60px; 
}

.service{
    position: relative;
    display: flex;
    flex-direction: column;
    width: 363px;
    height: 407px;
    flex-shrink: 0;
    border: 4px solid rgba(255, 255, 255, 0.10);
    padding: 70px 31px;
    gap: 30px;
    margin-bottom: 30px;
}

.serv-ti-icon{
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
    gap:15px;
    border-bottom: 0.5px solid rgba(255, 255, 255, 0.10);
}

.serv2{
    top:80px;
}

.serv3{
    top: 160px;
}

.serv-body{
    display: flex;
    flex-direction: column;
    gap: 20px;
}
</style>