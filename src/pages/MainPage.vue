<template>
    <div>

        <!-- Body -->


        <v-row>

            <!-- First row -->
            <v-col cols="12" style="height: 50vh;" class="bg-white">
                <v-parallax
                    src="https://web-back.perfectgym.com/sites/default/files/styles/460x/public/equipment%20%286%29.jpg?itok=bC0T32-K"
                    class="ma-0 pa-0">
                    <v-row>
                        <v-col cols="6" class="py-10 ps-10">
                            <div class="text-white text-h5 font-weight-black mb-0 text-no-wrap pa-4 rounded-xl"
                                style="background-color: rgba(0, 0, 0, 0.6);">

                                Welcome to Pump Gym!

                                <div class="subheading text-wrap font-weight-thin text-justify">
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



                        <v-col cols="6" align="center" justify="center" class="d-flex justify-center align-center">
                            <v-btn large class="rounded-pill text-h3 font-weight-black" color="green" variant="outlined"
                                text="Join now" style="background-color: rgba(0, 0, 0, 0.4);" height="30%" width="35%"
                                @click="goTo('/subscriptions')"></v-btn>
                        </v-col>


                    </v-row>

                </v-parallax>
            </v-col>
            <!-- First row -->


            <!-- Spacer -->
            <v-col cols="12" style="height: 5vh;"></v-col>
            <!-- Spacer -->

            <!-- Second row -->
            <v-col cols="12" style="height: 40vh;">

                <span v-if="!$vuetify.display.mobile">
                    <v-row>
                        <v-col cols="12" align="center" justify="center">
                            <h1 class="text-h4 font-weight-thin mb-4">
                                Our clubs
                            </h1>
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
                                                    {{ facility.Name }}, <br> {{ facility.City + ', ' + facility.Street
                                    + ' ' + facility.Home }}
                                                </h1>
                                            </div>
                                        </v-parallax>
                                    </v-avatar>
                                </v-col>
                            </v-row>
                        </v-carousel-item>
                    </v-carousel>

                </span>

                <span v-else>
                    <v-carousel height="400" hide-delimiter-background show-arrows>

                        <template v-slot:prev="{ props }">
                            <v-btn color="success" variant="elevated" @click="props.onClick" icon="mdi-arrow-left">
                            </v-btn>
                        </template>

                        <template v-slot:next="{ props }">
                            <v-btn color="info" variant="elevated" @click="props.onClick"
                                icon="mdi-arrow-right"></v-btn>
                        </template>



                        <v-carousel-item>
                            <v-sheet height="100%">
                                <div class="d-flex fill-height justify-center align-center">
                                    <v-avatar size="300">
                                        <v-parallax
                                            src="https://images.adsttc.com/media/images/5014/3b01/28ba/0d5b/4900/0409/newsletter/stringio.jpg?1361422898"
                                            class="ma-0 pa-0" type="button">
                                            <div
                                                class="d-flex flex-column fill-height justify-center align-center text-white">
                                                <span class="font-weight-black mb-0 text-no-wrap pa-4 rounded-pill"
                                                    style="background-color: rgba(0, 0, 0, 0.6);">
                                                    Katowice, Mr. Rainbow Street 12a
                                                </span>
                                            </div>
                                        </v-parallax>
                                    </v-avatar>
                                </div>
                            </v-sheet>
                        </v-carousel-item>
                        <v-carousel-item>
                            <v-sheet height="100%">
                                <div class="d-flex fill-height justify-center align-center">
                                    <v-avatar size="300">
                                        <v-parallax
                                            src="https://3dcorner.co/wp-content/uploads/2018/10/visualization-exterior-photorealistic-modern-architecture-night-fitness-gym-3dcorner_180904.jpg"
                                            class="ma-0 pa-0" type="button">
                                            <div
                                                class="d-flex flex-column fill-height justify-center align-center text-white">
                                                <span class="font-weight-black mb-0 text-no-wrap pa-4 rounded-pill"
                                                    style="background-color: rgba(0, 0, 0, 0.6);">
                                                    Warsaw, Meowmoew Street 7
                                                </span>
                                            </div>
                                        </v-parallax>
                                    </v-avatar>
                                </div>
                            </v-sheet>
                        </v-carousel-item>
                        <v-carousel-item>
                            <v-sheet height="100%">
                                <div class="d-flex fill-height justify-center align-center">
                                    <v-avatar size="300">
                                        <v-parallax
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj-q7L2jjf7SLyD3mHGbYJVgM16EA0h7B35A&usqp=CAU"
                                            class="ma-0 pa-0" type="button">
                                            <div
                                                class="d-flex flex-column fill-height justify-center align-center text-white">
                                                <span class="font-weight-black mb-0 text-no-wrap pa-4 rounded-pill"
                                                    style="background-color: rgba(0, 0, 0, 0.6);">
                                                    Wrocław, Factors Street 3
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
            <v-col cols="12" style="height: 30dvh;"></v-col>
            <!-- Spacer -->


            <!-- Third row -->
            <v-col cols="12" style="height: 40dvh; min-width: 100%;" class="bg-white">
                <v-parallax
                    src="https://web-back.perfectgym.com/sites/default/files/styles/460x/public/equipment%20%286%29.jpg?itok=bC0T32-K"
                    class="ma-0 pa-0">
                    <div class="d-flex flex-column fill-height justify-center align-center text-white">
                        <h1 class="text-h4 font-weight-thin mb-4">
                            Hey!
                        </h1>
                        <h4 class="subheading pa-3">
                            Content Content Content Content Content Content Content Content
                        </h4>
                    </div>
                </v-parallax>
            </v-col>
            <!-- Third row -->

            <!-- Spacer -->
            <v-col cols="12" style="height: 20vh;"></v-col>
            <!-- Spacer -->

        </v-row>


        <!-- Body -->



        <!-- Footer -->
        <v-footer color="grey">
            <v-row>
                <v-col align=center>
                    <span class="font-weight-thin mb-4">
                        Pump Gym &copy; {{ new Date().getFullYear() }}
                    </span>
                </v-col>
            </v-row>
        </v-footer>
        <!-- Footer -->

    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase.js'

export default {
    name: 'LoginPage',

    data() {
        return {

            model: 0,
            menuButtons: [
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
                    id: 3,
                    title: 'Work for us',
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
            ]
        }
    },

    computed: {
        ...mapGetters(['getFacilities']),

        chunkedFacilities() {
            let i, j, chunk = 3;
            let facilities = this.getFacilities;
            let result = [];

            if (facilities) {
                for (i = 0, j = facilities.length; i < j; i += chunk) {
                    result.push(facilities.slice(i, i + chunk));
                }
            }

            return result;
        }
    },

    methods: {
        ...mapActions(['setFacilities', 'triggerAlert']),

        goTo(route) {
            this.$router.push(route);
        },

        async fetchFacilities() {
            try {
                const q = await getDocs(collection(db, "Facilities"));
                const facilities = q.docs.map((doc) => doc.data());
                this.setFacilities(facilities);
            } catch (error) {
                this.triggerAlert({
                    message: 'An error occurred',
                    type: 'error'
                })
            }
        },

    },

    mounted() {
        this.fetchFacilities();
    }
}
</script>
