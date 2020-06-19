import Head from 'next/head';

import SlidingMenu from '../components/sliding-menu/sliding-menu';
import H1 from '../components/heading';

function HomePage() {
  const currentDate = new Date();

  return (
    <>
      <Head>
        <title>React Sliding Panel</title>
      </Head>
      <div className='header-container'>
        <span>
          <SlidingMenu />
        </span>
      </div>
      <div className='center-container'>
        <H1>React Sliding Panel Example</H1>
      </div>
      <div className='footer-container'>
        <footer>
          <span>Matt Robillard &copy; {currentDate.getFullYear()}</span>
        </footer>
      </div>
      <style jsx>{`
        .header-container {
          width: 100vw;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        .header-container span {
          margin-right: 25px;
          margin-top: 15px;
        }

        .center-container {
          display: flex;
          align-items: center;
          justify-content: center;
          height: calc(100vh - 70px);
          min-height: 500px;
          width: 100vw;
        }

        .footer-container {
          height: 20px;
          width: 100vw;
          position: relative;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        footer {
          position: absolute;
          bottom: 0;
          margin-bottom: 15px;
        }

        .footer-container span {
          color: #fff;
          font-weight: 300;
        }
      `}</style>
    </>
  );
}

export default HomePage;
