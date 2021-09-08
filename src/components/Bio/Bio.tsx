import { strings, bioInfo } from '../../res';
import ListCard from '../ListCard/ListCard';

function Bio() {
 return (
  <div>
    <ListCard title={strings.bioTitle} icon="person-circle-outline" list={bioInfo} />
  </div>
 );
}

export default Bio;
