export default {
    props: {
        currentRoute: {
            type: String,
            default: '#home'
        }
    },
    template: /*html*/ `
        <nav class="fixed top-0 left-0 w-full px-[5%] py-5 bg-dark/95 backdrop-blur-lg z-50 border-b border-white/5">
            <div class="flex justify-between items-center">
                <div class="flex items-center gap-12">
                    <div class="flex items-center gap-2 text-2xl font-bold cursor-pointer bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                         @click="navigateTo('#home')">
                        <img src="assets/logo.png" alt="iodza" class="w-6">
                        FXFlow
                    </div>
                    <ul class="flex gap-8">
                        <li v-for="item in menuItems" :key="item.id">
                            <a :href="item.href"
                               @click.prevent="navigateTo(item.href)"
                               :class="[
                                   'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300',
                                   currentRoute === item.href
                                       ? 'text-primary bg-primary/10'
                                       : 'text-gray-400 hover:text-white hover:bg-white/5'
                               ]">
                                {{ item.text }}
                            </a>
                        </li>
                    </ul>
                </div>
                <button @click="navigateTo('#contact')"
                        class="px-5 py-2 rounded-lg text-sm font-medium bg-gradient-to-r
                               from-primary to-secondary hover:shadow-lg hover:shadow-primary/25
                               hover:-translate-y-0.5 transition-all duration-300">
                    Request Edit
                </button>
            </div>
        </nav>
    `,
    data() {
        return {
            menuItems: [
                { id: 1, href: '#home', text: 'Accueil' },
                { id: 2, href: '#features', text: 'Fonctionnalités' },
                { id: 3, href: '#pricing', text: 'Tarifs' },
                { id: 5, href: '#resources', text: 'Ressources' },
                { id: 6, href: '#community', text: 'Communauté' }
            ]
        }
    },
    methods: {
        navigateTo(route) {
            this.$emit('route-change', route)
        }
    }
}