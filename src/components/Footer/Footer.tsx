import { strings } from '../../res';

function Footer() {
  return (
    <div className="flex pt-1 justify-center bg-green-500 dark:bg-gray-800 text-sm lg:text-normal text-center text-gray-50 text-opacity-90 lg:absolute lg:bottom-0 lg:w-screen">
      <p>{strings.footer}</p>
      <p className="mx-4">&bull;</p>
      <a href="https://github.com/scottblechman/scottblechman.dev">
        <div className="flex">
          <div className="mt-0 5">
            <ion-icon name="logo-github" size="small" />
          </div>
          <p className="ml-1">View on GitHub</p>
        </div>
      </a>
    </div>
  );
}

export default Footer;