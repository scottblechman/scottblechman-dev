import { useState, useEffect } from 'react';
import { HeaderComponent } from './components';
import { User } from './types';

function App() {

  const [profile, setProfile] = useState<User | undefined>(undefined);

  useEffect(() => {
    // 
    fetch('https://api.github.com/users/scottblechman')
      .then(response => response.json())
      .then(data => setProfile(data));  
  }, []);

  return (
    <div className="h-screen bg-gray-50">
      <header>
        <HeaderComponent avatar={profile?.avatar_url} />
      </header>
      <section>
      </section>
      <footer>
      </footer>
    </div>
  );
}

export default App;
