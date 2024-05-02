<template>

    <v-layout>
        <div class=" bg-black/70  text-white">


            <!-- Scroll progress -->
            <div class="fixed top-0 bg-indigo-600 rounded-xl" style="width: 0.5%;"
                :style="{ height: scrollPercent + '%' }">

            </div>
            <!-- Scroll progress -->



            <div class="min-h-screen">




                <div class="relative grid grid-cols-12 gap-4 " id="About" style="min-height: 100vh;">
                    <span class="absolute inset-0 blur-sm bg-fixed "
                        style="background-image: url('https://i1.wp.com/prestizkoszalin.pl/wp-content/uploads/2023/12/IMG_4111.jpg'); background-size: cover; background-position: center; z-index: -1;"></span>


                    <div class="flex col-span-2 items-center justify-center flex-column font-serif "
                        v-if="!$vuetify.display.smAndDown">



                        <div class="fixed top-auto select-none">
                            <div v-for="section in sections"
                                class="ms-5 w-100 cursor-pointer text-center hover:scale-125 transition-all duration-300 ease-in-out "
                                @click="changeSection(section.name)"
                                :class="section.current ? 'text-4xl font-black my-4 transition-all duration-300 ease-in ' : 'hover:font-black'">
                                {{ section.name }}
                            </div>
                        </div>




                    </div>

                    <!-- Content -->
                    <div class=" flex select-none"
                        :class="!$vuetify.display.smAndDown ? ' col-span-10' : 'col-span-12 '">
                        <div class="w-100">


                            <v-row>
                                <v-col cols=12 align="center" class="mt-3 ">
                                    <v-avatar size=" 300" class="me-2"
                                        image="https://firebasestorage.googleapis.com/v0/b/pump-gym-f72c7.appspot.com/o/Images%2Flogo.png?alt=media&token=8504510e-a373-4235-9811-da7abd576c0d">
                                    </v-avatar>
                                </v-col>
                            </v-row>


                            <v-row :class="$vuetify.display.smAndDown ? 'text-xs' : 'text-xl'">
                                <v-col class="d-flex justify-center align-center">

                                    <div
                                        class="pa-4 rounded-xl text-center backdrop-blur-md subpixel-antialiased  tracking-wider ">
                                        <div class="font-black mb-2">
                                            Do you dream of health, strength, and perfect fitness?
                                        </div>
                                        <div class="mb-2">
                                            If so, you've found
                                            the
                                            perfect
                                            place!
                                        </div>
                                        Our gym not only offers top-quality equipment but also an inspiring
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


                                </v-col>


                                <v-col align="center" cols="4">
                                    <v-img
                                        src="https://firebasestorage.googleapis.com/v0/b/pump-gym-f72c7.appspot.com/o/Images%2FFacilities%2FinviteImage.jpeg?alt=media&token=11bc967d-6089-46f9-b4be-02b2b65e3b30"
                                        :height="$vuetify.display.smAndDown ? '100' : '400'" width="400" rounded="xl" />
                                </v-col>
                            </v-row>


                        </div>



                    </div>
                    <!-- Content -->
                </div>




                <!-- News -->

                <div class="relative grid grid-cols-12 gap-4 " id="News" style="min-height: 100vh;">
                    <span class="absolute inset-0 blur-sm bg-fixed "
                        style="background-image: url('https://firebasestorage.googleapis.com/v0/b/pump-gym-f72c7.appspot.com/o/Images%2FSubsriptions.jpeg?alt=media&token=c0f78224-c29c-4892-84db-72cff3d78b57'); background-size: cover; background-position: center; z-index: -1;"></span>

                    <div class="flex col-span-2  items-center justify-center flex-column font-serif"
                        v-if="!$vuetify.display.smAndDown">
                    </div>

                    <!-- Content -->
                    <div class="flex"
                        :class="!$vuetify.display.smAndDown ? ' col-span-10 text-xl' : 'col-span-12 text-xs'">
                        <div class=" w-100">

                            <v-row v-if="userRole && userRole == 'Admin' && !$vuetify.display.smAndDown">
                                <v-col align="start">
                                    <v-btn size="large" variant="text" text="Add post" append-icon="mdi-plus"
                                        class="font-weight-black  bg-green-500 ms-5 transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-110"
                                        @click="addPost"></v-btn>
                                </v-col>
                            </v-row>




                            <v-container class="fill-height" fluid>
                                <v-row align="center" justify="center">
                                    <v-col cols="12">
                                        <v-carousel v-model="postsItem" continuous :cycle="runCarousel"
                                            show-arrows="hover" delimiter-icon="mdi-square" hide-delimiter-background
                                            style="height: 85vh;">
                                            <v-carousel-item v-for="post in posts">
                                                <v-sheet height="100%" tile class="bg-transparent">
                                                    <div class="d-flex fill-height justify-center align-center">

                                                        <v-row class="text-wrap" @mouseover="runCarousel = false"
                                                            @mouseleave="runCarousel = true">

                                                            <v-col
                                                                :cols="userRole && userRole == 'Admin' ? '10' : '12'">
                                                                <div v-html="post.postContent"></div>
                                                            </v-col>


                                                            <v-col align="end"
                                                                v-if="userRole && userRole == 'Admin' && !$vuetify.display.smAndDown">

                                                                <v-btn text="Manage post"
                                                                    class="font-black transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-110"
                                                                    size="large" color="success"
                                                                    append-icon="mdi-pencil"
                                                                    @click="editPost(post)"></v-btn>

                                                            </v-col>


                                                        </v-row>


                                                    </div>
                                                </v-sheet>
                                            </v-carousel-item>
                                        </v-carousel>
                                    </v-col>
                                </v-row>
                            </v-container>



                        </div>
                    </div>
                    <!-- Content -->
                </div>
                <!-- News -->





                <!-- Clubs -->


                <div class="relative grid grid-cols-12 gap-4 pt-20" id="Clubs" style="min-height: 100vh;">
                    <span class="absolute inset-0 blur-sm bg-fixed "
                        style="background-image: url('https://firebasestorage.googleapis.com/v0/b/pump-gym-f72c7.appspot.com/o/Images%2FSubsriptions.jpeg?alt=media&token=c0f78224-c29c-4892-84db-72cff3d78b57'); background-size: cover; background-position: center; z-index: -1;"></span>

                    <div class="flex col-span-2 items-center justify-center flex-column font-serif"
                        v-if="!$vuetify.display.smAndDown">
                    </div>

                    <!-- Content -->
                    <div class=" flex pe-7" :class="!$vuetify.display.smAndDown ? ' col-span-10' : 'col-span-12'">
                        <div class="w-100 ">

                            <v-row>
                                <v-col cols="12" align="center" jusify="center"
                                    class="py-6 font-weight-black text-white"
                                    :class="$vuetify.display.smAndDown ? 'text-xl' : 'text-4xl'">
                                    Our clubs
                                </v-col>
                            </v-row>



                            <v-tabs v-model="tab" bg-color="transparent" color="basil" grow>
                                <v-tab v-for="facility in facilities" :key="facility.Name" :value="facility.Name">
                                    {{ facility.Name }}
                                </v-tab>
                            </v-tabs>

                            <v-window v-model="tab">
                                <v-window-item v-for="facility in facilities" :key="facility.Name"
                                    :value="facility.Name">

                                    <div style="min-height: 82dvh;">


                                        <v-row class=" font-black mt-4"
                                            :class="$vuetify.display.smAndDown ? 'text-xl px-2' : 'text-3xl'">
                                            <v-col>
                                                Welcome at Pump Gym {{ facility.Name }} !
                                            </v-col>
                                        </v-row>


                                        <v-row>
                                            <v-col class="d-flex justify-center align-center">

                                                <div class="pa-4 rounded-xl text-center backdrop-blur-md subpixel-antialiased tracking-wider "
                                                    :class="$vuetify.display.smAndDown ? 'text-xs px-2' : 'text-xl'">

                                                    {{ facility.Description }}

                                                </div>

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
                                            <v-col cols="12" align="center" class=" font-black"
                                                :class="$vuetify.display.smAndDown ? 'text-xl' : 'text-3xl'">
                                                Check our team
                                            </v-col>
                                        </v-row>




                                        <div class="flex overflow-hidden space-x-16 group rounded-md  ">

                                            <div class="flex space-x-16 animate-loop-scroll group-hover:paused">
                                                <div v-for="user in facility.staff"
                                                    class="w-64 h-6  cursor-pointer hover:scale-105 ">
                                                    <div>
                                                        <div class="flex flex-column">
                                                            <div class="font-weight-black "
                                                                :class="$vuetify.display.smAndDown ? 'text-xs' : 'text-2xl'">
                                                                {{ user.FirstName + ' ' +
                                                                    user.LastName }}
                                                            </div>
                                                            <div class="text-xl">{{ user.Role
                                                                }}</div>

                                                        </div>

                                                        <v-avatar :size="$vuetify.display.smAndDown ? '100' : '200'"
                                                            rounded="1"
                                                            :image="`https://picsum.photos/200?random=${Math.random()}`">
                                                        </v-avatar>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="flex space-x-16 animate-loop-scroll group-hover:paused"
                                                aria-hidden="true">

                                                <div v-for="user in facility.staff"
                                                    class="w-64 h-64  cursor-pointer hover:scale-105">
                                                    <div>

                                                        <div class="flex flex-column ">
                                                            <div class="font-weight-black "
                                                                :class="$vuetify.display.smAndDown ? 'text-xs' : 'text-xl'">
                                                                {{ user.FirstName + ' ' +
                                                                    user.LastName }}
                                                            </div>
                                                            <div class="text-xl">{{ user.Role
                                                                }}</div>

                                                        </div>
                                                        <v-avatar :size="$vuetify.display.smAndDown ? '100' : '200'"
                                                            rounded="1"
                                                            :image="`https://picsum.photos/200?random=${Math.random()}`">
                                                        </v-avatar>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>





                                    </div>

                                    <v-row>
                                        <v-col align="start">
                                            <v-btn :text="'Navigate to  ' + facility.Name" append-icon="mdi-navigation"
                                                size="large" variant="outlined"
                                                class="text-white backdrop-blur-3xl hover:scale-105" @click="openGoogleMaps(51.5074, -0.1278)"/>

                                        </v-col>
                                        <v-col align="start">

                                            <v-btn :text="'Call ' + facility.Name" append-icon="mdi-phone" size="large"
                                                variant="outlined" class="text-white backdrop-blur-3xl hover:scale-105"
                                                @click="callNumber(facility.Phone)" />
                                        </v-col>
                                    </v-row>



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
                <!-- Clubs -->






                <!-- Subscriptions -->
                <div class="relative grid grid-cols-12 gap-4 " id="Subscriptions" style="min-height: 100vh;">
                    <span class="absolute inset-0 blur-sm bg-fixed "
                        style="background-image: url('https://firebasestorage.googleapis.com/v0/b/pump-gym-f72c7.appspot.com/o/Images%2FSubsriptions.jpeg?alt=media&token=c0f78224-c29c-4892-84db-72cff3d78b57'); background-size: cover; background-position: center; z-index: -1;"></span>


                    <div class="flex col-span-2  items-center justify-center flex-column font-serif"
                        v-if="!$vuetify.display.smAndDown">
                    </div>

                    <!-- Content -->
                    <div class=" flex" :class="!$vuetify.display.smAndDown ? ' col-span-10' : 'col-span-12'">
                        <div class=" w-100">

                            <SubscriptionComponent />

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
    </v-layout>
