import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { Dashboard } from '@/features';
import Lay from '@/features/layout/layout';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      <Seo templateTitle='Dashboard' title='Dashboard' />
      <Seo />

      <main>
        <Lay>
          <Dashboard />
        </Lay>
      </main>
    </Layout>
  );
}
