<script>
    import { RouterLink, RouterView } from 'vue-router';

    export default {
        props: {
            registration: String,
        },
    }
</script>
  
  
  
  
  <template>
    <div class="pt-12">
        <div class="sm:block flex items-center justify-center flex-col bg-cover px-8 sm:px-16 py-12 text-white overflow-hidden whoWeArePic bg-black -z-30 bg-[url('./assets/oil-flair.png')]">
            <h2 class="mb-6 text-2xl font-medium text-center sm:text-left">
                Welcome to the registration page
            </h2>
            <span class="">
                Become a part of us today
            </span>
        </div> 
          
      <div class="px-4 py-2 pt-6 text-center sm:px-16">
        <p class="mb-2 text-sm opacity-">Choose your type of registration</p>
        <div class="flex items-center justify-center">
            <div v-if="registration === 'individual'" class="flex items-center justify-center">
                <div class="border border-r-0 opacity-90 py-2 text-xs bg-[#2BC241] text-white hover:bg-[#1ba330] cursor-pointer active:scale-95 transition-all" for="individual">
                    <RouterLink class="px-12 py-2" to="/register/individual">individual</RouterLink>
                </div>
                <div class="text-xs border opacity-90 py-2 cursor-pointer hover:bg-[#f0e8e8] active:scale-95 transition-all" for="company">
                    <RouterLink class="px-12 py-2" to="/register/company">Company</RouterLink>
                </div>
            </div>
            <div v-else-if="registration === 'company'"  class="flex items-center justify-center">
                <div class="border border-r-0 opacity-90 py-2 text-xs hover:bg-[#f0e8e8] cursor-pointer active:scale-95 transition-all" for="individual">
                    <RouterLink class="px-12 py-2" to="/register/individual">individual</RouterLink>
                </div>
                <div class="text-xs border opacity-90 py-2  bg-[#2BC241] text-white hover:bg-[#1ba330] cursor-pointer active:scale-95 transition-all" for="company">
                    <RouterLink class="px-12 py-2" to="/register/company">Company</RouterLink>
                </div>
            </div>
        </div>
      </div>
    </div>
  </template>
  