import { useState, useEffect } from 'react';
import { Header, Bio, Projects, Skills } from './components';
import { User, Project } from './types';

function App() {

  const [profile, setProfile] = useState<User | undefined>(undefined);
  const [repos, setRepos] = useState<Project[] | undefined>(undefined);

  useEffect(() => {
    fetch('https://api.github.com/users/scottblechman')
      .then(response => response.json())
      .then(data => setProfile(data));
    fetch('https://api.github.com/users/scottblechman/repos')
      .then(response => response.json())
      .then(data => setRepos(data.filter((p: Project) => !p.private))); 
  }, []);

  return (
    <div>
      <header className="mb-72 lg:mb-48">
        <Header avatar={profile?.avatar_url} />
      </header>
      <section className="mx-4 lg:mx-96 -mt-14 grid grid-cols-1 lg:grid-cols-3">
        <Bio />
        <Projects projects={repos} />
        <Skills />
      </section>
      <footer>
      </footer>
    </div>
  );
}

export default App;
