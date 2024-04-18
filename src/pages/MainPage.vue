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
                        <v-avatar size="500" class="me-2 " image="src/images/logo.png">
                        </v-avatar>
                    </v-col>

                </v-row>

            </v-col>

            <!-- Mobile -->
            <v-col cols="12" v-else>
                <div>


                    <v-row>
                        <v-col class="align-self-center ms-5 font-black text-3xl ">
                            Welcome to Pump Gym!
                        </v-col>
                        <v-col cols="auto" align="center">
                            <v-avatar size="200" class="me-2 " image="src/images/logo.png">
                            </v-avatar>
                        </v-col>
                    </v-row>


                    <v-card-text class="backdrop-blur-xl rounded-xl text-white"
                        :class="darkMode ? ' bg-black/70 ' : ' bg-indigo-500/25 '">
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
                    </v-card-text>
                </div>

            </v-col>
            <!-- Mobile -->

            <!-- First row -->

            <!-- Second row -->
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
                        <v-carousel-item v-for="(chunk, index) in chunkedFacilities" :key="index">
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


                    <v-carousel height="400" hide-delimiter-background show-arrows>

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
                </span>
            </v-col>
            <!-- Second row-->

            <!-- Spacer -->
            <v-col cols="12" style="height: 3dvh;"></v-col>
            <!-- Spacer -->


            <!-- Third row -->
            <v-col cols="12">

                <div class=" backdrop-blur-xl font-weight-black text-white"
                    :class="darkMode ? ' bg-black/70 ' : ' bg-white/30'">

                    <v-row>
                        <v-col cols="12" align="center" jusify="center" class="text-h4 py-6 font-weight-black">
                            Latest posts
                        </v-col>
                    </v-row>

                    <!-- <v-card v-for="i in 5" :key="i" hover class="mx-4 my-4" :style="darkMode ? 'background-color:rgb(30 46 84)':'background-color:rgb(226 232 240)'">
                        <v-card-title class="text-h6 font-weight-black">
                            Post title
                        </v-card-title>

                        <v-card-subtitle>
                            2021-09-01, 12:00 - by Admin
                        </v-card-subtitle>

                        <v-card-text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
                            fringilla
                            nunc. Nullam
                            nec
                            nulla nec nulla
                        </v-card-text>
                    </v-card> -->

                    {{newPostTitle}}
                    {{ newPostContent }}
                    <v-card :style="darkMode ? 'background-color:rgb(30 46 84)':'background-color:rgb(226 232 240)'">
                        <v-card-title class="font-weight-black">
                            <v-text-field label="Post title" variant="solo-filled" v-model=newPostTitle></v-text-field>
                        </v-card-title>

                        <v-card-subtitle>
                            2021-09-01, 12:00 - by Admin
                        </v-card-subtitle>

                        <v-card-text>
                            <Editor :api-key="EditorApiKey" :init="{
                                toolbar_mode: 'sliding',
                                plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
                                toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                                tinycomments_mode: 'embedded',
                                tinycomments_author: 'Author name',
                                mergetags_list: [
                                    { value: 'First.Name', title: 'First Name' },
                                    { value: 'Email', title: 'Email' },
                                ],
                            }" 
                            v-model="newPostContent"
                            />
                        </v-card-text>
                    </v-card>




                </div>

            </v-col>
            <!-- Third row -->

            <!-- Spacer -->
            <v-col cols="12" style="height: 20vh;"></v-col>
            <!-- Spacer -->

        </v-row>


        <!-- Body -->



        <!-- Footer -->
        <FooterComponent style="position: absolute; bottom: 0px; width: 100%;" />
        <!-- Footer -->


    </div>
</template>






<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { usePiniaStorage } from '../store/pinia';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase.js'
import FooterComponent from '../components/Footer.vue'


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




// Rich text editor
import Editor from '@tinymce/tinymce-vue';
const EditorApiKey = ref(import.meta.env.VITE_TINYMCU_API_KEY);

const newPostTitle = ref('');
const newPostContent = ref('');
// Rich text editor


</script>


<style scoped>
@media (min-width: 1024px) {
    #sample {
        display: flex;
        flex-direction: column;
        place-items: center;
        width: 100%;
    }
}
</style>
