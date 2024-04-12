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
                    v-for="(x, item) in " :key="item"            
    
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
    margin: 120px 0; 
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

/* width */
::-webkit-scrollbar {
  width: 20px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.507);
  border-radius: 10px;
}

</style>