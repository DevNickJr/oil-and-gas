<script setup>
	import { QrcodeStream } from 'vue3-qrcode-reader'
	import { ref, computed} from 'vue'
	import UserService from '../services/user.service';

	const result = ref(null);
	const error = ref(null);
	var userDetail = ref(null);
	const loading = ref(false);
	const camera = ref('auto');
	const showScanConfirmation = ref(false);

	const onInit = async (promise) => {
		loading.value = true;
		try {
			await promise
		} catch (error) {
			if (error.name === 'NotAllowedError') {
					error.value = "ERROR: you need to grant camera access permission"
			} else if (error.name === 'NotFoundError') {
					error.value = "ERROR: no camera on this device"
			} else if (error.name === 'NotSupportedError') {
					error.value = "ERROR: secure context required (HTTPS, localhost)"
			} else if (error.name === 'NotReadableError') {
					error.value = "ERROR: is the camera already in use?"
			} else if (error.name === 'OverconstrainedError') {
					error.value = "ERROR: installed cameras are not suitable"
			} else if (error.name === 'StreamApiNotSupportedError') {
					error.value = "ERROR: Stream API is not supported in this browser"
			} else if (error.name === 'InsecureContextError') {
					error.value = 'ERROR: Camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP.';
			} else {
					error.value = `ERROR: Camera error (${error.name})`;
			}
		} finally {
        loading.value = false
		showScanConfirmation.value = camera.value === "off"
      }
    }

    const onDecode = async (res) => {
		if(res){
			console.log(res);
			result.value = res;
			UserService.getOneUserDetail(result.value)
			.then( async (response) => {
				console.log('response: ', response.data.form);
				userDetail.value = response.data.form

				camera.value = 'auto'
				await timeout(500)
				camera.value = 'off'
			})
			.catch((e) => {
				console.log(e);
			});
		}
	}

	const unpause = () => {
      camera.value = 'auto'
    }

    const pause = () => {
      camera.value = 'off'
    }

    const timeout = (ms) => {
      return new Promise(resolve => {
        window.setTimeout(resolve, ms)
      })
    }

	const onInitFailed = (error) => {
		console.log('user: ', user);
    }

</script>

