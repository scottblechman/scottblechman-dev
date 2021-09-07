import './Card.css';

type CardProps = {
  title: string,
  icon?: string,
  caption?:string,
  children?: any,
}

function Card(props: CardProps) {
  return (
    <div className="mx-2 my-4 lg:mx-32 lg:my-8 p-2 bg-gray-100 rounded-lg text-gray-700">
      <div className="flex ml-2">
        {props.icon &&
          <div className="pt-1 mr-2 lg:mr-4">
            <ion-icon name={props.icon} />
          </div>
        }
        <h1 className="text-lg lg:text-xl font-medium tracking-normal lg:pt-1">{props.title}</h1>
      </div>
      <p className="text-sm text-gray-600 text-center my-1">{props.caption}</p>
      <div className="px-4 py-2">
        {props.children}
      </div>
    </div>
  );
 }
 
 export default Card;
 