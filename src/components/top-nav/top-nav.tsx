import { useRouter } from 'next/router';
import React from 'react';

// import ProfilePicture from '@/components/profile-picture';
import { Container } from './top-nav-styles';

const TopNav = () => {
  const router = useRouter();
  const path = router.asPath;
  const pageTitles = [{ route: '/', title: 'Dashboard' }];
  const pageTitle = pageTitles.find((item) => item.route === path)?.title || '';

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <Container className='flex items-center justify-between py-8  text-sm'>
      <div className=''>
        <h4 className='text-2xl font-bold'>{pageTitle}</h4>
      </div>
      <div className='right-nav '></div>
    </Container>
  );
};

export default TopNav;