<template>
	<div class="flex flex-col items-center py-16 p-8 sm:py-8 flex-[2_1_500px] md:flex-[2_1_600px] lg:flex-[4_1_900px]">
		<div class="w-80 h-80">
			<qrcode-stream @decode="onDecode" @init="onInit" v-if="!destroyed">
				<div class="flex items-center justify-center h-full text-xl font-bold" v-if="loading">
					Loading...
				</div>
				<div v-show="showScanConfirmation" class="scan-confirmation">
					<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M20.2292 23.521C19.8369 23.1287 19.3049 22.9083 18.7501 22.9083C18.1953 22.9083 17.6632 23.1287 17.2709 23.521C16.8786 23.9133 16.6582 24.4454 16.6582 25.0002C16.6582 25.555 16.8786 26.0871 17.2709 26.4794L23.5209 32.7294C23.7156 32.9224 23.9464 33.0752 24.2003 33.1789C24.4541 33.2826 24.7259 33.3351 25.0001 33.3335C25.2853 33.3245 25.5656 33.2569 25.8236 33.1351C26.0816 33.0132 26.3119 32.8397 26.5001 32.6252L41.0834 15.9585C41.4201 15.5405 41.5825 15.0085 41.5366 14.4737C41.4908 13.9388 41.2402 13.4423 40.8372 13.0877C40.4342 12.7331 39.9099 12.5477 39.3735 12.5702C38.8372 12.5927 38.3303 12.8214 37.9584 13.2085L25.0001 28.2085L20.2292 23.521Z" fill="#4ECB71"/>
						<path d="M43.7505 22.916C43.198 22.916 42.6681 23.1355 42.2774 23.5262C41.8867 23.9169 41.6672 24.4468 41.6672 24.9994C41.6672 29.4196 39.9112 33.6589 36.7856 36.7845C33.66 39.9101 29.4208 41.666 25.0005 41.666C21.709 41.6645 18.4917 40.6884 15.7542 38.8609C13.0167 37.0333 10.8816 34.4361 9.61817 31.3968C8.35475 28.3574 8.01956 25.012 8.65486 21.7825C9.29016 18.5529 10.8675 15.5837 13.188 13.2493C14.7311 11.6856 16.5707 10.4453 18.599 9.60104C20.6272 8.75682 22.8035 8.32562 25.0005 8.33268C26.3327 8.34102 27.66 8.49471 28.9588 8.79102C29.2306 8.87509 29.5168 8.9026 29.7996 8.87185C30.0825 8.8411 30.356 8.75274 30.6034 8.61222C30.8508 8.4717 31.0668 8.282 31.238 8.05481C31.4093 7.82762 31.5322 7.56776 31.5992 7.29125C31.6662 7.01474 31.6759 6.72744 31.6276 6.44706C31.5793 6.16668 31.474 5.89916 31.3184 5.661C31.1628 5.42284 30.96 5.21908 30.7226 5.06229C30.4852 4.9055 30.2181 4.799 29.938 4.74935C28.3196 4.3686 26.6631 4.17291 25.0005 4.16602C20.8845 4.1874 16.8671 5.42752 13.4553 7.72987C10.0434 10.0322 7.39003 13.2936 5.82992 17.1025C4.26981 20.9114 3.87292 25.0971 4.68933 29.1313C5.50574 33.1656 7.49886 36.8676 10.4172 39.7702C14.2853 43.6401 19.5289 45.8199 25.0005 45.8327C30.5258 45.8327 35.8249 43.6378 39.7319 39.7307C43.6389 35.8237 45.8338 30.5247 45.8338 24.9994C45.8338 24.4468 45.6143 23.9169 45.2236 23.5262C44.8329 23.1355 44.303 22.916 43.7505 22.916Z" fill="#4ECB71"/>
					</svg>
				</div>
			</qrcode-stream>
		</div>
		<p class="decode-result">Last result: <b>{{ result }}</b></p>
		<p class="error">{{ error }}</p>
		<div v-if="result" class="flex flex-col items-center w-full gap-2">
			<div class="flex w-full">
				<span class="w-2/5 p-3 pr-2 overflow-hidden text-sm font-semibold text-right break-words border-2">Name:</span>
				<span class="w-3/5 p-3 pl-2 overflow-hidden text-sm text-left break-words border-2">{{`${userDetail.name?.title} ${userDetail.name?.last} ${userDetail.name?.first}`}}</span>
			</div>
			<div class="flex w-full">
				<span class="w-2/5 p-3 pr-2 overflow-hidden text-sm font-semibold text-right break-words border-2">Email Address:</span>
				<span class="w-3/5 p-3 pl-2 overflow-hidden text-sm text-left break-words border-2">{{userDetail.organization?.email ? userDetail.organization.email : userDetail.email}}</span>
			</div>
			<div class="flex w-full">
				<span class="w-2/5 p-3 pr-2 overflow-hidden text-sm font-semibold text-right break-words border-2">Phone:</span>
				<span class="w-3/5 p-3 pl-2 overflow-hidden text-sm text-left break-words border-2">{{userDetail.meta.phone}}</span>
			</div>
			<div class="flex w-full">
				<span class="w-2/5 p-3 pr-2 overflow-hidden text-sm font-semibold text-right break-words border-2">Category:</span>
				<span class="w-3/5 p-3 pl-2 overflow-hidden text-sm text-left break-words border-2">{{ userDetail.organization?.email ? "Company" : "Individual"}}</span>
			</div>
			<div class="flex w-full">
				<span class="w-2/5 p-3 pr-2 overflow-hidden text-sm font-semibold text-right break-words border-2">Status:</span>
				<span class="w-3/5 p-3 pl-2 overflow-hidden text-sm text-left break-words border-2">{{ userDetail.status }}</span>
			</div>
		</div>
	</div>
 
</template>

<style scoped>
	.scan-confirmation {
		position: absolute;
		width: 100%;
		height: 100%;

		background-color: rgba(255, 255, 255, .8);

		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
	}
</style>

<!-- <template>
	<div class="flex flex-col items-center py-16 p-8 sm:py-8 flex-[2_1_500px] md:flex-[2_1_600px] lg:flex-[4_1_900px]">
		<p class="error">{{ error }}</p>

		<p class="decode-result">Last result: <b>{{ result }}</b></p>
	
		<div class="w-80 h-80">
			<qrcode-stream @decode="onDecode" @init="onInit" />
		</div>
	</div>
  </template>
  
  <script>
  import { QrcodeStream } from 'vue3-qrcode-reader'
  
  export default {
  
    components: { QrcodeStream },
  
    data () {
      return {
        result: '',
        error: ''
      }
    },
  
    methods: {
      onDecode (result) {
        this.result = result
      },
  
      async onInit (promise) {
        try {
          await promise
        } catch (error) {
          if (error.name === 'NotAllowedError') {
            this.error = "ERROR: you need to grant camera access permission"
          } else if (error.name === 'NotFoundError') {
            this.error = "ERROR: no camera on this device"
          } else if (error.name === 'NotSupportedError') {
            this.error = "ERROR: secure context required (HTTPS, localhost)"
          } else if (error.name === 'NotReadableError') {
            this.error = "ERROR: is the camera already in use?"
          } else if (error.name === 'OverconstrainedError') {
            this.error = "ERROR: installed cameras are not suitable"
          } else if (error.name === 'StreamApiNotSupportedError') {
            this.error = "ERROR: Stream API is not supported in this browser"
          } else if (error.name === 'InsecureContextError') {
            this.error = 'ERROR: Camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP.';
          } else {
            this.error = `ERROR: Camera error (${error.name})`;
          }
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .error {
    font-weight: bold;
    color: red;
  }
  </style> -->