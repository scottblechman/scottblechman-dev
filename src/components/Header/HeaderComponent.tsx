import './HeaderComponent.css';

type HeaderComponentProps = {
  avatar: string | undefined;
};

const externalLinks: Record<string, string>[] = [
  {'logo-github': 'https://github.com/scottblechman'},
  {'logo-linkedin': 'https://www.linkedin.com/in/scott-blechman/'}
];

function HeaderComponent(props: HeaderComponentProps) {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:justify-center pt-2 mx-4">
      {props.avatar && 
        <div className=" w-40 lg:w-64 h-40 lg:h-64 mb-4 lg:mr-4">
          <img src={props.avatar} alt="GitHub avatar" className="rounded-full border-6 lg:border-8 border-gray-50" />
        </div>
      }
      <div className="lg:max-w-lg">
        <p className="text-center lg:text-left text-2xl lg:text-4xl font-semibold tracking-normal text-gray-900">Scott Blechman</p>
        <p className="text-center lg:text-left lg:text-xl my-2 lg:mb-4 text-gray-700 lg:ml-2">SWE @ Tyler Technologies.</p>
        <hr />
        <div className="flex lg:ml-4 mt-2 justify-center lg:justify-start">
          {externalLinks.map((link, index) => {
            const key: string = Object.keys(link)[0];
            return <a href={link[key]} key={index} className="mx-2"><ion-icon name={key} /></a>
          })}
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
