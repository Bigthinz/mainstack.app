import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ForwardRefExoticComponent, SVGProps } from 'react';

import { Nav, NavLink } from './nav-list-styles';

type IconType = ForwardRefExoticComponent<SVGProps<SVGSVGElement>>;

interface NavigationItem {
  name: string;
  icon: IconType;
  href: string;
  current: boolean;
  count?: number;
}

interface NavListProps {
  navigation: NavigationItem[];
  title: string;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const NavList: React.FC<NavListProps> = ({
  navigation,
  title,
}: NavListProps) => {
  const router = useRouter();
  const isComposeRoute = router.pathname;

  return (
    <Nav>
      <p className='title '>{title}</p>
      {navigation.map((item) => (
        <Link href={item.href} key={item.name}>
          <NavLink
            // href={item.href}
            className={`${
              router.asPath.includes(item.href)
                ? ' text-gray-900  '
                : '  text-gray-900'
            } flex items-center space-y-1  rounded-md px-2 py-2 text-sm  hover:text-gray-900 `}
          >
            <item.icon
              className={`
              ${
                router.asPath.includes(item.href)
                  ? 'icon-true text-[#FC7B2C]    '
                  : ' '
              }
              icon   ${item.current} ? 'icon-true '  : 'icon-false ' `}
              aria-hidden='true'
            />
            <span className='flex-1'>{item.name}</span>
          </NavLink>
        </Link>
      ))}
    </Nav>
  );
};

export default NavList;