</template>






<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, defineAsyncComponent, watch } from 'vue';
import { usePiniaStorage } from '../store/pinia';
const FooterComponent = defineAsyncComponent(() => import('../components/Footer.vue'));



// Scroll to section
import VueScrollTo from 'vue-scrollto';


const sections = ref([
    { name: 'About', begin: 0, end: 33, current: true },
    { name: 'News', begin: 34, end: 65, current: false },
    { name: 'Clubs', begin: 66, end: 96, current: false },
    { name: 'Subscriptions', begin: 98, end: 100, current: false }
]);


const changeSection = (selectedSection) => {
    sections.value.forEach((section) => {
        section.current = false;
    });
    sections.value.find((section) => section.name == selectedSection).current = true;

    scrollToElement(`#${selectedSection}`);
}


const scrollToElement = (element) => {
    if (element === '#About') {
        VueScrollTo.scrollTo(element, 1000, {
            cancelable: false,
            offset: -100,
        });
    }

    else {
        VueScrollTo.scrollTo(element, 1000, {
            cancelable: false,
        });
    }


}

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    sections.value.forEach((section) => {
        section.current = false;
    });
    sections.value.find((section) => section.name == 'About').current = true;
}

onMounted(() => {
    ;
    window.scrollTo({ top: 0, behavior: 'smooth' });
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


let isScrolling = ref(false);



const handleScroll = (event) => {
    event.preventDefault();

    if (isScrolling.value) {
        return;
    }

    else {
        const direction = event.deltaY > 0 ? 'down' : 'up';

        const currentSectionIndex = sections.value.findIndex(section => section.current);

        if (direction === 'up' && currentSectionIndex > 0) {
            isScrolling.value = true;


            if (sections.value[currentSectionIndex - 1].name == 'About') {
                VueScrollTo.scrollTo(`#${sections.value[currentSectionIndex - 1].name}`, 1000, {
                    cancelable: false,
                    offset: -100,
                    onDone: () => {
                        sections.value[currentSectionIndex].current = false;
                        sections.value[currentSectionIndex - 1].current = true;
                        isScrolling.value = false;
                    }
                });
            }
            else {
                VueScrollTo.scrollTo(`#${sections.value[currentSectionIndex - 1].name}`, 1000, {
                    cancelable: false,
                    onDone: () => {
                        sections.value[currentSectionIndex].current = false;
                        sections.value[currentSectionIndex - 1].current = true;
                        isScrolling.value = false;
                    }
                });
            }


        } else if (direction === 'down' && currentSectionIndex < sections.value.length - 1) {
            isScrolling.value = true;
            VueScrollTo.scrollTo(`#${sections.value[currentSectionIndex + 1].name}`, 1000, {
                cancelable: false,
                onDone: () => {
                    sections.value[currentSectionIndex].current = false;
                    sections.value[currentSectionIndex + 1].current = true;
                    isScrolling.value = false;
                }
            });
        }
    }

};

onMounted(() => {
    window.addEventListener('wheel', handleScroll, { passive: false });
});

onUnmounted(() => {
    window.removeEventListener('wheel', handleScroll);
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
import { facilities } from '../scripts/Facilities';

let tab = ref(0);


const callNumber = (number: string) => {
    window.open(`tel:${number}`);
}


const openGoogleMaps = (latitude: string, longitude: string) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    window.open(url, '_blank');
};
// Facilities



// Google maps
// import { GoogleMap, Marker } from 'vue3-google-map'
// const center = { lat: 40.689247, lng: -74.044502 }
// const markerOptions = { position: center, label: 'Pump Gym', title: 'Pump Gym' }
// Google maps





// Get posts
import { posts, getPosts } from '../scripts/ManagePosts';


const runCarousel = ref(true);

const postsItem = ref(0);


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




// Subscriptions
import SubscriptionComponent from '../pages/Subscriptions.vue';
// Subscriptions





</script>
