import arrow from "../assets/img/arrow_dumb.webp";

const Message1 = ({ width }) => {
  return (
    <div className="manual message1">
      <strong>1 .</strong>
      {width <= 506 ? (
        <>
          <p>Commence par choisir la grandeur...</p>
          <img src={arrow} alt="arrow_indication" id="arrow1" />
        </>
      ) : (
        <>
          <span>Ô votre Grandeur !</span>
          <p>Non, ce n'est pas à toi qu'on s'adresse !</p>
          <br />
          <p>Commence par la choisir plutôt...</p>
          <img src={arrow} alt="arrow_indication" id="arrow1" />
        </>
      )}
    </div>
  );
};

export default Message1;
