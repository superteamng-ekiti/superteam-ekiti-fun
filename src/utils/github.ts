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


/**
 * Extracts repository name from a GitHub URL
 * @param url GitHub repository URL
 * @returns Repository name or null if URL is invalid
 */
export const extractRepoName = (url: string): string | null => {
  try {
      // Check if the URL is valid
      const urlObject = new URL(url);
      
      // Ensure it's a GitHub URL
      if (!urlObject.hostname.includes('github.com')) {
          return null;
      }
      
      // Split the pathname and remove empty strings
      const pathParts = urlObject.pathname.split('/').filter(Boolean);
      
      // GitHub URLs have format: github.com/username/repository
      // So we need at least 2 parts in the path
      if (pathParts.length < 2) {
          return null;
      }
      
      // Return the repository name (last part of the path)
      return pathParts[pathParts.length - 1];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
      // Return null if URL is invalid
      return null;
  }
};