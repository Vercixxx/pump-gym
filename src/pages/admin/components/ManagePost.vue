<template>
    <v-dialog persistent v-model="dialogManagePosts" transition="dialog-top-transition">

        <v-card class="pa-4" :class="darkMode ? 'bg-slate-800' : 'bg-slate-200'">


            <!-- Header -->
            <v-row>
                <v-col cols="2"></v-col>
                <v-col cols="8" align="center">
                    <span class="text-3xl font-weight-black">
                        {{addingPost ? 'Add New Post' : 'Edit Post'}}
                    </span>
                </v-col>
                <v-col cols="2" align="end">
                    <v-btn icon="mdi-close" variant="plain" class="text-xl" @click="closeDialog"></v-btn>
                </v-col>
            </v-row>
            <!-- Header -->


            <!-- Content -->
            <div>
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
                }" v-model="postContent" :disabled="loading" />
            </div>
            <!-- Content -->


            <!-- Actions -->
            <div>
                <v-btn block size="large" text="Save" append-icon="mdi-content-save" @click="savePost"
                    :loading="loading" class="mt-15" color="success"></v-btn>
            </div>
            <!-- Actions -->


        </v-card>

    </v-dialog>
</template>


<script setup lang="ts">
import { ref, computed, watch } from 'vue'

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




// Rich editor
import Editor from '@tinymce/tinymce-vue';
const EditorApiKey = ref('8wml2uclegqkzmfs0pmceobfjpv9b0btdi05rj9lxbdp564k');

const newPostTitle = ref('');
const postContent = ref('');
// Rich editor



// Add post
import { usePiniaStorage } from '../../../store/pinia';
const pinia_store = usePiniaStorage();
const uid = computed(() => pinia_store.userUid ?? null);

import { createPost } from '../../../scripts/ManagePosts'

const addNewPost = async () => {
    loading.value = true;

    const response = await createPost(uid.value, newPostTitle.value, postContent.value);

    if (response) {
        closeDialog();
    }

    loading.value = false;
}

// Add post



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
