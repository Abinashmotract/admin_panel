<template>
  <v-dialog v-model="dialog" max-width="500">
    <v-card>
      <v-card-title class="text-h6">Bet Lock</v-card-title>
      <v-card-text>
        Match: {{ match?.title }}
        <!-- You can add more fields/details here -->
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="closeDialog">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { watch, ref } from 'vue'
const props = defineProps({
  show: Boolean,
  match: Object,
})
const emit = defineEmits(['close'])

const dialog = ref(props.show)

watch(() => props.show, (val) => {
  dialog.value = val
})

const closeDialog = () => {
  emit('close')
}
</script>
