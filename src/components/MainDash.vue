<script setup>  
  import { ref, onMounted, computed } from 'vue'
  import CardSuccess from "./CardSuccess.vue";
  import QrcodeVue from 'qrcode.vue'
  import UserService from "../services/user.service";
  import { useFetch } from '../composables/useFetch.js'
  import { useStore } from 'vuex'
  import domtoimage from 'dom-to-image';
  
  const store = useStore();

  const user = store.state?.auth?.user;
  const { data, error, loading, doFetch } = useFetch({token: user?.accessToken, method: "GET"})

  function logOut() {
        store.dispatch('auth/logout');
        router.push('/login');
    } 

  const fetchData = async () => {
      await doFetch("https://local-content-server.herokuapp.com/api/v1/submit");
      if (error.value) {
        if (error?.value?.message?.includes("Unauthorized access")) {
          logOut();
        }
        console.log('returned errors: ', error.value.errors)
        if (error.value.errors?.message) {
          console.log('returned errors: ', error.value.errors?.message)
          if (error.value.errors?.message.includes("Unauthorized access")) {
            logOut();
          }
        } else {
          console.log("error: ", error.value)
        }
      }
  }
  
  onMounted(async () => {
    await fetchData();
  })

  var idCard = ref({
    name: '',
    email: '',
    phone: '',
  })
  
  const modal = ref('')
  const size = ref(93.5)
  const idCardRef = ref(null);
  const main = ref(null);
  const dataUrl = ref(null);
  const qr_code = ref('');

  function generateCard(id, name, email, phone, type) {
    modal.value = id
    idCard.value.name = name;
    idCard.value.email = email;
    idCard.value.phone = phone;
    idCard.value.type = type;
    qr_code.value = id;

    const node = document.getElementById("idCardRef");
  
    console.log('node: ', node);
  
    domtoimage.toPng(node)
    .then(function (data) {
        dataUrl.value = data;
        console.log(data)
    })
    .catch(function (error) {
        console.error('oops, something went wrong!', error);
    });
  }
 
  function download(){
    
  }

  function closeModal() {
      modal.value = ''
      dataUrl.value = null;
  }

  const headers = [
    { text: "ID Number", value: "_id" },
    { text: "Member Name", value: "name", sortable: true },
    { text: "Email", value: "email", sortable: true },
    { text: "Phone", value: "phone", sortable: true },
    { text: "Date Created", value: "created_at", sortable: true },
    { text: "Membership type", value: "type", sortable: true },
    { text: "Actions", value: "actions", sortable: true }
  ];
  const items = computed(() => {
    console.log("data: ", data.value?.users?.data)
    return data.value?.users?.data?.map(item => ({ 
      "_id":item._id, 
      "name":  `${item.name?.title} ${item.name?.last} ${item.name?.first}`, 
      "created_at":item.createdAt, "email": item.organization?.email ? item.organization.email : item.email, 
      "type": item.organization?.email ? "Company" : "Individual", 
      "actions": "Generate",
      "phone": item.meta?.phone
    }))
  })
</script>

