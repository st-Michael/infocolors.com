<template>
  <div>
    <section class="boxed-padding">
        <div class="sec2">
            <div class="sec2-title">
                <div class="serv-head">
                    <p>&ensp;&ensp;WHAT WE DO</p>
                    <h1>CHECK OUR SERVICES</h1>
                </div>
                <div class="serv-learnmore">
                    <p>VIEW ALL SERVIVES</p>
                    <img src="@/assets/icons/Arrow.png" alt="">
                </div>
            </div>

            <ServiceCard />
            
        </div>
    </section>
  </div>
</template>

<script>

</script>

<style scoped>
.sec2{
    display: flex;
    flex-direction: column;
    gap: 50px;
}

.sec2-title{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.serv-learnmore{
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    align-content: center;
    justify-content: first baseline;
}
</style>