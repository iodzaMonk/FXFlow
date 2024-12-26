import NavBar from './components/NavBar.js'
import HomePage from './components/pages/HomePage.js'
import FeaturesPage from './components/pages/FeaturesPage.js'
import PricingPage from './components/pages/PricingPage.js'
import ResourcesPage from './components/pages/ResourcesPage.js'
import CommunityPage from './components/pages/CommunityPage.js'
import VideoPlayer from './components/VideoPlayer.js'
import ContactPage from './components/pages/ContactPage.js'

const app = Vue.createApp({
    data() {
        return {
            currentRoute: window.location.hash || '#home'
        }
    },
    template: /*html*/`
        <div id="app">
            <nav-bar :current-route="currentRoute" @route-change="handleRouteChange"></nav-bar>
            <component :is="currentPageComponent"></component>

            <div class="fixed -top-[200px] -right-[200px] w-[400px] h-[400px] rounded-full bg-primary/20 blur-[100px] pointer-events-none"></div>
            <div class="fixed -bottom-[200px] -left-[200px] w-[400px] h-[400px] rounded-full bg-secondary/20 blur-[100px] pointer-events-none"></div>
            <div class="fixed inset-0 bg-[radial-gradient(circle_at_center,_#ffffff_1px,_transparent_1px)] bg-[size:50px_50px] opacity-5 pointer-events-none"></div>
        </div>
    `,
    computed: {
        currentPageComponent() {
            const routes = {
                '#home': HomePage,
                '#features': FeaturesPage,
                '#pricing': PricingPage,
                '#resources': ResourcesPage,
                '#community': CommunityPage,
                '#contact': ContactPage
            }
            return routes[this.currentRoute] || HomePage
        }
    },
    methods: {
        handleRouteChange(route) {
            this.currentRoute = route
            window.location.hash = route
        }
    }
})

// Import Element Plus icons
const { VideoPlay, User, ChatDotRound, Check, Warning } = ElementPlusIconsVue

// Register Element Plus icons
app.component('VideoPlay', VideoPlay)
app.component('User', User)
app.component('ChatDotRound', ChatDotRound)
app.component('Check', Check)
app.component('Warning', Warning)

// Use Element Plus
app.use(ElementPlus)

// Register components
app.component('nav-bar', NavBar)
app.component('video-player', VideoPlayer)
app.component('home-page', HomePage)
app.component('features-page', FeaturesPage)
app.component('pricing-page', PricingPage)
app.component('resources-page', ResourcesPage)
app.component('community-page', CommunityPage)
app.component('contact-page', ContactPage)

app.mount('#app')