import VideoPlayer from '../VideoPlayer.js'

export default {
    components: {
        VideoPlayer
    },
    template: /*html*/`
        <div class="min-h-screen pt-32 px-[5%]">
            <section class="max-w-7xl mx-auto">
                <h1 class="text-5xl font-bold mb-6">Rejoignez Notre Communauté</h1>
                <p class="text-xl text-gray-400 mb-16">Connectez-vous avec d'autres monteurs et partagez votre travail</p>

                <!-- Community Stats -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    <div v-for="stat in stats"
                         :key="stat.id"
                         class="bg-dark-lighter rounded-2xl p-8 border border-white/10 text-center">
                        <h3 class="text-4xl font-bold bg-gradient-to-r from-primary to-secondary
                                 bg-clip-text text-transparent mb-2">
                            {{ stat.value }}
                        </h3>
                        <p class="text-gray-400">{{ stat.label }}</p>
                    </div>
                </div>

                <!-- Featured Works -->
                <div class="mb-24">
                    <h2 class="text-3xl font-bold mb-8">Créations Communautaires</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div v-for="work in featuredWorks"
                             :key="work.id"
                             class="group relative rounded-2xl overflow-hidden aspect-video cursor-pointer border border-white/10 hover:border-primary/50 transition-all duration-300"
                             @click="openVideo(work)">
                            <img :src="work.thumbnail"
                                 :alt="work.title"
                                 class="w-full h-full object-cover">
                            <div class="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent
                                      opacity-0 group-hover:opacity-100 transition-all duration-300
                                      flex flex-col justify-end p-6">
                                <div class="absolute inset-0 flex items-center justify-center opacity-0
                                          group-hover:opacity-100 transition-all duration-300">
                                    <div class="w-16 h-16 flex items-center
                                              justify-center">
                                    </div>
                                </div>
                                <h3 class="text-xl font-semibold mb-2">{{ work.title }}</h3>
                                <p class="text-gray-300">by {{ work.author }}</p>
                                <div class="flex gap-2 mt-4">
                                    <span v-for="tag in work.tags"
                                          :key="tag"
                                          class="px-3 py-1 rounded-full bg-white/10 text-sm">
                                        {{ tag }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Community Forums -->
                <div>
                    <h2 class="text-3xl font-bold mb-8">Forums de Discussion</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div v-for="forum in forums"
                             :key="forum.id"
                             class="bg-dark-lighter rounded-2xl p-6 border border-white/10
                                    hover:-translate-y-1 transition-all duration-300">
                            <div class="flex items-start justify-between">
                                <div>
                                    <h3 class="text-xl font-semibold mb-2">{{ forum.name }}</h3>
                                    <p class="text-gray-400 mb-4">{{ forum.description }}</p>
                                    <div class="flex gap-4">
                                        <span class="text-sm text-gray-400">
                                            <el-icon class="mr-1"><ChatDotRound /></el-icon>
                                            {{ forum.threadCount }} threads
                                        </span>
                                        <span class="text-sm text-gray-400">
                                            <el-icon class="mr-1"><User /></el-icon>
                                            {{ forum.activeUsers }} active users
                                        </span>
                                    </div>
                                </div>
                                <el-button type="primary" class="!bg-primary/10 !border-none">
                                    Rejoindre la discussion
                                </el-button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Video Player Dialog -->
            <video-player
                :video="selectedVideo"
                :is-open="isVideoOpen"
                @update:is-open="isVideoOpen = $event"
            />
        </div>
    `,
    data() {
        return {
            stats: [
                { id: 1, value: '7M+', label: 'Membres' },
                { id: 2, value: '190+', label: 'Pays' },
                { id: 3, value: '4.9', label: 'Note Moyenne' }
            ],
            featuredWorks: [
                {
                    id: 1,
                    title: 'FIVE NIGHTS AT FREDDYS | Montage Valorant 4K',
                    author: 'cvtmvn',
                    thumbnail: 'assets/thumb1.png',
                    url: './assets/videos/Valorant edit.mp4',
                    description: 'Êtes-vous prêts pour cinq nuits chez Freddy ?🐻',
                    tags: ['Valorant', 'Musique']
                },
                {
                    id: 2,
                    title: 'TIMELESS ft. Vugeto - abyss',
                    author: '7abyss',
                    thumbnail: 'assets/thumb2.png',
                    url: './assets/videos/TIMELESS ft. Vugeto - abyss.mp4',
                    description: 'TIMELESS ft. Vugeto - abyss est un montage de haute qualité qui capture l\'essence de la chanson.',
                    tags: ['Musique', 'Anime']
                },
                {
                    id: 3,
                    title: 'STEINS;GATE | Séquence d\'ouverture',
                    author: 'virakie',
                    thumbnail: 'assets/thumb3.png',
                    url: './assets/videos/STEINSGATE.mp4',
                    description: 'STEINS;GATE est un anime sur le voyage dans le temps qui suit l\'histoire d\'un groupe d\'amis qui créent accidentellement une machine permettant de voyager dans le temps. La séquence d\'ouverture est un montage de haute qualité qui capture l\'essence de la série.',
                    tags: ['Anime', 'Musique']
                }
            ],
            forums: [
                {
                    id: 1,
                    name: 'Astuces & Techniques',
                    description: 'Partagez et apprenez des techniques de montage',
                    threadCount: 156,
                    activeUsers: `1.2k`
                },
                {
                    id: 2,
                    name: 'Galerie de Modèles',
                    description: 'Partagez vos modèles personnalisés et recevez des retours',
                    threadCount: 89,
                    activeUsers: `856`
                },
                {
                    id: 3,
                    name: 'Espace Collaboration',
                    description: 'Trouvez des partenaires pour votre prochain projet',
                    threadCount: 234,
                    activeUsers: `2.1k`
                },
                {
                    id: 4,
                    name: 'Support Technique',
                    description: 'Obtenez de l\'aide pour vos problèmes techniques',
                    threadCount: 567,
                    activeUsers: `3.4k`
                }
            ],
            isVideoOpen: false,
            selectedVideo: null
        }
    },
    methods: {
        openVideo(work) {
            this.selectedVideo = work
            this.isVideoOpen = true
        }
    }
}