<template>
    <div>


        <!-- Scroll progress -->
        <div class="fixed top-0 bg-indigo-600 rounded-xl" style="width: 0.5%;" :style="{ height: scrollPercent + '%' }">

        </div>
        <!-- Scroll progress -->



        <div class="min-h-screen">

            <div class="grid grid-cols-12 gap-4 mt-2 " id="About" style="min-height: 100dvh;"
                :class="darkMode ? ' bg-black/70 font-black' : ' bg-white/30 font-white'">

                <div class="flex col-span-2 items-center justify-center flex-column font-serif ">

                    <v-btn class="fixed top-10" v-if="scrollPercent >= 2" variant="text" text="Show menu"
                        @click="scrollToTop">

                        <template v-slot:append>
                            <v-icon class="animate-bounce w-6 h-6 text-3xl">mdi-arrow-up</v-icon>
                        </template>

                    </v-btn>



                    <div class="fixed top-auto">
                        <div class="ms-5 w-100 cursor-pointer text-center hover:scale-110 transition-all duration-500 ease-in-out " :class="currentSection == 'About' ? 'text-4xl font-black mb-4 transition-all duration-500 ease-in' : 'hover:font-black'"
                            v-scroll-to="'#About'" @click="changeSection('About')">
                            About
                        </div>
                        <div class="ms-5 w-100 cursor-pointer text-center  hover:scale-110 transition-all duration-500 ease-in-out  " :class="currentSection == 'News' ? 'text-4xl font-black my-4 transition-all duration-500 ease-in' : 'hover:font-black'"
                            v-scroll-to="'#News'" @click="changeSection('News')">
                            News
                        </div>
                        <div class="ms-5 w-100 cursor-pointer text-center hover:scale-110 transition-all duration-500 ease-in-out " :class="currentSection == 'Clubs' ? 'text-4xl font-black my-4 transition-all duration-500 ease-in' : 'hover:font-black'"
                            v-scroll-to="'#Clubs'" @click="changeSection('Clubs')">
                            Clubs
                        </div>
                        <div class="ms-5 w-100 cursor-pointer text-center hover:scale-110 transition-all duration-500 ease-in-out " :class="currentSection == 'Subscriptions' ? 'text-4xl font-black mt-4 transition-all duration-500 ease-in' : 'hover:font-black'"
                            v-scroll-to="'#Subscriptions'" @click="changeSection('Subscriptions')">
                            Subscriptions
                        </div>
                    </div>




                </div>

                <!-- Content -->
                <div class="col-span-10 flex">

                    <v-row>
                        <v-col cols=12 align="end" class="mt-3 ">
                            <v-img
                                src="https://firebasestorage.googleapis.com/v0/b/pump-gym-f72c7.appspot.com/o/Images%2FFacilities%2FinviteImage.jpeg?alt=media&token=11bc967d-6089-46f9-b4be-02b2b65e3b30"
                                height="300" />
                        </v-col>
                    </v-row>

                    <!-- <div class=" flex items-center ">

                        <div class="pa-4 rounded-xl font-weight-black  ">
                            Do you dream of health, strength, and perfect fitness? If so, you've found
                            the
                            perfect
                            place! Our gym not only offers top-quality equipment but also an inspiring
                            environment
                            that motivates action.

                            Our experienced instructors are here to help you achieve your fitness goals,
                            whether
                            you're just starting your fitness journey or you're an experienced athlete.
                            Whether you
                            want to build muscle, lose weight, or improve your endurance, we're ready to
                            support you
                            every step of the way.

                            Come to our gym and join the community of people who actively care for their
                            health and
                            well-being. Together, we'll achieve more!

                            Don't wait any longer - start your journey to a better version of yourself
                            today!
                        </div>

                    </div> -->

                    <!-- <div>
                        <v-avatar size=" 500" class="me-2 "
                            image="https://firebasestorage.googleapis.com/v0/b/pump-gym-f72c7.appspot.com/o/Images%2Flogo.png?alt=media&token=8504510e-a373-4235-9811-da7abd576c0d">
                        </v-avatar>
                    </div> -->
                </div>
                <!-- Content -->
            </div>







            <!-- News -->
            <div class="grid grid-cols-12 gap-4 " id="News" style="min-height: 100dvh;"
                :class="darkMode ? ' bg-black/70 font-black' : ' bg-white/30 font-white'">

                <div class="flex col-span-2  items-center justify-center flex-column font-serif">
                </div>

                <!-- Content -->
                <div class="col-span-10 flex">
                    <div class=" w-100">

                        <v-row v-if="userRole && userRole == 'Admin' && !$vuetify.display.smAndDown">
                            <v-col align="start">
                                <v-btn size="large" variant="text" text="Add post" append-icon="mdi-plus"
                                    class="font-weight-black  bg-green-500 ms-5 transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-110"
                                    @click="addPost"></v-btn>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col>

                                <v-row class="border-2 text-wrap pa-2 ma-5 rounded-lg backdrop-blur-lg"
                                    v-for="post in posts" :key="posts.id">

                                    <v-col :cols="userRole && userRole == 'Admin' ? '10' : '12'">
                                        <div v-html="post.postContent"></div>
                                    </v-col>


                                    <v-col align="end"
                                        v-if="userRole && userRole == 'Admin' && !$vuetify.display.smAndDown">

                                        <v-btn text="Manage post"
                                            class="font-black transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-110"
                                            size="large" color="success" append-icon="mdi-pencil"
                                            @click="editPost(post)"></v-btn>

                                    </v-col>


                                </v-row>

                            </v-col>
                        </v-row>


                    </div>
                </div>
                <!-- Content -->
            </div>
            <!-- News -->









            <div class="grid grid-cols-12 gap-4" id="Clubs" style="min-height: 100dvh;"
                :class="darkMode ? ' bg-black/70 font-black' : ' bg-white/30 font-white'">
                <div class="flex col-span-2 items-center justify-center flex-column font-serif">
                </div>

                <!-- Content -->
                <div class="col-span-10 flex pe-7">
                    <div class="w-100 ">

                        <v-row>
                            <v-col cols="12" align="center" jusify="center"
                                class="text-h4 py-6 font-weight-black text-white">
                                Our clubs
                            </v-col>
                        </v-row>



                        <v-tabs v-model="tab" bg-color="transparent" color="basil" grow>
                            <v-tab v-for="facility in facilities" :key="item" :value="item">
                                {{ facility.Name }}
                            </v-tab>
                        </v-tabs>

                        <v-window v-model="tab">
                            <v-window-item v-for="facility in facilities" :key="item" :value="item">

                                <div style="min-height: 82dvh;">


                                    <v-row class="text-3xl font-black mt-4">
                                        <v-col>
                                            Welcome to Pump Gym {{ facility.Name }} !
                                        </v-col>
                                    </v-row>


                                    <v-row>
                                        <v-col>

                                            {{ facility.Description }}

                                        </v-col>

                                        <v-col cols="4" align="end">
                                            <v-carousel hide-delimiters :show-arrows="false" cycle interval="5000"
                                                continuous direction="vertical" height="350">
                                                <v-carousel-item v-for="image in facility.images"
                                                    :src="image"></v-carousel-item>
                                            </v-carousel>
                                        </v-col>
                                    </v-row>



                                    <v-row>
                                        <v-col cols="12" align="center" class="text-3xl font-black">
                                            Check our team
                                        </v-col>
                                    </v-row>

                                    <v-row>
                                        <v-col align="center">
                                            <div class="flex overflow-hidden space-x-16 group">

                                                <div class="flex space-x-16 animate-loop-scroll group-hover:paused">
                                                    <div v-for="user in facility.staff"
                                                        class="w-64 h-6 m-2 cursor-pointer hover:scale-105 ">
                                                        <div>
                                                            <div class="flex flex-column">
                                                                <div class="font-weight-black text-h5">
                                                                    {{ user.FirstName + ' ' +
                                                                        user.LastName }}
                                                                </div>
                                                                <div class="text-xl">{{ user.Role
                                                                    }}</div>

                                                            </div>

                                                            <v-avatar size="200" rounded="1"
                                                                :image="`https://picsum.photos/200?random=${Math.random()}`">
                                                            </v-avatar>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="flex space-x-16 animate-loop-scroll group-hover:paused"
                                                    aria-hidden="true">

                                                    <div v-for="user in facility.staff"
                                                        class="w-64 h-64 m-2 cursor-pointer hover:scale-105">
                                                        <div>

                                                            <div class="flex flex-column ">
                                                                <div class="font-weight-black text-h5">
                                                                    {{ user.FirstName + ' ' +
                                                                        user.LastName }}
                                                                </div>
                                                                <div class="text-xl">{{ user.Role
                                                                    }}</div>

                                                            </div>
                                                            <v-avatar size="200" rounded="1"
                                                                :image="`https://picsum.photos/200?random=${Math.random()}`">
                                                            </v-avatar>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                        </v-col>
                                    </v-row>


                                    <div class="flex justify-evenly mt-5 pb-4">


                                        <v-btn :text="'Navigate to  ' + facility.Name" append-icon="mdi-navigation"
                                            size="large" variant="outlined"
                                            class="text-white backdrop-blur-3xl hover:scale-105" />


                                        <v-btn :text="'Call ' + facility.Name" append-icon="mdi-phone" size="large"
                                            variant="outlined" class="text-white backdrop-blur-3xl hover:scale-105" />
                                    </div>

                                </div>

                            </v-window-item>
                        </v-window>





                        <!-- <span>
                                                <GoogleMap api-key="" style="width: 30%; height: 30%" :center="center"
                                                    :zoom="15">
                                                    <Marker :options="markerOptions" />
                                                </GoogleMap>

                                              
                                            </span> -->




                    </div>
                </div>
                <!-- Content -->
            </div>







            <!-- Subscriptions -->
            <div class="grid grid-cols-12 gap-4 " id="Subscriptions" style="min-height: 100dvh;"
                :class="darkMode ? ' bg-black/70 font-black' : ' bg-white/30 font-white'">

                <div class="flex col-span-2  items-center justify-center flex-column font-serif">
                </div>

                <!-- Content -->
                <div class="col-span-10 flex">
                    <div class=" w-100">

                       


                    </div>
                </div>
                <!-- Content -->
            </div>
            <!-- Subscriptions -->



        </div>

        <!-- Post dialog -->
        <PostDialog v-if="userRole && userRole == 'Admin'" />
        <!-- Post dialog -->


        <!-- Footer -->
        <FooterComponent />
        <!-- Footer -->

    </div>
