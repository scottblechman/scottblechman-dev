import { useState, useEffect } from 'react';
import { Header, Bio, Projects } from './components';
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
      .then(data => setRepos(data)); 
  }, []);

  return (
    <div className="h-screen mt-24 lg:mt-48 bg-gray-50">
      <header className="relative -top-16 lg:-top-28">
        <Header avatar={profile?.avatar_url} />
      </header>
      <section className="mx-4 lg:mx-96 -mt-14">
        <Bio />
        <Projects projects={repos} />
      </section>
      <footer>
      </footer>
    </div>
  );
}

export default App;
