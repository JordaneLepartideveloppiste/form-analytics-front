





const Result = ({
  unity,
  quantity,
  setQuantity,
  setUnity,
  convert,
  color,
  setColor,
  setResult,
  setConverter,
  isInverted,
  setIsInverted,
  setInputUnit,
  setIsClicked,
  setDivSelected,
  setIsChecked,
  setInputSelected,
  width,
  coef,
  itemValue,
  newItemValue,
  resultValue,
  setResultValue,
  resultStyle,
  setResultStyle,
  messagePlus,
  setMessagePlus,
}) => {

isInverted ? (setResultValue(itemValue / newItemValue)) : (quantity && itemValue && setResultValue((quantity * coef) / itemValue));
  
  console.log(quantity);
  console.log(coef);
  console.log(itemValue);
  console.log(newItemValue);

  const getResultShape = (res) => {
    if (
      !Number.isInteger(res) &&
      res.toString().indexOf(".") === 1 &&
      res.toFixed(6) !== "0.000000"
    ) {
      res = res.toFixed(6);
      setMessagePlus(false);
    } else if (!Number.isInteger(res) && res.toFixed(6) === "0.000000") {
      res = "Pourtant on aime les zéros d'habitude...";
      setResultStyle("too-big-result");
      setMessagePlus(false);
    } else if (!Number.isInteger(res) && res.toString().length < 10) {
      res = res.toFixed(2);
      setMessagePlus(false);
    } else if (
      !Number.isInteger(res) &&
      res.toString().length > 10 &&
      resultValue.toString().indexOf(".") > 1 &&
      resultValue.toString().indexOf(".") <= 5
    ) {
      res = res.toFixed(4);
      setResultStyle("big-result");
      setMessagePlus(false);
    } else if (
      !Number.isInteger(res) &&
      res.toString().length > 10 &&
      resultValue.toString().indexOf(".") > 5 &&
      resultValue.toString().indexOf(".") <= 9
    ) {
      res = res.toFixed(2);
      setResultStyle("big-result");
      setMessagePlus(false);
    } else if (
      !Number.isInteger(res) &&
      res.toString().length > 10 &&
      resultValue.toString().indexOf(".") >= 9
    ) {
      res = res.toFixed(0);
      setResultStyle("big-result");
      setMessagePlus(true);
    } else if (Number.isInteger(res)) {
      res = res.toString();
      setMessagePlus(false);
    }

    return res;
  };

  return (
    <div className="result">
      {!isInverted ? (<div
        className="close-result"
        onClick={() => setResult(false)}
        style={{ color: color, borderColor: color}}
      >
        X
      </div>) : null}
      
      <div className="result-content" style={{ backgroundColor: color }}>
        <div className="result-bg-anim"></div>
        <div className="result-message hidden" style={{ color: "#fff" }}>
          <div className="message-left">
            {width <= 505 ? (
              <div
                className={
                  unity.length > 10 || quantity.length > 10
                    ? "unit-inverted"
                    : "unit-start"
                }
              >
                <h3>{isInverted ? 1 : quantity}</h3>
                <h3>{unity}</h3>
              </div>
            ) : (
              <div className="unit-start">
                <h3>{isInverted ? 1 : quantity}</h3>
                <h3>{unity}</h3>
              </div>
            )}

            <h4>{quantity > 1 ? "correspondent à" : "correspond à"}</h4>
          </div>
          {resultStyle !== "too-big-result" ? (
            <div className="message-right">
              <h2 className={resultStyle}>{getResultShape(resultValue)}</h2>
              <span
                className={
                  isInverted
                    ? "invert-anim"
                    : convert.length > 9 && convert.length <= 17
                    ? "big-convert"
                    : convert.length > 17
                    ? "too-big-convert"
                    : null
                }
              >
                {convert}
              </span>
              {messagePlus ? <em>et des brouettes...</em> : null}
            </div>
          ) : (
            <div className="message-right">
              <h2 className={resultStyle}>{getResultShape(resultValue)}</h2>
              <span className="too-much-convert">...mais là tu exagères !</span>
            </div>
          )}
        </div>
        <div className="result-btn">
          <span
            id="tweet"
            style={{ backgroundColor: color }}
            onClick={() => window.open("https://twitter.com/?lang=fr")}
          >
            Tweet
          </span>

          <span
            id="insta"
            style={{ backgroundColor: color }}
            onClick={() => window.open("https://www.instagram.com/?hl=fr")}
          >
            Insta
          </span>
          {!isInverted ? (
            <span
              id="invert"
              style={{ backgroundColor: color }}
              onClick={() => {
                setIsInverted(true);
                setResult(false);
                setConverter(true);
                setIsChecked(true);
                setInputSelected(1);
                setUnity(convert);
                setQuantity(1);
              }}
            >
              Inverse
            </span>
          ) : null}

          <span
            id="raz"
            style={{ backgroundColor: color }}
            onClick={() => {
              setIsInverted(false);
              setResult(false);
              setConverter(false);
              setInputUnit(false);
              setDivSelected(0);
              setIsClicked(false);
              setIsChecked(false);
              setInputSelected(0);
              setColor("#39332D");
            }}
          >
            RàZ
          </span>
        </div>
      </div>
    </div>
  );
};

export default Result;
