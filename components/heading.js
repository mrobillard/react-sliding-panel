const H1 = ({ children }) => {
  return (
    <h1>
      {children}
      <style jsx>{`
        h1 {
          color: #fff;
          font-size: 24px;
          font-weight: 500;
        }
      `}</style>
    </h1>
  );
};

export default H1;
