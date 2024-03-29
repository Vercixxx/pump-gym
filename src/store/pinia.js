import { defineStore } from 'pinia'

export const usePiniaStorage = defineStore({
    id: 'piniaStorage',

    state: () => ({
        buyDialog: false,
        buyDialogData: {},

        // User data
        userData: null,
        // User data

        // Login component
        loginDialog: false,
        // Login componentimport { useStore } from 'vuex';


        // Sign up component
        signUpDialog: false,
        // Sign up component

        // WorkWithUs
        workWithUsDialog: false,
        // WorkWithUs

        // Contact us dialog
        contactUsDialog: false,
        // Contact us dialog


        // Facilities
        facilities: null,
        // Facilities

        // Alert
        alert: {
            show: false,
            message: '',
            type: 'success'
        }
        // Alert

    }),

    actions: {
        // Buy dialog
        invokeBuyDialog(value) {
            this.buyDialogData = value;
            this.buyDialog = true;
        },
        
        closeBuyDialog() {
            this.buyDialog = false;
        },
        // Buy dialog


        // User data
        setUserData(data) {
            this.userData = data;
        },
        emptyUserData() {
            this.userData = null;
        },
        // User data


        // Login component
        openLoginDialog() {
            this.loginDialog = true;
        },
        closeLoginDialog() {
            this.loginDialog = false;
        },
        // Login component


        // Sign up component
        openSignUpDialog() {
            this.signUpDialog = true;
        },
        closeSignUpDialog() {
            this.signUpDialog = false;
        },
        // Sign up component


        // WorkWithUs
        openWorkWithUsDialog() {
            this.workWithUsDialog = true;
        },
        closeWorkWithUsDialog() {
            this.workWithUsDialog = false;
        },
        // WorkWithUs


        // Contact us dialog
        openContactUsDialog() {
            this.contactUsDialog = true;
        },
        closeContactUsDialog() {
            this.contactUsDialog = false;
        },
        // Contact us dialog


        // Facilities
        setFacilities(data) {
            this.facilities = data;
        },
        // Facilities


        // Alert
        showAlert(type, message) {
            this.alert.show = true;
            this.alert.message = message;
            this.alert.type = type;
        },
        closeAlert() {
            this.alert.show = false;
        }
        // Alert
    }
})