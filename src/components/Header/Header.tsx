import { useState } from 'react';
import { strings, socialLinks } from '../../res';
import ContactForm from './ContactForm/ContactForm';

type HeaderProps = {
  avatar: string | undefined;
};

function Header(props: HeaderProps) {
  const [contactFormOpen, setContactFormOpen] = useState(false);

  return (
    <div>
      <div className="bg-green-500 dark:bg-gray-600 h-32">
        <div className="flex flex-col lg:flex-row items-center lg:justify-start pt-16 lg:pt-4 mx-4 lg:ml-32">
          {props.avatar
            ? <div className="relative z-10 w-40 lg:w-64 h-40 lg:h-64 mb-1 lg:mb-4">
              <img src={props.avatar} alt="GitHub avatar" className="rounded-full border-6 lg:border-8 border-gray-100 dark:border-gray-600" />
            </div>
            : <div className="relative z-10 w-40 lg:w-64 h-40 lg:h-64 mb-1 lg:mb-4 bg-gray-100 dark:bg-gray-600 rounded-full">
              <div className="w-40 lg:w-64 h-40 lg:h-64 mb-1 lg:mb-4 bg-gray-200 rounded-full border-6 lg:border-8 border-gray-50 dark:border-gray-600 animate-pulse"></div>
            </div>
          }
          <div className="relative z-0 lg:max-w-lg bg-gray-100 dark:bg-gray-700 lg:dark:bg-gray-600 lg:-ml-8 lg:px-10 rounded-r-md lg:-mt-4 lg:pt-4">
            <p className="text-center lg:text-left text-2xl lg:text-4xl font-semibold tracking-normal text-gray-900 dark:text-gray-100 dark:text-opacity-95">{strings.name}</p>
            <p className="text-center lg:text-left lg:text-xl my-2 lg:mb-4 text-gray-700 lg:ml-2 dark:text-gray-100 dark:text-opacity-90">{strings.description}</p>
            <hr />
            <div className="flex lg:ml-4 mt-3 justify-center lg:justify-start">
              {socialLinks.map((link, index) => {
                const key: string = Object.keys(link)[0];
                return (
                  <a href={link[key]} key={index} className="mx-2.5 mt-0.5 lg:mt-1.5 text-xl dark:text-gray-100 dark:text-opacity-95">
                    <ion-icon name={key} />
                  </a>
                )
              })}
              <button onClick={() => setContactFormOpen(true)}
              className="ml-6 mb-1.5 bg-green-500 dark:bg-gray-800 lg:dark:bg-gray-700 text-white text-opacity-95 text-sm
              lg:text-lg font-medium px-3 py-1 rounded-full transition delay-75 hover:bg-green-600 dark:hover:bg-gray-900 lg:dark:hover:bg-gray-800">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
      <ContactForm open={contactFormOpen} setOpen={setContactFormOpen} />
    </div>
  );
}

export default Header;
