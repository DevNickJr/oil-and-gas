<template>
  <div @click.self="$emit('close')" class="z-10 font-medium fixed top-0 left-0 pt-24 sm:flex items-center justify-center w-full h-full backdrop-blur-sm bg-[#00000047] px-4">
      <div class="flex gap-3 flex-col items-center justify-center px-4 py-8 pb-20 text-center bg-white sm:px-8 md:px-20 sm:w-2/3 rounded-3xl">
        <span>You have sucessfully generated an ID card for this member id:{{ id }}</span>
        <div v-if="data" class="h-[25rem] flex flex-col items-center py-8 px-4 w-80 bg-slate-100">
          <img :src="data" alt="image">
        </div>
        <Button @click="download" class="mb-3" text="Download" />
        <button class="block mx-auto underline underline-offset-2">send as email</button>
      </div>
  </div>
</template> 
<script setup>
  import Button from './Button.vue'
  const props = defineProps(['id', 'data'])
  console.log("dataq: ", props.data);

  function download(){
    const a = document.createElement('a');
    a.href = props.data;
    a.download = `id-card-${props.id}.png`;
    console.log("downloading")
    a.click();
  }

</script>
