import React, { useEffect, useState } from 'react';
import { fetchRepositories } from '@/utils/github';

const RepoList = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRepos = async () => {
      try {
        const data = await fetchRepositories();
        console.log('Repositories:', data);
        setRepos(data);
      } catch (error) {
        console.error('Failed to load repositories', error);
      } finally {
        setLoading(false);
      }
    };

    getRepos();
  }, []);

  if (loading) {
    return <p>Loading repositories...</p>;
  }

  return (
    <div>
      <h1>Repositories</h1>
      <ul>
        {repos?.map((repo) => (
          <li key={repo?.id}>
            <a href={repo?.html_url} target="_blank" rel="noopener noreferrer">
              {repo?.name}: {repo?.private ? 'Private' : 'Public'}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepoList;
