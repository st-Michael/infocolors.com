<template>
  <div>
    <section>
        <div class="series sec4">
            <div class="sec4-title">
                <div class="srs-title">
                    <p>CREATIVE CONTENT</p>
                    <h1>SOME OF OUR <br>
                        MEDIA CONTENT</h1>
                </div>
                <div class="more">
                    view more content
                </div>
                
            </div>

            <div class="series-card-cont">
                <SeriesCard
                    v-for="(x, item) in 4" :key="item"            
    
                />
            </div>
        </div>
    </section>
  </div>
</template>

<script>

</script>

<style scoped>
.sec4{
    display: flex;
    flex-direction: column;
    gap:  60px;
    color: white;
    margin: 60px 0; 
}
.sec4-title{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 150px;
    padding-right: 150px;
}
.series-card-cont{
    overflow-x: auto;
}

</style>