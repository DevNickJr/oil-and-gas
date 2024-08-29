<script setup>
    defineProps(['registration'])
    const emit = defineEmits(['prevStep', 'nextStep'])

    const handleNext = () => {
        console.log("submitting");
        emit('nextStep') 
    }
</script>
  
<template>
    <form @submit.prevent="handleNext" action="">
        <span class="py-0 pl-2 pr-24 text-xl font-semibold border-b-2 opacity-70 border-[#565656]">Organisation Profile</span>
        <div class="sm:grid px-4 sm:grid-cols-2 md:grid-cols-3 gap-4 py-4 gap-x-20">
            <div class="flex flex-col py-2">
                <label class="pl-2 text-sm opacity-70" for="address">Contact Address</label>
                <input v-model="registration.address" class="p-2 border opacity-70 rounded-xl border-[#00000080]" type="text" name="address" required id="address" placeholder="Enter your address">
            </div>
            <div class="flex flex-col py-2">
                <label class="pl-2 text-sm opacity-70" for="model">Model</label>
                <select v-model="registration.organization.auth.model" class="p-2 border opacity-70 rounded-xl border-[#00000080]" name="model" required id="model">
                    <option value=""></option>
                    <option value="CAC">CAC</option>
                    <option value="SMEDAN">SMEDAN</option>`
                </select>
            </div>
            <div class="flex flex-col py-2">
                <label class="pl-2 text-sm opacity-70" for="cac_number">CAC/SMEDAN Number</label>
                <input v-model="registration.organization.auth.number" class="p-2 border opacity-70 rounded-xl border-[#00000080]" type="number" name="cac_number" required id="cac_number" placeholder="">
            </div>
            <div class="flex flex-col py-2">
                <label class="pl-2 text-sm opacity-70" for="email">Email</label>
                <input v-model="registration.organization.email" class="p-2 border opacity-70 rounded-xl border-[#00000080]" type="email" name="email" required id="email" placeholder="Enter your Email Address">
            </div>
            <div class="flex flex-col py-2">
                <label class="pl-2 text-sm opacity-70" for="whatsapp_number">Whatsapp Number</label>
                <input v-model="registration.organization.whatsapp" class="p-2 border opacity-70 rounded-xl border-[#00000080]" type="number" name="whatsapp_number" required id="whatsapp_number" placeholder="Enter your whatsapp number">
            </div>
            <div class="flex flex-col py-2">
                <label class="pl-2 text-sm opacity-70" for="contact">Contact Person</label>
                <input v-model="registration.organization.contactPerson" class="p-2 border opacity-70 rounded-xl border-[#00000080]" type="text" name="contact" required id="contact" placeholder="">
            </div>
        </div>
        <div class="mb-8 flex justify-between mt-28 flex-col gap-4 sm:flex-row">
            <button  @click.prevent="$emit('prevStep')" type="" class="bg-[#2BC241] text-white py-2 px-32 text-sm font-semibold hover:bg-[#1ba330] cursor-pointer active:scale-95 transition-all">Previous</button> 
            <button type="submit" class="bg-[#2BC241] text-white py-2 px-32 text-sm font-semibold hover:bg-[#1ba330] cursor-pointer active:scale-95 transition-all">Next</button> 
        </div>
    </form>
</template>
  
  