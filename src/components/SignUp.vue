<template>

    <v-dialog v-model="signUpDialog" persistent width="700" style="background-color: rgba(50, 50, 50, 0.8);">
        <div class="rounded-xl pa-4 border-4 border-indigo-900 " :class="darkMode ? 'bg-slate-900' : 'bg-slate-200'">

            <v-card-title>

                <v-row>
                    <v-col cols="2"></v-col>
                    <v-col cols="8" class="headline text-h4" align=center>
                        Sign up
                    </v-col>
                    <v-col cols="2" align="end">
                        <v-btn icon="mdi-close" variant="plain" @click="closeSignUpDialog" :disabled="loading"></v-btn>
                    </v-col>
                </v-row>
            </v-card-title>

            <v-card-text>


                <v-stepper v-model="step" :mobile="$vuetify.display.smAndDown" elevation="0"
                    style="background-color: rgba(255, 255, 255, 0.2);">

                    <v-stepper-header>
                        <v-stepper-item :complete="forms[0]" :title="cards[0].text" value="1"></v-stepper-item>

                        <v-divider></v-divider>

                        <v-stepper-item :complete="forms[1]" :title="cards[1].text" value="2"></v-stepper-item>


                    </v-stepper-header>


                    <!-- Content -->
                    <v-stepper-window>

                        <!-- Page 1 -->
                        <v-window-item value="1">

                            <v-form v-model="forms[0]">

                                <v-row>
                                    <v-col cols="12" md="6" v-for="field in basicFields" :key="name">
                                        <v-text-field v-model="field.value" :label="field.label" :rules="field.rules"
                                            :prepend-inner-icon="field.icon" variant="underlined"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-select v-model="genderValue" label="Gender" :items=genderOptions
                                            prepend-inner-icon="mdi-family-tree" :rules="requiredRule"
                                            variant="underlined"></v-select>
                                    </v-col>
                                </v-row>

                            </v-form>

                        </v-window-item>
                        <!-- Page 1 -->

                        <!-- Page 2 -->
                        <v-window-item value="2">

                            <v-form v-model="forms[1]">

                                <v-row>
                                    <v-col cols="12" md="6" v-for="field in passwordFields" :key="name">
                                        <v-text-field v-model="field.value" :label="field.label" :rules="field.rules"
                                            :prepend-inner-icon="field.icon" :type="field.visible ? 'text' : 'password'"
                                            :append-inner-icon="field.visible ? 'mdi-eye' : ' mdi-eye-off'"
                                            @click:append-inner="field.visible = !field.visible"
                                            autocomplete="current-password" :disabled="loading"
                                            variant="underlined"></v-text-field>
                                    </v-col>
                                </v-row>

                            </v-form>

                        </v-window-item>
                        <!-- Page 2 -->

                    </v-stepper-window>
                    <!-- Content -->


                    <!-- Nav -->
                    <v-stepper-actions>
                        <template v-slot:next="">

                            <v-col :cols="step == 0 ? '12' : '6'" :sm="step == 0 ? '12' : '6'">
                                <v-btn v-if="step == 0" block @click="step++" :disabled="!forms[step]" text="Next"
                                    append-icon="mdi-arrow-right" class="text-h5" color="success">
                                </v-btn>

                                <span v-else>
                                    <v-tooltip v-if="!form" activator="parent" location="top" no-overflow>
                                        Fill required fields
                                    </v-tooltip>
                                    <span>
                                        <v-btn block color="green-darken-2" @click="signUp()" :loading="loading"
                                            :disabled="!stepsCompleted">Sign up</v-btn>
                                    </span>
                                </span>
                            </v-col>


                        </template>

                        <template v-slot:prev="">

                            <v-col cols="6" sm="6" v-if="step == 1">
                                <v-btn block :disabled="loading" @click="step--" text="Previous"
                                    prepend-icon="mdi-arrow-left" class="">
                                </v-btn>
                            </v-col>


                        </template>
                    </v-stepper-actions>
                    <!-- Nav -->

                </v-stepper>

            </v-card-text>


        </div>
    </v-dialog>

