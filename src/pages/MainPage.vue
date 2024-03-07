<template>
    <v-app>

        <!-- Header -->
        <v-container class="mb-5">

            <v-app-bar color="grey" class="px-5">
                <v-row>
                    <v-col cols="2" class="text-h3">

                        Pump Gym

                    </v-col>


                    <v-col cols="8" align="center" justify="center">

                        <v-menu transition="slide-y-transition" v-for="button in menuButtons" :key="button.id">
                            <template v-slot:activator="{ props }">
                                <v-btn color="black" v-bind="props" class="text-h5 pa-3 ma-2">
                                    {{ button.title }}
                                </v-btn>
                            </template>
                            <v-list>
                                <v-list-item v-for="option in button.options" :key="option.id">
                                    <v-list-item-title> {{ option.title }} </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>

                    </v-col>


                    <v-col cols="2" align="right">
                        <v-btn text>Login</v-btn>
                        <v-btn text>Register</v-btn>
                    </v-col>
                </v-row>


            </v-app-bar>
        </v-container>
        <!-- Header -->



        <!-- Body -->
        <v-container fluid class="ma-0">
            <v-row>

                <!-- First row -->
                <v-col cols="12" style="height: 40vh; min-width: 100%;" class="bg-white">
                    <v-parallax
                        src="https://web-back.perfectgym.com/sites/default/files/styles/460x/public/equipment%20%286%29.jpg?itok=bC0T32-K"
                        class="ma-0 pa-0">
                        <div class="d-flex flex-column fill-height justify-center align-center text-white">
                            <h1 class="text-h4 font-weight-thin mb-4">
                                Hey!
                            </h1>
                            <h4 class="subheading">
                                Content Content Content Content Content Content Content Content
                            </h4>
                        </div>
                    </v-parallax>
                </v-col>
                <!-- First row -->

                <!-- Spacer -->
                <v-col cols="12" style="height: 15vh;"></v-col>
                <!-- Spacer -->

                <!-- Second row -->
                <v-col cols="12" style="height: 40vh;">

                    <v-row>
                        <v-col cols="12" align="center" justify="center">
                            <h1 class="text-h4 font-weight-thin mb-4">
                                Our clubs
                            </h1>
                        </v-col>
                    </v-row>

                    <v-row justify="space-evenly">
                        <v-col cols="3">
                            <v-avatar size="400">
                                <v-parallax
                                    src="https://images.adsttc.com/media/images/5014/3b01/28ba/0d5b/4900/0409/newsletter/stringio.jpg?1361422898"
                                    class="ma-0 pa-0" type="button">
                                    <div class="d-flex flex-column fill-height justify-center align-center text-white">
                                        <h1 class="text-h5 font-weight-black mb-0 text-no-wrap pa-4 rounded-pill"
                                            style="background-color: rgba(0, 0, 0, 0.6);">
                                            Katowice, Mr. Rainbow Street 12a
                                        </h1>
                                    </div>
                                </v-parallax>
                            </v-avatar>
                        </v-col>
                        <v-col cols="3">
                            <v-avatar size="400">
                                <v-parallax
                                    src="https://3dcorner.co/wp-content/uploads/2018/10/visualization-exterior-photorealistic-modern-architecture-night-fitness-gym-3dcorner_180904.jpg"
                                    class="ma-0 pa-0" type="button">
                                    <div class="d-flex flex-column fill-height justify-center align-center text-white">
                                        <h1 class="text-h5 font-weight-black mb-0 text-no-wrap pa-4 rounded-pill"
                                            style="background-color: rgba(0, 0, 0, 0.6);">
                                            Warsaw, Meowmoew Street 7
                                        </h1>
                                    </div>
                                </v-parallax>
                            </v-avatar>
                        </v-col>
                        <v-col cols="3">
                            <v-avatar size="400">
                                <v-parallax
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj-q7L2jjf7SLyD3mHGbYJVgM16EA0h7B35A&usqp=CAU"
                                    class="ma-0 pa-0" type="button">
                                    <div class="d-flex flex-column fill-height justify-center align-center text-white">
                                        <h1 class="text-h5 font-weight-black mb-0 text-no-wrap pa-4 rounded-pill"
                                            style="background-color: rgba(0, 0, 0, 0.6);">
                                            Wrocław, Factors Street 3
                                        </h1>
                                    </div>
                                </v-parallax>
                            </v-avatar>
                        </v-col>
                    </v-row>
                </v-col>
                <!-- Second row-->

                <!-- Spacer -->
                <v-col cols="12" style="height: 20vh;"></v-col>
                <!-- Spacer -->


                <!-- Third row -->
                <v-col cols="12" style="height: 40vh; min-width: 100%;" class="bg-white">
                    <v-parallax
                        src="https://web-back.perfectgym.com/sites/default/files/styles/460x/public/equipment%20%286%29.jpg?itok=bC0T32-K"
                        class="ma-0 pa-0">
                        <div class="d-flex flex-column fill-height justify-center align-center text-white">
                            <h1 class="text-h4 font-weight-thin mb-4">
                                Hey!
                            </h1>
                            <h4 class="subheading">
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
        </v-container>
        <!-- Body -->



        <!-- Footer -->
        <v-footer color="grey" app>
            <v-row>
                <v-col align=center>
                    FOOTER
                </v-col>
            </v-row>
        </v-footer>
        <!-- Footer -->

    </v-app>
</template>

<script>
export default {
    name: 'LoginPage',

    data() {
        return {
            menuButtons: [
                {
                    id: 1,
                    title: 'Trainings',
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
            ]
        }
    }
}
</script>
