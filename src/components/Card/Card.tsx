type CardProps = {
  title: string,
  icon?: string,
  caption?:string,
  children?: any,
  /** Displays the card twice as wide on large displays if true. */
  large?: boolean,
}

function Card(props: CardProps) {
  return (
    <div className={`m-2 lg:mx-4 lg:my-8 ${props.large ? 'lg:col-span-2' : ''} p-2 bg-gray-100 rounded-lg text-gray-700`}>
      <div className="flex ml-2">
        {props.icon &&
          <div className="mr-2 lg:mr-4 text-2xl">
            <ion-icon name={props.icon} />
          </div>
        }
        <h1 className="text-lg lg:text-xl font-medium tracking-normal">{props.title}</h1>
      </div>
      <p className="text-sm text-gray-600 text-center my-1">{props.caption}</p>
      <div className="px-4 py-2">
        {props.children}
      </div>
    </div>
  );
 }
 
 export default Card;
 