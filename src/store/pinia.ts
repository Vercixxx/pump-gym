import { defineStore } from 'pinia'

export const usePiniaStorage = defineStore('store', {

    state: () => ({
        buyDialog: false,
        buyDialogData: {} as unknown,
        userData: null as unknown,
        userUid: null as string | null,
        loginDialog: false,
        passwordResetDialog: false,
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

        // Admin
        editUserDialog: false,
        editUserData: {} as unknown,
        addingUser: false,

        manageSubscriptionDialog: false,
        manageSubscriptionData: {} as unknown,

        // Dialog
        dialog: {
            show: false,
            title: '',
            message: '',
            cancelText: '',
            cancelAction: () => { },
            confirmText: '',
            confirmAction: () => { },
            type: '',
        },
        // Dialog


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


        // Password reset component
        openPasswordResetDialog() {
            this.passwordResetDialog = true;
        },
        closePasswordResetDialog() {
            this.passwordResetDialog = false;
        },
        // Password reset component


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


        // Admin
        // Edit user dialog
        openEditUserDialog(userData = {}) {
            this.editUserData = userData;
            this.editUserDialog = true;
        },
        closeEditUserDialog() {
            this.editUserDialog = false;
            this.editUserData = {};
        },
        // Edit user dialog


        // Adding user
        openAddUserDialog() {
            this.addingUser = true;
            this.editUserDialog = true;
        },
        closeAddUserDialog() {
            this.addingUser = false;
            this.editUserDialog = false;
        },
        // Adding user


        // Manage subscription dialog
        openManageSubscriptionDialog(data = {}) {
            this.manageSubscriptionData = data;
            this.manageSubscriptionDialog = true;
        },
        closeManageSubscriptionDialog() {
            this.manageSubscriptionDialog = false;
            this.manageSubscriptionData = {};
        },
        // Manage subscription dialog



        // Dialog
        openDialog(
            title: string,
            message: string,
            cancelText: string,
            cancelAction: () => void,
            confirmText: string,
            confirmAction: () => void,
            type?: string,
        ) {
            this.dialog.show = true;
            this.dialog.title = title;
            this.dialog.message = message;
            this.dialog.cancelText = cancelText;
            this.dialog.cancelAction = cancelAction;
            this.dialog.confirmText = confirmText;
            this.dialog.confirmAction = confirmAction;

            if (type) {
                this.dialog.type = type;
            }
            else {
                this.dialog.type = 'info';
            }
        },

        closeDialog() {
            this.dialog.show = false;
        },
        // Dialog




    },

    persist: {
        storage: sessionStorage,
    },

})