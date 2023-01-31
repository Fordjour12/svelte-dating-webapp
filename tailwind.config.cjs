const config = {
	darkMode: 'class',
	content: [
		require('path').join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}'),
		'./src/**/*.{html,js,svelte,ts}'
	],

	theme: {
		extend: {}
	},

	plugins: [...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()]
};

module.exports = config;
