<template>
  <div>
    <nav>
        <div class="nav-cont box-screen">
            <div class="nav-logo">
                <img src="@/assets/images/nav-logo.png" alt="">
            </div>
            <div class="nav-list-cont">
                <div class="nav-list">
                    <ul>
                        <li><a href="">About</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">Events</a></li>
                        <li><a href="">Content</a></li>
                        <li><a href="">Blog</a></li>
                    </ul>
                </div>
            </div>
            <div class="nav-search">
                <img src="@/assets/icons/search.png" alt="">
            </div>
        </div>
    </nav>
  </div>
</template>

<script >

</script>

<style scoped>
.nav-cont{
    display: flex;
    flex-direction: row;
   /*  display: grid;
    grid-template-columns: 1fr 1fr 1fr; */
    align-items: center;
    justify-content: space-between;
}

.nav-list-cont{
    display: flex;
    flex-direction: row;
    width:500px;
    height: 45px;
    border-radius: 50px;
    background: rgba(52, 52, 50, 0.60);
    align-items: center;
    justify-content: center;
}

.nav-list > ul {
    display:flex;
    gap: 30px;
    padding: 10px 30px;
}

.nav-cont img{
    height: 35px;
}
</style>