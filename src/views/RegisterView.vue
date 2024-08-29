<script setup>
    import NavBar from '../components/NavBar.vue';
    import { RouterLink, RouterView, useRoute } from 'vue-router';
    import RegisterHero from '../components/RegisterHero.vue';
    import { ref, onMounted, onUpdated  } from 'vue'
    
    const registration = ref("individual")
    const route = useRoute()

    function checkRegType() {
      if (route.path == "/register/individual") {
        registration.value = "individual"
      } else {
        registration.value = "company"
      }
    }
    onMounted(() => {
      checkRegType()    
    })
    onUpdated(() => {
      checkRegType()
    })

</script>




<template>
  <NavBar />
  <RegisterHero :registration="registration" />
  <RouterView />
</template>

