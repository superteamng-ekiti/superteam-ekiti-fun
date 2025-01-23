export const fetchRepositories = async (accessToken: string) => {
  const response = await fetch('https://api.github.com/user/repos', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch repositories');
  }
  return await response.json();
};
