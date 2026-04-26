import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';
import RepoCard from '../components/RepoCard';
import styles from '../styles/GithubPage.module.css';

const GithubPage = ({ repos, user }) => {
  const theme = {
    level0: '#161B22',
    level1: '#0e4429',
    level2: '#006d32',
    level3: '#26a641',
    level4: '#39d353',
  };

  return (
    <>
      <div className={styles.user}>
        <div>
          <Image
            src={user?.avatar_url || "/profile.png"}
            className={styles.avatar}
            alt={user?.login || "profile"}
            width={50}
            height={50}
          />
          <h3 className={styles.username}>{user?.login || "GitHub User"}</h3>
        </div>
        <div>
          <h3>{user?.public_repos ?? 0} repos</h3>
        </div>
        <div>
          <h3>{user?.followers ?? 0} followers</h3>
        </div>
      </div>
      <h3>Top GitHub Repositories</h3>
      <div className={styles.container}>
        {repos && repos.length > 0 ? (
          repos.map((repo) => <RepoCard key={repo.id} repo={repo} />)
        ) : (
          <p>No repositories found. Check your GitHub username or API token.</p>
        )}
      </div>
      <div className={styles.contributions}>
        <GitHubCalendar
          username={user?.login || process.env.NEXT_PUBLIC_GITHUB_USERNAME || ""}
          theme={theme}
          hideColorLegend
          hideMonthLabels
        />
      </div>
    </>
  );
};

export async function getStaticProps() {
  const userRes = await fetch(
    `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`
  );
  const user = await userRes.json();

  const repoRes = await fetch(
    `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos?per_page=100`
  );
  let repos = await repoRes.json();

  if (!Array.isArray(repos)) {
    console.error("GitHub API did not return an array:", repos);
    repos = [];
  }

  // 👇 Define your main/featured projects here
  const featuredRepos = [
    "mess_management_platform",
    "pokedocs",
    "collabCode",
    "recode"
  ];

  // Filter only featured repos
  repos = repos.filter(repo =>
    featuredRepos.includes(repo.name)
  );

  return {
    props: { title: 'GitHub', repos, user },
    revalidate: 10,
  };
}

export default GithubPage;