</template>


<script setup lang="ts">
import { ref, computed } from 'vue';
import { usePiniaStorage } from '../store/pinia';

// Reactive data
const form = ref(false);
const loading = ref(false);
const step = ref(0);
const cards = ref([
    {
        id: 1,
        text: 'Tell us about yourself',
        active: false,
    },
    {
        id: 2,
        text: 'Create your account',
        active: false,
    },
]);
const forms = ref([false, false]);
const requiredRule = [v => !!v || 'Field required'];


const basicFields = ref([
    {
        name: 'first_name',
        label: 'First name',
        icon: 'mdi-account',
        value: '',
        rules: [
            v => !!v || 'First name is required',
            v => (v.length >= 2) || 'First name must containt at least 2 characters',
            v => (v.length <= 70) || 'First name too large',
        ],
    },
    {
        name: 'last_name',
        label: 'Last name',
        icon: 'mdi-account',
        value: '',
        rules: [
            v => !!v || 'Last name is required',
            v => (v.length >= 2) || 'Last name must containt at least 2 characters',
            v => (v.length <= 70) || 'Last name too large',
        ],
    },
    {
        name: 'email',
        label: 'Email',
        icon: 'mdi-email',
        value: '',
        rules: [
            v => !!v || 'Email',
            v => (v.length >= 6) || 'Email must containt at least 6 characters',
            v => (v.length <= 70) || 'Email too large',
            v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'Invalid email format',
        ],
    },
    {
        name: 'phone',
        label: 'Phone',
        icon: 'mdi-phone',
        value: '',
        rules: [
            v => !!v || 'Phone is required',
            v => (v.length >= 6) || 'Phone must containt at least 6 characters',
            v => (v.length <= 70) || 'Phone too large',
        ],
    },
]);


const genderValue = ref('');
const genderOptions = ref([
    'Rather not say',
    'Men',
    'Woman',
]);


const passwordFields = ref([
    {
        name: 'password',
        label: 'Password',
        icon: 'mdi-key',
        visible: false,
        value: '',
        rules: [
            v => !!v || 'Password is required',
            v => (v.length >= 4) || 'Password must containt at least 4 characters',
            v => (v.length <= 70) || 'Password too large',
        ],
    },
    {
        name: 'password2',
        label: 'Repeat password',
        icon: 'mdi-key',
        visible: false,
        value: '',
        rules: [
            v => !!v || 'Password is required',
            v => (v.length >= 4) || 'Password must containt at least 4 characters',
            v => (v.length <= 70) || 'Password too large',
            v => v === passwordFields.value[0].value || 'Passwords do not match',
        ],
    },
]);
// Reactive data



// Computed / Pinia
const storage = usePiniaStorage();

var signUpDialog = computed(() => storage.signUpDialog);

function closeSignUpDialog() {
    basicFields.value.forEach(field => field.value = '');
    passwordFields.value.forEach(field => field.value = '');
    genderValue.value = '';
    storage.closeSignUpDialog();
}


// Computed
const stepsCompleted = computed(() => forms.value.every(form => form));

// Computed / Pinia


// Sign up method
import { createAccount } from '../scripts/CreateAccount';

const signUp = async () => {
    loading.value = true;

    const data = {
        first_name: basicFields.value[0].value,
        last_name: basicFields.value[1].value,
        email: basicFields.value[2].value,
        phone: basicFields.value[3].value,
        gender: genderValue.value,
        password: passwordFields.value[0].value,
    }

    const response = await createAccount(
        data.first_name,
        data.last_name,
        data.email,
        data.phone,
        data.gender,
        'Member',
        true,
        data.password,
    );

    if(response) {
        closeSignUpDialog();
    }

    loading.value = false;
};
// Sign up method


// Theme
import { useTheme } from 'vuetify'
const theme = useTheme();
const darkMode = computed(() => theme.name.value === 'dark');
// Theme


</script>
