import Head from 'next/head';

import SlidingMenu from '../components/sliding-menu/sliding-menu';

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
        <span>React Sliding Panel Example</span>
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
          margin-right: 15px;
        }

        .center-container {
          display: flex;
          align-items: center;
          justify-content: center;
          height: calc(100vh - 70px);
          min-height: 500px;
          width: 100vw;
        }

        .center-container span {
          color: #fff;
          font-family: sans-serif;
          font-size: 24px;
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
          font-family: sans-serif;
        }
      `}</style>
    </>
  );
}

export default HomePage;
