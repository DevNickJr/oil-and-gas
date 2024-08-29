<script setup>
    import InterswitchPay from '../components/InterswitchPay.vue'
    defineProps(['registration'])
    const emit = defineEmits(['prevStep', 'submit_form'])

    const handleSubmit = () => {
        emit('submit_form') 
    }
</script>
   
<template>
    <form action="">
        <span class="py-0 pl-2 pr-24 text-xl font-semibold border-b-2 opacity-70 border-[#565656]">Appicant Declaration</span>
        <div class="grid grid-cols-1 gap-4 px-4 py-4 gap-x-20 sm:w-2/3 md:w-1/2 lg:w-1/3">
            <div class="flex flex-col py-2">
                <label class="pl-2 text-sm opacity-70" for="first_name">Name</label>
                <input v-model="registration.declaration.name" class="p-2 border opacity-70 rounded-xl border-[#00000080]" type="text" name="first_name" required id="first_name" placeholder="Enter your Name">
            </div>
            <div class="flex flex-col py-2">
                <label class="pl-2 text-sm opacity-70" for="date">Date</label>
                <input v-model="registration.declaration.date" class="p-2 border opacity-70 rounded-xl border-[#00000080]" type="date" name="date" required id="date">
            </div>
        </div>
        <div class="flex flex-col justify-between gap-4 mb-8 mt-28 sm:flex-row">
            <button @click.prevent="$emit('prevStep')" type="" class="bg-[#2BC241] text-white py-2 px-32 text-sm font-semibold hover:bg-[#1ba330] cursor-pointer active:scale-95 transition-all">Previous</button> 
            <button type="" @click.prevent class="bg-[#2BC241] text-sm font-semibold hover:bg-[#1ba330] cursor-pointer active:scale-95 transition-all">
                <InterswitchPay :registration="registration" @submit_form="handleSubmit" class="w-full px-32 py-2 text-white" />
            </button> 
        </div>
    </form>
</template>