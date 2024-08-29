<script setup>
  import { ref } from 'vue'
  const navShow = ref(false)
  const nav= ref(null)
  const showNav = () => {
    navShow.value = !navShow.value
    if (navShow.value) {
      nav.value.style.opacity = "100%"
      nav.value.style.height = "20rem"
    } else {
      nav.value.style.height = "0px"
      nav.value.style.opacity = "0"
    }
  }
</script>

<template>
    <header class="fixed bg-[#2BC241] sm:bg-white top-0 z-10 flex items-center justify-between w-full px-4 sm:px-8 md:px-16 py-2 shadow-md">
        <RouterLink to="/" class="z-30 overflow-hidden text-white bg-white rounded-full sm:text-black" :class="{dark: navShow}">
          <img src="../assets/oil-logo.png" class="object-cover h-8" alt="LOGO">
        </RouterLink>
        <button class="z-30 p-2 rounded-lg hover:animate-pulse sm:hidden focus:outline-none focus:shadow-outline" :class="{ hide: navShow }" @click.prevent="showNav">
					<svg fill="#ffffff" viewBox="0 0 20 20" class="w-6 h-6" style="max-height: 1.5rem;">
            <path fill="#000000" v-if="navShow" x-show="open" fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"></path>
            <path v-else x-show="!open" fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clip-rule="evenodd"></path>
					</svg>
				</button>
        <div class="items-center hidden gap-2 text-xs sm:flex sm:gap-4">
          <!-- <a href="#verifyMembership">Verify Membership</a> -->
          <RouterLink to="/#verifyMembership"  class="px-2 py-2 transition-all cursor-pointer active:scale-95">Verify Membership</RouterLink>
          <RouterLink to="/" class="px-2 py-2 transition-all cursor-pointer active:scale-95">Home</RouterLink>
          <RouterLink to="/register/individual" class="text-white text-center text-xs px-2 py-2 font-semibold bg-[#2BC241] p hover:opacity-80 cursor-pointer active:scale-95 transition-all">Become a Member</RouterLink>
        </div>
        <nav ref="nav" class="fixed top-0 right-0 z-10 flex flex-col items-center w-full h-0 gap-4 py-6 pt-16 transition-all delay-100 bg-white shadow-lg sm:hidden" style="height: 0px; opacity:0;">
            <!-- <RouterLink to="/" class="">Logo</RouterLink> -->
            <RouterLink to="/#verifyMembership" @click="showNav" class="px-2 py-2 font-bold transition-all shadow-lg cursor-pointer active:scale-95">Verify Membership</RouterLink>
            <RouterLink to="/" @click="showNav" class="px-2 py-2 font-bold transition-all shadow-lg cursor-pointer active:scale-95">Home</RouterLink>
            <RouterLink to="/register/individual" @click="showNav" class="text-white text-center px-4 py-4 rounded font-semibold bg-[#2BC241] hover:opacity-80 cursor-pointer active:scale-95 transition- shadow-lg">Become a Member</RouterLink>
        </nav>
      </header>
</template>
<!-- <div class="py-2 text-xs border opacity-90" for="company">
  <RouterLink class="px-12 py-2" to="/register/company">Company</RouterLink>
</div> -->