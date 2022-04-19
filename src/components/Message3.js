import arrow from "../assets/img/arrow_dumb.webp";

const Message3 = ({width}) => {
  return (
    <div className="manual message3">
      <strong>3 .</strong>
      {width <= 506 ? (
        <>
          <p>Enfin tu sélectionnes un</p>
          <span>DumbItems !</span>
        </>
      ) : (
        <>
          <p>Enfin tu convertis en sélectionnant un de nos</p>
          <span>DumbItems !</span>
        </>
      )}

      <img src={arrow} alt="arrow_indication" id="arrow4" />
      <img src={arrow} alt="arrow_indication" id="arrow5" />
      <img src={arrow} alt="arrow_indication" id="arrow6" />
    </div>
  );
};

export default Message3;
