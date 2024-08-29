<script setup>
    import LoadingVue from '../components/Loading.vue'
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'
    import Individual1 from "../components/Individual-1.vue"
    import Individual2 from "../components/Individual-2.vue"
    import Individual3 from "../components/Individual-3.vue"
    import Progress from "../components/Progress.vue"


    import { useFetch } from '../composables/useFetch.js'

    const router = useRouter();
    const { data, error, loading, doFetch } = useFetch()

    const handleSubmit = async () => {
        await doFetch("https://local-content-server.herokuapp.com/api/v1/submit", registration);
        if (error.value) {
            console.log("error indiv", error.value)
            if (error.value.errors?.message) {
                console.log('returned errors', error.value.errors?.message)
            }
        }
        else {
            console.log(data)
            alert("your registration was successful")
            router.push('/')
        }
    }

    const step = ref(1)

    const registration = {
        name: {
                title: '',
                first: '',
                middle: '',
                last: ''
            },
        email: '',

        meta: {
            gender: '',
            maritalStatus: '',
            religion:'',
            dob: '',
            nationality:'',
            address: '',
            nin: '',
            phone: '',
        },

        referee: {
            name:'',
            applicant_name:'',
            gender:'',
            occupation: '',
            address: '',
            phone: '',
            email: '',
            date: '',
            signature: ''
        },

        declaration: {
            name: '',
            date: '',
            signature: ''
        },

        payment: {
            paymentID: '',
            amount: ""
        }
    }

</script>
  

<template>
    <div class="px-4 text-sm sm:px-16">
        <LoadingVue :isLoading="loading" /> <!-- Modal for Loading state -->
        <Progress :step="step" />

        <div class="mb-8 text-center text-red-600 error">
            {{ error && "Something went wrong" }}
            <!-- {{ error && error.errors?.message ? error.errors?.message : error ? error : "" }} -->
        </div>
        <div action="" class="">
            <Individual1 :registration="registration" @nextStep="step++" v-if="step == 1" />
            <Individual2 :registration="registration" @prevStep="step--" @nextStep="step++" v-else-if="step == 2" />
            <Individual3 :registration="registration" @prevStep="step--" @submit_form="handleSubmit" v-else-if="step == 3" />
        </div>
    </div>
</template>
  
  