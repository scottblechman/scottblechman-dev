const urls = {
  profile: 'https://api.github.com/users/scottblechman',
  repos: 'https://api.github.com/users/scottblechman/repos',
  colors: 'https://raw.githubusercontent.com/ozh/github-colors/master/colors.json', // Regularly scrapes github language definition YML
  repoPrefix: 'https://api.github.com/repos/scottblechman/',  // Followed by a repo name
};

export default urls;
