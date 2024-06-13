<script>

</script>


<template>
    <div class="container">
        <div class="top">
            <div class="star">
                <img src="./img/Star 5.png" alt="">
            </div>
            <div class="ellipse">
                <img src="./img/Ellipse 17.png" alt="">
            </div>
        </div>
       
        <h2>How It Works</h2>
        <div class="content">
            <div class="boxes">
                <div class="box">
                    <h4>SIGNUP AS A BUSINESS</h4>
                    <p>
                        Signup is in less than <br>
                        5minutes.Provide basic <br>
                        information about your <br>
                        business and get your <br>
                        account readily available.
                    </p>
                    <div class="line"></div>
                    <div class="img">
                        <img src="./img/businessman.png" alt="">
                    </div>
                </div>
                <div class="box">
                    <h4>REGISTER YOUR CLIENT</h4>
                    <p>
                        Register all your clients and <br>
                        customers in the CUSTOMER <br>
                        section of the dashboard <br>
                        including their billing <br>
                        information.
                    </p>
                    <div class="line"></div>
                    <div class="img">
                        <img src="./img/users-add.png" alt="">
                    </div>
                </div>
                <div class="box">
                    <h4>GENERATE INVOICES</h4>
                    <p>
                        Generate invoices for your <br>
                        customers. Download the <br>
                        generated invoice or send to <br>
                        them directly via the email <br>
                        option.
                    </p>
                    <div class="line"></div>
                    <div class="img">
                        <img src="./img/invoice.png" alt="">
                    </div>
                </div>
                <div class="box">
                    <h4>CONFIRM PAYMENTS</h4>
                    <p>
                        Confirm all payments made <br>
                        by clients as sales and <br>
                        generate receipts of the sales
                    </p>
                    <div class="line"></div>
                    <div class="img">
                        <img src="./img/payment.png" alt="">
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
    padding: 20px;
    margin-bottom: 50px;
}

.top{
    display: flex;
    justify-content: space-between;
}

.ellipse{
 padding: 20px;
}

.star img{
    width: 65px;
}

.container h2{
    text-align: center;
}

.container h4,p{
    margin: 0;
}

.content{
    display: flex;
    justify-content: center;
}

.boxes{
    display: grid;
    grid-template-columns: repeat(4 , 1fr);
    grid-template-rows: auto auto auto;
    gap: 20px;
}

.box{
    display: grid;
    border: solid 1px rgba(4, 4, 4, 0.186);
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 5px 15px rgba(0, 30, 255, 0.253);
    grid-template-rows: subgrid;
    grid-row: 1 / 4;
    text-align: center;
}

.img{
    display: flex;
    padding: 10px;
    margin-left: 50px;
}

.img img{
    width: 100px;
    height: auto;
}

.line{
    height: 1px;
    background-color: rgba(0, 0, 0, 0.214);
}



</style>