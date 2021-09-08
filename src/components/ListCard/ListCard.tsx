import Card from '../Card/Card';

type ListCardProps = {
  /** Title of the card. */
  title: string,
  /** Icon optionally displayed next to card title. */
  icon?: string,
  /** Content list. Each Record is a pair of form <icon, text>. */
  list: Record<string, string>[],
};

/**
 * Displays a card with a list of icon/text pairs.
 */
function ListCard({title, icon, list}: ListCardProps) {
 return (
  <Card 
  title={title}
  icon={icon}>
    <div className="grid grid-cols-1 lg:grid-cols-2">
      {list.map((item, index) => {
        const key: string = Object.keys(item)[0];
        return (
          <div key={index} className="flex my-1 py-1">
            <div className="lg:pt-0.5 mr-2 lg:mr-4 text-xl">
              <ion-icon name={key} />
            </div>
            <p className="text-gray-700 font-medium lg:text-lg">{item[key]}</p>
          </div>
        )
      })}
    </div>
  </Card>
 );
}

export default ListCard;
