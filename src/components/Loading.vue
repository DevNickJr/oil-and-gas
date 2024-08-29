<template>
        <loading v-model:active="isLoading"
                 :can-cancel="true"
                 :on-cancel="onCancel"
                 :is-full-page="fullPage"/>
</template>

<script setup>
    import { ref } from 'vue'
    import Loading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';

    const props = defineProps(['isLoading'])

    const fullPage =  ref(true)

    const onCancel = () => {
        console.log('User cancelled the loader.')
    }

</script>