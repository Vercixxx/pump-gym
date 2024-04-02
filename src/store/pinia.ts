import { defineStore } from 'pinia'

export const usePiniaStorage = defineStore({
    id: 'piniaStorage',

    state: () => ({
        buyDialog: false,
        buyDialogData: {} as any,

        // User data
        userData: null as any,
        userUid: null as string | null,
        // User data

        // Login component
        loginDialog: false,
        // Login component;


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
        facilities: null as any,
        // Facilities

        // Alert
        alert: {
            show: false,
            message: '',
            type: 'success'
        },
        // Alert


        // Payment
        paymentSuccessfullDialog: false,
        // Payment


        // Overlay
        overlay: false,
        // Overlay
    }),

    actions: {
        // Buy dialog
        invokeBuyDialog(value: any) {
            this.buyDialogData = value;
            this.buyDialog = true;
        },
        
        closeBuyDialog() {
            this.buyDialog = false;
        },
        // Buy dialog


        // User data
        setUserData(data: any, uid: string) {
            this.userData = data;
            this.userUid = uid;
        },
        emptyUserData() {
            this.userData = null;
            this.userUid = null;
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
        setFacilities(data: any) {
            this.facilities = data;
        },
        // Facilities


        // Alert
        showAlert(type: string, message: string) {
            this.alert.show = true;
            this.alert.message = message;
            this.alert.type = type;
        },
        closeAlert() {
            this.alert.show = false;
        },
        // Alert


        // Payment
        openPaymentSuccessfullDialog() {
            this.paymentSuccessfullDialog = true;
        },
        closePaymentSuccessfullDialog() {
            this.paymentSuccessfullDialog = false;
        },
        // Payment


        // Overlay
        openOverlay() {
            this.overlay = true;
        },
        closeOverlay() {
            this.overlay = false;
        }
        // Overlay
    }
})