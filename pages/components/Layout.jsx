import { useRouter } from 'next/router';
import React from 'react';
import Footer from './Footer';
import Header from './Header';
import SimpleHeader from './SimpleHeader';

const Layout = ({ children }) => {
  const router = useRouter();
 

  return (
    <div className='wrapper'>
        { router.asPath !== '' ? 
          <div>
            <SimpleHeader/>
          </div>
          :
        <Header />
        }
      <main className="main">
        {children}
      </main>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
