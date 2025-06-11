<template>
    <div>
        <h5 class="fw-bold mb-3">BANNER SETTING</h5>
        <CRow>
            <CCol v-for="(item, index) in banners" :key="index" lg="3" md="6" sm="12" class="mb-4">
                <div class="fw-bold mb-1">
                    {{ item.label }}
                    <span class="text-danger"> (Upload png image only)</span>
                </div>
                <div class="mb-2">
                    <img :src="item.preview || defaultPreview" alt="Preview" class="img-fluid border"
                        style="height: 100px; object-fit: contain;" />
                </div>
                <CFormInput type="file" accept="image/png" @change="onFileChange($event, index)" class="mb-2" />
                <CButton color="dark" size="sm" @click="uploadImage(index)">Upload</CButton>
            </CCol>
        </CRow>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const defaultPreview = 'https://via.placeholder.com/150x100?text=Preview'

const banners = ref([
    { label: 'Banner 1', file: null, preview: '' },
    { label: 'Banner 2', file: null, preview: '' },
    { label: 'Banner 3', file: null, preview: '' },
    { label: 'Banner 4', file: null, preview: '' },
    { label: 'Cricket', file: null, preview: '' },
    { label: 'Football', file: null, preview: '' },
    { label: 'Horse Racing', file: null, preview: '' },
    { label: 'Live Casino', file: null, preview: '' },
    { label: 'Virtual Cricket', file: null, preview: '' },
    { label: 'Majos7', file: null, preview: '' },
    { label: 'Horse Racing Small', file: null, preview: '' },
    { label: 'Mini Sweeper', file: null, preview: '' },
])

const onFileChange = (event, index) => {
    const file = event.target.files[0]
    if (file && file.type === 'image/png') {
        banners.value[index].file = file
        banners.value[index].preview = URL.createObjectURL(file)
    } else {
        alert('Only PNG files are allowed')
    }
}

const uploadImage = (index) => {
    const banner = banners.value[index]
    if (banner.file) {
        console.log(`Uploading: ${banner.label}`, banner.file)
        // Add actual upload logic here
    } else {
        alert('Please select a PNG file before uploading.')
    }
}
</script>

<style scoped>
.fw-bold {
    font-weight: 600;
}
</style>
