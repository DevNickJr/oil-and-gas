<script setup>
    import { useRouter, useRoute, RouterLink } from 'vue-router'
    import { useStore } from 'vuex'

    const store = useStore();
    const router = useRouter();
    const route = useRoute();

    function logOut() {
        store.dispatch('auth/logout');
        router.push('/login');
    } 
</script>
  
  
  
  
<template>
    <div class="flex-col justify-between hidden p-4 py-8 border-r-2 sm:flex sm:flex-auto">
        <div class="">
            <div class="flex flex-col items-center justify-center gap-2 mb-12">
                <img src="../assets/logo.png" class="object-cover h-16 overflow-hidden bg-white rounded-full" alt="LOGO">
                <h4 class="text-[#979797]">Admin</h4>
            </div>
            <div class="flex flex-col gap-4">
                <span class="text-[#7E7D7D] text-sm">Menu</span>
                <RouterLink to="/dashboard" class="flex gap-2 md:gap-4 items-center bg-[#2bc24126] p-3 px-2 lg:p-3 rounded-xl hover:bg-[#31803d26] cursor-pointer active:scale-95 transition-all">
                    <img src="../assets/dash-icon.svg" alt="" />
                    <span class="text-sm font-medium">Dashboard</span>
                </RouterLink>
                <RouterLink to="/dashboard/scan" class="flex gap-2 md:gap-4 items-center bg-[#2bc24126] p-3 px-2 lg:p-3 rounded-xl hover:bg-[#31803d26] cursor-pointer active:scale-95 transition-all">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.25 5.25C2.0375 5.25 1.8595 5.17825 1.716 5.03475C1.572 4.89075 1.5 4.7125 1.5 4.5V2.25C1.5 2.0375 1.572 1.85925 1.716 1.71525C1.8595 1.57175 2.0375 1.5 2.25 1.5H4.5C4.7125 1.5 4.89075 1.57175 5.03475 1.71525C5.17825 1.85925 5.25 2.0375 5.25 2.25C5.25 2.4625 5.17825 2.6405 5.03475 2.784C4.89075 2.928 4.7125 3 4.5 3H3V4.5C3 4.7125 2.92825 4.89075 2.78475 5.03475C2.64075 5.17825 2.4625 5.25 2.25 5.25ZM2.25 16.5C2.0375 16.5 1.8595 16.428 1.716 16.284C1.572 16.1405 1.5 15.9625 1.5 15.75V13.5C1.5 13.2875 1.572 13.1095 1.716 12.966C1.8595 12.822 2.0375 12.75 2.25 12.75C2.4625 12.75 2.64075 12.822 2.78475 12.966C2.92825 13.1095 3 13.2875 3 13.5V15H4.5C4.7125 15 4.89075 15.072 5.03475 15.216C5.17825 15.3595 5.25 15.5375 5.25 15.75C5.25 15.9625 5.17825 16.1405 5.03475 16.284C4.89075 16.428 4.7125 16.5 4.5 16.5H2.25ZM13.5 16.5C13.2875 16.5 13.1095 16.428 12.966 16.284C12.822 16.1405 12.75 15.9625 12.75 15.75C12.75 15.5375 12.822 15.3595 12.966 15.216C13.1095 15.072 13.2875 15 13.5 15H15V13.5C15 13.2875 15.072 13.1095 15.216 12.966C15.3595 12.822 15.5375 12.75 15.75 12.75C15.9625 12.75 16.1405 12.822 16.284 12.966C16.428 13.1095 16.5 13.2875 16.5 13.5V15.75C16.5 15.9625 16.428 16.1405 16.284 16.284C16.1405 16.428 15.9625 16.5 15.75 16.5H13.5ZM15.75 5.25C15.5375 5.25 15.3595 5.17825 15.216 5.03475C15.072 4.89075 15 4.7125 15 4.5V3H13.5C13.2875 3 13.1095 2.928 12.966 2.784C12.822 2.6405 12.75 2.4625 12.75 2.25C12.75 2.0375 12.822 1.85925 12.966 1.71525C13.1095 1.57175 13.2875 1.5 13.5 1.5H15.75C15.9625 1.5 16.1405 1.57175 16.284 1.71525C16.428 1.85925 16.5 2.0375 16.5 2.25V4.5C16.5 4.7125 16.428 4.89075 16.284 5.03475C16.1405 5.17825 15.9625 5.25 15.75 5.25ZM13.125 13.125H14.25V14.25H13.125V13.125ZM13.125 10.875H14.25V12H13.125V10.875ZM12 12H13.125V13.125H12V12ZM10.875 13.125H12V14.25H10.875V13.125ZM9.75 12H10.875V13.125H9.75V12ZM12 9.75H13.125V10.875H12V9.75ZM10.875 10.875H12V12H10.875V10.875ZM9.75 9.75H10.875V10.875H9.75V9.75ZM14.25 3.75V8.25H9.75V3.75H14.25ZM8.25 9.75V14.25H3.75V9.75H8.25ZM8.25 3.75V8.25H3.75V3.75H8.25ZM7.125 13.125V10.875H4.875V13.125H7.125ZM7.125 7.125V4.875H4.875V7.125H7.125ZM13.125 7.125V4.875H10.875V7.125H13.125Z" fill="#585353"/>
                    </svg>
                    <span class="text-sm font-medium">QrCode Scanner</span>
                </RouterLink>
            </div>
        </div>
        <button 
            class="flex gap-6 items-center bg-[#E7E7E7] p-3 rounded-xl hover:bg-[#e7d2d2] cursor-pointer active:scale-95 transition-all"
            @click="logOut"
        >
            <img src="../assets/logout-icon.svg" alt="" />
            <span class="text-[#FF0000] font-medium text-sm">Logout</span>
        </button>
    </div>
</template>
  