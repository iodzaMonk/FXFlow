export default {
    template: /*html*/`
        <div class="min-h-screen pt-32 px-[5%]">
            <section class="max-w-7xl mx-auto">
                <h1 class="text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Guides
                </h1>
                <p class="text-xl text-gray-400 mb-16 max-w-2xl">
                    Découvrez tous les guides pour
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div id="feature-groups">
                        <div v-for="group in featureGroups"
                             :key="group.id"
                             :id="'group-' + group.id"
                             class="bg-dark-lighter rounded-2xl p-6 border border-white/10 hover:-translate-y-1 transition-all duration-300 mb-8">
                            <div class="flex items-center gap-4 mb-6">
                                <el-icon class="text-2xl text-primary">
                                    <component :is="group.icon" />
                                </el-icon>
                                <h3 class="text-xl font-semibold">{{ group.title }}</h3>
                            </div>
                            <div class="space-y-3 feature-container">
                                <div v-for="feature in group.features"
                                     :key="feature.id"
                                     :class="['p-3 rounded-lg transition-all duration-300 cursor-pointer feature-item',
                                             selectedFeature?.id === feature.id ? 'bg-primary/20' : 'bg-white/5']"
                                     @click="handleFeatureClick(feature, $event)">
                                    {{ feature.name }}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="feature-details" class="bg-dark-lighter rounded-2xl p-6 border border-white/10">
                        <div id="feature-content">
                            <p class="text-gray-400">Sélectionnez une fonctionnalité pour voir les détails</p>
                        </div>
                        <div id="feature-actions" class="mt-4">
                            <!-- Interactive elements will be added here -->
                        </div>
                    </div>
                </div>

                <div id="preview-container" class="relative rounded-2xl overflow-hidden border border-white/10 bg-dark-lighter">
                    <img :src="selectedFeature?.image || 'assets/preview.png'"
                         :alt="selectedFeature?.name"
                         class="w-full">
                    <div class="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-dark to-transparent">
                        <div id="feature-info">
                            <h3 class="text-2xl font-semibold mb-2">{{ selectedFeature?.name || 'Sélectionnez une fonctionnalité' }}</h3>
                            <p class="text-gray-400">{{ selectedFeature?.description || 'Cliquez sur une fonctionnalité pour voir plus de détails.' }}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    `,
    data() {
        return {
            selectedFeature: null,
            featureGroups: [
                {
                    id: 1,
                    title: 'Video Editing',
                    icon: 'VideoPlay',
                    features: [
                        {
                            id: 1,
                            name: 'Timeline Editing',
                            image: 'assets/features/timeline.avif',
                            description: 'Interface intuitive pour éditer vos vidéos avec précision.'
                        },
                        {
                            id: 2,
                            name: 'Transitions',
                            image: 'assets/features/transitions.jpg',
                            description: 'Large collection de transitions fluides et professionnelles.'
                        },
                        {
                            id: 3,
                            name: 'Effects',
                            image: 'assets/features/effects.jpg',
                            description: 'Effets visuels avancés pour améliorer vos vidéos.'
                        }
                    ]
                },
                {
                    id: 2,
                    title: 'Audio Tools',
                    icon: 'Headset',
                    features: [
                        {
                            id: 4,
                            name: 'Audio Mixing',
                            image: 'assets/features/mixing.jpg',
                            description: 'Mixez plusieurs pistes audio avec des contrôles précis.'
                        },
                        {
                            id: 5,
                            name: 'Sound Effects',
                            image: 'assets/features/sound-effects.jpeg',
                            description: 'Bibliothèque d\'effets sonores professionnels.'
                        },
                        {
                            id: 6,
                            name: 'Voice Over',
                            image: 'assets/features/voice-over.jpg',
                            description: 'Enregistrez et éditez des voix off facilement.'
                        }
                    ]
                },
                {
                    id: 3,
                    title: 'Export Options',
                    icon: 'Upload',
                    features: [
                        {
                            id: 7,
                            name: '4K Resolution',
                            image: 'assets/features/4k.png',
                            description: 'Exportez vos vidéos en qualité 4K ultra HD.'
                        },
                        {
                            id: 8,
                            name: 'Multiple Formats',
                            image: 'assets/features/formats.png',
                            description: 'Support de nombreux formats vidéo et codecs.'
                        },
                        {
                            id: 9,
                            name: 'Quick Export',
                            image: 'assets/features/quick-export.png',
                            description: 'Exportation rapide avec des préréglages optimisés.'
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        handleFeatureClick(feature, event) {
            this.selectedFeature = feature;

            // Remove any existing additional content
            $('.additional-content').remove();

            // Update feature details
            const $featureContent = $('#feature-content');
            const $featureActions = $('#feature-actions');

            // Clear previous content
            $featureContent.empty();
            $featureActions.empty();

            // Add new content with animation
            $featureContent.hide().html(`
                <h3 class="text-xl font-semibold mb-4">${feature.name}</h3>
                <div class="additional-content p-3 rounded-lg bg-primary/10">
                    ${feature.description}
                </div>
            `).fadeIn(300);

            // Add interactive elements
            const $button = $(`
                <button class="try-feature-btn w-full mt-4 px-4 py-2 bg-primary/20 rounded-lg
                             hover:bg-primary/30 transition-all duration-300">
                    Essayer cette fonctionnalité
                </button>
            `).appendTo($featureActions);

            $button.on('click', (e) => {
                e.stopPropagation();
                // Add a temporary notification
                const $notification = $(`
                    <div class="notification p-3 bg-primary/20 rounded-lg mt-2"
                         style="display: none;">
                        Fonctionnalité activée !
                    </div>
                `);

                $notification.insertAfter($button).slideDown(300);
                setTimeout(() => {
                    $notification.slideUp(300, function() {
                        $(this).remove();
                    });
                }, 2000);
            });

            // Animate preview container
            const $previewContainer = $('#preview-container');
            $previewContainer.fadeOut(150, () => {
                $previewContainer.find('img').attr('src', feature.image);
                $('#feature-info').html(`
                    <h3 class="text-2xl font-semibold mb-2">${feature.name}</h3>
                    <p class="text-gray-400">${feature.description}</p>
                `);
                $previewContainer.fadeIn(150);
            });
        }
    },
    mounted() {
        $('.feature-item').hover(
            function() {
                $(this).animate({ paddingLeft: '1.5rem' }, 200);
            },
            function() {
                $(this).animate({ paddingLeft: '0.75rem' }, 200);
            }
        );
    },
    beforeUnmount() {
        $('.feature-item').off();
        $('.try-feature-btn').off();
    }
}