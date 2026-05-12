export const githubInfoLoader = async ({ params }) => {
  const response = await fetch(
    `https://api.github.com/users/${params.username}`,
  );

  const data = await response.json();

  return data; // but it can also return a promise i.e. response.json() directly
};
