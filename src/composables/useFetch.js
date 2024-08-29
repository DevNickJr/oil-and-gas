// fetch.js
import { ref } from 'vue'

export const useFetch = (auth) => {
    const data = ref(null);
    const error = ref(null);
    const loading = ref(false);

    const doFetch = async(url, body) => {
        error.value = null;
        loading.value = true;
        
        const payload = body ? {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        } : auth ? {
            method: "GET",
            headers: {
                "authorization": `Bearer ${auth.token}`
            }
        } : {};

        try {
            const response = await fetch(url, payload);
            const json = await response.json();
            
            if (!response.ok) {
                error.value = json;
                loading.value = false;
            }
            if (response.ok) {
                data.value = json;
                loading.value = false;
            }
        } catch (err) {
            console.log("caught")
            loading.value = false;
            error.value = err;
        }
    }
    return { data, error, loading, doFetch }
}
