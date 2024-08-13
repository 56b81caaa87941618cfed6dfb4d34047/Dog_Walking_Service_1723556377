/* Summary: Describes a footer section of a website. The footer contains the following sections, each of which is a column:
1. The first column includes the company logo, copyright notice, and social media links.
2. The second column lists the products and services offered by the company.
3. The third column provides information about the company, including a blog, careers, and financial statements.
4. The fourth column contains resources for the community, terms of service, and a vulnerability reporting page.
5. The fifth column covers legal information such as the refund policy, terms and conditions, privacy policy, and brand kit.
*/

Vue.component("dark_footer_component_1723556378", {
    template: `
<footer id="footer-section-container" style="min-height: 550px" >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 bg-white">
        <div class="py-8 md:py-12">
            <h2 class="text-2xl font-bold mb-6 text-center">Schedule a Dog Walk</h2>
            <form class="max-w-lg mx-auto">
                <div class="mb-4">
                    <label for="owner-name" class="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                    <input type="text" id="owner-name" name="owner-name" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required>
                </div>
                <div class="mb-4">
                    <label for="dog-name" class="block text-sm font-medium text-gray-700 mb-2">Dog's Name</label>
                    <input type="text" id="dog-name" name="dog-name" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required>
                </div>
                <div class="mb-4">
                    <label for="walk-date" class="block text-sm font-medium text-gray-700 mb-2">Walk Date</label>
                    <input type="date" id="walk-date" name="walk-date" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required>
                </div>
                <div class="mb-4">
                    <label for="walk-time" class="block text-sm font-medium text-gray-700 mb-2">Walk Time</label>
                    <input type="time" id="walk-time" name="walk-time" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required>
                </div>
                <div class="mb-4">
                    <label for="walk-duration" class="block text-sm font-medium text-gray-700 mb-2">Walk Duration</label>
                    <select id="walk-duration" name="walk-duration" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required>
                        <option value="30">30 minutes</option>
                        <option value="60">60 minutes</option>
                        <option value="90">90 minutes</option>
                    </select>
                </div>
                <div class="mt-6">
                    <button type="submit" class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Schedule Walk</button>
                </div>
            </form>
        </div>
    </div>
</footer>`,
    data() {
        return {
            expanded: false,
            tab: null,
            textColorPrimary: 'text-slate-50',
            textColorSecondary: 'text-slate-400',
            textColorTertiary: 'text-slate-500',
            hoverTextColorPrimary: 'hover:text-purple-400',
            hoverTextColorSecondary: 'hover:text-slate-200',
            socialColorPrimary: 'text-purple-500',
            hoverSocialColorPrimary: 'hover:text-purple-400'
        };
    },
});