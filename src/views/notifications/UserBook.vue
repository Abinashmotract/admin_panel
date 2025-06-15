<template>
  <v-dialog v-model="show" width="500">
    <v-card>
      <v-card-title>Bet Lock for {{ match.title }}</v-card-title>
      <v-card-text>
        <!-- your content here -->
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="primary" @click="$emit('close')">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
defineProps({
  show: Boolean,
  match: Object,
})

defineEmits(['close'])
</script>
