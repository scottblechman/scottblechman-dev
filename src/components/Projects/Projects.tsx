import { useState, useEffect } from 'react';
import { IconButton } from '..';
import { pinnedProjects, strings } from '../../res';
import { Project } from '../../types';
import Card from '../Card/Card';
import ProjectCard from './ProjectCard/ProjectCard';

type ProjectsProps = {
  projects: Project[] | undefined;
};

function Projects(props: ProjectsProps) {

  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [visibleProject, setVisibleProject] = useState(0);
  const [languageColors, setLanguageColors] = useState<any>(undefined);

  useEffect(() => {
    if (props.projects && filteredProjects.length <= 0) {
      setFilteredProjects(props.projects.filter(p => pinnedProjects.includes(p.name)));
    }
    if (filteredProjects.length > 0) {
      getProjectParent(filteredProjects[0]);
    }
    if (!languageColors) {
      // Regularly scrapes github language definition YML
      fetch(`https://raw.githubusercontent.com/ozh/github-colors/master/colors.json`)
        .then(response => response.json())
        .then(data => setLanguageColors(data));
    }
  }, [props.projects, filteredProjects.length, languageColors]);

  const getProjectParent = (project: Project) => {
    if(project && project.fork && !project.parent) {
      fetch(`https://api.github.com/repos/scottblechman/${project.name}`)
        .then(response => response.json())
        .then((data: Project) => setFilteredProjects(
          filteredProjects.map(p => 
            p.id === project.id
            ? {...p, parent: data.parent, language: data.parent?.language}
            : p
          )
        )); 
    }
  };

  const switchProjects = (projectIndex: number) => {
    // Make changes only if the target index is in range
    if (projectIndex >= 0 && projectIndex <= filteredProjects.length - 1) {
      setVisibleProject(projectIndex);
      getProjectParent(filteredProjects[projectIndex]);
    }
  };

  const getLanguageColor = (project: Project) => {
    if (!languageColors || !project || !project.language) {
      return "000000ff";
    }
    return languageColors[project.language].color;
  };

  return (
   <Card 
   title={strings.projectsTitle}
   icon="cloud-outline">
      {filteredProjects.length > 0 &&
        <div className="flex justify-between">
          <div className="pt-28">
            <IconButton name="chevron-back-circle-outline" onClick={() => switchProjects(visibleProject - 1)} disabled={visibleProject === 0} />
          </div>
          <ProjectCard project={filteredProjects[visibleProject]} languageColor={getLanguageColor(filteredProjects[visibleProject])} />
          <div className="pt-28">
            <IconButton name="chevron-forward-circle-outline" onClick={() => switchProjects(visibleProject + 1)} disabled={visibleProject === filteredProjects.length - 1} />
          </div>
        </div>
      }
   </Card>
  );
}

export default Projects;
