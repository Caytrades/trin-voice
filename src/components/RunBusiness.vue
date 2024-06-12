<template>
    <div class="container">
        <h3 style="text-align: center;">Run your business better with TrinVoice</h3>
        <div class="content">
            <div class="text">
                <div class="check">
                    <img src="./img/check.png" alt="">
                    <strong>Don't let unpaid invoices stress you out.</strong>
                </div>
                <p>
                    Our invoicing app helps you stay on top of your billing and <br>
                    get paid faster.
                </p>
                <div class="check">
                    <img src="./img/check.png" alt="">
                    <strong>Get the financial visibility you need to make informed decisions.</strong>
                </div>
                <p>
                    With our various dashboards and graphical view of sales and <br>
                    expenses, at a glance you are duly informed about how the <br>
                    business is doing.
                </p>
                <div class="check">
                    <img src="./img/check.png" alt="">
                    <strong>Never lose track of your expenses again</strong>
                </div>
                <p>
                    Our expenses feature helps you track all expenses made in the <br>
                    business for proper record keeping.
                </p>
    
            </div>

            <div class="img">
                <img src="./img/hand.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    flex-direction: column;

}


.content {
    display: flex;
    justify-content: space-between;
}

.text {
    display: flex;
    flex-direction: column;
    padding: 20px;
}

.text p{
    font-size: 12px;
    margin-left: 100px;
}

.check {
  display: flex;
  gap: 20px;
  margin-left: 50px;
}

.img{
    margin-right: 100px;
}

.img img{
    max-width:400px;
    width: 100%;
}
    
</style>