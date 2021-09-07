import { strings, bioInfo } from '../../res';
import Card from '../Card/Card';

function Bio() {
 return (
  <Card 
  title={strings.bioTitle}
  icon="person-circle-outline">
    {bioInfo.map((item, index) => {
      const key: string = Object.keys(item)[0];
      return (
        <div key={index} className="flex my-1">
          <div className="pt-0.5 mr-2 lg:mr-4">
            <ion-icon name={key} />
          </div>
          <p className="lg:pt-0.5 lg:text-lg">{item[key]}</p>
        </div>
      )
    })}
  </Card>
 );
}

export default Bio;
