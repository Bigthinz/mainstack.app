import {
  CalendarIcon,
  DocumentDuplicateIcon,
  EnvelopeOpenIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';
import {
  Cog6ToothIcon,
  PaperAirplaneIcon,
  UserGroupIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import React, { ForwardRefExoticComponent, SVGProps } from 'react';

import {
  Container,
  HeadLink,
  NavFooter,
  NavHeader,
  NavMain,
  TextWrapper,
} from './side-nav-styles';
import NavList from '../nav-list/nav-list';
type IconType = ForwardRefExoticComponent<SVGProps<SVGSVGElement>>;

interface NavItem {
  name: string;
  icon: IconType;
  href: string;
  current: boolean;
  count?: number;
}

const navigations: NavItem[] = [
  {
    name: 'Compose',
    icon: PaperAirplaneIcon,
    href: '/compose',
    count: 2,
    current: false,
  },
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

const SideNav: React.FC = () => {
  const router = useRouter();

  return (
    <Container>
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
                  <rect width='49' height='49' rx='12' fill='#F5F5F5' />
                  <path
                    d='M28.325 30.875H22.125L21.525 33H17.25L23.175 15.5H27.25L33.2 33H28.925L28.325 30.875ZM27.425 27.7L25.225 19.925L23.025 27.7H27.425Z'
                    fill='#FC7B2C'
                  />
                </svg>
              </div>
              <TextWrapper>
                <p className='text-xs'>Obsidian achernar</p>
                <p className='text-sm'>Hr Comms</p>
              </TextWrapper>
            </div>
          </HeadLink>
        </NavHeader>
        <NavList navigation={navigations} title='Apps' />
      </NavMain>
      <NavFooter>
        <NavList navigation={others} title='Other' />
      </NavFooter>
    </Container>
  );
};

export default SideNav;
