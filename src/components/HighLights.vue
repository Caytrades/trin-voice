<script>

</script>


<template>
    <div class="container">
        <div class="img">
            <img src="./img/girl.png" alt="">
        </div>
        <div class="content">
            <div class="text">
                <div class="title">
                    <img src="./img/suitcase.png" alt="">
                    <h3>
                        Smart, simple tools for Small and Medium <br>
                        scale businesses and professionals.
                    </h3>
                </div>
                <p>Tinvoice helps you track expenses, record payment <br> & generate beautiful invoices & estimates.</p>
            </div>

            <div class="boxes">
                <div class="box">
                    <h3>QUALITY</h3>
                    <p>
                        When it comes to software for <br>
                        accounting, sales or financial <br>
                        purposes, quality cannot be <br>
                        compromised and that is what we <br>
                        offer to our businesses.
                    </p>
                </div>
                <div class="box">
                    <h3>STARTUP-FOCUSED</h3>
                    <p>
                        We help startups with their billing <br>
                        processes to enable them focus on <br>
                        their traction and getting new <br>
                        clients or customers.
                    </p>
                </div>
                <div class="box">
                    <h3>SIMPLE & INTUITIVE</h3>
                    <p>
                        Our user interfaces are very simple <br>
                        to follow even without detailed <br>
                        training. Those with little to no IT <br>
                        background are able to use <br>
                        TrinVoice with ease.
                    </p>
                </div>
                <div class="box">
                    <h3>AFFORDABLE</h3>
                    <P>
                        Whiles we are delivering quality <br>
                        software system, we also <br>
                        understand that it should be <br>
                        affordable for all businesses to be <br>
                        able to patronize.
                    </P>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    gap: 150px;
    background: linear-gradient(90deg, #5D56D9, #9691F2);
}

/* .container p,h3 {
    margin: unset;
} */



.img {
    display: flex;
    padding-top: 100px;
    padding-left: 30px;
    padding-bottom: 2px;
}


.content{
display: flex;
flex-direction: column;
margin-top: 80px;
}

.text{
    color:white;
    margin-left: 80px;
}

.text p {
    margin-left: 20px;
}

.title{
    display: flex;
    gap: 10px;
}

.title img{
    width: 20px;
    height: 20px;
    padding-top: 23px;
}

.boxes{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    color: white;
}

.box{
    text-align: center;
    border: solid 3px white;
    border-radius: 10px;
    width: 300px;
}

.box h3{
    font-size: 17px;
    font-weight: 900;
}

.box p{
    font-size: 15px;
}
</style>