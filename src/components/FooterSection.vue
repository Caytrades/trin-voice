<template>
    <div class="container">
        <div class="img">
            <img src="./img/trinvoicelogo.png" alt="">
        </div>
        <div class="content">
            <h3>Quicklinks</h3>
            <p>Features</p>
            <p>Who's it for?</p>
            <p>Pricing</p>
        </div>
        <div class="content">
            <h3>Policies</h3>
            <p>Features</p>

        </div>
        <div class="content">
            <h3>Contact Us</h3>
            <div class="phone">
                <img src="./img/phone.png" alt="">
                <p>+233 0544290716</p>
            </div>
            <div class="email">
                <img src="./img/email.png" alt="">
                <p>info@trinitysoftwarecenter.com</p>
            </div>
        </div>
    </div>
</template>


<style scoped>
.container {
    display: flex;
    gap: 280px;
    margin-left: 20px;
    padding: 20px;
}

.container h3, p{
    margin: 0;
}

.img{
    padding: 10px;
}

.img img{
    width: 100px;
}

.content{
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    margin-bottom: 40px;
}

.content h3{
    color: #988FFC;
    margin-bottom: 10px;
}

.phone{
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

.email{
    display: flex;
    gap: 10px;
}


</style>