import { publish } from 'gh-pages';

publish(
	'.svelte-kit/build', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/Neil-Rayu/wordle.git', // Update to point to your repository
		user: {
			name: 'Neil Rayu', // update to use your name
			email: 'neilrayu@gmail.com' // Update to use your email
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);
