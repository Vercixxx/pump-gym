import { defineStore } from 'pinia'

export const usePiniaStorage = defineStore({
    id: 'piniaStorage',

    state: () => ({
        buyDialog: false,
        buyDialogData: {},
    }),

    actions: {
        invokeBuyDialog(value) {
            this.buyDialogData = value;
            this.buyDialog = true;
        },

        closeBuyDialog() {
            this.buyDialog = false;
        },
    }
})