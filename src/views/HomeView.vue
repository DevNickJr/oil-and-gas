<script>
import NavBar from '../components/NavBar.vue';
export default {
    data: function(){
        return {
            hash: this.$route.hash,
        }
    },
    components: {
      NavBar
    },
    mounted() {
        this.$nextTick(function () {
            if (this.$route.hash) {
                console.log(this.$route.hash);
                const el = document.querySelector(this.$route.hash);
                console.log(el);
                el && el.scrollIntoView();
            }
        })
    },
    updated() {
        this.$nextTick(function () {
            if (this.$route.hash) {
                console.log(this.$route.hash);
                const el = document.querySelector(this.$route.hash);
                console.log(el);
                el && el.scrollIntoView();
            }
        })
    },
    methods: {
        scrollToAnchorPoint(refName) {
            if (this.$route.hash) {
                console.log(this.$route.hash);
                const el = document.querySelector(this.$route.hash);
                console.log(el);
                el && el.scrollIntoView();
            }
        }
    }
}
</script>

<script></script>

<template>
<NavBar />
  <main class="w-full mt-12" id="home">
    <div class="bg-cover bg-black -z-30 h-[50vh] sm:h-[70vh] md:h-[75vh] w-full landing relative">
      <img class="absolute top-0 left-0 object-cover w-full h-full -z-10" src="../assets/hero.png" alt="Hero image" />
      <div class="flex items-center justify-center h-full px-12 md:pl-20 lg:px-20 md:w-1/2 sm:w-2/3 backdrop-blur-sm">
        <!-- <img src="../assets/herotext.svg" class="object-cover" alt=""> -->
         <h1 class="z-10 overflow-hidden text-3xl leading-relaxed text-white uppercase xl:leading-relaxed xl:text-6xl "><span class="text-[#2BC241]">Oil and Gas</span> Host Communities Development Council</h1>
      </div>
      <!-- <p class="text-white absolute font-['Roboto'] top-1/2 w-full text-3xl -translate-y-1/2 px-4 md:text-5xl font-medium sm:px-28  md:px-40 lg:px-72 left-0 py-8 text-center backdrop-brightness-50">Local Content Development and Promotions Council</p> -->
    </div>
    <div class="flex flex-col md:flex-row gap-14 py-14 px-10 md:px-20 items-center md:max-h-[90vh] overflow-hidden">
      <div class="flex-1 w-full overflow-hidden bg-black -z-30">
        <img class="object-cover w-full h-80 sm:h-96" src="../assets/refine.png" alt="Who We Are Image" />
      </div>
      <div class="flex flex-col justify-center flex-1 gap-4 overflow-hidden">
        <h2 class="text-[2rem] font-bold">Who we are</h2>
        <p class="overflow-hidden text-sm">
          The Oil and Gas Host Communities' Development Council (OGHCDC) is a strategic alliance established in 2021 by respected leaders and stakeholders dedicated to the development and empowerment of oil and gas host communities in Nigeria. Our organization advocates for the rights and privileges of these communities, ensuring they receive their fair share of benefits and opportunities.
          <br><br>
          As a proactive pressure group, OGHCDC works tirelessly to influence policy, promote sustainable development, and foster partnerships at both national and international levels. We are committed to creating avenues for growth, securing funding for critical projects, and ensuring the smooth implementation of initiatives that directly impact the well-being of our host communities. Through collaboration and persistent advocacy, we aim to build a future where these communities thrive economically, socially, and culturally.
        </p>
      </div>
    </div>
    <div
      class="flex md:flex-row flex-col items-center px-10 md:px-24 py-8 min-h-[60vh] text-white justify-center md:justify-between w-full bg-cover gap-4 md:gap-1 bg-center relative  bg-black -z-30">
      <img class="absolute top-0 left-0 object-cover object-center w-full h-full -z-10" src="../assets/oil-flair.png" alt="mission statement background" />
      <div class="flex flex-col gap-4 missionStatement">
        <h2 class="text-[1.7rem] md:text-[2rem] font-bold text-center">Our Mission Statement</h2>
        <p class="text-sm sm:text-center">
          To strategically promote sustainable development in oil and gas communities through national and international development partnerships
        </p>
      </div>
      <div class="flex flex-col gap-4 visionStatement">
        <h2 class="text-[1.7rem] md:text-[2rem] font-bold text-center">Our Vision Statement</h2>
        <p class="text-sm sm:text-center">
          To ensure that the rights and privileges of oil and gas host communities are protected, fostering strategic, sustainable prosperity and guaranteeing self-worth and dignity for these communities
        </p>
      </div>
    </div>
    <div class="px-10 py-14">
      <h2 class="text-[2rem] text-center font-bold">Why You Should Join Us</h2>
      <div class="relative flex flex-col mt-8">
        <div class="flex items-center justify-between w-full gap-8">
          <div class="w-40 text-xs lg:w-48 md:absolute md:left-8 lg:left-20 top-4">
            Our platform provides high networking opportunities between companies and stakeholders within the oil and gas industry.
          </div>
          <div class="right-0 w-40 text-xs lg:right-16 lg:w-48 md:absolute top-4">
            Have access to vital and timely information within the oil and gas eco-system
          </div>
        </div>
        <div class="flex justify-center my-8">
          <img class="w-1/2" src="../assets/reasons.svg" alt="Member benefit chart">
          <span class="text-[6px] sm:text-xs md:text-base absolute top-1/2 text-white -translate-y-1/3 -translate-x-1/2 left-1/2">Member</span>
        </div>
        <div class="flex items-center justify-between gap-8">
          <div class="bottom-0 left-0 w-40 text-xs lg:w-48 md:absolute md:left-8 lg:left-20">
            Access to viable local and foreign deals, investment partners, sponsors and investors.
          </div>
          <div class="bottom-0 right-0 w-40 text-xs lg:w-48 md:absolute lg:right-16">
            To have access to other membership privileges.
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center gap-4 px-10 md:px-24 py-10 bg-[#2BC241] howToJoinUs">
      <h2 class="text-[2rem] text-center font-bold text-white">How To Join Us</h2>
      <p class="mb-4 text-sm text-center text-white md:mt-8">You can join us with just three steps listed below</p>
      <div class="flex flex-col justify-between gap-6 mb-12 md:flex-row md:gap-4">
        <div class="flex flex-col items-center justify-center w-full gap-2 px-10 py-4 bg-white rounded md:w-1/3">
          <div class="text-[1rem] font-bold bg-green-200 text-[#2BC241] rounded-full h-12 w-12 grid place-items-center">
            1
          </div>
          <p class="text-sm text-center">
            Click on become a member
          </p>
        </div>
        <div class="flex flex-col items-center justify-center w-full gap-2 px-10 py-4 bg-white rounded md:w-1/3">
          <div class="text-[1rem] font-bold bg-green-200 text-[#2BC241] rounded-full h-12 w-12 grid place-items-center">
            2
          </div>
          <p class="text-sm text-center">
            Register as Individual or company, make payments
          </p>
        </div>
        <div class="flex flex-col items-center justify-center w-full gap-2 px-10 py-4 bg-white rounded md:w-1/3">
          <div class="text-[1rem] font-bold bg-green-200 text-[#2BC241] rounded-full h-12 w-12 grid place-items-center">
            3
          </div>
          <p class="text-sm text-center">
            Upon approval, print your your membership Identification card
          </p>
        </div>
      </div>
      <button class="px-4 py-2 mt-8 font-medium bg-white sm:px-20 cursor-pointer active:scale-95 transition-all hover:bg-[#f0e8e8]"><RouterLink to="/register/individual" class="">Become a Member</RouterLink></button>
    </div>
    <div class="px-10 py-12 pt-20 md:px-24 verifyYourMemberShip" id="verifyMembership">
      <div class="flex flex-col items-start justify-center sm:w-2/3 md:w-1/2 lg:w-2/5">
        <span class="text-2xl font-medium">Verify Your Membership</span>
        <input
          class="w-full px-2 py-2 my-6 text-xs font-semibold border-2 outline-none"
          type="text"
          placeholder="Enter your membership number"
        />
        <button class="px-6 py-2 text-sm text-white bg-[#2BC241] hover:bg-[#1ba330] cursor-pointer active:scale-95 transition-all">Submit</button>
      </div>
    </div>
    <div class="relative grid px-4 font-semibold bg-black bg-cover place-items-center py-14 -z-30">
      <img class="absolute top-0 left-0 object-cover w-full h-full -z-10" src="../assets/shake.svg" alt="background image" />
      <h1 class="py-8 text-2xl text-center text-white sm:text-3xl md:text-5xl">Together we can <br> achieve great things</h1>
    </div>
    <div class="footer bg-[#2BC241] relative px-10 md:px-24 text-white py-4 pb-10 sm:py-10 sm:pb-16">
      <div class="flex flex-col items-center font-semibold text-center sm:flex-row sm:text-left sm:justify-start">
        <img src="../assets/oil-logo.png" class="object-cover h-24 overflow-hidden bg-white rounded-full" alt="LOGO">
        <div class="w-2/3 mx-auto mt-4">
          <h2 class="mb-4 text-2xl">Contacts</h2>
          <div class="flex flex-col gap-6 mb-4 sm:m-0 opacity-95">
            <div>
              Tel: <a href="tel:+2347084232611" class="font-medium underline underline-offset-2 hover:underline">07084232611</a>, <a href="tel:+2348066810524" class="font-medium underline underline-offset-2 hover:underline">08066810524</a><br>
              Email Address: <a href="mailto: nlcdpc11@gmail.com" class="font-medium underline underline-offset-2 hover:underline"> nlcdpc11@gmail.com</a><br>
            </div>
            <div>
              Address_1: 13 Mambila street, off Aso Drive, Maitama, Abuja <br>
              Address_2: 2nd floor okolobian plaza Isaac boro express way, Opp. Prosco okaka, yenagoa, Bayelsa state
            </div>
          </div>    
        </div>
      </div>
      <p class="absolute left-0 w-full text-sm font-semibold text-center bottom-2">Developed by Ayaweisoft</p>
    </div>
  </main>
</template>
