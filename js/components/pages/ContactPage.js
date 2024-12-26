export default {
    template: /*html*/`
        <div class="flex flex-col min-h-screen">
            <div class="flex-grow pt-32 px-[5%]">
                <section class="max-w-3xl mx-auto mb-32">
                    <h1 class="text-5xl font-bold mb-6">Demander un montage</h1>
                    <p class="text-xl text-gray-400 mb-12">Parlez-nous de votre projet et nous vous aiderons à donner vie à votre vision</p>

                    <form class="space-y-8">
                        <!-- Informations de base -->
                        <div class="space-y-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-400 mb-2">Nom</label>
                                <input v-model="form.name"
                                       type="text"
                                       class="w-full px-4 py-3 rounded-lg bg-dark-lighter border border-white/10
                                              focus:border-primary focus:ring-1 focus:ring-primary outline-none
                                              transition-all duration-300"
                                       required>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input v-model="form.email"
                                       type="email"
                                       class="w-full px-4 py-3 rounded-lg bg-dark-lighter border border-white/10
                                              focus:border-primary focus:ring-1 focus:ring-primary outline-none
                                              transition-all duration-300"
                                       required>
                            </div>
                        </div>

                        <!-- Détails du projet -->
                        <div class="space-y-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-400 mb-2">Type de projet</label>
                                <select v-model="form.projectType"
                                        class="w-full px-4 py-3 rounded-lg bg-dark-lighter border border-white/10
                                               focus:border-primary focus:ring-1 focus:ring-primary outline-none
                                               transition-all duration-300 text-white"
                                        style="color-scheme: dark;">
                                    <option value="gaming" class="bg-dark text-white">Montage Gaming</option>
                                    <option value="music" class="bg-dark text-white">Clip Musical</option>
                                    <option value="anime" class="bg-dark text-white">Montage Anime</option>
                                    <option value="other" class="bg-dark text-white">Autre</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-400 mb-2">Description du projet</label>
                                <textarea v-model="form.description"
                                        rows="4"
                                        style="resize: none;"
                                        class="w-full px-4 py-3 rounded-lg bg-dark-lighter border border-white/10
                                               focus:border-primary focus:ring-1 focus:ring-primary outline-none
                                               transition-all duration-300"
                                        required></textarea>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-400 mb-2">Liens de référence</label>
                                <input v-model="form.references"
                                       type="text"
                                       placeholder="Liens YouTube, Drive ou autres vidéos"
                                       class="w-full px-4 py-3 rounded-lg bg-dark-lighter border border-white/10
                                              focus:border-primary focus:ring-1 focus:ring-primary outline-none
                                              transition-all duration-300">
                            </div>
                        </div>

                        <!-- Bouton d'envoi -->
                        <button type="submit"
                                class="w-full py-4 rounded-lg font-medium bg-gradient-to-r from-primary to-secondary
                                       hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5
                                       transition-all duration-300">
                            Envoyer la demande
                        </button>
                    </form>
                </section>
            </div>
        </div>
    `,
    data() {
        return {
            form: {
                name: '',
                email: '',
                projectType: 'gaming',
                description: '',
                references: ''
            }
        }
    }
}