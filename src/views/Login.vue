<script setup>
    import { useFetch } from '../composables/useFetch.js'
    import { ref, computed } from 'vue';
    import { useRouter, useRoute } from 'vue-router'  
    import { useStore } from 'vuex'
    // import { Form, Field} from "vee-validate";
    import * as yup from "yup";
    const store = useStore()
    const router = useRouter()
    const route = useRoute()

    const email =  ref(null)
    const password =  ref(null)
    const error = ref(null)
    const loading = ref(false)
    const message = ref(null);
    // let  loggedIn = ref(false)

    const loggedIn = store.state.auth.status.loggedIn;
    if (loggedIn) {
      router.push("/dashboard");
    }
    
    const schema = yup.object().shape({
      email: yup.string().required("Email is required!"),
      password: yup.string().required("Password is required!"),
    });

    const handleSubmit = async (user) => {
      loading.value = true;
      message.value = ''
      store.dispatch('auth/login', user).then(
        () => {
          router.push("/dashboard");
        },
        (error) => {
          loading.value = false;
          message.value = "something went wrong";
          // (error.response &&
          // error.response.data &&
          // error.response.data.message) ||
          // error.message ||
          // error.toString();

          console.log("error: " + message.value)
        }
      );
    }
</script>

<template>
    <div class="h-screen bg-[url('https://images.unsplash.com/photo-1666118704505-068a65b5283f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80')] bg-cover">
      <div class="backdrop-blur-[3px] h-full w-full flex justify-center px-4 sm:items-center flex-col">
        <div class="bg-[#ffffff57] md:w-1/2 flex px-6 justify-center py-6 sm:items-center flex-col">
          <h1 class="text-5xl mb-8 text-center font-bold md:font-medium text-[#2BC241] py-4">LOGIN</h1>
          <form class="flex flex-col gap-1 md:w-2/3 lg:w-2/3" @submit.prevent="handleSubmit({email, password})">
              <input v-model="email" class="border outline-none rounded p-4" type="email" placeholder='Email' autocomplete="email" />
              
              <input v-model="password" class="border outline-none rounded p-4" type="password" placeholder='Password' autocomplete="current-password" />
              <input 
                class="outline-none rounded my-4 p-4 bg-[#2BC241] text-white hover:bg-[#1ba330] cursor-pointer active:scale-95 transition-all"
                type="submit" 
                :value="loading ? 'Loading...' : 'Login'"
                :disabled="loading"
              />
          </form>
          <div v-if="message" class="text-red-500 text-center mt-4">
            {{message}}
          </div>
        </div>
      </div>
    </div>
</template>
  