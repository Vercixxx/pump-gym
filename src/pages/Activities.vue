<template>
    <div>

        <v-parallax
            src="https://web-back.perfectgym.com/sites/default/files/styles/460x/public/equipment%20%286%29.jpg?itok=bC0T32-K"
            class="ma-0 pa-0">


            <!-- Sections -->

            <v-row style="background-color: rgba(255, 255, 255, 0.6);">
                <v-col cols=12 align=center class="text-h4">
                    Functional Zone
                </v-col>
            </v-row>
            <v-row style="background-color: rgba(255, 255, 255, 0.6);">
                <v-col>
                    
                    The Functional Zone is designed for dynamic and functional movements that mimic
                    real-life activities. It focuses on improving overall strength, flexibility, coordination,
                    and balance.


                    <v-list density="compact" style="background-color: rgba(255, 255, 255, 0.0);">
                        <v-list-item v-for="(content, title) in functionalZone" :key="title">
                            <v-list-item-title>{{ title }}</v-list-item-title>
                            <v-list-item-subtitle>{{ content }}</v-list-item-subtitle>
                        </v-list-item>
                    </v-list>

                </v-col>
            </v-row>



            <!-- <v-timeline align="center" density="compact">
                <v-timeline-item>

                    <template v-slot:opposite>
                        <v-card title="Functional Zone" style="background-color: rgba(255, 255, 255, 0.6);" >
                            The Functional Zone is designed for dynamic and functional movements that mimic
                            real-life activities. It focuses on improving overall strength, flexibility, coordination,
                            and balance.
                        </v-card>
                    </template>



</v-timeline-item>

<v-timeline-item>
    <template v-slot:opposite>
                        Opposite content
                    </template>
    <div>
        <div class="text-h6">Content title</div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et
            dolore magna aliqua.
        </p>
    </div>
</v-timeline-item>

<v-timeline-item>
    <template v-slot:opposite>
                        Opposite content
                    </template>
    <div>
        <div class="text-h6">Content title</div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et
            dolore magna aliqua.
        </p>
    </div>
</v-timeline-item>
</v-timeline> -->


            <!-- Sections -->


        </v-parallax>

    </div>
</template>

<script>
export default {
    name: 'Activities',


    data() {
        return {
            functionalZone: {
                "Functional Training": "Incorporating exercises that utilize multiple muscle groups and movements.",
                "TRX Suspension Training": "Utilizing suspension straps to perform bodyweight exercises.",
                "Kettlebell Workouts": "Swinging kettlebells to build strength and endurance.",
                "Plyometric Exercises": "Explosive movements to improve power and agility.",
                "Agility Training": "Drills to enhance speed, coordination, and reaction time.",
                "Core Strengthening": "Exercises targeting the muscles of the abdomen, lower back, and hips for stability and balance."
            }
        }
    },
}
</script>
