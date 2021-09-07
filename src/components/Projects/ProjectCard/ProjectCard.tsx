import { Project } from '../../../types';

type ProjectCardProps = {
  project: Project,
  languageColor: string,
};

function ProjectCard({project, languageColor}: ProjectCardProps) {

  return (
    <div className="bg-gray-300 p-4 w-48 h-64 rounded-md relative">
      <div>
        <div className="flex justify-between items-stretch">
          <div className="flex">
            <div className="mr-2 lg:mr-4">
              <ion-icon name="code-outline" />
            </div>
            <p className="text-lg font-medium -mt-1.5">{project.name}</p>
          </div>
          <p className="text-xs text-gray-100 px-1 pt-0.5 mb-px rounded-full" style={{
            backgroundColor: languageColor
          }}>{project.language ?? ''}</p>
        </div>
        {project.fork && project.parent &&
          <p className="text-xs text-gray-500">Forked from {project.parent?.full_name ?? ''}</p>
        }
        <p className="text-sm mt-4">
          {project.description}
          <a href={project.html_url} className="ml-2 underline text-green-600">(View on GitHub)</a>
        </p>
        <div className="flex absolute bottom-2 left-2 text-gray-500 text-xs">
          <div className="flex">
            <ion-icon name="eye-outline" />
            <p className="-mt-0.5 ml-1 mr-2">{project.watchers_count}</p>
          </div>
          <div className="flex">
            <ion-icon name="star-outline" />
            <p className="-mt-0.5 ml-1 mr-2">{project.stargazers_count}</p>
          </div>
          <div className="flex">
            <ion-icon name="git-network-outline" />
            <p className="-mt-0.5 ml-1 mr-2">{project.forks_count}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
