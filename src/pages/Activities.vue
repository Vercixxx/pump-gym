<template>
    <div>

        <v-parallax
            src="https://web-back.perfectgym.com/sites/default/files/styles/460x/public/equipment%20%286%29.jpg?itok=bC0T32-K"
            class="ma-0 pa-0">


            <!-- Sections -->

            <v-row style="background-color: rgba(255, 255, 255, 0.6);">
                <v-col cols="12" sm="6" class="pa-5">
                    <v-col cols=12 align=center class="text-h4">
                        Functional Zone
                        <v-icon size="30">mdi-dumbbell</v-icon>
                    </v-col>

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

                <v-col cols="12" sm="6" class="pa-5">
                    <v-col cols=12 align=center class="text-h4">
                        Machine Zone
                        <v-icon size="30">mdi-dumbbell</v-icon>
                    </v-col>

                    The Machine Zone houses a variety of cardiovascular and strength training machines, providing
                    options for both aerobic and anaerobic workouts.


                    <v-list density="compact" style="background-color: rgba(255, 255, 255, 0.0);">
                        <v-list-item v-for="(content, title) in machineZone" :key="title">
                            <v-list-item-title>{{ title }}</v-list-item-title>
                            <v-list-item-subtitle>{{ content }}</v-list-item-subtitle>
                        </v-list-item>
                    </v-list>



                </v-col>
            </v-row>


            <v-row style="background-color: rgba(255, 255, 255, 0.6);">
                <v-col cols="12" sm="6" class="pa-5">
                    <v-col cols=12 align=center class="text-h4">
                        Free Weight Zone
                        <v-icon size="30">mdi-dumbbell</v-icon>
                    </v-col>

                    The Free Weight Zone is dedicated to traditional strength training using free weights such as
                    dumbbells, barbells, and weight plates.



                    <v-list density="compact" style="background-color: rgba(255, 255, 255, 0.0);">
                        <v-list-item v-for="(content, title) in freeWeightZone" :key="title">
                            <v-list-item-title>{{ title }}</v-list-item-title>
                            <v-list-item-subtitle>{{ content }}</v-list-item-subtitle>
                        </v-list-item>
                    </v-list>

                </v-col>

                <v-col cols="12" sm="6" class="pa-5">
                    <v-col cols=12 align=center class="text-h4">
                        Group Exercise Zone
                        <v-icon size="30">mdi-dumbbell</v-icon>
                    </v-col>

                    The Group Exercise Zone offers a variety of instructor-led classes in a group setting, catering to
                    different fitness levels and preferences.



                    <v-list density="compact" style="background-color: rgba(255, 255, 255, 0.0);">
                        <v-list-item v-for="(content, title) in groupExerciseZone" :key="title">
                            <v-list-item-title>{{ title }}</v-list-item-title>
                            <v-list-item-subtitle>{{ content }}</v-list-item-subtitle>
                        </v-list-item>
                    </v-list>



                </v-col>
            </v-row>



            <v-row style="background-color: rgba(255, 255, 255, 0.6);">
                <v-col cols="12" sm="6" class="pa-5">
                    <v-col cols=12 align=center class="text-h4">
                        Cardio Zone
                        <v-icon size="30">mdi-dumbbell</v-icon>
                    </v-col>

                    The Cardio Zone provides a range of equipment and spaces for cardiovascular training, catering to
                    individuals looking to improve their endurance and burn calories.




                    <v-list density="compact" style="background-color: rgba(255, 255, 255, 0.0);">
                        <v-list-item v-for="(content, title) in cardioZone" :key="title">
                            <v-list-item-title>{{ title }}</v-list-item-title>
                            <v-list-item-subtitle>{{ content }}</v-list-item-subtitle>
                        </v-list-item>
                    </v-list>

                </v-col>

                <v-col cols="12" sm="6" class="pa-5">
                    <v-col cols=12 align=center class="text-h4">
                        Flexibility and Recovery Zone
                        <v-icon size="30">mdi-dumbbell</v-icon>
                    </v-col>

                    The Flexibility and Recovery Zone is dedicated to promoting relaxation, mobility, and recovery after
                    intense workouts.




                    <v-list density="compact" style="background-color: rgba(255, 255, 255, 0.0);">
                        <v-list-item v-for="(content, title) in flexibilityAndRecoveryZone" :key="title">
                            <v-list-item-title>{{ title }}</v-list-item-title>
                            <v-list-item-subtitle>{{ content }}</v-list-item-subtitle>
                        </v-list-item>
                    </v-list>



                </v-col>
            </v-row>


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
            },
            machineZone: {
                "Treadmills": "Walking, jogging, or running at various speeds and inclines for cardiovascular endurance.",
                "Stationary Bikes": "Cycling for low - impact cardio workouts.",
                "Elliptical Trainers": "Simulating walking, running, or climbing stairs with minimal joint stress.",
                "Rowing Machines": "Engaging in full - body workouts to improve cardiovascular fitness and strength.",
                "Strength Training": "Machines: Targeting specific muscle groups with guided resistance exercises.",
            },
            freeWeightZone: {
                "Dumbbell Workouts": "Performing exercises like bicep curls, shoulder presses, and lunges with dumbbells.",
                "Barbell Exercises": "Squats, deadlifts, bench presses, and overhead presses using barbells.",
                "Bench Press": "Pressing weight while lying on a flat, incline, or decline bench.",
                "Squats": "Lower body exercises for building leg and glute strength.",
                "Deadlifts": "Lifting weight from the floor to strengthen the posterior chain.",
                "Bicep Curls": "Isolating the biceps with curling movements.",
            },
            groupExerciseZone: {
                "Yoga Classes": "Practicing various yoga poses to improve flexibility, strength, and mental well- being.",
                "Pilates Workouts": "Engaging in core - focused exercises to enhance stability and posture.",
                "Zumba Dance": "Enjoying high- energy dance workouts inspired by Latin and international rhythms.",
                "Spin Classes": "Indoor cycling sessions with music and motivational coaching.",
                "Body Pump": "Full - body strength training workouts using barbells and adjustable weights.",
                "HIIT(High - Intensity Interval Training)": "Alternating between intense bursts of activity and short rest periods for maximal calorie burn.",
                "Kickboxing": "Combining martial arts techniques with cardiovascular exercises for a challenging workout.",
            },
            cardioZone: {
                "Interval Training": "Alternating between periods of high- intensity exercise and recovery for improved fitness.",
                "Circuit Training": "Moving through a series of exercise stations to target different muscle groups and keep the heart rate elevated.",
                "Stair Climber": "Climbing stairs on a machine to strengthen the lower body and boost cardiovascular fitness.",
                "Jump Rope": "Skipping rope for a high- intensity, calorie - burning workout.",
                "Sled Push / Pull": "Pushing or pulling weighted sleds to develop strength and power.",
                "Battle Ropes": "Swinging heavy ropes in various patterns to engage the upper body and core.",
            },
            flexibilityAndRecoveryZone: {
                "Stretching Area": "Performing static and dynamic stretches to improve flexibility and prevent injury.",
                "Foam Rolling": "Using foam rollers to release muscle tension and improve circulation.",
                "Massage Therapy": "Receiving professional massages to alleviate muscle soreness and promote relaxation.",
                "Sauna": "Relaxing in a dry sauna to induce sweating and detoxification while soothing muscles.",
                "Steam Room": "Enjoying the moist heat of a steam room for relaxation and respiratory benefits.",
                "Jacuzzi": "Soaking in a hot tub to ease muscle tension and promote relaxation.",
            },
        }
    },
}
</script>
