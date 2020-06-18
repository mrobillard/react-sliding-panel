export default ({ children, open, clickHandler }) => {
  return (
    <div
      className={`menu-overlay ${open ? 'show' : null}`}
      onClick={clickHandler}
    >
      {children}

      <style jsx>{`
        .menu-overlay {
          z-index: 2;
          position: fixed;
          top: 0;
          right: 0;
          background-color: white;
          height: 100vh;
          width: 40vw;
          transform: translateX(100%);
          transition: all 500ms ease-in-out;
        }
        .menu-overlay.show {
          background-color: #fff;
          box-shadow: 10px -1px 48px -5px rgba(0, 0, 0, 0.56);
          transform: translateX(0%);
        }
        @media (max-width: 767px) {
          .menu-overlay {
            width: 100vw;
          }
        }
      `}</style>
    </div>
  );
};
