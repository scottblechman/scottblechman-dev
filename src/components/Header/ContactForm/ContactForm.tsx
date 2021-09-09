import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { strings } from '../../../res';

type ContactFormProps = {
  open: boolean,
  setOpen: (arg0: boolean) => void,
};

/**
 * Collects and sends an email message.
 * Modal skeleton from https://tailwindui.com/components/application-ui/overlays/modals.
 */
function ContactForm({open, setOpen}: ContactFormProps) {

  const [email, setEmail] = useState<string>(''); 
  const [message, setMessage] = useState<string>('');

  const [emailValid, setEmailValid] = useState(true);
  const [messageValid, setMessageValid] = useState(true);

  const validateEmail = () => {

    // Matches most of RFC 2822. Does not validate existence of email address (see https://www.regular-expressions.info/email.html).
    const valid = email.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g) !== null;
    setEmailValid(valid);
    return valid;
  };

  const validateMessage = () => {
    const valid = (message?.length ?? 0) > 0;
    setMessageValid(valid);
    return valid;
  };

  const onSubmit = () => {
    if(validateEmail() && validateMessage()) {
      // TODO: submit
    }
    setOpen(false);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={setOpen}>
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-400 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-gray-100 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-gray-100 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-center sm:justify-center">
                  <div className="mt-3 sm:mt-0 sm:ml-4 text-center">
                    <Dialog.Title as="h3" className="text-2xl leading-6 font-medium text-gray-900 mb-4">
                      {strings.contactFormTitle}
                    </Dialog.Title>
                    <div className="px-16">
                      <input 
                        type="email"
                        className="mt-1 block w-full rounded-md bg-gray-200 border-transparent focus:border-gray-300 focus:bg-gray-200 focus:ring-0 placeholder-gray-500 placeholder-opacity-50 text-gray-800"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={validateEmail}
                      />
                      <p className="text-red-600 text-sm font-medium -ml-4">{emailValid ? '' : 'Please enter a valid email.'}</p>
                      <textarea 
                        className="mt-4 mb-1 block w-full rounded-md bg-gray-200 border-transparent focus:border-gray-300 focus:bg-gray-200 focus:ring-0 placeholder-gray-500 placeholder-opacity-50 text-gray-800" 
                        rows={5}
                        placeholder={strings.contactFormPlaceholder}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onBlur={validateMessage}
                      />
                      <p className="text-red-600 text-sm font-medium mb-4 -ml-4">{messageValid ? '' : 'Don\'t forget the message!'}</p>
                    </div>
                    <button
                      type="button"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-500 text-base font-medium text-gray-100 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={onSubmit}
                    >Send</button>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default ContactForm;