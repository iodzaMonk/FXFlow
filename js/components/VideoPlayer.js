export default {
    props: {
        video: {
            type: Object,
            required: true,
            default: () => ({})
        },
        isOpen: {
            type: Boolean,
            default: false
        }
    },
    template: /*html*/ `
        <el-dialog
            v-if="video"
            v-model="dialogVisible"
            :title="video.title"
            width="80%"
            class="video-dialog !bg-dark-lighter !max-w-5xl"
            destroy-on-close
            @closed="handleClose"
        >
            <div class="relative aspect-video bg-dark rounded-lg overflow-hidden max-h-[70vh]">
                <video
                    ref="videoPlayer"
                    class="w-full h-full object-contain"
                    :src="video.url"
                    :poster="video.thumbnail"
                    controls
                    @ended="handleVideoEnd"
                    @error="handleVideoError"
                >
                    Votre navigateur ne prend pas en charge la balise vidéo.
                </video>

                <!-- Custom Controls -->
                <div v-if="!isPlaying && !hasError"
                     class="absolute inset-0 flex items-center justify-center bg-dark/50 cursor-pointer"
                     @click="playVideo">
                    <div class="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center
                              backdrop-blur-sm transition-transform hover:scale-110">
                        <el-icon class="text-3xl text-white"><VideoPlay /></el-icon>
                    </div>
                </div>

                <!-- Error Message -->
                <div v-if="hasError" class="absolute inset-0 flex items-center justify-center bg-dark/50">
                    <div class="text-center text-red-500">
                        <el-icon class="text-4xl mb-2"><Warning /></el-icon>
                        <p>Échec du chargement de la vidéo</p>
                    </div>
                </div>
            </div>

            <!-- Video Info -->
            <div class="mt-4" v-if="video">
                <h3 class="text-xl font-semibold mb-2 text-white">{{ video.title }}</h3>
                <p class="text-gray-400 text-sm">{{ video.description }}</p>
                <div class="flex gap-2 mt-4">
                    <span v-for="tag in video.tags"
                          :key="tag"
                          class="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                        {{ tag }}
                    </span>
                </div>
            </div>

            <template #header>
                <div class="text-white">{{ video.title }}</div>
            </template>
        </el-dialog>
    `,
    data() {
        return {
            isPlaying: false,
            hasError: false,
            dialogVisible: false
        }
    },
    watch: {
        isOpen: {
            immediate: true,
            handler(newVal) {
                this.dialogVisible = newVal;
            }
        },
        dialogVisible(newVal) {
            if (newVal !== this.isOpen) {
                this.$emit('update:is-open', newVal);
            }
        }
    },
    methods: {
        playVideo() {
            const video = this.$refs.videoPlayer
            if (video) {
                video.play().catch(error => {
                    console.error('Error playing video:', error)
                    this.hasError = true
                })
                this.isPlaying = true
            }
        },
        handleVideoEnd() {
            this.isPlaying = false
        },
        handleVideoError(event) {
            console.error('Erreur vidéo:', event)
            console.error('Source vidéo:', this.video.url)
            this.hasError = true
            this.isPlaying = false
        },
        handleClose() {
            const video = this.$refs.videoPlayer
            if (video) {
                video.pause()
                video.currentTime = 0
            }
            this.isPlaying = false
            this.hasError = false
        }
    }
}