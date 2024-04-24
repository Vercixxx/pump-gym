import { defineStore } from 'pinia'

export const useDialogsStore = defineStore('dialogsStore', {

    state: () => ({

        // Posts
        dialogManagePosts: {
            show: false,
            adding: true,
            id: '',
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


        openEditPostDialog(post: object) {
            this.dialogManagePosts.adding = false;
            this.dialogManagePosts.show = true;
            this.dialogManagePosts.id = post.id;
            this.dialogManagePosts.title = post.postTitle;
            this.dialogManagePosts.content = post.postContent;
        },

        closePostDialog() {
            this.dialogManagePosts.show = false;
            this.dialogManagePosts.title = '';
            this.dialogManagePosts.content = '';
        }

        // Posts

    }
})