<template>
  <div>
    <section>
        <div class="sec6">
            <div class="sec6-title">
                <div class="srs-title">
                    <p>TESTIMONIALS</p>
                    <h1>WHAT PEOPLE ARE <br>
                        SAYING</h1>
                </div>
                <div class="more">
                    Get started now
                </div>
            </div>

            <div class="tst-card-cont">
                <TestimonialCard 
                v-for="(x, item) in 4" :key="item"            
    
                />
            </div>
        </div>
    </section>   
  </div>
</template>

<script >

</script>

<style scoped>
.sec6{
    display: flex;
    flex-direction: column;
    gap:  60px;
    color: white;
}
.sec6-title{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 150px;
    padding-right: 150px;
}
.tst-card-cont{
    display: flex;
    flex-direction: row;
    gap: 20px;
    overflow-x: auto;
}

</style>