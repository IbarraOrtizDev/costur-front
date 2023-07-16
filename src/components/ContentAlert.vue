<template>
  <div class="q-pa-md q-gutter-sm">
    <q-dialog v-model="showToolbar" persistent>
      <q-card class="q-pa-md" :style="{ maxWidth: width, width: '100%' }">
        <q-toolbar>
          <q-avatar :icon="icon" />

          <q-toolbar-title>{{ title }}</q-toolbar-title>

          <q-btn flat round dense icon="close" v-close-popup />
        </q-toolbar>

        <q-card-section>
          <slot></slot>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { ref, defineEmits, watch } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "Window title",
  },
  icon: {
    type: String,
    default: "app_badging",
  },
  toolbar: {
    type: Boolean,
    default: false,
  },
  width: {
    type: String,
    default: "500px",
  },
});

const showToolbar = ref(false);

watch(
  () => props.toolbar,
  (value) => {
    showToolbar.value = value;
  }
);

watch(
  () => showToolbar.value,
  (value) => {
    emits("update:toolbar", value);
  }
);

const emits = defineEmits(["update:toolbar"]);

props;
</script>
