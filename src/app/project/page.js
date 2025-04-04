import Navbar from "@/components/Navbar";
export const metadata = {
    title: "Projects",
  };
  
  async function fetchGitHubRepos() {
    const username = "arnav-srivastava"; 
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    if (!response.ok) {
      throw new Error("Failed to fetch repositories");
    }
    
    const data = await response.json();
    
    return data.filter((repo) => repo.description);
  }
  
  export default async function ProjectsPage() {
    const repositories = await fetchGitHubRepos();
  
    return (
      <div className="bg-gray-900 min-h-screen py-3 px-4 sm:px-6 lg:px-8">
        <div className=""><Navbar/></div>
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-extrabold text-white mb-12 text-center mt-4">GitHub Projects</h1>
          
          {repositories.length === 0 ? (
            <p className="text-gray-400 text-center">No projects available with descriptions.</p>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {repositories.map((repo) => (
                <div key={repo.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden p-6">
                  <h2 className="text-2xl font-bold text-white mb-2">{repo.name}</h2>
                  <p className="text-gray-400 mb-4">{repo.description}</p>
                  <div className="flex justify-between">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300"
                    >
                      GitHub Repo
                    </a>
                    {repo.homepage && (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
  