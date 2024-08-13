/* Summary: HTML file that describes a list of features.
It contains a grid layout with 10 feature sections, each with an icon, a title, and a description. 
The feature sections are organised in a grid of two rows, each with five columns.
*/

Vue.component("purple_feature_grid_component_1723556378", {
    template: `
    <!-- Features list -->
    <div id="features-grid" style="min-height: 230px" class="grid md:grid-cols-5 gap-4 bg-gray-900 p-8 rounded-lg shadow-lg">
        <!-- Feature 1 -->
        <div id="feature-1" class="bg-gray-800 p-6 rounded-xl shadow-md border-2 border-purple-500">
            <div id="feature-1-header" class="flex items-center space-x-2 mb-3">
                <svg id="feature-1-icon" class="shrink-0 w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <div class="flex" id="feature-1-title-container"><h4 id="feature-1-title" class="flex-1 font-bold text-purple-300">24/7 Availability</h4></div>
            </div>
            <div class="flex" id="feature-1-description-container"><p id="feature-1-description" class="flex-1 text-sm text-purple-200">Book a walk anytime, day or night, to fit your busy schedule.</p></div>
        </div>
        <!-- Feature 2 -->
        <div id="feature-2" class="bg-gray-800 p-6 rounded-xl shadow-md border-2 border-purple-500">
            <div id="feature-2-header" class="flex items-center space-x-2 mb-3">
                <svg id="feature-2-icon" class="shrink-0 w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                <div class="flex" id="feature-2-title-container"><h4 id="feature-2-title" class="flex-1 font-bold text-purple-300">Vetted Walkers</h4></div>
            </div>
            <div class="flex" id="feature-2-description-container"><p id="feature-2-description" class="flex-1 text-sm text-purple-200">All our walkers undergo thorough background checks and training.</p></div>
        </div>
        <!-- Feature 3 -->
        <div id="feature-3" class="bg-gray-800 p-6 rounded-xl shadow-md border-2 border-purple-500">
            <div id="feature-3-header" class="flex items-center space-x-2 mb-3">
                <svg id="feature-3-icon" class="shrink-0 w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <div class="flex" id="feature-3-title-container"><h4 id="feature-3-title" class="flex-1 font-bold text-purple-300">GPS Tracking</h4></div>
            </div>
            <div class="flex" id="feature-3-description-container"><p id="feature-3-description" class="flex-1 text-sm text-purple-200">Follow your dog's walk in real-time with our advanced GPS tracking.</p></div>
        </div>
        <!-- Feature 4 -->
        <div id="feature-4" class="bg-gray-800 p-6 rounded-xl shadow-md border-2 border-purple-500">
            <div id="feature-4-header" class="flex items-center space-x-2 mb-3">
                <svg id="feature-4-icon" class="shrink-0 w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
                <div class="flex" id="feature-4-title-container"><h4 id="feature-4-title" class="flex-1 font-bold text-purple-300">Secure Payments</h4></div>
            </div>
            <div class="flex" id="feature-4-description-container"><p id="feature-4-description" class="flex-1 text-sm text-purple-200">Enjoy hassle-free, automatic payments after each walk.</p></div>
        </div>
        <!-- Feature 5 -->
        <div id="feature-5" class="bg-gray-800 p-6 rounded-xl shadow-md border-2 border-purple-500">
            <div id="feature-5-header" class="flex items-center space-x-2 mb-3">
                <svg id="feature-5-icon" class="shrink-0 w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
                <div class="flex" id="feature-5-title-container"><h4 id="feature-5-title" class="flex-1 font-bold text-purple-300">Detailed Reports</h4></div>
            </div>
            <div class="flex" id="feature-5-description-container"><p id="feature-5-description" class="flex-1 text-sm text-purple-200">Receive comprehensive post-walk reports with photos and behavior notes.</p></div>
        </div>
        <!-- Feature 6 -->
        <div id="feature-6" class="bg-gray-800 p-6 rounded-xl shadow-md border-2 border-purple-500">
            <div id="feature-6-header" class="flex items-center space-x-2 mb-3">
                <svg id="feature-6-icon" class="shrink-0 w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <div class="flex" id="feature-6-title-container"><h4 id="feature-6-title" class="flex-1 font-bold text-purple-300">Emergency Support</h4></div>
            </div>
            <div class="flex" id="feature-6-description-container"><p id="feature-6-description" class="flex-1 text-sm text-purple-200">24/7 emergency support for peace of mind during walks.</p></div>
        </div>
        <!-- Feature 7 -->
        <div id="feature-7" class="bg-gray-800 p-6 rounded-xl shadow-md border-2 border-purple-500">
            <div id="feature-7-header" class="flex items-center space-x-2 mb-3">
                <svg id="feature-7-icon" class="shrink-0 w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
                <div class="flex" id="feature-7-title-container"><h4 id="feature-7-title" class="flex-1 font-bold text-purple-300">In-app Chat</h4></div>
            </div>
            <div class="flex" id="feature-7-description-container"><p id="feature-7-description" class="flex-1 text-sm text-purple-200">Communicate directly with your walker through our secure in-app chat.</p></div>
        </div>
        <!-- Feature 8 -->
        <div id="feature-8" class="bg-gray-800 p-6 rounded-xl shadow-md border-2 border-purple-500">
            <div id="feature-8-header" class="flex items-center space-x-2 mb-3">
                <svg id="feature-8-icon" class="shrink-0 w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
                <div class="flex" id="feature-8-title-container"><h4 id="feature-8-title" class="flex-1 font-bold text-purple-300">Customized Walks</h4></div>
            </div>
            <div class="flex" id="feature-8-description-container"><p id="feature-8-description" class="flex-1 text-sm text-purple-200">Tailor each walk to your dog's specific needs and preferences.</p></div>
        </div>
        <!-- Feature 9 -->
        <div id="feature-9" class="bg-gray-800 p-6 rounded-xl shadow-md border-2 border-purple-500">
            <div id="feature-9-header" class="flex items-center space-x-2 mb-3">
                <svg id="feature-9-icon" class="shrink-0 w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <div class="flex" id="feature-9-title-container"><h4 id="feature-9-title" class="flex-1 font-bold text-purple-300">Flexible Pricing</h4></div>
            </div>
            <div class="flex" id="feature-9-description-container"><p id="feature-9-description" class="flex-1 text-sm text-purple-200">Choose from various pricing options to suit your budget and needs.</p></div>
        </div>
        <!-- Feature 10 -->
        <div id="feature-10" class="bg-gray-800 p-6 rounded-xl shadow-md border-2 border-purple-500">
            <div id="feature-10-header" class="flex items-center space-x-2 mb-3">
                <svg id="feature-10-icon" class="shrink-0 w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                <div class="flex" id="feature-10-title-container"><h4 id="feature-10-title" class="flex-1 font-bold text-purple-300">Loyalty Program</h4></div>
            </div>