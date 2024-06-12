<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav>
        <div class="logo">
          <RouterLink to="/">
            <img src="./components/img/trinvoicelogo.png" alt="">
          </RouterLink>
        </div>
       
        <div class="nav-links">
          <RouterLink to="/features">Features</RouterLink>
          <RouterLink to="/usersview">Who's It For</RouterLink>
          <RouterLink to="/pricingview">Pricing</RouterLink>
          <RouterLink to="/salesview">Sales</RouterLink>
          <RouterLink to="/loginview">Login</RouterLink>
          <RouterLink to="/signupview">SignUp</RouterLink>
        </div>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>

.logo {
margin-left: 20px;
}

nav {
 display: flex;
 justify-content: space-between;
 padding: 10px;
}


nav a:hover {
  text-decoration: none;
  color: #988FFC;
  transition: ease 1s;
} 

nav a {
  text-decoration: none;
  color: black;
}

.nav-links{
display: flex;
gap: 20px;
padding: 10px;
}

</style>
