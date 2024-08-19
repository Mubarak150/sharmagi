import {Link } from 'react-router-dom'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import classNames from 'classnames';
import useScrolltoHash from '../hooks/useScrolltoHash';

export default function NavFlyover({ tag, tagClass, array, closeMenu }) {
    useScrolltoHash();
    
    return (
        <Popover className="relative">
            <PopoverButton
                className={classNames(
                    "text-[16px] text-primary p-1 font-teachers transition-all duration-2000 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 flex gap-2 items-center lg:justify-center",
                    tagClass
                )}
            >
                {tag}
                <img src="/arrow.svg" alt="arrow" className="rotate-90" />
            </PopoverButton>

            <PopoverPanel
                className="absolute left-1/2 z-50 mt-5 flex max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in w-screen"
            >
                <div className="w-5/6 lg:w-full max-w-md flex-auto overflow-hidden rounded-xl bg-white text-sm leading-6 shadow-lg ring-gray-900/5 mb-4 px-3 ">
                    <div className="p-3">
                        {array.map((item) => (
                            <div key={item.name} className={classNames("group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-100 text-gray-900")}>
                                
                                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                    <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                </div>
                                
                                <div className='flex flex-col justify-center'>
                                    <Link to={item.href} className="font-semibold hover:text-blue" onClick={closeMenu}>
                                        {item.name}
                                        <span className="absolute inset-0" />
                                    </Link>
                                    {item.description && (
                                        <p className="mt-1 text-gray-600">{item.description}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </PopoverPanel>
        </Popover>
    );
}
