<template>
    <div>


        <!-- Scroll progress -->
        <div class="fixed top-0 bg-indigo-600 rounded-xl" style="width: 0.5%;" :style="{ height: scrollPercent + '%' }">

        </div>
        <!-- Scroll progress -->



        <div class="min-h-screen">

            <div class="grid grid-cols-12 gap-4 mt-2 " id="About" style="min-height: 100dvh;"
                :class="darkMode ? ' bg-black/70 font-black' : ' bg-white/30 font-white'">

                <div class="flex col-span-2 items-center justify-center flex-column pe-5 ">




                    <div class="ms-5 w-100 cursor-pointer text-center hover:scale-110 text-4xl font-black "
                        v-scroll-to="'#About'">
                        About
                    </div>
                    <div class="ms-5 w-100 cursor-pointer text-center hover:scale-110 hover:font-black  "
                        v-scroll-to="'#News'">
                        News
                    </div>
                    <div class="ms-5 w-100 cursor-pointer text-center hover:scale-110 hover:font-black "
                        v-scroll-to="'#Clubs'">
                        Clubs
                    </div>



                </div>

                <!-- Content -->
                <div class="col-span-10 flex">
                    <div class=" flex items-center ">

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

                    </div>

                    <div>
                        <v-avatar size=" 500" class="me-2 "
                            image="https://firebasestorage.googleapis.com/v0/b/pump-gym-f72c7.appspot.com/o/Images%2Flogo.png?alt=media&token=8504510e-a373-4235-9811-da7abd576c0d">
                        </v-avatar>
                    </div>
                </div>
                <!-- Content -->
            </div>








            <div class="grid grid-cols-12 gap-4 " id="News" style="min-height: 100dvh;"
                :class="darkMode ? ' bg-black/70 font-black' : ' bg-white/30 font-white'">

                <div class="flex col-span-2  items-center justify-center flex-column pe-5">



                    <div class="ms-5 w-100 cursor-pointer text-center hover:scale-110 hover:font-black"
                        v-scroll-to="'#About'">
                        About
                    </div>
                    <div class="ms-5 w-100 cursor-pointer text-center hover:scale-110 text-4xl font-black"
                        v-scroll-to="'#News'">
                        News
                    </div>
                    <div class="ms-5 w-100 cursor-pointer text-center hover:scale-110 hover:font-black"
                        v-scroll-to="'#Clubs'">
                        Clubs
                    </div>



                </div>

                <!-- Content -->
                <div class="col-span-10 flex">
                    <div class="text-white w-100">

                        <v-row v-if="userRole && userRole == 'Admin' && !$vuetify.display.smAndDown">
                            <v-col align="start">
                                <v-btn size="large" variant="text" text="Add post" append-icon="mdi-plus"
                                    class="font-weight-black  bg-green-500 ms-5 transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-110"
                                    @click="addPost"></v-btn>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col>

                                <v-row class=" text-wrap pa-2 ma-5 rounded-lg backdrop-blur-lg"
                                    :class="darkMode ? ' bg-black/70' : ' bg-white/30'" v-for="post in posts"
                                    :key="posts.id">

                                    <v-col :cols="userRole && userRole == 'Admin' ? '10' : '12'">
                                        <div v-html="post.postContent"></div>
                                    </v-col>


                                    <v-col align="end"
                                        v-if="userRole && userRole == 'Admin' && !$vuetify.display.smAndDown">

                                        <v-btn text="Manage post"
                                            class="font-weight-black  transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-110"
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









            <div class="grid grid-cols-12 gap-4" id="Clubs" style="min-height: 100dvh;"
                :class="darkMode ? ' bg-black/70 font-black' : ' bg-white/30 font-white'">
                <div class="flex col-span-2 items-center justify-center flex-column pe-5">


                    <div class="ms-5 w-100 cursor-pointer text-center hover:scale-110 hover:font-black"
                        v-scroll-to="'#About'">
                        About
                    </div>
                    <div class="ms-5 w-100 cursor-pointer text-center hover:scale-110 hover:font-black"
                        v-scroll-to="'#News'">
                        News
                    </div>
                    <div class="ms-5 w-100 cursor-pointer text-center hover:scale-110 text-4xl font-black"
                        v-scroll-to="'#Clubs'">
                        Clubs
                    </div>


                </div>

                <!-- Content -->
                <div class="col-span-10 flex pe-7">
                    <div class=" backdrop-blur-lg w-100 rounded-lg" :class="darkMode ? ' bg-black/70' : ' bg-white/30'">

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


                        </v-carousel>

                    </div>
                </div>
                <!-- Content -->
            </div>





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
import { ref, computed, onMounted, onUnmounted, defineAsyncComponent } from 'vue';
import { usePiniaStorage } from '../store/pinia';
const FooterComponent = defineAsyncComponent(() => import('../components/Footer.vue'));



// Scroll to section
const sections = ref(['About', 'Posts', 'Clubs']);
const section = ref('about');

const scrollToSection = (section: string) => {
    return `#${section}`;
}
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




const model = ref(0);


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