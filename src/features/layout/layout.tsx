/* eslint-disable @next/next/no-img-element */
import { Dialog, Transition } from '@headlessui/react';
import {
  Bars3CenterLeftIcon,
  ScaleIcon,
  UserGroupIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import React from 'react';
import { ReactNode } from 'react';
import { Fragment, useState } from 'react';

const cards = [
  { name: 'Account balance', href: '#', icon: ScaleIcon, amount: '$30,659.45' },
  // More items...
];
const transactions = [
  {
    id: 1,
    name: 'Payment to Molly Sanders',
    href: '#',
    amount: '$20,000',
    currency: 'USD',
    status: 'success',
    date: 'July 11, 2020',
    datetime: '2020-07-11',
  },
  // More transactions...
];

import {
  EnvelopeOpenIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';
import {
  PaperAirplaneIcon,
  // UserGroupIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';

import NavList from '@/components/nav-list/nav-list';
import {
  HeadLink,
  NavFooter,
  NavHeader,
  NavMain,
} from '@/components/side-nav/side-nav-styles';
import TopNav from '@/components/top-nav/top-nav';

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

interface NavItem {
  name: string;
  icon: any;
  href: string;
  current: boolean;
  count?: number;
}

const navigations: NavItem[] = [
  { name: 'Dashboard', icon: PaperAirplaneIcon, href: '#', current: true },
  {
    name: 'item 1',
    icon: PaperAirplaneIcon,
    href: '#',
    count: 3,
    current: false,
  },

  {
    name: 'item 2',
    icon: UsersIcon,
    href: '#',
    count: 5,
    current: false,
  },
  {
    name: 'item 3',
    icon: UserGroupIcon,
    href: '#',
    count: 4,
    current: false,
  },
];

const other1: NavItem[] = [
  { name: 'other 4', icon: PaperAirplaneIcon, href: '#', current: true },
  {
    name: 'item 5',
    icon: EnvelopeOpenIcon,
    href: '#',
    count: 3,
    current: false,
  },
];

const other2: NavItem[] = [
  { name: 'item 6', icon: PaperAirplaneIcon, href: '#', current: true },
  {
    name: 'item 7',
    icon: EnvelopeOpenIcon,
    href: '#',
    count: 3,
    current: false,
  },

  {
    name: 'item 8',
    icon: UsersIcon,
    href: '#',
    count: 5,
    current: false,
  },
];

const others: NavItem[] = [
  {
    name: 'Blessing Daniels',
    icon: RocketLaunchIcon,
    href: '/support',
    count: 4,
    current: false,
  },
];
import { useRouter } from 'next/router';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Lay: React.FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  function handleBackClick() {
    router.back();
  }

  return (
    <>
      <div className='min-h-full'>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as='div'
            className='relative z-40 lg:hidden'
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter='transition-opacity ease-linear duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='transition-opacity ease-linear duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div className='fixed inset-0 bg-gray-600 bg-opacity-75' />
            </Transition.Child>

            <div className='fixed inset-0 z-40 flex'>
              <Transition.Child
                as={Fragment}
                enter='transition ease-in-out duration-300 transform'
                enterFrom='-translate-x-full'
                enterTo='translate-x-0'
                leave='transition ease-in-out duration-300 transform'
                leaveFrom='translate-x-0'
                leaveTo='-translate-x-full'
              >
                <Dialog.Panel className='relative flex w-full max-w-xs flex-1 flex-col bg-white pb-4'>
                  <Transition.Child
                    as={Fragment}
                    enter='ease-in-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in-out duration-300'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <div className='absolute right-0 top-0 -mr-12 pt-2'>
                      <button
                        type='button'
                        className='ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none  '
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className='sr-only'>Close sidebar</span>
                        <XMarkIcon
                          className='h-6 w-6 text-white'
                          aria-hidden='true'
                        />
                      </button>
                    </div>
                  </Transition.Child>

                  <div className=' border-r bg-white lg:inset-y-0 lg:flex lg:w-[250px] lg:flex-col'>
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <NavMain>
                      <NavHeader>
                        <HeadLink href='#'>
                          <div className='head-wrap'>
                            <div>
                              <svg
                                width='40'
                                height='40'
                                viewBox='0 0 40 40'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  d='M32.316 13.9454H27.0014C26.7468 13.9454 26.5026 13.8442 26.3226 13.6642C26.1425 13.4841 26.0414 13.24 26.0414 12.9853V7.73466C26.0414 7.48005 26.1425 7.23587 26.3226 7.05584C26.5026 6.8758 26.7468 6.77466 27.0014 6.77466H29.0867C31.4 6.77466 33.276 8.64933 33.276 10.9627V12.9853C33.276 13.24 33.1749 13.4841 32.9949 13.6642C32.8148 13.8442 32.5707 13.9454 32.316 13.9454Z'
                                  fill='#131316'
                                />
                                <path
                                  d='M6.73596 29.0574V17.3348C6.73596 17.2087 6.76079 17.0839 6.80904 16.9674C6.85728 16.8509 6.928 16.7451 7.01714 16.6559C7.10628 16.5668 7.21211 16.4961 7.32859 16.4478C7.44506 16.3996 7.56989 16.3748 7.69596 16.3748H12.9813C13.2359 16.3748 13.4801 16.4759 13.6601 16.6559C13.8402 16.836 13.9413 17.0801 13.9413 17.3348V32.2868C13.9413 32.5414 13.8402 32.7855 13.6601 32.9656C13.4801 33.1456 13.2359 33.2468 12.9813 33.2468H10.9253C8.61196 33.2468 6.73596 31.3708 6.73596 29.0574Z'
                                  fill='#131316'
                                />
                                <path
                                  d='M16.3867 29.0574V17.3348C16.3867 17.0801 16.4879 16.836 16.6679 16.6559C16.8479 16.4759 17.0921 16.3748 17.3467 16.3748H22.6321C22.8867 16.3748 23.1308 16.4759 23.3109 16.6559C23.4909 16.836 23.5921 17.0801 23.5921 17.3348V32.2868C23.5921 32.5414 23.4909 32.7855 23.3109 32.9656C23.1308 33.1456 22.8867 33.2468 22.6321 33.2468H20.5761C18.2627 33.2468 16.3867 31.3708 16.3867 29.0574Z'
                                  fill='#131316'
                                />
                                <path
                                  d='M26.0375 29.0574V17.3348C26.0375 17.0801 26.1386 16.836 26.3186 16.6559C26.4987 16.4759 26.7429 16.3748 26.9975 16.3748H32.2827C32.5373 16.3748 32.7815 16.4759 32.9615 16.6559C33.1416 16.836 33.2427 17.0801 33.2427 17.3348V32.2868C33.2427 32.5414 33.1416 32.7855 32.9615 32.9656C32.7815 33.1456 32.5373 33.2468 32.2827 33.2468H30.2268C27.9134 33.2468 26.0375 31.3708 26.0375 29.0574Z'
                                  fill='#131316'
                                />
                                <path
                                  d='M19.4906 6.76408L7.68667 6.75342C7.43229 6.75342 7.18831 6.85438 7.00831 7.03412C6.82832 7.21387 6.72702 7.45771 6.72667 7.71208L6.724 9.82008C6.72267 12.0854 8.55733 13.9254 10.824 13.9268L22.628 13.9388C22.8827 13.9388 23.127 13.8377 23.3073 13.6577C23.4875 13.4777 23.589 13.2335 23.5893 12.9788V10.8721C23.5933 8.60542 21.7573 6.76675 19.4906 6.76408Z'
                                  fill='#131316'
                                />
                              </svg>
                            </div>
                            {/* <TextWrapper>
                              <p className='text-xs'>Obsidian achernar</p>
                              <p className='text-sm'>HR Comms</p>
                            </TextWrapper> */}
                          </div>
                        </HeadLink>
                      </NavHeader>
                      <NavList navigation={navigations} title='Apps' />
                      <NavList navigation={other1} title='other 1' />
                      <NavList navigation={other2} title='other 2' />
                    </NavMain>
                    <NavFooter>
                      <NavList navigation={others} title='Other' />
                    </NavFooter>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className='w-14 flex-shrink-0' aria-hidden='true'>
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className='hidden border-r bg-[##fefefe] lg:fixed lg:inset-y-0 lg:flex lg:w-[250px] lg:flex-col'>
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <NavMain>
            <NavHeader>
              <HeadLink href='#'>
                <div className=''>
                  <div className=''>
                    <svg
                      width='40'
                      height='40'
                      viewBox='0 0 40 40'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M32.316 13.9454H27.0014C26.7468 13.9454 26.5026 13.8442 26.3226 13.6642C26.1425 13.4841 26.0414 13.24 26.0414 12.9853V7.73466C26.0414 7.48005 26.1425 7.23587 26.3226 7.05584C26.5026 6.8758 26.7468 6.77466 27.0014 6.77466H29.0867C31.4 6.77466 33.276 8.64933 33.276 10.9627V12.9853C33.276 13.24 33.1749 13.4841 32.9949 13.6642C32.8148 13.8442 32.5707 13.9454 32.316 13.9454Z'
                        fill='#131316'
                      />
                      <path
                        d='M6.73596 29.0574V17.3348C6.73596 17.2087 6.76079 17.0839 6.80904 16.9674C6.85728 16.8509 6.928 16.7451 7.01714 16.6559C7.10628 16.5668 7.21211 16.4961 7.32859 16.4478C7.44506 16.3996 7.56989 16.3748 7.69596 16.3748H12.9813C13.2359 16.3748 13.4801 16.4759 13.6601 16.6559C13.8402 16.836 13.9413 17.0801 13.9413 17.3348V32.2868C13.9413 32.5414 13.8402 32.7855 13.6601 32.9656C13.4801 33.1456 13.2359 33.2468 12.9813 33.2468H10.9253C8.61196 33.2468 6.73596 31.3708 6.73596 29.0574Z'
                        fill='#131316'
                      />
                      <path
                        d='M16.3867 29.0574V17.3348C16.3867 17.0801 16.4879 16.836 16.6679 16.6559C16.8479 16.4759 17.0921 16.3748 17.3467 16.3748H22.6321C22.8867 16.3748 23.1308 16.4759 23.3109 16.6559C23.4909 16.836 23.5921 17.0801 23.5921 17.3348V32.2868C23.5921 32.5414 23.4909 32.7855 23.3109 32.9656C23.1308 33.1456 22.8867 33.2468 22.6321 33.2468H20.5761C18.2627 33.2468 16.3867 31.3708 16.3867 29.0574Z'
                        fill='#131316'
                      />
                      <path
                        d='M26.0375 29.0574V17.3348C26.0375 17.0801 26.1386 16.836 26.3186 16.6559C26.4987 16.4759 26.7429 16.3748 26.9975 16.3748H32.2827C32.5373 16.3748 32.7815 16.4759 32.9615 16.6559C33.1416 16.836 33.2427 17.0801 33.2427 17.3348V32.2868C33.2427 32.5414 33.1416 32.7855 32.9615 32.9656C32.7815 33.1456 32.5373 33.2468 32.2827 33.2468H30.2268C27.9134 33.2468 26.0375 31.3708 26.0375 29.0574Z'
                        fill='#131316'
                      />
                      <path
                        d='M19.4906 6.76408L7.68667 6.75342C7.43229 6.75342 7.18831 6.85438 7.00831 7.03412C6.82832 7.21387 6.72702 7.45771 6.72667 7.71208L6.724 9.82008C6.72267 12.0854 8.55733 13.9254 10.824 13.9268L22.628 13.9388C22.8827 13.9388 23.127 13.8377 23.3073 13.6577C23.4875 13.4777 23.589 13.2335 23.5893 12.9788V10.8721C23.5933 8.60542 21.7573 6.76675 19.4906 6.76408Z'
                        fill='#131316'
                      />
                    </svg>
                  </div>
                  {/* <TextWrapper>
                    <p className='text-xs'>Obsidian Achernar</p>
                    <p className='text-sm'>HR Comms</p>
                  </TextWrapper> */}
                </div>
              </HeadLink>
            </NavHeader>
            <NavList navigation={navigations} title='' />
            <NavList navigation={other1} title='other 1' />
            <NavList navigation={other2} title='other 2' />
          </NavMain>
          <NavFooter>
            <NavList navigation={others} title='Other' />
          </NavFooter>
        </div>

        <div className='flex flex-1 flex-col lg:pl-64'>
          {/* slide nav */}
          <div className='flex flex-shrink-0 border-b border-gray-200 bg-white  lg:border-none'>
            <button
              type='button'
              className='border-r border-gray-200 px-4 text-gray-400 focus:outline-none lg:hidden'
              onClick={() => setSidebarOpen(true)}
            >
              <span className='sr-only'>Open sidebar</span>
              <Bars3CenterLeftIcon className='h-6 w-6' aria-hidden='true' />
            </button>
            {/* Search bar */}
            <div className='mb-4 w-full  px-4 lg:mx-auto lg:max-w-6xl lg:pl-5'>
              <TopNav />
            </div>
          </div>
          {/* main body */}
          <main className='flex-1 px-4 py-10 pb-8 sm:px-6 lg:px-8 lg:py-0 lg:pl-8'>
            {/* Page header */}

            <motion.div
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div>{children}</div>
            </motion.div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Lay;
