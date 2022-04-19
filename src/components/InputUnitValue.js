

const InputUnitValue = ({setConverter, isChecked, setIsChecked, isInverted, convert, itemValue, inputSelected, setInputSelected, color, unitiesToMap, quantity, setQuantity, setUnity, setCoef, messages}) => {

  const unitInvertedToMap = [];
  unitInvertedToMap.push({ title: convert, val: itemValue });
  console.log(unitInvertedToMap);

  
  
    const sendQuantity = (e) => {
      setQuantity(e.target.value);
       
    }

    const setCoefByUnit = (str) => {
      switch (str) {
        case "cm":
        case "cl":
        case "cents":
          setCoef(0.01);
          break;
        case "cm3":
        case "mm":
        case "ml":
        case "mg":
          setCoef(0.001);
          break;
        case "cm2":
          setCoef(0.0001);
          break;
        case "m/s":
          setCoef(3.6);
          break;
        case "dizaines":
          setCoef(10);
          break;
        case "min":
          setCoef(60);
          break;
        case "centaines":
        case "are":
          setCoef(100);
          break;
        case "milliers":
        case "K€":
        case "kg":
        case "km":
        case "m3":
          setCoef(1000);
          break;
        case "du son":
          setCoef(1234.8);
          break;
        case "h":
          setCoef(3600);
          break;
        case "ha":
          setCoef(10000);
          break;
        case "jour":
          setCoef(86400);
          break;
        case "T":
        case "M€":  
          setCoef(1000000);
          break;
        case "de la lumière":
          setCoef(1079253000);
          break;
        default:
          setCoef(1);       
          break;
      }

        
    }

    

  return (
    <div
      className={
        messages ? "input-unit-value-anim input-unit-value" : "input-unit-value"
      }
    >
      {!isInverted ? (
        <div className="input-unit-value-content">
          <div className="quantity-part">
            <label htmlFor="quantity">Quantité</label>
            <input
              type="text"
              name="quantity"
              id="quantity"
              placeholder="...1"
              style={{ "--placeholder-color": color, color: color }}
              onChange={sendQuantity}
            />
          </div>
          <span>en</span>
          <div className="unit-part">
            {unitiesToMap.map((elem, index) => {
              return (
                <div className="unit" key={index}>
                  <input
                    type="radio"
                    value={elem}
                    id={"unit-" + `${index + 1}`}
                    className="radio-unit"
                    style={{ color: color }}
                    onClick={
                      quantity
                        ? (e) => {
                            setConverter(true);
                            setIsChecked(true);
                            setInputSelected(index + 1);
                            setUnity(e.target.value);
                            setCoefByUnit(elem);
                          }
                        : null
                    }
                  />
                  <label
                    className={
                      isChecked && inputSelected === index + 1
                        ? "label label-checked"
                        : "label"
                    }
                    htmlFor={"unit-" + `${index + 1}`}
                    style={{ color: color }}
                  >
                    {elem}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="input-unit-value-content">
          <div className="quantity-part">
            <label htmlFor="quantity">Quantité</label>
            <input
              type="text"
              name="quantity"
              id="quantity"
              value={1}
              style={{ "--placeholder-color": color, color: color }}
            />
          </div>
          <div className="unit-part">
            <div className="unit">
              <input
                type="radio"
                value={unitInvertedToMap[0].val}
                id={"unit-1"}
                className="radio-unit"
                style={{ color: color }}
              />
              <label
                className={
                  isChecked && inputSelected === 1
                    ? "label label-checked"
                    : "label"
                }
                htmlFor={"unit-1"}
                style={{ color: color }}
              >
                {unitInvertedToMap[0].title}
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InputUnitValue;
