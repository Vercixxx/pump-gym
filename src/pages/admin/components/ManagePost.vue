<template>
    <v-dialog persistent v-model="dialogManagePosts" :retain-focus="false" attach fullscreen>

        <v-card class="py-5" :class="darkMode ? 'bg-slate-800' : 'bg-slate-200'">


            <!-- Header -->
            <v-row>
                <v-col cols="2"></v-col>
                <v-col cols="8" align="center">
                    <span class="text-5xl font-weight-black">
                        {{ addingPost ? 'Add New Post' : 'Edit Post' }}
                    </span>
                </v-col>
                <v-col cols="2" align="end">
                    <v-tooltip location="start">
                        <template v-slot:activator="{ props }">
                            <v-btn icon v-bind="props" variant="plain">
                                <v-icon icon="mdi-close" class="text-4xl hover:scale-125 hover:rotate-12 cursor-pointer"
                                    @click="closeDialog">
                                </v-icon>
                            </v-btn>
                        </template>
                        <span>Close</span>
                    </v-tooltip>

                </v-col>
            </v-row>
            <!-- Header -->

            <!-- Content -->
            <v-card-text>
                <Editor :api-key="EditorApiKey" :init="{
                    toolbar_mode: 'sliding',
                    plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
                    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                    tinycomments_mode: 'embedded',
                    tinycomments_author: 'Author name',
                    mergetags_list: [
                        { value: 'First.Name', title: 'First Name' },
                        { value: 'Email', title: 'Email' },
                    ],
                    height: 650,
                }" v-model="postContent" />
            </v-card-text>
            <!-- Content -->


            <!-- Actions -->
            <div class="flex justify-evenly">

                <v-btn size="large" text="Delete post" append-icon="mdi-delete" :loading="loading"
                    class=" transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-110" color="error"
                    @click=deletePostWithId></v-btn>

                <v-btn size="large" :text="addingPost ? 'Add post' : 'Save post'" append-icon="mdi-content-save"
                    @click="handleAddSave" :loading="loading"
                    class=" transition ease-in-out hover:-translate-y-1 hover:scale-110" color="success"></v-btn>

            </div>
            <!-- Actions -->


        </v-card>

    </v-dialog>
</template>


<script setup lang="ts">
import { ref, computed, watch, onMounted, readonly } from 'vue'

// Theme
import { useTheme } from 'vuetify'
const theme = useTheme();
const darkMode = computed(() => theme.name.value === 'dark');
// Theme


// Open / Close Dialog
import { useDialogsStore } from '../../../store/dialogsStore'

const dialogsStore = useDialogsStore()

const dialogManagePosts = computed(() => dialogsStore.dialogManagePosts.show);

const addingPost = computed(() => dialogsStore.dialogManagePosts.adding);
const postID = computed(() => dialogsStore.dialogManagePosts.id);


watch(dialogManagePosts, (newValue, oldValue) => {
    if (newValue === true) {
        if (!addingPost.value) {
            postContent.value = dialogsStore.dialogManagePosts.content;
        }

    }
})


const closeDialog = () => {
    postContent.value = '';
    dialogsStore.closePostDialog();
}

const loading = ref(false);
// Open / Close Dialog



// User
import { usePiniaStorage } from '../../../store/pinia';
const pinia_store = usePiniaStorage();
const uid = computed(() => pinia_store.userUid ?? null);
// User




// Rich editor
import Editor from '@tinymce/tinymce-vue';
const EditorApiKey = ref('8wml2uclegqkzmfs0pmceobfjpv9b0btdi05rj9lxbdp564k');

const postContent = ref('');
// Rich editor


const handleAddSave = () => {
    if (addingPost.value) {
        addNewPost();
    } else {
        savePost();
    }
}



// Add post
import { createPost, getPosts } from '../../../scripts/ManagePosts'

const addNewPost = async () => {
    loading.value = true;

    const response = await createPost(uid.value, postContent.value);

    if (response) {
        closeDialog();
        await getPosts();
    }

    loading.value = false;
}
// Add post



// Save post
import { editPost } from '../../../scripts/ManagePosts'

const savePost = async () => {
    loading.value = true;

    const response = await editPost(postID.value, uid.value ?? '', postContent.value);

    if (response) {
        closeDialog();
        await getPosts();
    }

    loading.value = false;
}
// Save post



// Delete post
import { deletePost } from '../../../scripts/ManagePosts'

const deletePostWithId = async () => {
    loading.value = true;

    const response = await deletePost(postID.value);

    if (response) {
        closeDialog();
        await getPosts();
    }

    loading.value = false;
}
// Delete post


</script>


<style scoped>
@media (min-width: 1024px) {
    #sample {
        display: flex;
        flex-direction: column;
        place-items: center;
        width: 100%;
    }
}
</style>
