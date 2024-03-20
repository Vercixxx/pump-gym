<template>

    <v-dialog v-model="showLoginDialog" persistent width="600"  style="background-color: rgba(100, 100, 100, 0.6);">
        <v-card class="rounded-xl pa-4 bg-brown-lighten-5">
            <v-card-title>

                <v-row>
                    <v-col cols="2"></v-col>
                    <v-col cols="8" class="headline text-h4" align=center>
                        Login
                    </v-col>
                    <v-col cols="2" align="end">
                        <v-btn icon="mdi-close" variant="plain" @click="closeLoginDialog"></v-btn>
                    </v-col>
                </v-row>
            </v-card-title>

            <v-card-text>
                <v-form v-model="form">

                    <!-- Login -->
                    <v-text-field v-model="loginInput" label="Email" class="mb-7" variant="underlined"
                        prepend-icon="mdi-email" autocomplete="username" :rules="rules.emailRules"></v-text-field>
                    <!-- Login -->



                    <!-- Password -->
                    <v-text-field v-model="password" label="Password" variant="underlined"
                        :type="passwordVisible ? 'text' : 'password'" prepend-icon="mdi-key"
                        :append-inner-icon="passwordVisible ? 'mdi-eye' : ' mdi-eye-off'"
                        @click:append-inner="passwordVisible = !passwordVisible"
                        autocomplete="current-password"></v-text-field>
                    <!-- Password -->

                    <!-- Password recovery -->
                    <div class="text-subtitle-1 text-medium-emphasis d-flex align-end justify-space-between">
                        <span></span>

                        <v-btn variant="plain" size="small" @click="passwordRecoverDialog = true"
                            class="text-cyan-darken-4 font-weight-bold" prepend-icon="mdi-restore">
                            Forgot password?
                        </v-btn>
                    </div>
                    <!-- Password recovery -->
                </v-form>
            </v-card-text>


            <v-row class="mb-4">
                <v-col cols="12" align="center">
                    <v-divider></v-divider>
                    <v-btn class="mt-4" variant="tonal"  @click="signUp" role="button">
                        Dont have an account? Sign up now!
                    </v-btn>

                </v-col>
            </v-row>


            <v-row class="mb-1 mt-2">
                <v-col cols="12">
                    <span>
                        <v-tooltip v-if="!form" activator="parent" location="top" no-overflow>
                            Fill required fields
                        </v-tooltip>
                        <span>
                            <v-btn block color="green-darken-2" @click="login()" :loading="loading"
                                :disabled="!form">Login</v-btn>
                        </span>
                    </span>
                </v-col>
            </v-row>

        </v-card>
    </v-dialog>

</template>


<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'


export default {
    name: 'LoginComponent',

    data() {
        return {
            form: false,
            loading: false,
            loginInput: '',
            password: '',
            passwordVisible: false,

            rules: {
                emailRules: [
                    v => !!v || 'Email',
                    v => (v.length >= 6) || 'Email must containt at least 6 characters',
                    v => (v.length <= 70) || 'Email too large',
                    v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'Invalid email format (example@ex.ex)',
                    
                ],

                passwordRules: [
                    v => !!v || 'Password is required',
                    v => (v.length >= 4) || 'Password must containt at least 4 characters',
                    v => (v.length <= 70) || 'Password too large',
                ],
            },


        }
    },



    computed: {
        ...mapGetters(['showLoginDialog'])
    },

    methods: {
        ...mapActions(['openLoginDialog', 'closeLoginDialog', 'openSignUpDialog', 'setLoggedUser', 'triggerAlert']),

        signUp() {
            this.closeLoginDialog();
            this.openSignUpDialog();
        },

        async login() {
            this.loading = true;
            try {
                const email = this.loginInput.trim();
                const password = this.password.trim();

                const user = await signInWithEmailAndPassword(auth, email, password);
                this.setLoggedUser(user);
                this.closeLoginDialog();
                this.$router.push('/dashboard');

            } catch (error) {
                if (error.code === 'auth/invalid-credential') {
                    this.triggerAlert({
                        message: 'Wrong email or password',
                        type: 'error'
                    })
                } else {
                    this.triggerAlert({
                        message: 'An error occurred',
                        type: 'error'
                    })
                }

            }

            this.loading = false;
        },

    },

}
</script>
