import { defineStore } from 'pinia'

export const useDialogsStore = defineStore('dialogsStore', {

    state: () => ({

        // Posts
        dialogManagePosts: {
            show: false,
            adding: true,
            title: '',
            content: '',
        },
        // Posts

    }),

    actions: {


        // Posts
        openCreateNewPostDialog() {
            this.dialogManagePosts.adding = true;
            this.dialogManagePosts.show = true;
        },


        openEditPostDialog(title: string, content: string) {
            this.dialogManagePosts.adding = false;
            this.dialogManagePosts.title = title;
            this.dialogManagePosts.content = content;
            this.dialogManagePosts.show = true;
        },

        closePostDialog() {
            this.dialogManagePosts.show = false;
            this.dialogManagePosts.title = '';
            this.dialogManagePosts.content = '';
        }

        // Posts

    }
})