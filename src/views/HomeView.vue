<script setup>
import HeroBanner from '../components/HeroBanner.vue'
import BusinessBanner from '../components/BusinessBanner.vue'
import RunBusiness from '../components/RunBusiness.vue'
import HighLights from '../components/HighLights.vue'
import HowItWorks from '../components/HowItWorks.vue'
import CustomerReview from '../components/CustomerReview.vue'
import NewsLetter from '../components/NewsLetter.vue'
import FAQSection from '../components/FAQSection.vue'
import EmptySection from '../components/EmptySection.vue'
import FooterSection from '../components/FooterSection.vue'
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
    <section>
      <CustomerReview/>
    </section>
    <section>
      <NewsLetter/>
    </section>
    <section>
      <FAQSection/>
    </section>
    <section>
      <EmptySection/>
    </section>
    <footer>
      <FooterSection/>  
    </footer>
  </main>
</template>
