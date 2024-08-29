<script setup>
    const emit = defineEmits(['nextStep'])
    defineProps(['registration'])

    const handleNext = () => {
        console.log("submitting");
        emit('nextStep') 
    }
</script>
  
<template>
    <form @submit.prevent="handleNext" action="">
        <span class="py-0 pl-2 pr-24 text-xl font-semibold border-b-2 opacity-70 border-[#565656]">CEO Personal Details</span>
        <div class="sm:grid px-4 sm:grid-cols-2 md:grid-cols-3 gap-4 py-4 gap-x-20">
            <div class="flex flex-col py-2">
                <label class="pl-2 text-sm opacity-70" for="title">Title</label>
                <select v-model="registration.name.title" class="p-2 border opacity-70 rounded-xl border-[#00000080]" name="title" required id="title">
                    <option value=""></option>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Miss">Miss</option>
                </select>
            </div>
            <div class="flex flex-col py-2">
                <label class="pl-2 text-sm opacity-70" for="marital_status">Marital Status</label>
                <select v-model="registration.meta.maritalStatus" class="p-2 border opacity-70 rounded-xl border-[#00000080]" name="marital_status" required id="marital_status">
                    <option value=""></option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="divorced">Divorced</option>
                    <option value="widowed">Widowed</option>
                </select>
            </div>
            <div class="flex flex-col py-2">
                <label class="pl-2 text-sm opacity-70" for="address">Current Address</label>
                <input v-model="registration.meta.address" class="p-2 border opacity-70 rounded-xl border-[#00000080]" type="text" name="address" required id="address" placeholder="Enter your current Address">
            </div>
            <div class="flex flex-col py-2">
                <label class="pl-2 text-sm opacity-70" for="first_name">First Name</label>
                <input v-model="registration.name.first" class="p-2 border opacity-70 rounded-xl border-[#00000080]" type="text" name="first_name" required id="first_name" placeholder="Enter your First Name">
            </div>
            <div class="flex flex-col py-2">
                <label class="pl-2 text-sm opacity-70" for="religion">Religion</label>
                <select v-model="registration.meta.religion" class="p-2 border opacity-70 rounded-xl border-[#00000080]" name="religion" required id="religion">
                    <option value=""></option>
                    <option value="christain">Christain</option>
                    <option value="muslim">Muslim</option>
                    <option value="traditional">Traditional</option>
                </select>
            </div>
            <div class="flex flex-col py-2">
                <label class="pl-2 text-sm opacity-70" for="email">Email</label>
                <input v-model="registration.email" class="p-2 border opacity-70 rounded-xl border-[#00000080]" type="email" name="email" required id="email" placeholder="Enter your Email Address">
            </div>
            <div class="flex flex-col py-2">
                <label class="pl-2 text-sm opacity-70" for="middle_name">Middle Name</label>
                <input v-model="registration.name.middle" class="p-2 border opacity-70 rounded-xl border-[#00000080]" type="text" name="middle_name" required id="middle_name" placeholder="Enter your middle name">
            </div>
            <div class="flex flex-col py-2">
                <label class="pl-2 text-sm opacity-70" for="dob">Date of Birth</label>
                <input v-model="registration.meta.dob" class="p-2 border opacity-70 rounded-xl border-[#00000080]" type="date" name="dob" required id="dob">
            </div>
            <div class="flex flex-col py-2">
                <label class="pl-2 text-sm opacity-70" for="phone">Phone Number</label>
                <input v-model="registration.meta.phone" class="p-2 border opacity-70 rounded-xl border-[#00000080]" type="text" name="phone" required id="phone" placeholder="+234">
            </div>
            <div class="flex flex-col py-2">
                <label class="pl-2 text-sm opacity-70" for="surname">Surname</label>
                <input v-model="registration.name.last" class="p-2 border opacity-70 rounded-xl border-[#00000080]" type="text" name="surname" required id="surname" placeholder="Enter your surname">
            </div>
            <div class="flex flex-col py-2">
                <label class="pl-2 text-sm opacity-70" for="nationality">Nationality</label>
                <input v-model="registration.meta.nationality" class="p-2 border opacity-70 rounded-xl border-[#00000080]" type="text" name="nationality" required id="nationality">
            </div>
            <div class="flex flex-col py-2">
                <label class="pl-2 text-sm opacity-70" for="nin">NIN</label>
                <input v-model="registration.meta.nin" class="p-2 border opacity-70 rounded-xl border-[#00000080]" type="text" name="nin" required id="nin" placeholder="Enter your NIN">
            </div>
            <div class="flex flex-col py-2">
                <label class="pl-2 text-sm opacity-70" for="gender">Gender</label>
                <select v-model="registration.meta.gender" class="p-2 border opacity-70 rounded-xl border-[#00000080]" name="gender" required id="gender">
                    <option value=""></option>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                </select>
            </div>
        </div>
        <div class="mb-8 text-center mt-28">
            <button type="submit" class="bg-[#2BC241] text-white py-2 px-32 text-sm font-semibold hover:bg-[#1ba330] cursor-pointer active:scale-95 transition-all">Proceed</button> 
        </div>
    </form>
</template>
  
  