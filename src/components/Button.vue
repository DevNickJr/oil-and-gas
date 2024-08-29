<script>
    export default {
        props: {
            text: String,
        },
    }
</script>
  
  
  
  
<template>
    <button type="submit" class="bg-[#2BC241] text-white py-2 px-16 md:px-20 text-sm font-semibold">{{ text ? text: "Proceed" }}</button> 
</template>
  