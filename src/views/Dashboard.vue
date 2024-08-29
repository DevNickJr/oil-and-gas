<script setup>
    import SideBar from '../components/SideBar.vue'
    import MainDash from '../components/MainDash.vue'
    import AdminNav from '../components/AdminNav.vue';
    import QrCodeScanner from '../components/QrCodeScanner.vue';
    import { useStore } from 'vuex'
    import { ref, onMounted } from 'vue';
    import { useRouter, useRoute, RouterView } from 'vue-router'

    const store = useStore();
    const router = useRouter();
    const route = useRoute();

    const user = store?.state?.auth.user;
    
    onMounted(() => {
        if (!user) {
            router.push("/login");
        }
    });
    
</script>
  
<template>
    <main class="flex w-full min-h-screen pt-12 sm:h-screen sm:pt-0">
        <AdminNav />
        <SideBar />
        <RouterView />
        <!-- <MainDash /> -->
        <!-- <QrCodeScanner /> -->
    </main>
</template>