<script setup>
    import { ref } from 'vue'
    import { useRouter, useRoute } from 'vue-router'
    import { useStore } from 'vuex'

    const store = useStore();
    const router = useRouter();
    const route = useRoute();

    function logOut() {
        store.dispatch('auth/logout');
        router.push('/login');
    } 
    const navShow = ref(false)
    const nav= ref(null)
    const showNav = () => {
        navShow.value = !navShow.value
        if (navShow.value) {
        nav.value.style.opacity = "100%"
        nav.value.style.height = "15rem"
        } else {
        nav.value.style.height = "0px"
        nav.value.style.opacity = "0"
        }
    }
</script>

<template>
    <header class="fixed sm:hidden bg-[#2BC241] sm:bg-white top-0 z-10 flex items-center justify-between w-full px-4 sm:px-8 md:px-16 py-2 shadow-md">
        <RouterLink to="/dashboard" class="z-30 text-lg text-white sm:text-white" :class="{dark: navShow}">
            <img src="../assets/logo.png" class="h-12 object-cover  bg-white rounded-full overflow-hidden" alt="LOGO" />
        </RouterLink>
        <div class="flex items-center gap-4 text-[#2BC241]">
            <RouterLink class="text-sm font-medium p-2 py-1  bg-white rounded" to="/dashboard/scan">Scan</RouterLink>
            <button 
                class="flex gap-2 items-center p-3 rounded-xl bg-white cursor-pointer active:scale-95 transition-all"
                @click="logOut"
            >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.4993 2.5H5.83268C5.39065 2.5 4.96673 2.67559 4.65417 2.98816C4.34161 3.30072 4.16602 3.72464 4.16602 4.16667V15.8333C4.16602 16.2754 4.34161 16.6993 4.65417 17.0118C4.96673 17.3244 5.39065 17.5 5.83268 17.5H12.4993M7.49935 10L10.8327 6.66667M7.49935 10L10.8327 13.3333M7.49935 10H15.8327" stroke="#2BC241" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                
                <span class="text-[#2BC241] font-medium text-sm">Logout</span>
            </button>
        </div>
        <!-- <nav ref="nav" class="fixed top-0 right-0 h-0 w-full sm:hidden shadow-lg flex pt-16 py-6 z-10 transition-all bg-white delay-100 flex-col gap-8 items-center" style="height: 0px; opacity:0;">
            <RouterLink to="/" @click="showNav" class="font-bold text-[#2BC241] px-2 py-2 cursor-pointer active:scale-95 transition-all shadow-md">Home</RouterLink>
            <button 
            class=" shadow-md flex gap-6 items-center p-3 rounded-xl hover:bg-[#e7d2d2] cursor-pointer active:scale-95 transition-all"
            @click="logOut"
        >
            <img src="../assets/logout-icon.svg" alt="" />
            <span class="text-[#FF0000] font-medium text-sm">Logout</span>
        </button>
        </nav> -->
    </header>
</template>
