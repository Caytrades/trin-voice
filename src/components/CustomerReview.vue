<script>

</script>

<template>
    <div class="container">
        <h2>Customer Reviews</h2>

         <div class="boxes">
            <div class="box">
                    <div class="ellipse">
                        <img src="./img/Ellipse 14.png" alt="">
                    </div>
                    <div class="quotes">
                        <img src="./img/quote.png" alt="">
                    </div>
                    <p class="top">
                    Lorem ipsum dolor sit amet consectetur. Id nisi ac blandit <br> 
                    ac blandit scelerisque euismod magnis scelerisque  ac <br>
                    purus gravida sodales pellentesque tellus varius
                    </p>
                    <div class="man">
                        <div class="img">
                            <img src="./img/man.png" alt="">
                        </div>
                        <div class="man-text">
                            <h3>Daniel Silver</h3>
                            <p>Developer</p>
                        </div>
                    </div>
                
            </div>
            <div class="box">
                <div class="ellipse">
                    <img src="./img/Ellipse 14.png" alt="">
                </div>
                <div class="quotes">
                        <img src="./img/quote.png" alt="">
                </div>
                <p class="top">
                    Lorem ipsum dolor sit amet consectetur. Id nisi ac blandit <br>
                    ac blandit scelerisque euismod magnis scelerisque  ac <br>
                    purus gravida sodales pellentesque tellus varius
                </p>
                <div class="man">
                    <div class="img">
                        <img src="./img/man.png" alt="">
                    </div>
                    <div class="man-text">
                        <h3>Daniel Silver</h3>
                        <p>Developer</p>
                    </div>
                </div>
            </div>
         </div>
         
    </div>
</template>


<style scoped>
.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f8f8f8;
    text-align: center;
}

.container h2{
margin-top: 50px;
margin-bottom: 120px;
}

.boxes{
    display: flex;
    gap: 20px;
    margin-bottom: 50px;

}

.box{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
}

.top{
    text-align: center;
    margin-bottom: 20px;
    margin-top: 100px;
}

.ellipse{
position: absolute;
top: -72px;
}

.quotes{
    position: absolute;
    top: -15px;
}

.man{
    display: flex;
    gap: 10px;
}

.man-text{
    padding: 20px;
    
}

.man-text h3, p{
    margin: 0;
    text-align: left;
}

</style>