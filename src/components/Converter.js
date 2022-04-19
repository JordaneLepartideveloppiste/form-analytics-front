import { useRef, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight
} from "@fortawesome/free-solid-svg-icons";


const Converter = ({color, optionsToMap, setResult, convert, setConvert, isInverted, width, setItemValue, messages, setNewItemValue}) => {
    const [count, setCount] = useState(1);
    const [btn, setBtn] = useState(color);
    const [bgcBtn, setBgcBtn] = useState("transparent");

    

    const parentRef = useRef();
    const childRef = useRef();

    if (isInverted) {
      optionsToMap = optionsToMap.filter((option) => option.name !== convert);
    }

    //console.log(optionsToMap);


    let scrollWidth = 0;
    if (width <= 1280 && width >=1195) {
      scrollWidth = 888;
    } else if (width <= 1194 && width >= 1181) {
      scrollWidth = 873;
    }  else if (width <= 1180 && width >= 1025) {
      scrollWidth = 870;
    }  else if (width <= 1024 && width >= 927) {
      scrollWidth = 842;
    } else if (width === 926) {
      scrollWidth = 759;
    }



    const handleClickLeft = () => {
         if (count === 1) {
             setCount(optionsToMap.length);
           parentRef.current.scrollTo((optionsToMap.length - 1) * scrollWidth, 0);
           //console.log("si c'est premier : " + count);
           console.log(parentRef.current.scrollLeft);
           
         } else {
           parentRef.current.scrollTo(
             parentRef.current.scrollLeft - (scrollWidth),
             0
           );
           setCount(count - 1);
           //console.log("left standard : " + count);
           console.log(parentRef.current.scrollLeft);
         }

    
    };
    
    const handleClickRight = () => {
        if (count === optionsToMap.length) {
          parentRef.current.scrollTo(0, 0);
          setCount(1);
          //console.log("si c'est dernier : " + count);
          console.log(parentRef.current.scrollLeft);
        } else {
          setCount(count + 1);
          parentRef.current.scrollTo(
            parentRef.current.scrollLeft + (scrollWidth),
            0
          );
          //console.log("right standard : " + count);
          console.log(parentRef.current.scrollLeft);
        }       
  
    };

    

    const isolateNumberIntoString = (str, elem) => {

      const matches = str.match(/\d+/g);
      const keys = [];
      const sentenceParts = [];
      const completeSentence = [];

      //console.log(matches);

      if (matches) {
        for (let i = 0; i < matches.length; i++) {
          keys.push(str.indexOf(matches[i]));
          

          
        }



        sentenceParts.push(str.slice(0, keys[0]));

        for (let y = 0; y < keys.length; y++) {
          
          sentenceParts.push(
            str.slice(keys[y], keys[y + 1]).replace(/\d+/g, "")
          );
        }

        for (let z = 0; z < sentenceParts.length; z++) {
          completeSentence.push({
            string: sentenceParts[z],
            value: matches[z],
          });
        }

        const message = completeSentence.map((sentencePart, index) => {
          return (
            <span key={index}>
              {sentencePart.string}
              <strong style={{ color: color }}>{sentencePart.value}</strong>
            </span>
          );
        });

        //  console.log(keys);
        //  console.log(sentenceParts);
        //  console.log(completeSentence);

        return message;
      } else {

        const messageWithoutNumber = <p>{elem.text}</p>;
        return messageWithoutNumber;
      }

      
     

      

      
    }

    

    return (
      <div className="test-converter">
        {width <= 1024 && width > 926 ? (
          <div className="test-content-part">
            <div className="carousel-btn" onClick={handleClickLeft}>
              <FontAwesomeIcon
                icon={faChevronLeft}
                className={messages ? "btn-l btn-anim" : "btn-l"}
                fontSize={30}
              />
            </div>
            <div className="unit-options" ref={parentRef}>
              {optionsToMap.map((elem, index) => {
                return (
                  <div
                    className="unit-option unit-option-1"
                    id={"unit-option-" + `${index + 1}`}
                    ref={childRef}
                    key={index}
                    style={{ borderColor: color }}
                  >
                    <div className="option-img">
                      <div className="to">
                        <span style={{ backgroundColor: color }}>EN</span>
                      </div>
                      <div className="sketch">
                        <img
                          src={elem.img}
                          className="sketch-img"
                          alt="illustration"
                        />
                      </div>
                      <div className="option-title">
                        <span
                          style={{ color: color }}
                          className={elem.name.length > 19 ? "big-title" : null}
                        >
                          {elem.name}
                        </span>
                      </div>
                    </div>
                    <div className="option-part-right">
                      <div
                        className="option-description"
                        style={{ border: "2px solid" + `${color}` }}
                      >
                        <div
                          className="description-title"
                          style={{
                            color: color,
                            borderBottom: "2px solid" + `${color}`,
                          }}
                        >
                          Palmarès :
                        </div>
                        <div className="description" id="description">
                          {isolateNumberIntoString(elem.text, color)}
                          {/* <p>{elem.text}</p> */}
                        </div>
                      </div>
                      <div
                        className="converter-btn"
                        onClick={() => {
                          setResult(true);
                          setConvert(elem.name);
                          setItemValue(elem.number);
                        }}
                        onMouseEnter={() => {
                          setBgcBtn(color);
                          setBtn("#fff");
                        }}
                        onMouseLeave={() => {
                          setBgcBtn("transparent");
                          setBtn(color);
                        }}
                        style={{
                          backgroundColor: bgcBtn,
                          color: btn,
                          border: "2px solid" + `${color}`,
                        }}
                      >
                        Convertir
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="carousel-btn" onClick={handleClickRight}>
              <FontAwesomeIcon
                icon={faChevronRight}
                className={messages ? "btn-r btn-anim" : "btn-r"}
                fontSize={30}
              />
            </div>
          </div>
        ) : width <= 926 && width > 845 ? (
          <div className="test-content-part">
            <div className="carousel-btn" onClick={handleClickLeft}>
              <FontAwesomeIcon
                icon={faChevronLeft}
                className={messages ? "btn-l btn-anim" : "btn-l"}
                fontSize={30}
              />
            </div>
            <div className="unit-options" ref={parentRef}>
              {optionsToMap.map((elem, index) => {
                return (
                  <div
                    className="unit-option unit-option-1"
                    id={"unit-option-" + `${index + 1}`}
                    ref={childRef}
                    key={index}
                    style={{ borderColor: color }}
                  >
                    <div className="unit-option-top">
                      <div className="option-img">
                        <div className="to">
                          <span style={{ backgroundColor: color }}>EN</span>
                        </div>
                        <div className="sketch">
                          <img
                            src={elem.img}
                            className="sketch-img"
                            alt="illustration"
                          />
                        </div>
                        <div className="option-title">
                          <span
                            style={{ color: color }}
                            className={
                              elem.name.length > 16 ? "big-title" : null
                            }
                          >
                            {elem.name}
                          </span>
                        </div>
                      </div>
                      <div className="option-part-right">
                        <div
                          className="option-description"
                          style={{ border: "2px solid" + `${color}` }}
                        >
                          <div
                            className="description-title"
                            style={{
                              color: color,
                              borderBottom: "2px solid" + `${color}`,
                            }}
                          >
                            Palmarès :
                          </div>
                          <div className="description" id="description">
                            {isolateNumberIntoString(elem.text, color)}
                            {/* <p>{elem.text}</p> */}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="converter-btn"
                      onClick={() => {
                        setResult(true);
                        setConvert(elem.name);
                        setItemValue(elem.number);
                      }}
                      onMouseEnter={() => {
                        setBgcBtn(color);
                        setBtn("#fff");
                      }}
                      onMouseLeave={() => {
                        setBgcBtn("transparent");
                        setBtn(color);
                      }}
                      style={{
                        backgroundColor: bgcBtn,
                        color: btn,
                        border: "2px solid" + `${color}`,
                      }}
                    >
                      Convertir
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="carousel-btn" onClick={handleClickRight}>
              <FontAwesomeIcon
                icon={faChevronRight}
                className={messages ? "btn-r btn-anim" : "btn-r"}
                fontSize={30}
              />
            </div>
          </div>
        ) : width <= 844 && width >= 737 ? (
          <div className="test-content-part">
            <div className="unit-options" ref={parentRef}>
              {optionsToMap.map((elem, index) => {
                return (
                  <div
                    className="unit-option unit-option-1"
                    id={"unit-option-" + `${index + 1}`}
                    ref={childRef}
                    key={index}
                    style={{ borderColor: color }}
                  >
                    <div className="unit-option-top">
                      <div className="option-img">
                        <div className="to">
                          <span style={{ backgroundColor: color }}>EN</span>
                        </div>
                        <div className="sketch">
                          <img
                            src={elem.img}
                            className="sketch-img"
                            alt="illustration"
                          />
                        </div>
                        <div className="option-title">
                          <span
                            style={{ color: color }}
                            className={
                              elem.name.length > 16 ? "big-title" : null
                            }
                          >
                            {elem.name}
                          </span>
                        </div>
                      </div>
                      <div className="option-part-right">
                        <div
                          className="option-description"
                          style={{ border: "2px solid" + `${color}` }}
                        >
                          <div
                            className="description-title"
                            style={{
                              color: color,
                              borderBottom: "2px solid" + `${color}`,
                            }}
                          >
                            Palmarès :
                          </div>
                          <div className="description" id="description">
                            {isolateNumberIntoString(elem.text, color)}
                            {/* <p>{elem.text}</p> */}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="converter-btn"
                      onClick={() => {
                        setResult(true);
                        setConvert(elem.name);
                        setItemValue(elem.number);
                      }}
                      onMouseEnter={() => {
                        setBgcBtn(color);
                        setBtn("#fff");
                      }}
                      onMouseLeave={() => {
                        setBgcBtn("transparent");
                        setBtn(color);
                      }}
                      style={{
                        backgroundColor: bgcBtn,
                        color: btn,
                        border: "2px solid" + `${color}`,
                      }}
                    >
                      Convertir
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : width <= 736 && width >= 507 ? (
          <div className="test-content-part">
            <div className="unit-options" ref={parentRef}>
              {optionsToMap.map((elem, index) => {
                return (
                  <div
                    className="unit-option unit-option-1"
                    id={"unit-option-" + `${index + 1}`}
                    ref={childRef}
                    key={index}
                    style={{ borderColor: color }}
                    onClick={() => {
                      setResult(true);
                      setConvert(elem.name);
                      setItemValue(elem.number);
                    }}
                  >
                    <div className="unit-option-top">
                      <div className="option-img">
                        <div className="to">
                          <span style={{ backgroundColor: color }}>EN</span>
                        </div>
                        <div className="sketch">
                          <img
                            src={elem.img}
                            className="sketch-img"
                            alt="illustration"
                          />
                        </div>
                        <div className="option-title">
                          <span
                            style={{ color: color }}
                            className={
                              elem.name.length > 16 ? "big-title" : null
                            }
                          >
                            {elem.name}
                          </span>
                        </div>
                      </div>
                      <div className="option-part-right">
                        <div
                          className="option-description"
                          style={{ border: "2px solid" + `${color}` }}
                        >
                          <div
                            className="description-title"
                            style={{
                              color: color,
                              borderBottom: "2px solid" + `${color}`,
                            }}
                          >
                            Palmarès :
                          </div>
                          <div className="description" id="description">
                            {isolateNumberIntoString(elem.text, color)}
                            {/* <p>{elem.text}</p> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : width <= 506 ? (
          <div className="test-content-part">
            <div className="unit-1-options" ref={parentRef}>
              {optionsToMap.map((elem, index) => {
                return (
                  <div
                    className="unit-option unit-option-1"
                    ref={childRef}
                    key={index}
                    style={{ borderColor: color }}
                    onClick={() => {
                      setResult(true);
                      setConvert(elem.name);
                      setItemValue(elem.number);
                    }}
                  >
                    <div className="option-img">
                      <div className="to">
                        <span style={{ backgroundColor: color }}>EN</span>
                      </div>
                      <div className="sketch">
                        <img
                          src={elem.img}
                          className="sketch-img"
                          alt="illustration"
                        />
                      </div>
                      <div className="option-title">
                        <span
                          style={{ color: color }}
                          className={elem.name.length > 19 ? "big-title" : null}
                        >
                          {elem.name}
                        </span>
                      </div>
                    </div>
                    <div className="option-part-right">
                      <div
                        className="option-description"
                        style={{ border: "2px solid" + `${color}` }}
                      >
                        <div
                          className="description-title"
                          style={{
                            color: color,
                            borderBottom: "2px solid" + `${color}`,
                          }}
                        >
                          Palmarès :
                        </div>
                        <div className="description" id="description">
                          {isolateNumberIntoString(elem.text, elem)}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="test-content-part">
            <div className="carousel-btn" onClick={handleClickLeft}>
              <FontAwesomeIcon
                icon={faChevronLeft}
                className={messages ? "btn-l btn-anim" : "btn-l"}
                fontSize={30}
              />
            </div>
            <div className="unit-options" ref={parentRef}>
              <div className="unit-option" style={{ borderColor: color }}>
                <div className="option-img">
                  <div className="to">
                    <span>EN</span>
                  </div>
                  <div className="sketch">
                    <img
                      src={(optionsToMap.length - 1).img}
                      className="sketch-img"
                      alt="illustration"
                    />
                  </div>
                  <div className="option-title">
                    <span
                      className={
                        optionsToMap[optionsToMap.length - 1].name.length > 19
                          ? "big-title"
                          : null
                      }
                    >
                      {optionsToMap[optionsToMap.length - 1].name}
                    </span>
                  </div>
                </div>
                <div className="option-part-right">
                  <div
                    className="option-description"
                    style={{ border: "2px solid" + `${color}` }}
                  >
                    <div
                      className="description-title"
                      style={{
                        color: color,
                        borderBottom: "2px solid" + `${color}`,
                      }}
                    >
                      Palmarès :
                    </div>
                    <div className="description">
                      <p>
                        {isolateNumberIntoString(
                          optionsToMap[optionsToMap.length - 1].text,
                          color
                        )}
                      </p>
                    </div>
                  </div>
                  <div
                    className="converter-btn btn-0"
                    style={{
                      backgroundColor: bgcBtn,
                      color: btn,
                      border: "2px solid" + `${color}`,
                    }}
                    onClick={() => {
                      setResult(true);
                    }}
                  >
                    Convertir
                  </div>
                </div>
              </div>
              {optionsToMap.map((elem, index) => {
                return (
                  <div
                    className="unit-option unit-option-1"
                    ref={childRef}
                    key={index}
                    style={{ borderColor: color }}
                  >
                    <div className="option-img">
                      <div className="to">
                        <span style={{ backgroundColor: color }}>EN</span>
                      </div>
                      <div className="sketch">
                        <img
                          src={elem.img}
                          className="sketch-img"
                          alt="illustration"
                        />
                      </div>
                      <div className="option-title">
                        <span
                          style={{ color: color }}
                          className={elem.name.length > 19 ? "big-title" : null}
                        >
                          {elem.name}
                        </span>
                      </div>
                    </div>
                    <div className="option-part-right">
                      <div
                        className="option-description"
                        style={{ border: "2px solid" + `${color}` }}
                      >
                        <div
                          className="description-title"
                          style={{
                            color: color,
                            borderBottom: "2px solid" + `${color}`,
                          }}
                        >
                          Palmarès :
                        </div>
                        <div className="description" id="description">
                          {isolateNumberIntoString(elem.text, color)}
                          {/* <p>{elem.text}</p> */}
                        </div>
                      </div>
                      {!isInverted ? (
                        <div
                          className="converter-btn"
                          onClick={() => {
                            setResult(true);
                            setConvert(elem.name);
                            setItemValue(elem.number);
                          }}
                          onMouseEnter={() => {
                            setBgcBtn(color);
                            setBtn("#fff");
                          }}
                          onMouseLeave={() => {
                            setBgcBtn("transparent");
                            setBtn(color);
                          }}
                          style={{
                            backgroundColor: bgcBtn,
                            color: btn,
                            border: "2px solid" + `${color}`,
                          }}
                        >
                          Convertir
                        </div>
                      ) : (
                        <div
                          className="converter-btn"
                          onClick={() => {
                            setResult(true);
                            setConvert(elem.name);
                            setNewItemValue(elem.number);
                          }}
                          onMouseEnter={() => {
                            setBgcBtn(color);
                            setBtn("#fff");
                          }}
                          onMouseLeave={() => {
                            setBgcBtn("transparent");
                            setBtn(color);
                          }}
                          style={{
                            backgroundColor: bgcBtn,
                            color: btn,
                            border: "2px solid" + `${color}`,
                          }}
                        >
                          Convertir
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
              <div
                className="unit-option unit-option-1"
                ref={childRef}
                style={{ borderColor: color }}
              >
                <div className="option-img">
                  <div className="to">
                    <span>EN</span>
                  </div>
                  <div className="sketch">
                    <img
                      src={optionsToMap[0].img}
                      className="sketch-img"
                      alt="illustration"
                    />
                  </div>
                  <div className="option-title">
                    <span>{optionsToMap[0].name}</span>
                  </div>
                </div>
                <div className="option-part-right">
                  <div className="option-description">
                    <div className="description-title">Palmarès :</div>
                    <div className="description">
                      <p>
                        {isolateNumberIntoString(optionsToMap[0].text, color)}
                      </p>
                    </div>
                  </div>
                  <div className="converter-btn">Convertir</div>
                </div>
              </div>
            </div>
            <div className="carousel-btn" onClick={handleClickRight}>
              <FontAwesomeIcon
                icon={faChevronRight}
                className={messages ? "btn-r btn-anim" : "btn-r"}
                fontSize={30}
              />
            </div>
          </div>
        )}
      </div>
    );
};

export default Converter;