<script>

</script>


<template>
    <div class="container">
        <h2 style="text-align: center;">Subscribe to our Newsletter</h2>
        <p style="font-size: 24px;">
            Lorem ipsum dolor sit amet consectetur. Sit adipiscing in sem in ut lobortis massa ut sit. Sollicitudin id velit ac <br>
            pretium ac.  ut lobortis massa ut sit. Sollicitudin id velit ac 
        </p>

        <div class="form">
            <form class="subscribe-form" action="#" method="post">
                <input type="email" class="subscribe-input" required>
                <button type="submit" class="subscribe-button">Subscribe</button>
            </form>
        </div>
    </div>
</template>


<style scoped>
.container {
    display: flex;
    flex-direction: column;
    background: linear-gradient(90deg, #5D56D9, #9691F2);
    color: white;
    padding: 20px;
}

.container h2{
    margin: 0;
    margin-top: 20px;
    font-size: 28px;
    font-weight: 700;
}

.container p{
    margin-left: 50px;
    font-weight: 400;
}

.form{
    display: flex;
    justify-content: center;
}

.subscribe-form {
    display: flex;
    width: 600px;
    border: 1px solid #ffffff;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 10px;
    margin-bottom: 20px;
}

.subscribe-input {
    width: 100%;
    background-color: transparent;
    border: none;
    padding: 10px;
    font-size: 16px;
    margin-right: 10px;
    color: #ffffff;
}

.subscribe-button {
    background-color: #fff;
    color: #988FFC;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
    font-size: 20px;
    cursor: pointer;


}

.subscribe-button:hover {
    background-color: #000;
    color: #fff;
}

</style>