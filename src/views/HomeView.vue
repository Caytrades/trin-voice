<script setup>
import HeroBanner from '../components/HeroBanner.vue'
import BusinessBanner from '../components/BusinessBanner.vue'
import RunBusiness from '../components/RunBusiness.vue'
import HighLights from '../components/HighLights.vue'
import HowItWorks from '../components/HowItWorks.vue'
</script>

<template>
  <main>
    <section>
      <HeroBanner/>
    </section>
    <section>
      <BusinessBanner/>
    </section>
    <section>
      <RunBusiness/>
    </section>
    <section>
      <HighLights/>
    </section>
    <section>
      <HowItWorks/>
    </section>
  </main>
</template>