</template>






<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, defineAsyncComponent, watch } from 'vue';
import { usePiniaStorage } from '../store/pinia';
const FooterComponent = defineAsyncComponent(() => import('../components/Footer.vue'));



// Scroll to section
const sections = ref(['About', 'Posts', 'Clubs']);
const section = ref('about');

let currentSection = ref('About');

const changeSection = (section) => {
    currentSection.value = section;
}

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

onMounted(() => {
    const scrollPosition = window.innerHeight * 0.07;
    window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
});
// Scroll to section


// Scroll control
const scrollPercent = ref(0);

const calculateScrollPercent = () => {
    const scrollTop = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const docHeight = getDocHeight();

    const totalDocScrollLength = docHeight - windowHeight;
    const scrollPosition = Math.floor((scrollTop / totalDocScrollLength) * 100);

    scrollPercent.value = scrollPosition;
}

const getDocHeight = () => {
    return Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );
}

onMounted(() => {

    calculateScrollPercent();

    getDocHeight();


    window.addEventListener('scroll', calculateScrollPercent);
});

onUnmounted(() => {
    window.removeEventListener('scroll', calculateScrollPercent);
});
// Scroll control





// Pinia
const store = usePiniaStorage();
// Pinia


// User
const userRole = computed(() => store?.userData?.role ?? null);
const uid = computed(() => store?.userUid?.uid ?? null);
// User


