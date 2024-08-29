<script setup>
    import { ref, onMounted} from "vue"
    import { useRouter } from 'vue-router'
    
    const router = useRouter();
    const emit = defineEmits(['submit_form'])
    const props = defineProps(['registration'])


    const onCallback = (response) => {
        console.log('resp', response)
        if (response.resp == '00') {
            props.registration.payment.paymentID = response.txnref;
            props.registration.payment.amount = response.amount;
            console.log('props.reg ', props.registration)
            emit('submit_form') 
        } else {
            router.push('/register/individual')
        }
    }
    const txnref = ref(Date.now().toString());

    var samplePaymentRequest = {
        merchant_code: "MX46047",          
        pay_item_id: "9253121",
        txn_ref: txnref.value,
        amount: 1000, 
        currency: 566, // ISO 4217 numeric code of the currency used
        onComplete: onCallback,
        mode: 'LIVE',
        site_redirect_url: "http://localhost:3000"
    };


    function initiatePayment(){
        samplePaymentRequest.txn_ref = Date.now().toString();
        console.log('payment started');
        console.log(samplePaymentRequest)
        window.webpayCheckout(samplePaymentRequest);
    }
</script>
<template>
    <button @click.prevent="initiatePayment">
        Register
    </button>
</template>
