<template>
    <div>
        <v-container>

            <v-row>
                <v-col cols="12" align=center>
                    <h2>Special subscriptions</h2>
                </v-col>
            </v-row>

            <v-row class="mb-10" align="center" justify="center">
                <v-col cols="12" sm="6" v-for="subscription in specialSubscriptions" :key="subscription.id"
                    align="center" justify="center">
                    <v-card class="mx-auto" height="500" elevation="16" variant="elevated" :image="subscription.image">

                        <v-card style="background-color: rgba(250, 250, 250, 0.9);" height="420"
                            class="ma-10 d-flex flex-column">


                            <v-card-title align="center" class="font-weight-bold mb-2">
                                {{ subscription.name }}
                            </v-card-title>

                            <v-card-subtitle>
                                <span class="font-weight-bold">
                                    Price - {{ subscription.price }}
                                </span> ({{ subscription.type }})
                            </v-card-subtitle>

                            <v-card-text>{{ subscription.description }}</v-card-text>



                            <v-row class="ma-5" align="end" justify="end">
                                <v-col>
                                    <v-btn block color="success">Buy {{ subscription.name }} plan ({{ subscription.price
                                        }}zł)</v-btn>
                                </v-col>
                            </v-row>


                        </v-card>

                    </v-card>
                </v-col>
            </v-row>


            <v-row>
                <v-col cols="12" align=center>
                    <h2>Regular subscriptions</h2>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" sm="3" v-for="subscription in subscriptions" :key="subscription.id">
                    <v-card class="mx-auto" height="500" elevation="16" variant="elevated" :image="subscription.image">


                        <v-card style="background-color: rgba(250, 250, 250, 0.9);" height="420"
                            class="ma-10 d-flex flex-column">
                            <v-card-title align="center" class="font-weight-bold">
                                {{ subscription.name }}
                            </v-card-title>

                            <v-card-subtitle>
                                <span class="font-weight-bold">
                                    Price - {{ subscription.price }}
                                </span> ({{ subscription.type }})
                            </v-card-subtitle>

                            <v-card-text>{{ subscription.description }}</v-card-text>


                            <v-row class="ma-5" align="end" justify="end">
                                <v-col>
                                    <v-btn block color="success">Buy {{ subscription.name }} plan ({{ subscription.price
                                        }}zł)</v-btn>
                                </v-col>
                            </v-row>

                        </v-card>
                    </v-card>
                </v-col>
            </v-row>

        </v-container>

    </div>
</template>

<script>
export default {
    name: 'Subscriptions',

    data() {
        return {
            subscriptions: [
                {
                    id: 1,
                    name: 'Basic',
                    price: 50,
                    color: 'blue-grey-lighten-3',
                    type: 'monthly, for 12 months',
                    description: 'Basic subscription',
                    image: 'src/images/basic_background.jpeg'
                },
                {
                    id: 2,
                    name: 'Basic 12',
                    price: 50,
                    color: 'deep-purple-lighten-4',
                    type: '1 month',
                    description: 'Basic subscription',
                    image: 'src/images/basic_12_background.jpeg'
                },
                {
                    id: 3,
                    name: 'Open',
                    price: 50,
                    color: 'green-lighten-2',
                    type: '1 months',
                    description: 'Basic subscription',
                },
                {
                    id: 4,
                    name: 'Open 12',
                    price: 50,
                    color: 'red-lighten-3',
                    type: '1 month',
                    description: 'Basic subscription',
                },

            ],

            specialSubscriptions: [
                {
                    id: 5,
                    name: 'Student',
                    price: 50,
                    color: 'red-lighten-3',
                    type: '1 month',
                    description: 'Basic subscription',
                    image: 'src/images/student_subscripton.jpeg'
                },
                {
                    id: 6,
                    name: 'Disabled person',
                    price: 50,
                    color: 'red-lighten-3',
                    type: '1 month',
                    description: 'Basic subscription',
                    image: 'src/images/disabled_background.jpeg'
                },

            ],
        }
    },



}
</script>