// Theme
import { useTheme } from 'vuetify'
const theme = useTheme();
const darkMode = computed(() => theme.name.value === 'dark');
// Theme

// Facilities
const facilities = ref([]);

watch(() => store.facilities, (newFacilities) => {
    facilities.value = newFacilities;
    console.log(facilities.value);
});

onMounted(() => {
    console.log(facilities.value);
});
let tab = ref(0);




// Facilities



// Google maps
import { GoogleMap, Marker } from 'vue3-google-map'
const center = { lat: 40.689247, lng: -74.044502 }
const markerOptions = { position: center, label: 'Pump Gym', title: 'Pump Gym' }
// Google maps





// Get posts
import { posts, getPosts } from '../scripts/ManagePosts';

// const posts = ref([]);


onMounted(async () => {
    await getPosts();
})
// Get posts




// Add/Edit/Remove post
const PostDialog = defineAsyncComponent(() => import('./admin/components/ManagePost.vue'));
// const addPost = () => store.openCreateNewPostDialog();

import { useDialogsStore } from '../store/dialogsStore';
const dialogsStore = useDialogsStore();

const addPost = (): void => {
    dialogsStore.openCreateNewPostDialog();
};

const editPost = (post): void => {
    dialogsStore.openEditPostDialog(post);
};
// Add/Edit/Remove post









</script>


<style></style>