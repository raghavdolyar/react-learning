export const githubInfoLoader = async () => {
	const response = await fetch(`https://api.github.com/users/raghavdolyar`);
	return response.json(); // returns a promise
};
