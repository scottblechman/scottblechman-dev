import { useState, useEffect } from 'react';
import { Header, Bio, Projects, Skills, Footer } from './components';
import { urls } from './res';
import { User, Project } from './types';

function App() {

  const [profile, setProfile] = useState<User | undefined>(undefined);
  const [repos, setRepos] = useState<Project[] | undefined>(undefined);

  useEffect(() => {
    fetch(urls.profile)
      .then(response => response.json())
      .then(data => setProfile(data));
    fetch(urls.repos)
      .then(response => response.json())
      .then(data => setRepos(data.filter((p: Project) => !p.private))); 
  }, []);

  return (
    <div className="relative h-screen">
      <header className="mb-72 lg:mb-48">
        <Header avatar={profile?.avatar_url} />
      </header>
      <section className="mx-4 lg:mx-96 -mt-14 grid grid-cols-1 lg:grid-cols-3">
        <Bio />
        <Projects projects={repos} />
        <Skills />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
