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
        // Login component

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


        // Alert
        showAlert(message, type) {
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