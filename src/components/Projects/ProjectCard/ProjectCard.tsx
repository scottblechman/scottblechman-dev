import { Project } from '../../../types';

type ProjectCardProps = {
  project: Project | undefined,
  languageColor: string,
};

function ProjectCard({project, languageColor}: ProjectCardProps) {

  const stats: Record<string, number | undefined>[] = [
    {'eye-outline': project?.forks_count},
    {'star-outline': project?.stargazers_count},
    {'git-network-outline': project?.forks_count},
  ];

  return (
    <div className={`bg-gray-300 p-4 w-48 h-64 rounded-md relative ${!project ? 'animate-pulse' : ''}`}>
      <div>
        <div className="flex justify-between items-stretch">
          <div className="flex">
            <div className="mr-2 lg:mr-4">
              <ion-icon name="code-outline" />
            </div>
            <p className={`${!project ? 'bg-gray-200 text-gray-200 rounded h-4' : 'text-lg font-medium -mt-1.5'}`}>{project?.name ?? '----------'}</p>
          </div>
          <p className="text-xs text-gray-100 px-1 pt-0.5 mb-px rounded-full" style={{
            backgroundColor: languageColor
          }}>{project?.language ?? ''}</p>
        </div>
        {project?.fork && project?.parent &&
          <p className="text-xs text-gray-500">Forked from {project.parent?.full_name ?? ''}</p>
        }
        <div className="text-sm mt-4">
          {project?.description}
          {project 
            ? <a href={project?.html_url} className="ml-2 underline text-green-600">(View on GitHub)</a>
            : <p className="ml-2 bg-gray-200 text-gray-200 rounded">________________</p>
          }
        </div>
        <div className="flex absolute bottom-2 left-2 text-gray-500 text-xs">
          {stats.map((item, index) => {
            const key: string = Object.keys(item)[0];
            return (
              <div className="flex" key={index}>
                <ion-icon name={key} />
                <p className={`-mt-0.5 ml-1 mr-2 ${!project ? 'px-1 bg-gray-200 text-gray-200 rounded' : ''}`}>{item[key] ?? '_'}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
