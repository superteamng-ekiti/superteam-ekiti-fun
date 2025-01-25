import { Octokit } from '@octokit/rest';
import {auth} from '@/config'

console.log(auth)

const octokit = new Octokit({
  auth: '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', // Or pass token directly
});

export const fetchRepositories = async () => {
  try {
    const response = await octokit.request('GET /user/repos', {
      visibility: 'all', // "public" or "private" if needed
      affiliation: 'owner,collaborator', // Repos you own or collaborate on
      per_page: 100, // Adjust as necessary
    });

    return response.data; // Returns array of repositories
  } catch (error) {
    console.error('Error fetching repositories:', error);
    throw error;
  }
};
