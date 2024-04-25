<template>
    <div class="bg-slate-600" :style="{
        backgroundImage: `url('https://web-back.perfectgym.com/sites/default/files/styles/460x/public/equipment%20%286%29.jpg?itok=bC0T32-K')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }">

        <!-- Body -->


        <v-row>

            <!-- First row -->
            <v-col cols="12" v-if="!$vuetify.display.smAndDown">
                <v-row>
                    <v-col cols="12" sm="6" class="py-10 ps-10 d-flex justify-center align-center ">
                        <div class="pa-4 rounded-xl font-weight-black text-h6 backdrop-blur-xl"
                            :class="darkMode ? ' bg-black/70 font-black' : ' bg-white/30 font-white'">
                            Welcome to Pump Gym!

                            <span class="text-wrap font-weight-thin text-justify ">
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
                            </span>

                        </div>
                    </v-col>


                    <v-col cols="12" sm="6" align="center">
                        <v-avatar size="500" class="me-2 "
                            image="https://firebasestorage.googleapis.com/v0/b/pump-gym-f72c7.appspot.com/o/Images%2Flogo.png?alt=media&token=8504510e-a373-4235-9811-da7abd576c0d">
                        </v-avatar>
                    </v-col>

                </v-row>

            </v-col>

            <!-- Mobile -->
            <v-col cols="12" v-else>
                <div>


                    <v-row>
                        <v-col class="align-self-center font-black text-xl text-wrap text-black" cols="6" align=center>
                            Welcome to Pump Gym!
                        </v-col>
                        <v-col cols="6" align="center">
                            <v-avatar size="200" class="me-2 "
                                image="https://firebasestorage.googleapis.com/v0/b/pump-gym-f72c7.appspot.com/o/Images%2Flogo.png?alt=media&token=8504510e-a373-4235-9811-da7abd576c0d">
                            </v-avatar>
                        </v-col>
                    </v-row>


                    <div class="backdrop-blur-3xl rounded-xl text-black text-wrap pa-4"
                        :class="darkMode ? ' ' : '  '" style="font-size: smaller;">
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
                </div>

            </v-col>
            <!-- Mobile -->

            <!-- First row -->

            <!-- Second row -->
            <v-col cols="12">

                <div class=" text-white">

                    <v-row v-if="userRole && userRole == 'Admin' && !$vuetify.display.smAndDown">
                        <v-col align="start">
                            <v-btn size="large" variant="text" text="Add post"
                                append-icon="mdi-plus" class="font-weight-black hover:bg-green-800 bg-green-500 text-2xl ms-5"
                                @click="addPost"></v-btn>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>

                            <div class=" text-wrap pa-2 ma-5 rounded-lg backdrop-blur-xl" v-for="post in posts"
                                :key="posts.id">

                                <div v-if="userRole && userRole == 'Admin' && !$vuetify.display.smAndDown" class="d-flex justify-evenly">
                                        <v-btn text="Manage post" class="font-weight-black text-xl" size="large" color="success" append-icon="mdi-pencil" @click="editPost(post)"></v-btn>
                                </div>
                                

                                <div v-html="post.postContent"></div>

                            </div>

                        </v-col>
                    </v-row>


                </div>

            </v-col>
            <!-- Second row-->

            <!-- Spacer -->
            <v-col cols="12" style="height: 3dvh;"></v-col>
            <!-- Spacer -->


            <!-- Third row -->
            <v-col cols="12">

                <div v-if="!$vuetify.display.mobile" class=" backdrop-blur-lg"
                    :class="darkMode ? ' bg-black/70' : ' bg-white/30'">

                    <v-row>
                        <v-col cols="12" align="center" jusify="center"
                            class="text-h4 py-6 font-weight-black text-white">
                            Our clubs
                        </v-col>
                    </v-row>


                    <v-carousel progress="success" hide-delimiters v-model="model" class="pt-10">
                        <v-carousel-item v-if="facilities" v-for="(chunk, index) in chunkedFacilities" :key="index">
                            <v-row>
                                <v-col cols="4" v-for="facility in chunk" :key="facility.name" align="center">
                                    <v-avatar size="400">
                                        <v-parallax :src="facility.Image" class="ma-0 pa-0" type="button">
                                            <div
                                                class="d-flex flex-column fill-height justify-center align-center text-white">
                                                <h1 class="text-h5 font-weight-black mb-0 text-no-wrap pa-4 rounded-pill"
                                                    style="background-color: rgba(0, 0, 0, 0.6);">
                                                    {{ facility.Name }}, <br> {{ facility.City + ', ' +
                                                        facility.Street
                                                        + ' ' + facility.Home }}
                                                </h1>
                                            </div>
                                        </v-parallax>
                                    </v-avatar>
                                </v-col>
                            </v-row>
                        </v-carousel-item>

                        <!-- Skeleton loader -->
                        <v-carousel-item v-else>
                            <v-row>
                                <v-col cols="4" v-for="item in 3" align="center">
                                    <v-avatar size="400">

                                        <div
                                            class="d-flex flex-column fill-height justify-center align-center text-white">
                                            <div
                                                class="animate-pulse absolute inline-flex h-full w-full rounded-full bg-slate-800  opacity-75 ">
                                                <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                                            </div>
                                        </div>

                                    </v-avatar>
                                </v-col>
                            </v-row>
                        </v-carousel-item>
                        <!-- Skeleton loader -->

                    </v-carousel>

                </div>


                <!-- Mobile -->
                <span v-else>
                    <v-row>
                        <v-col cols="12" align="center" jusify="center"
                            class="text-h4 py-6 font-weight-black backdrop-blur-xl"
                            :class="darkMode ? ' bg-black/70 ' : ' bg-white/30 '">
                            Our clubs
                        </v-col>
                    </v-row>


                    <v-carousel v-if="facilities" height="400" hide-delimiters cycle continuous progress="success" show-arrows>

                        <v-carousel-item v-for="facility in facilities" :key="facility.name">
                            <v-sheet height="100%" class="bg-transparent backdrop-blur-xl"
                                :class="darkMode ? ' bg-black/70' : ' bg-white/30'">
                                <div class="d-flex fill-height justify-center align-center">
                                    <v-avatar size="300">
                                        <v-parallax :src="facility.Image" class="ma-0 pa-0" type="button">
                                            <div
                                                class="d-flex flex-column fill-height justify-center align-center text-white">
                                                <span class="font-weight-black mb-0 text-no-wrap pa-4 rounded-pill"
                                                    style="background-color: rgba(0, 0, 0, 0.6);">
                                                    {{ facility.Name }}, <br> {{ facility.City + ', ' +
                                                        facility.Street
                                                        + ' ' + facility.Home }}
                                                </span>
                                            </div>
                                        </v-parallax>
                                    </v-avatar>
                                </div>
                            </v-sheet>
                        </v-carousel-item>
                    </v-carousel>


                    <!-- Skeleton loader -->

                    <div v-else class="flex items-center justify-center" style="height: 100%;">
                        <v-avatar size="300">
                            <div class="d-flex flex-column fill-height justify-center align-center text-white">
                                <div
                                    class="animate-pulse absolute inline-flex h-full w-full rounded-full bg-slate-800  opacity-75 ">
                                    <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                                </div>

                                <v-skeleton-loader type="paragraph" class="bg-transparent"
                                    style="width: 400%;"></v-skeleton-loader>

                            </div>
                        </v-avatar>
                    </div>

                    <!-- Skeleton loader -->
                </span>
            </v-col>
            <!-- Third row -->

            <!-- Spacer -->
            <v-col cols="12" style="height: 20vh;"></v-col>
            <!-- Spacer -->

        </v-row>


        <!-- Body -->


        <!-- Post dialog -->
        <PostDialog v-if="userRole && userRole == 'Admin'" />
        <!-- Post dialog -->

  
        <!-- Footer -->
        <FooterComponent style="position: absolute; bottom: 0px; width: 100%;" />
        <!-- Footer -->


    </div>
</template>






<script setup lang="ts">
import { ref, computed, onMounted, defineAsyncComponent } from 'vue';
import { usePiniaStorage } from '../store/pinia';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase.js'
const FooterComponent = defineAsyncComponent(() => import('../components/Footer.vue'));



const model = ref(0);
const menuButtons = ref([
    {
        id: 1,
        title: 'Activities',
        icon: 'mdi-dumbbell',
        options: [
            {
                id: 1,
                title: 'a'
            },
            {
                id: 2,
                title: 'b'
            },
            {
                id: 3,
                title: 'c'
            },
        ],
    },
    {
        id: 2,
        title: 'Our Trainers',
        icon: 'mdi-dumbbell',
        options: [
            {
                id: 1,
                title: 'b'
            },
            {
                id: 2,
                title: 'c'
            },
            {
                id: 3,
                title: 'd'
            },
        ],
    },
    {
        id: 4,
        title: 'Contact us',
        icon: 'mdi-dumbbell',
        options: [
            {
                id: 1,
                title: 'b'
            },
            {
                id: 2,
                title: 'c'
            },
            {
                id: 3,
                title: 'd'
            },
        ],
    },
    {
        id: 5,
        title: 'Schedule',
        icon: 'mdi-dumbbell',
        options: [
            {
                id: 1,
                title: 'b'
            },
            {
                id: 2,
                title: 'c'
            },
            {
                id: 3,
                title: 'd'
            },
        ],
    },
]);

// Pinia
const store = usePiniaStorage();
const facilities = computed(() => store.facilities);
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
const chunkedFacilities = computed(() => {
    let i, j, chunk = 3;
    let facilitiesArray = facilities.value;
    let result = [];

    if (facilitiesArray) {
        for (i = 0, j = facilitiesArray.length; i < j; i += chunk) {
            result.push(facilitiesArray.slice(i, i + chunk));
        }
    }

    return result;
});
// Facilities





// Get posts
import { getPosts } from '../scripts/ManagePosts';

const posts = ref([]);


onMounted( async ()  => {

    const response = await getPosts();
    posts.value = response;
    
})
// Get posts




// Add/Edit/Remove post
const PostDialog = defineAsyncComponent(() => import('./admin/components/ManagePost.vue'));
// const addPost = () => store.openCreateNewPostDialog();

import { useDialogsStore } from '../store/dialogsStore';
const dialogsStore = useDialogsStore();

const addPost = (): void => {
    dialogsStore.openCreateNewPostDialog();
} ;

const editPost = (post): void => {
    dialogsStore.openEditPostDialog(post);
} ;
// Add/Edit/Remove post





</script>



