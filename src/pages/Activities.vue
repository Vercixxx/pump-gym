<template>
    <div>

        <v-parallax
            src="https://web-back.perfectgym.com/sites/default/files/styles/460x/public/equipment%20%286%29.jpg?itok=bC0T32-K"
            class="ma-0 pa-0">

            <!-- Carousel -->
            <v-row>
                <v-col cols="12" align="center">

                    <v-carousel height="500" style="width: 60%;" show-arrows="hover" cycle hide-delimiter-background>
                        <v-carousel-item v-for="zone in zones" :key="zone.name">
                            <v-sheet height="100%" style="background-color: rgba(255, 255, 255, 0.6);">
                                <div class="d-flex fill-height justify-center align-center">

                                    <v-row>
                                        <v-col cols="12" align=center class="text-h4">
                                            {{ zone.name }}
                                            <v-icon size="30">{{ zone.icon }}</v-icon>
                                        </v-col>
                                        <v-col cols="12" align=center class="text-h6">
                                            {{ zone.description }}
                                        </v-col>
                                        <v-list style="background-color: rgba(255, 255, 255, 0);">
                                            <v-list-item v-for="(content, title) in zone.items" :key="title">
                                                <v-list-item-title>{{ title }}</v-list-item-title>
                                                <v-list-item-subtitle>{{ content }}</v-list-item-subtitle>
                                            </v-list-item>
                                        </v-list>
                                    </v-row>


                                </div>
                            </v-sheet>
                        </v-carousel-item>
                    </v-carousel>
                </v-col>
            </v-row>
            <!-- Carousel -->

        </v-parallax>

    </div>
</template>

<script>
export default {
    name: 'Activities',


    data() {
        return {
            zones: {

                functionalZone: {
                    name: 'Functional Zone',
                    icon: 'mdi-dumbbell',
                    description: ' The Functional Zone is designed for dynamic and functional movements that mimic real-life activities. It focuses on improving overall strength, flexibility, coordination, and balance.',
                    items: {
                        "Functional Training": "Incorporating exercises that utilize multiple muscle groups and movements.",
                        "TRX Suspension Training": "Utilizing suspension straps to perform bodyweight exercises.",
                        "Kettlebell Workouts": "Swinging kettlebells to build strength and endurance.",
                        "Plyometric Exercises": "Explosive movements to improve power and agility.",
                        "Agility Training": "Drills to enhance speed, coordination, and reaction time.",
                        "Core Strengthening": "Exercises targeting the muscles of the abdomen, lower back, and hips for stability and balance."
                    },
                },
                machineZone: {
                    name: 'Machine Zone',
                    icon: 'mdi-dumbbell',
                    description: 'The Machine Zone houses a variety of cardiovascular and strength training machines, providing options for both aerobic and anaerobic workouts.',
                    items: {
                        "Treadmills": "Walking, jogging, or running at various speeds and inclines for cardiovascular endurance.",
                        "Stationary Bikes": "Cycling for low - impact cardio workouts.",
                        "Elliptical Trainers": "Simulating walking, running, or climbing stairs with minimal joint stress.",
                        "Rowing Machines": "Engaging in full - body workouts to improve cardiovascular fitness and strength.",
                        "Strength Training": "Machines: Targeting specific muscle groups with guided resistance exercises.",
                    },
                },
                freeWeightZone: {
                    name: 'Free Weight Zone',
                    icon: 'mdi-dumbbell',
                    description: 'The Free Weight Zone is dedicated to traditional strength training using free weights such as dumbbells, barbells, and weight plates.',
                    items: {
                        "Dumbbell Workouts": "Performing exercises like bicep curls, shoulder presses, and lunges with dumbbells.",
                        "Barbell Exercises": "Squats, deadlifts, bench presses, and overhead presses using barbells.",
                        "Bench Press": "Pressing weight while lying on a flat, incline, or decline bench.",
                        "Squats": "Lower body exercises for building leg and glute strength.",
                        "Deadlifts": "Lifting weight from the floor to strengthen the posterior chain.",
                        "Bicep Curls": "Isolating the biceps with curling movements.",
                    },
                },
                groupExerciseZone: {
                    name: 'Group Exercise Zone',
                    icon: 'mdi-dumbbell',
                    description: 'The Group Exercise Zone offers a variety of instructor-led classes in a group setting, catering to different fitness levels and preferences.',
                    items: {
                        "Yoga Classes": "Practicing various yoga poses to improve flexibility, strength, and mental well- being.",
                        "Pilates Workouts": "Engaging in core - focused exercises to enhance stability and posture.",
                        "Zumba Dance": "Enjoying high- energy dance workouts inspired by Latin and international rhythms.",
                        "Spin Classes": "Indoor cycling sessions with music and motivational coaching.",
                        "Body Pump": "Full - body strength training workouts using barbells and adjustable weights.",
                        "HIIT(High - Intensity Interval Training)": "Alternating between intense bursts of activity and short rest periods for maximal calorie burn.",
                        "Kickboxing": "Combining martial arts techniques with cardiovascular exercises for a challenging workout.",
                    },
                },
                cardioZone: {
                    name: 'Cardio Zone',
                    icon: 'mdi-dumbbell',
                    description: 'The Cardio Zone provides a range of equipment and spaces for cardiovascular training, catering to individuals looking to improve their endurance and burn calories.',
                    items: {
                        "Interval Training": "Alternating between periods of high- intensity exercise and recovery for improved fitness.",
                        "Circuit Training": "Moving through a series of exercise stations to target different muscle groups and keep the heart rate elevated.",
                        "Stair Climber": "Climbing stairs on a machine to strengthen the lower body and boost cardiovascular fitness.",
                        "Jump Rope": "Skipping rope for a high- intensity, calorie - burning workout.",
                        "Sled Push / Pull": "Pushing or pulling weighted sleds to develop strength and power.",
                        "Battle Ropes": "Swinging heavy ropes in various patterns to engage the upper body and core.",
                    },
                },
                flexibilityAndRecoveryZone: {
                    name: 'Flexibility and Recovery Zone',
                    icon: 'mdi-dumbbell',
                    description: 'The Flexibility and Recovery Zone is dedicated to promoting relaxation, mobility, and recovery after intense workouts.',
                    items: {
                        "Stretching Area": "Performing static and dynamic stretches to improve flexibility and prevent injury.",
                        "Foam Rolling": "Using foam rollers to release muscle tension and improve circulation.",
                        "Massage Therapy": "Receiving professional massages to alleviate muscle soreness and promote relaxation.",
                        "Sauna": "Relaxing in a dry sauna to induce sweating and detoxification while soothing muscles.",
                        "Steam Room": "Enjoying the moist heat of a steam room for relaxation and respiratory benefits.",
                        "Jacuzzi": "Soaking in a hot tub to ease muscle tension and promote relaxation.",
                    },
                },
            },
        }
    },
}
</script>
