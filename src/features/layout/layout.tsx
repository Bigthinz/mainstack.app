/* eslint-disable @next/next/no-img-element */

import { Dialog, Transition } from '@headlessui/react';
import {
  Bars3CenterLeftIcon,
  ScaleIcon,
  UserGroupIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
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
  CalendarIcon,
  DocumentDuplicateIcon,
  EnvelopeOpenIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';
import {
  Cog6ToothIcon,
  PaperAirplaneIcon,
  // UserGroupIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import React, { ForwardRefExoticComponent, SVGProps } from 'react';

import NavList from '@/components/nav-list/nav-list';
import {
  HeadLink,
  NavFooter,
  NavHeader,
  NavMain,
} from '@/components/side-nav/side-nav-styles';
import TopNav from '@/components/top-nav/top-nav';
type IconType = ForwardRefExoticComponent<SVGProps<SVGSVGElement>>;

interface NavItem {
  name: string;
  icon: IconType;
  href: string;
  current: boolean;
  count?: number;
}

const navigations: NavItem[] = [
  { name: 'Compose', icon: PaperAirplaneIcon, href: '/compose', current: true },
  {
    name: 'Sent Messages',
    icon: EnvelopeOpenIcon,
    href: '/message',
    count: 3,
    current: false,
  },

  {
    name: 'Contacts',
    icon: UsersIcon,
    href: '/user',
    count: 5,
    current: false,
  },
  {
    name: 'Groups',
    icon: UserGroupIcon,
    href: '/group',
    count: 4,
    current: false,
  },
  {
    name: 'Templates',
    icon: DocumentDuplicateIcon,
    href: '/template',
    count: 5,
    current: false,
  },
  {
    name: 'Events',
    icon: CalendarIcon,
    href: '/calendar',
    count: 6,
    current: false,
  },
  {
    name: 'Settings',
    icon: Cog6ToothIcon,
    href: '/settings',
    count: 7,
    current: false,
  },
];

const others: NavItem[] = [
  {
    name: 'Contact Support',
    icon: RocketLaunchIcon,
    href: '/support',
    count: 4,
    current: false,
  },
  {
    name: 'oamarkets.com',
    icon: Cog6ToothIcon,
    href: '/oamarket',
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
                <Dialog.Panel className='relative flex w-full max-w-xs flex-1 flex-col bg-[#2C2C2C] pb-4'>
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

                  <div className=' bg-[#2C2C2C] lg:inset-y-0 lg:flex lg:w-[250px] lg:flex-col'>
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <NavMain>
                      <NavHeader>
                        <HeadLink href='#'>
                          <div className='head-wrap'>
                            <div>
                              <svg
                                width='49'
                                height='49'
                                viewBox='0 0 49 49'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <rect
                                  width='49'
                                  height='49'
                                  rx='12'
                                  fill='#F5F5F5'
                                />
                                <path
                                  d='M15.5977 17.0001C16.544 16.9963 17.4815 17.1885 18.3558 17.5655C19.2301 17.9426 20.0237 18.4969 20.6905 19.1962C21.3414 19.8881 21.8634 20.6997 22.2299 21.5899C22.6037 22.5142 22.7939 23.5079 22.7887 24.5108C22.8002 25.5143 22.6098 26.5093 22.2299 27.4316C21.8639 28.3157 21.3417 29.1202 20.6905 29.8034C20.0237 30.5028 19.2301 31.0571 18.3558 31.4341C17.4815 31.8111 16.544 32.0033 15.5977 31.9996C14.6341 32.0105 13.6789 31.8123 12.793 31.4176C11.071 30.6475 9.70024 29.216 8.96548 27.4207C8.5867 26.5018 8.39636 25.5107 8.40665 24.5108C8.4004 23.5042 8.59052 22.5068 8.96548 21.579C9.33347 20.6902 9.85935 19.8817 10.5155 19.1962C11.182 18.4996 11.9741 17.9471 12.8462 17.5702C13.7184 17.1933 14.6534 16.9996 15.5977 17.0001V17.0001ZM21.6078 24.5108C21.616 23.6828 21.4643 22.8615 21.1618 22.0956C20.8593 21.3298 20.4122 20.6351 19.8469 20.0527C19.2831 19.4855 18.6212 19.0347 17.8963 18.724C17.1637 18.3955 16.3742 18.2273 15.5766 18.2299C14.7852 18.2284 14.0013 18.39 13.2701 18.7054C12.5389 19.0208 11.8749 19.4838 11.3162 20.0676C10.7576 20.6514 10.3154 21.3446 10.0151 22.1071C9.71477 22.8697 9.56232 23.6866 9.56649 24.5108C9.55627 25.3482 9.7143 26.1785 10.0304 26.9485C10.4939 28.0802 11.2669 29.045 12.2531 29.7225C13.2393 30.4 14.3951 30.7604 15.5766 30.7588C16.3742 30.7613 17.1637 30.5931 17.8963 30.2646C18.6142 29.9475 19.2687 29.4931 19.8259 28.925C20.376 28.359 20.8164 27.688 21.1228 26.9485C21.4389 26.1785 21.5969 25.3482 21.5867 24.5108'
                                  fill='black'
                                />
                                <path
                                  d='M37.5296 24.7853L40.4397 22.3585L39.8598 21.6558L37.1605 23.9068L36.4435 24.5107L30.0538 29.8144L34.3453 19.4267C34.5034 19.811 34.7038 20.2832 34.9252 20.8432L35.6844 22.677L36.3065 24.1923L37.034 23.5884L34.3453 17L28.5355 31.0771L28.3457 31.5383L29.263 31.6701L30.697 30.4732L31.3613 29.9242L31.5933 29.7375L32.2154 29.2104L32.8586 28.6834L34.5351 27.2779L36.2854 25.7845L36.802 25.3562L37.5296 24.7523V24.7853Z'
                                  fill='black'
                                />
                                <path
                                  d='M37.5299 25.2136C37.319 25.3783 37.1292 25.543 36.9395 25.7077C37.0871 26.081 37.2452 26.4653 37.4034 26.8057L39.5122 31.8898L40.3135 31.5054L37.6775 25.0818L37.551 25.1916'
                                  fill='black'
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
        <div className='hidden bg-[##fefefe] lg:fixed lg:inset-y-0 lg:flex lg:w-[250px] lg:flex-col'>
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <NavMain>
            <NavHeader>
              <HeadLink href='#'>
                <div className='head-wrap'>
                  <div className=''>
                    <svg
                      width='49'
                      height='49'
                      viewBox='0 0 49 49'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <rect width='49' height='49' rx='12' fill='#F5F5F5' />
                      <path
                        d='M15.5977 17.0001C16.544 16.9963 17.4815 17.1885 18.3558 17.5655C19.2301 17.9426 20.0237 18.4969 20.6905 19.1962C21.3414 19.8881 21.8634 20.6997 22.2299 21.5899C22.6037 22.5142 22.7939 23.5079 22.7887 24.5108C22.8002 25.5143 22.6098 26.5093 22.2299 27.4316C21.8639 28.3157 21.3417 29.1202 20.6905 29.8034C20.0237 30.5028 19.2301 31.0571 18.3558 31.4341C17.4815 31.8111 16.544 32.0033 15.5977 31.9996C14.6341 32.0105 13.6789 31.8123 12.793 31.4176C11.071 30.6475 9.70024 29.216 8.96548 27.4207C8.5867 26.5018 8.39636 25.5107 8.40665 24.5108C8.4004 23.5042 8.59052 22.5068 8.96548 21.579C9.33347 20.6902 9.85935 19.8817 10.5155 19.1962C11.182 18.4996 11.9741 17.9471 12.8462 17.5702C13.7184 17.1933 14.6534 16.9996 15.5977 17.0001V17.0001ZM21.6078 24.5108C21.616 23.6828 21.4643 22.8615 21.1618 22.0956C20.8593 21.3298 20.4122 20.6351 19.8469 20.0527C19.2831 19.4855 18.6212 19.0347 17.8963 18.724C17.1637 18.3955 16.3742 18.2273 15.5766 18.2299C14.7852 18.2284 14.0013 18.39 13.2701 18.7054C12.5389 19.0208 11.8749 19.4838 11.3162 20.0676C10.7576 20.6514 10.3154 21.3446 10.0151 22.1071C9.71477 22.8697 9.56232 23.6866 9.56649 24.5108C9.55627 25.3482 9.7143 26.1785 10.0304 26.9485C10.4939 28.0802 11.2669 29.045 12.2531 29.7225C13.2393 30.4 14.3951 30.7604 15.5766 30.7588C16.3742 30.7613 17.1637 30.5931 17.8963 30.2646C18.6142 29.9475 19.2687 29.4931 19.8259 28.925C20.376 28.359 20.8164 27.688 21.1228 26.9485C21.4389 26.1785 21.5969 25.3482 21.5867 24.5108'
                        fill='black'
                      />
                      <path
                        d='M37.5296 24.7853L40.4397 22.3585L39.8598 21.6558L37.1605 23.9068L36.4435 24.5107L30.0538 29.8144L34.3453 19.4267C34.5034 19.811 34.7038 20.2832 34.9252 20.8432L35.6844 22.677L36.3065 24.1923L37.034 23.5884L34.3453 17L28.5355 31.0771L28.3457 31.5383L29.263 31.6701L30.697 30.4732L31.3613 29.9242L31.5933 29.7375L32.2154 29.2104L32.8586 28.6834L34.5351 27.2779L36.2854 25.7845L36.802 25.3562L37.5296 24.7523V24.7853Z'
                        fill='black'
                      />
                      <path
                        d='M37.5299 25.2136C37.319 25.3783 37.1292 25.543 36.9395 25.7077C37.0871 26.081 37.2452 26.4653 37.4034 26.8057L39.5122 31.8898L40.3135 31.5054L37.6775 25.0818L37.551 25.1916'
                        fill='black'
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
            <NavList navigation={navigations} title='Apps' />
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
