import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ForwardRefExoticComponent, SVGProps } from 'react';

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
    <div className=' mb-5 mt-3  space-y-1  px-2'>
      {title && (
        <p className='mb-3 px-2  text-sm font-medium text-gray-900 '>{title}</p>
      )}
      {navigation.map((item) => (
        <Link href={item.href} key={item.name}>
          <div
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
              mr-3 h-5 w-5 flex-shrink-0   ${
                item.current
              } ? 'text-[#FC7B2C] '  : ' hover:text-gray-500' text-white `}
              aria-hidden='true'
            />
            <span className='flex-1'>{item.name}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NavList;
