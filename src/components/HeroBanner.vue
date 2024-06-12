<script setup>

</script>

<template>

  <div class="container">
    <div class="center">
        <div class="text">
        <h3>The Smartest way to</h3>
        <h1>
          <strong>Track Sales & <br> Growth with <br></strong> Analytics.
        </h1>
      </div>

      <div class="banner">
          <div class="bannerone">
            <img src="./img/bannerone.png" alt="">
          </div>
          <div class="star">
            <img src="./img/Star.png" alt="">
          </div>
      </div>
    </div>
  </div>
  
  

</template>


<style scoped>
.container{
display: flex;
justify-content: center;
}

.center{
display: flex;
gap: 50px;
}

.text h1{
 font-size: 40px;
}

.text strong{
  color: #988FFC;
}

.bannerone{
  position: relative;
  z-index: 1;
}

.star{
  position: absolute;
  top: 2px;
  left: 800px;
  z-index: -1;
}


</style>