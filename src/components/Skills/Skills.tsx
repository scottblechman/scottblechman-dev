import { strings, currentSkills } from '../../res';
import ListCard from '../ListCard/ListCard';

function Skills() {
 return (
  <div>
    <ListCard title={strings.skillsTitle} icon="flask-outline" list={currentSkills} />
  </div>
 );
}

export default Skills;
