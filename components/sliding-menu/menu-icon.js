export default ({ clickHandler, open }) => (
  <div
    className={`menu-button ${open ? 'button-closer' : null}`}
    onClick={clickHandler}
  >
    <div className={`button-line ${open ? 'button-closer' : null}`} />
    <div className={`button-line ${open ? 'button-closer' : null}`} />
    <div className={`button-line ${open ? 'button-closer' : null}`} />

    <style jsx>{`
      .menu-button {
        position: relative;
        z-index: 3;
        transition: all 450ms ease-in-out;
      }

      .button-line {
        width: 28px;
        height: 2px;
        margin: 0 0 5px 0;
        background-color: #fff;
        transition: all 450ms ease-in-out;
      }

      .button-closer {
        transform: rotate(180deg);
      }

      .button-closer div:nth-child(1) {
        background-color: #000;
        transform: rotate(45deg) translate(4px, 0px) scaleX(0.49);
      }

      .button-closer div:nth-child(2) {
        background-color: #000;
        transform: translateX(-8px);
      }

      .button-closer div:nth-child(3) {
        background-color: #000;
        transform: rotate(-45deg) translate(4px, 0px) scaleX(0.49);
      }

      div {
        font-size: 16px;
        color: white;
        width: 28px;
        height: 20px;
        font-color: white;
      }
    `}</style>
  </div>
);
