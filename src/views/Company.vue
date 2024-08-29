<script setup>
  import LoadingVue from '../components/Loading.vue'
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import Company1 from "../components/Company-1.vue";
  import Company2 from "../components/Company-2.vue";
  import Company3 from "../components/Company-3.vue";
  import Progress from "../components/Progress.vue"
  import { useFetch } from '../composables/useFetch.js'

  const step = ref(1)
  const router = useRouter();

  const { data, error, loading, doFetch } = useFetch()
 
  const handleSubmit = async () => {
    await doFetch("https://local-content-server.herokuapp.com/api/v1/submit", registration);
    if (error.value) {
        console.log("error")
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

    organization: {
        address: '',
        email: '',
        auth: {
                model: '',
                number: ''
            },
        contactPerson: '',
        whatsapp: ''
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
  <div class="px-4 sm:px-16 text-sm">
    <LoadingVue :isLoading="loading" /> <!-- Modal for Loading state -->
    <Progress :step="step" />
    <div class="error text-center text-red-600 mb-8">
      {{ error && "Something went wrong" }}
      <!-- {{ error && error.errors?.message ? error.errors?.message : error ? error : "" }} -->
    </div>
    <form @submit.prevent="handleSubmit" action="" class="">
      <Company1 :registration="registration" @nextStep="step++" v-if="step == 1" />
      <Company2 :registration="registration" @prevStep="step--" @nextStep="step++" v-else-if="step == 2" />
      <Company3 :registration="registration" @prevStep="step--" @submit_form="handleSubmit" v-else-if="step == 3" />
    </form>
  </div>
</template>
  
  