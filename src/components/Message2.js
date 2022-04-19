import arrow from "../assets/img/arrow_dumb.webp";

const Message2 = ({width}) => {
  return (
    <div className="manual message2">
      <strong>2 .</strong>
      {width <= 506 ? (
        <>
          <p>
            Indique ensuite la quantité et l'unité de mesure...
          </p>
        </>
      ) : (
        <>
          <p>
            Ensuite, indique la quantité et l'unité de mesure pour ta{" "}
            <span>Conversion ...</span>
          </p>
        </>
      )}

      <img src={arrow} alt="arrow_indication" id="arrow2" />
      <img src={arrow} alt="arrow_indication" id="arrow3" />
    </div>
  );
};

export default Message2;