<template>
  <div ref='main' class="py-16 p-8 sm:py-8 flex-[2_1_500px] md:flex-[2_1_600px] lg:flex-[4_1_900px]">
    <div class="relative mb-12">
        <input type="text" name="search" id="search" class="bg-[#D9D9D980] w-full py-2 px-4 rounded-full">
        <img src="../assets/search-icon.svg" alt="search" class="absolute -translate-y-1/2 top-1/2 left-5">
        <span class="absolute text-sm -translate-y-1/2 top-1/2 left-16 opacity-70">search for member</span>
    </div>
    <h2 class="text-[#2BC241] text-2xl sm:text-[27px] py-4 font-medium mb-12 sm:text-left text-center">List of Registered Members</h2>
    <div v-if="error" class="mb-8 text-center text-red-600 error">
      {{ error && "Something went wrong" }} <br>
      {{ error && error.errors?.message ? error.errors?.message : error ? error : "" }}
    </div>
    <div v-if="items">
      <EasyDataTable
        :headers="headers"
        :items="items"
      >
        <template #header-name="header">
          <div class="customize-header">
            {{ header.text }}
          </div>
        </template>
        <template #item-actions="item">
          <div class="customize-item">
            <button @click="generateCard(item._id, item.name, item.email, item.phone, item.type)" class="w-full text-white bg-[#2BC241] py-1 px-2 hover:bg-[#1ba330] cursor-pointer active:scale-95 transition-all">
              {{ item.actions }}
            </button>
          </div>
        </template>
      </EasyDataTable>  
    </div>
    <!-- id card -->
   <div class='absolute -top-[1000rem]'>
     <div  ref="idCardRef" id="idCardRef" class="h-[25rem] flex gap-4 flex-col items-center py-8 px-4 w-80 bg-slate-100 relative">
       <div class="h-2/3 w-1 bg-[#2BC241] absolute top-0 left-0"></div>
       <div class="h-2/3 w-1 bg-[#2BC241] absolute right-0 bottom-0"></div>
       <svg class="absolute top-0 right-0" width="185" height="57" viewBox="0 0 185 57" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M93 0H185V57L93 0Z" fill="#0D4915"/>
         <path d="M0 0H185V26L0 0Z" fill="#2BC241"/>
       </svg>
       <svg class="absolute bottom-0 left-0" width="185" height="57" viewBox="0 0 185 57" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M92 57L1.90735e-06 57V3.57628e-07L92 57Z" fill="#0D4915"/>
         <path d="M185 57L0 57V31L185 57Z" fill="#2BC241"/>
       </svg>
 
       <h1 class="overflow-hidden font-bold text-center uppercase break-words">Local Content Development and promotions council</h1>
       <div class="relative w-24 h-24 overflow-visible border">
         <svg class="absolute top-0 right-0 translate-x-2 -translate-y-2" width="85" height="85" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M0 0H85V85H79.5V5H0V0Z" fill="#2BC241"/>
         </svg>
         <qrcode-vue :value="qr_code" :size="size" level="H"/>
       </div>
       <div class="flex flex-col items-center w-full gap-2">
         <div class="flex w-full">
           <span class="w-2/5 pr-2 overflow-hidden text-sm font-semibold text-right break-words">Name:</span>
           <span class="w-3/5 pl-2 overflow-hidden text-sm text-left break-words">{{idCard.name}}</span>
         </div>
         <div class="flex w-full">
           <span class="w-2/5 pr-2 overflow-hidden text-sm font-semibold text-right break-words">Email Address:</span>
           <span class="w-3/5 pl-2 overflow-hidden text-sm text-left break-words">{{idCard.email}}</span>
         </div>
         <div class="flex w-full">
           <span class="w-2/5 pr-2 overflow-hidden text-sm font-semibold text-right break-words">Phone:</span>
           <span class="w-3/5 pl-2 overflow-hidden text-sm text-left break-words">{{idCard.phone}}</span>
         </div>
         <div class="flex w-full">
           <span class="w-2/5 pr-2 overflow-hidden text-sm font-semibold text-right break-words">Category:</span>
           <span class="w-3/5 pl-2 overflow-hidden text-sm text-left break-words">{{idCard.type}}</span>
         </div>
       </div>
     </div>
   </div>
  </div>

  <!-- modal -->
  <CardSuccess :id="modal" :data="dataUrl" v-if="dataUrl" @close="closeModal" @download="download"/>
</template>
  
  
<!-- <template>
    <div class="p-8 py-8">
        <div class="relative mb-12">
            <input type="text" name="search" id="search" class="bg-[#D9D9D980] w-full py-2 px-4 rounded-full">
            <img src="../assets/search-icon.svg" alt="search" class="absolute -translate-y-1/2 top-1/2 left-5">
            <span class="absolute text-sm -translate-y-1/2 top-1/2 left-16 opacity-70">search for member</span>
        </div>
        <h2 class="text-[#2BC241] text-[27px] font-medium mb-12">List of Registered Members</h2>
        <div>
            <vue-good-table
                :columns="columns"
                :rows="rows"
                :search-options="{
                  enabled: true
                }">
                <template slot="table-row" slot-scope="props">
                  <span v-if="props.column.field == 'age'">
                    <span style="font-weight: bold; color: blue;">{{props.row.age}}</span> 
                  </span>
                  <span v-else>
                    {{props.formattedRow[props.column.field]}}
                  </span>
                </template>
            </vue-good-table>
        </div>
    </div>
</template> -->
<!-- const items = [
  { "_id":1000, "name": "Curry", "created_at":"14-03-2002", "status": "verified", "type": "individual", "actions": "Generate" },
  { "_id":1001, "name": "James", "created_at":"14-03-2002", "status": "verified", "type": "company", "actions": "Generate" },
  { "_id":1002, "name": "Jordan", "created_at":"14-03-2002", "status": "verified", "type": "individual", "actions": "Generate" },
  { "_id":1003, "name": "Nicholas", "created_at":"14-03-2002", "status": "verified", "type": "individual", "actions": "Generate" },
  { "_id":1004, "name": "Duadei", "created_at":"14-03-2002", "status": "verified", "type": "individual", "actions": "Generate" },
  { "_id":1005, "name": "Victor", "created_at":"14-03-2002", "status": "verified", "type": "individual", "actions": "Generate" },
  { "_id":1006, "name": "Dein", "created_at":"14-03-2002", "status": "verified", "type": "individual", "actions": "Generate" },
  { "_id":1007, "name": "Marvellous", "created_at":"14-03-2002", "status": "verified", "type": "individual", "actions": "Generate" },
]; -->