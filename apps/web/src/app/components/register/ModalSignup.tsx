'use client';
import { Fragment, useRef} from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import FormRegister from '../../../components/FormRegister';
import { ModalRegisterAction } from '@/lib/features/userSlice';

const ModalSignup = () => {
  const selectorModal = useAppSelector((state) => state.user.showModalRegister);
  const dispatch = useAppDispatch();
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={selectorModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-40"
        initialFocus={cancelButtonRef}
        onClose={ModalRegisterAction}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto ">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg border-2 border-[#4F4CEE] bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="mb-5">
                  <div className="sm:flex sm:items-start">
                    <div className="w-full ">
                      <div>
                        <FormRegister
                          dispatch={dispatch}
                          className={"bg-[#4f4cee] flex justify-between px-6 mb-4 rounded-tl-lg "}
                          title={'Join To Buy Events'}
                          role={'customer'}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ModalSignup;
