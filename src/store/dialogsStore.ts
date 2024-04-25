import { defineStore } from 'pinia'

export const useDialogsStore = defineStore('dialogsStore', {

    state: () => ({

        // Posts
        dialogManagePosts: {
            show: false,
            adding: true,
            id: '',
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


        openEditPostDialog(post: object) {
            this.dialogManagePosts.adding = false;
            this.dialogManagePosts.show = true;
            this.dialogManagePosts.id = post.id;
            this.dialogManagePosts.content = post.postContent;
        },

        closePostDialog() {
            this.dialogManagePosts.show = false;
            this.dialogManagePosts.content = '';
        }

        // Posts

    }
})