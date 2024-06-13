<script setup>
import {ref} from 'vue'

let isFirst = ref(false)
let isSecond = ref(false)
let isThird = ref(false)
let isFourth = ref(false)
let isFifth = ref(false)
let isSixth = ref(false)

let data = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit risus eu metus interdum auctor. Morbi molestie pulvinar ullamcorper. Mauris ac auctor nulla, at dignissim felis. Duis rhoncus, justo sit amet elementum eleifend, tortor est efficitur mi, consequat efficitur justo nulla non justo."

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
     
        <h2>Frequently Asked Questions</h2>

        <div class="faq">
            <div class="line"></div>
            <div class="faq-content">
                <p>Lorem ipsum dolor sit amet consectetur  sit amet?</p>
                <div class="dropdown">
                        <img @click="isFirst = !isFirst" src="./img/dropdown.png" alt="">
                </div>
            </div>
            <div class="answers">
                <p v-show="isFirst">{{data}} </p>
            </div>
           
            <div class="line"></div>
            <div class="faq-content">
                <p>Lorem ipsum dolor sit amet consectetur  sit amet?</p>
                <div class="dropdown">
                    <img @click="isSecond = !isSecond" src="./img/dropdown.png" alt="">
                </div>
            </div>
            <div class="answers">
                <p v-show="isSecond">{{data}} </p>
            </div>
            <div class="line"></div>
            <div class="faq-content">
                <p>Lorem ipsum dolor sit amet consectetur  sit amet?</p>
                <div class="dropdown">
                    <img @click="isThird = !isThird" src="./img/dropdown.png" alt="">
                </div>
            </div>
            <div class="answers">
                <p v-show="isThird">{{data}} </p>
            </div>
            <div class="line"></div>
            <div class="faq-content">
                <p>Lorem ipsum dolor sit amet consectetur  sit amet?</p>
                <div class="dropdown">
                    <img @click="isFourth = !isFourth" src="./img/dropdown.png" alt="">
                </div>
            </div>
            <div class="answers">
                <p v-show="isFourth">{{data}} </p>
            </div>
            <div class="line"></div>
            <div class="faq-content">
                <p>Lorem ipsum dolor sit amet consectetur  sit amet?</p>
                <div class="dropdown">
                    <img @click="isFifth = !isFifth" src="./img/dropdown.png" alt="">
                </div>
            </div>
            <div class="answers">
                <p v-show="isFifth">{{data}} </p>
            </div>
            <div class="line"></div>
            <div class="faq-content">
                <p>Lorem ipsum dolor sit amet consectetur  sit amet?</p>
                <div class="dropdown">
                    <img @click="isSixth = !isSixth" src="./img/dropdown.png" alt="">
                </div>
            </div>
            <div class="answers">
                <p v-show="isSixth">{{data}} </p>
            </div>
        </div>
      
        
    </div>
</template>


<style scoped>
.top{
    position: relative;
}

.container h2{
    text-align: center;
    margin-top: 30px;
    margin-bottom: 30px;
}

.star{
    position: absolute;
    left: -61px;
    top: -27px;
}

.ellipse{
    position: absolute;
    left: 1400px;
}

.faq{
    margin-top: 50px;
    margin-bottom: 50px;
}

.line{
    background-color: rgba(0, 0, 0, 0.334);
    width: 1400px;
    height: 1px;
    margin-left: 20px;
}

.faq-content{
    display: flex;
    justify-content: space-between;
    width: 1300px;
    margin-left: 50px;
    padding: 5px;
    font-size: 20px;
    font-weight: 700;
}

.dropdown{
    padding: 10px;
}

.answers{
    width: 1300px;
    margin-left: 50px;
}

</style>