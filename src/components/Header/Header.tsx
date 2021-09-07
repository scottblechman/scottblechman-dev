import { strings, socialLinks } from '../../res';

type HeaderProps = {
  avatar: string | undefined;
};

function Header(props: HeaderProps) {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:justify-start pt-2 mx-4 lg:ml-32">
      {props.avatar && 
        <div className="relative z-10 w-40 lg:w-64 h-40 lg:h-64 mb-1 lg:mb-4">
          <img src={props.avatar} alt="GitHub avatar" className="rounded-full border-6 lg:border-8 border-gray-50" />
        </div>
      }
      <div className="relative z-0 lg:max-w-lg bg-gray-50 lg:-ml-6 lg:px-10 rounded-r-md lg:-mt-4">
        <p className="text-center lg:text-left text-2xl lg:text-4xl font-semibold tracking-normal text-gray-900">{strings.name}</p>
        <p className="text-center lg:text-left lg:text-xl my-2 lg:mb-4 text-gray-700 lg:ml-2">{strings.description}</p>
        <hr />
        <div className="flex lg:ml-4 mt-3 justify-center lg:justify-start">
          {socialLinks.map((link, index) => {
            const key: string = Object.keys(link)[0];
            return (
              <a href={link[key]} key={index} className="mx-2 text-xl">
                <ion-icon name={key} />
              </a>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default Header;
