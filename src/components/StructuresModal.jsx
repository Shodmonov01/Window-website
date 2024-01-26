import React, { Fragment, memo, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';

function StructuresModal(props) {
    const { onClose, open } = props;
    const cancelButtonRef = useRef();

    return (
        <Transition.Root show={open || false} as={Fragment}>
            <Dialog as="div" className="relative z-[9999]" initialFocus={cancelButtonRef} tabIndex="-1" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
                </Transition.Child>
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex items-center justify-center p-4 sm:items-center ">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className={`relative w-full transform rounded-lg bg-white pb-2 text-left shadow-xl transition-all sm:w-full ${props.maxWidth}`}>

                                {/* children element */}
                                {props.children}

                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root >
    )
}

export default memo(StructuresModal);