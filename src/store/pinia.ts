import { defineStore } from 'pinia'

export const usePiniaStorage = defineStore('store', {

    state: () => ({
        buyDialog: false,
        buyDialogData: {} as unknown,
        userData: null as unknown,
        userUid: null as string | null,
        loginDialog: false,
        signUpDialog: false,
        workWithUsDialog: false,
        contactUsDialog: false,
        facilities: null as unknown,
        subscriptions: {
            regular: {} as unknown,
            special: {} as unknown,
        },
        alert: {
            show: false,
            message: '',
            type: 'success'
        },
        paymentSuccessfullDialog: false,
        overlay: false,
        drawer: false,
    }),

    actions: {
        // Buy dialog
        invokeBuyDialog(value: unknown) {
            this.buyDialogData = value;
            this.buyDialog = true;
        },

        closeBuyDialog() {
            this.buyDialog = false;
        },
        // Buy dialog


        // User data
        setUserData(data: unknown, uid: string) {
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
        setFacilities(data: unknown) {
            this.facilities = data;
        },
        // Facilities


        // Subscriptions
        setSubscriptions(regular: unknown, special: unknown) {
            this.subscriptions.regular = regular;
            this.subscriptions.special = special;
        },
        // Subscriptions


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
        },
        // Overlay


        // Drawer
        openDrawer() {
            this.drawer = true;
        },
        closeDrawer() {
            this.drawer = false;
        },
        useDrawer() {
            this.drawer = !this.drawer;
        },
        // Drawer
    },

    persist: {
        storage: sessionStorage,
    },
    
})