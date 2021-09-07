import { pinnedProjects, strings } from '../../res';
import { Project } from '../../types';
import Card from '../Card/Card';

type ProjectsProps = {
  projects: Project[] | undefined;
};

function Projects(props: ProjectsProps) {

  const getPinnedProjects = (allProjects: Project[]) => {
    const projects = allProjects.filter(p => pinnedProjects.includes(p.name));
    return projects.map((project, index) => {
      return (
        <div key={index}>
           {project.name}
        </div>
      )
    })
  };

  return (
   <Card 
   title={strings.projectsTitle}
   icon="cloud-outline">
     {props.projects &&
       getPinnedProjects(props.projects)
     }
   </Card>
  );
}

export default Projects;
