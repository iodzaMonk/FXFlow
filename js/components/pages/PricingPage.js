export default {
    template: /*html*/`
        <div class="min-h-screen pt-32 px-[5%]">
            <section class="max-w-7xl mx-auto text-center">
                <h1 class="text-5xl font-bold mb-6">Choisissez Votre Forfait</h1>
                <p class="text-xl text-gray-400 mb-12">Sélectionnez le forfait parfait pour vos besoins de montage</p>

                <div class="flex items-center justify-center gap-4 mb-16">
                    <span :class="!isAnnual ? 'text-white' : 'text-gray-400'">Mensuel</span>
                    <el-switch v-model="isAnnual" />
                    <span :class="isAnnual ? 'text-white' : 'text-gray-400'">Annuel</span>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div v-for="plan in plans"
                         :key="plan.id"
                         class="bg-dark-lighter rounded-2xl p-8 border border-white/10
                                hover:-translate-y-2 transition-all duration-300">
                        <div class="mb-8">
                            <h3 class="text-2xl font-semibold mb-4">{{ plan.name }}</h3>
                            <div class="flex items-start justify-center gap-1">
                                <span class="text-lg mt-2">€</span>
                                <span class="text-6xl font-bold text-primary">
                                    {{ isAnnual ? plan.annualPrice : plan.monthlyPrice }}
                                </span>
                                <span class="text-gray-400 mt-2">/{{ isAnnual ? 'an' : 'mois' }}</span>
                            </div>
                        </div>

                        <ul class="space-y-4 mb-8">
                            <li v-for="feature in plan.features"
                                :key="feature"
                                class="flex items-center gap-2 text-gray-300">
                                <el-icon class="text-primary"><Check /></el-icon>
                                {{ feature }}
                            </li>
                        </ul>

                        <button class="w-full py-4 rounded-lg font-medium transition-all duration-300
                                     border border-primary text-primary hover:bg-primary hover:text-white">
                            Commencer
                        </button>
                    </div>
                </div>
            </section>
        </div>
    `,
    data() {
        return {
            isAnnual: false,
            plans: [
                {
                    id: 1,
                    name: 'Noob',
                    monthlyPrice: 29,
                    annualPrice: 290,
                    features: [
                        'Apprends à utiliser le logiciel',
                        'Pack de 10 guides',
                        'Accès à la communauté',
                        'Accès à la documentation'
                    ]
                },
                {
                    id: 2,
                    name: 'Pro',
                    monthlyPrice: 49,
                    annualPrice: 490,
                    features: [
                        'Accès à tous les guides',
                        'Accès à la communauté',
                        'SFX et musiques Pack',
                        'Tous les plugins',
                        'Voice Over Pack',
                    ]
                },
                {
                    id: 3,
                    name: 'God',
                    monthlyPrice: 99,
                    annualPrice: 990,
                    features: [
                        'Accès à tous les guides',
                        'Accès à la communauté',
                        'SFX et musiques Pack',
                        'Tous les plugins',
                        'Voice Over Pack',
                        'Aide personnalisée',
                    ]
                }
            ]
        }
    }
}