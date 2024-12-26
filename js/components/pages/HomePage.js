export default {
    template: /*html*/ `
        <div class="min-h-screen pt-32 px-[5%]">
            <section class="flex flex-col items-center text-center">
                <h1 class="text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Un guide de montage vidéo pour tous
                </h1>
                <p class="text-xl text-gray-400 max-w-2xl mb-8">
                    Logiciel de montage vidéo qui peut tout faire.
                </p>
                <div class="flex gap-4 mb-12">
                    <button @click="handleDownload"
                            class="px-8 py-4 rounded-lg font-medium bg-gradient-to-r from-primary to-secondary
                                   hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5
                                   transition-all duration-300">
                        Télécharger l'application
                    </button>
                    <button @click="handleWatchDemo"
                            class="px-8 py-4 rounded-lg font-medium border border-white/10
                                   hover:bg-white/5 transition-all duration-300">
                        Voir la démo
                    </button>
                </div>
                <div class=" w-[50%] rounded-2xl overflow-hidden border border-white/10
                           bg-dark-lighter shadow-2xl">
                    <img src="assets/ae.png" alt="Editor Interface" class="w-full">
                </div>
            </section>
        </div>
    `
}