import { useState, useEffect, useCallback } from 'react';
import IconButton from '../IconButton/IconButton';
import { pinnedProjects, strings, urls } from '../../res';
import { Project } from '../../types';
import Card from '../Card/Card';
import ProjectCard from './ProjectCard/ProjectCard';
import { useMediaQuery } from 'react-responsive';

type ProjectsProps = {
  projects: Project[] | undefined;
};

function Projects(props: ProjectsProps) {

  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [visibleProject, setVisibleProject] = useState(0);
  const [languageColors, setLanguageColors] = useState<any>(undefined);

  const isLarge = useMediaQuery({query: '(min-width: 1024px)'});

  // The max amount of cards that will be shown in widescreen at a time.
  const maxProjectsWhenLarge = 4;

  const getProjectParent = useCallback((project: Project) => {
    if(project && project.fork && !project.parent) {
      fetch(`${urls.repoPrefix}${project.name}`)
        .then(response => response.json())
        .then((data: Project) => setFilteredProjects(
          filteredProjects.map(p => 
            p.id === project.id
            ? {...p, parent: data.parent, language: data.parent?.language}
            : p
          )
        )); 
    }
  }, [filteredProjects]);

  useEffect(() => {
    if (props.projects && filteredProjects.length <= 0) {
      setFilteredProjects(props.projects.filter(p => pinnedProjects.includes(p.name)));
    }
    if (filteredProjects.length > 0) {
      getProjectParent(filteredProjects[0]);
    }
    if (!languageColors) {
      // Regularly scrapes github language definition YML
      fetch(urls.colors)
        .then(response => response.json())
        .then(data => setLanguageColors(data));
    }
  }, [props.projects, filteredProjects.length, languageColors, filteredProjects, getProjectParent]);

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
   icon={`cloud${window.matchMedia('(prefers-color-scheme: dark)')?.matches ? '' : '-outline'}`}
   large>
      {filteredProjects.length > 0
        ? <div className="flex justify-between">
          <div className="pt-28">
            {!isLarge || filteredProjects.length < maxProjectsWhenLarge 
              ? <IconButton name="chevron-back-circle-outline" onClick={() => switchProjects(visibleProject - 1)} disabled={visibleProject === 0} />
              : <div />
            }
          </div>
          {isLarge
            ? filteredProjects.map((project, index) => {
                return (
                  (index < maxProjectsWhenLarge)
                    ? <ProjectCard key={index} project={project} languageColor={getLanguageColor(project)} />
                    : <div />
                )
              })
            : <ProjectCard project={filteredProjects[visibleProject]} languageColor={getLanguageColor(filteredProjects[visibleProject])} />
          }
          <div className="pt-28">
            {!isLarge || filteredProjects.length < maxProjectsWhenLarge
              ? <IconButton name="chevron-forward-circle-outline" onClick={() => switchProjects(visibleProject + 1)} disabled={visibleProject === filteredProjects.length - 1} />
              : <div />}
          </div>
        </div>
        : <div className="flex justify-center">
          <ProjectCard project={undefined} languageColor="000000ff" />
        </div>
      }
   </Card>
  );
}

export default Projects;
