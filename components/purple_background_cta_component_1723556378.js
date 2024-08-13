/* Summary: The section has a blurred radial gradient background and a call-to-action (CTA) content block.
It is centered on the page and includes a gradient-based title, a subtitle, a paragraph of text, and a button with a gradient background.
*/

Vue.component("purple_background_cta_component_1723556378", {
    template: `
    <section id="cta-section-container">
        <div id="section-container" class="max-w-6xl mx-auto px-4 sm:px-6 bg-white">
            <div id="content-container" class="relative px-8 py-12 md:py-20 rounded-[3rem] overflow-hidden">
                <!-- Radial gradient -->
                <div id="radial-gradient" class="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square" aria-hidden="true">
                    <div id="radial-gradient-outer" class="absolute inset-0 translate-z-0 rounded-full blur-[120px] opacity-70" :class="radialGradientPrimaryStyle"></div>
                    <div id="radial-gradient-inner" class="absolute w-1/4 h-1/4 translate-z-0 rounded-full blur-[40px]" :class="radialGradientSecondaryStyle">
                    </div>
                </div>
                <!-- Blurred shape -->
                <div id="blurred-shape" class="absolute bottom-0 translate-y-1/2 left-0 blur-2xl opacity-50 pointer-events-none -z-10" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
                        <defs><linearGradient id="bs5-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%"><stop offset="0%" :stop-color="stopColorPrimaryStyle" /><stop offset="100%" :stop-color="stopColorSecondaryStyle" stop-opacity="0" /></linearGradient></defs>
                        <path fill="url(#bs5-a)" fill-rule="evenodd" d="m0 0 461 369-284 58z" transform="matrix(1 0 0 -1 0 427)" />
                    </svg>
                </div>
                <!-- Content -->
                <div id="content" class="max-w-3xl mx-auto text-center">
                    <div id="content-subtitle" class="flex"><div id="content-subtitle-text" class="flex-1 font-medium bg-clip-text pb-3" :class="[transparentTextStyle, contentSubtitleStyle]">Reliable, Safe, and Fun Walks for Your Canine Companion</div></div>
                    <div class="flex" id="content-title-container"><h2 id="content-title" class="flex-1 h2 bg-clip-text pb-4" :class="[transparentTextStyle, contentCtaTitleStyle]"> Walk This Way: Your Dog's New Best Friend</h2></div>
                    <div class="flex" id="content-body-container"><p id="content-body" class="flex-1 text-lg mb-8" :class="[contentBodyStyle]">Discover the easiest way to keep your furry friend happy and healthy with our professional dog walking service. Our experienced walkers provide personalized care, ensuring your dog gets the exercise and attention they deserve.</p></div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div class="flex-1 bg-purple-900 bg-opacity-30 p-6 rounded-xl shadow-lg border border-purple-500">
                            <p class="text-sm italic text-purple-200 mb-3">"The best dog walking service I've ever used! My pup comes back happy and tired every time. The walkers are professional, punctual, and truly care about our furry friends."</p>
                            <div class="flex items-center">
                                <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Sarah M." class="w-10 h-10 rounded-full mr-3">
                                <p class="text-xs font-semibold text-purple-300">Sarah M. <span class="text-purple-400">| Dog Owner</span></p>
                            </div>
                        </div>
                        <div class="flex-1 bg-purple-900 bg-opacity-30 p-6 rounded-xl shadow-lg border border-purple-500">
                            <p class="text-sm italic text-purple-200 mb-3">"Reliable, professional, and caring. I couldn't ask for better dog walkers! They go above and beyond, sending updates and photos during each walk. My dog's health has improved significantly."</p>
                            <div class="flex items-center">
                                <img src="https://randomuser.me/api/portraits/men/22.jpg" alt="John D." class="w-10 h-10 rounded-full mr-3">
                                <p class="text-xs font-semibold text-purple-300">John D. <span class="text-purple-400">| Pet Enthusiast</span></p>
                            </div>
                        </div>
                    </div>
                    <a id="content-cta-button" href="#0" class="btn transition duration-150 ease-in-out group" :class="[contentCtaButtonPrimaryStyle, contentCtaButtonGradientStyle, contentCtaButtonGradientStyle, contentCtaButtonHoverStyle]">Get Started <span id="content-cta-arrow" class="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" :class="contentCtaArrowStyle">-&gt;</span></a>
                </div>
            </div>
        </div>
    </section>`,
        data() {
            return {
                expanded: false, 
                tab: null,
                radialGradientPrimaryStyle: "bg-purple-500",
                radialGradientSecondaryStyle: "bg-purple-400",
                stopColorPrimaryStyle: "#A855F7",
                stopColorSecondaryStyle: "#6366F1",
                transparentTextStyle: "text-transparent",
                contentSubtitleStyle: "bg-gradient-to-r from-purple-500 to-purple-200",
                contentCtaTitleStyle: "bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60",
                contentBodyStyle: "text-slate-400",
                contentCtaButtonPrimaryStyle:"text-slate-900",
                contentCtaButtonGradientStyle: "bg-gradient-to-r from-white/80 via-white to-white/80",
                contentCtaButtonHoverStyle: "hover:bg-white",
                contentCtaArrowStyle: "text-purple-500"
            };
        },
    });
                    