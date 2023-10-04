'use client'
import { useEffect, useState } from 'react';
import styles from "@/styles/Card.module.css"
import container from "@/styles/Container.module.css"

type GithubRepo = {
  id: number;
  name: string;
  description: string;
  html_url: string;
};

export default function Github() {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/marnysan111/repos');
        const data: GithubRepo[] = await response.json();
        setRepos(data);
      } catch (error) {
        console.error('Error fetching repos:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <>
      <div className={container.container}>
          {isLoading ? (
              <p>Loading...</p>
          ) : (
              repos.map((repo) => (
                <div className={container.col6} key={repo.id}>
                  <div className={styles.card}>
                    <h2 className={styles.title}>
                      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                        {repo.name}
                      </a>
                    </h2>
                    <p className={styles.content}>{repo.description}</p>
                  </div>
                </div>
              ))
          )}
      </div>
    </>
  );
}