import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import InputUnitValue from "../components/InputUnitValue";
import Result from "../components/Result";
import Converter from "../components/Converter";
import AllMessages from "../components/AllMessages";
import NeedHelp from "../components/NeedHelp";
import "../assets/scss/TestCss.scss";
import { useState, useEffect } from "react";

const TestCss = () => {
  const [converter, setConverter] = useState(false);
  const [inputUnit, setInputUnit] = useState(false);
  const [messages, setMessages] = useState(false);
  const [color, setColor] = useState("#39332D");
  const [unitiesToMap, setUnitiesToMap] = useState([]);
  const [optionsToMap, setOptionsToMap] = useState([]);
  const [result, setResult] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [unity, setUnity] = useState("");
  const [convert, setConvert] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [divSelected, setDivSelected] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const [inputSelected, setInputSelected] = useState(0);
  const [isInverted, setIsInverted] = useState(false);
  const [messagePlus, setMessagePlus] = useState(false);
  const [data, setData] = useState([]);
  const [coef, setCoef] = useState(1);
  const [itemValue, setItemValue] = useState(0);
  const [newItemValue, setNewItemValue] = useState(0);
  const [resultValue, setResultValue] = useState(0);
  const [resultStyle, setResultStyle] = useState("normal-result");
  const [isLoading, setIsLoading] = useState(true);
  const [instruction2, setInstruction2] = useState(false);
  const [instruction3, setInstruction3] = useState(false);
  const [help, setHelp] = useState(true);
  const [skipBtn, setSkipBtn] = useState(false);

  let width = window.innerWidth;

  

  

 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("./data/database.json", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        const dataFromJson = await res.json();
        console.log(dataFromJson);
        setData(dataFromJson);
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);

  //console.log(converter);

 
    return (
      <div className="test-css">
        <Header color={color} />
        {isLoading ? (
          <h5>Chargement des données en cours ...</h5>
        ) : (
          <div className="test-content">
            <form>
              <Sidebar
                data={data}
                setInputUnit={setInputUnit}
                setConverter={setConverter}
                setIsChecked={setIsChecked}
                isChecked={isChecked}
                setIsClicked={setIsClicked}
                isClicked={isClicked}
                setDivSelected={setDivSelected}
                divSelected={divSelected}
                setInputSelected={setInputSelected}
                setResult={setResult}
                setColor={setColor}
                color={color}
                setUnitiesToMap={setUnitiesToMap}
                setOptionsToMap={setOptionsToMap}
                setIsInverted={setIsInverted}
                messages={messages}
                setMessages={setMessages}
                setHelp={setHelp}
              />
              <div className="test-main-content">
                {help ? (
                  <NeedHelp setHelp={setHelp} setMessages={setMessages} />
                ) : null}

                {inputUnit ? (
                  <InputUnitValue
                    setConverter={setConverter}
                    isChecked={isChecked}
                    setIsChecked={setIsChecked}
                    inputSelected={inputSelected}
                    setInputSelected={setInputSelected}
                    quantity={quantity}
                    setQuantity={setQuantity}
                    setUnity={setUnity}
                    color={color}
                    unitiesToMap={unitiesToMap}
                    isInverted={isInverted}
                    convert={convert}
                    itemValue={itemValue}
                    setCoef={setCoef}
                    messages={messages}
                    newItemValue={newItemValue}
                  />
                ) : null}
                {converter ? (
                  <Converter
                    color={color}
                    optionsToMap={optionsToMap}
                    setResult={setResult}
                    convert={convert}
                    setConvert={setConvert}
                    unitiesToMap={unitiesToMap}
                    isInverted={isInverted}
                    width={width}
                    setItemValue={setItemValue}
                    setNewItemValue={setNewItemValue}
                    messages={messages}
                  />
                ) : null}
                {result ? (
                  <Result
                    coef={coef}
                    itemValue={itemValue}
                    quantity={quantity}
                    setQuantity={setQuantity}
                    setUnity={setUnity}
                    color={color}
                    setColor={setColor}
                    unity={unity}
                    convert={convert}
                    width={width}
                    setResult={setResult}
                    isInverted={isInverted}
                    setIsInverted={setIsInverted}
                    setConverter={setConverter}
                    setInputUnit={setInputUnit}
                    setIsClicked={setIsClicked}
                    setIsChecked={setIsChecked}
                    setDivSelected={setDivSelected}
                    setInputSelected={setInputSelected}
                    resultValue={resultValue}
                    setResultValue={setResultValue}
                    resultStyle={resultStyle}
                    setResultStyle={setResultStyle}
                    messagePlus={messagePlus}
                    setMessagePlus={setMessagePlus}
                    newItemValue={newItemValue}
                    setNewItemValue={setNewItemValue}
                  />
                ) : null}
                {messages ? (
                  <AllMessages
                    setInputUnit={setInputUnit}
                    setConverter={setConverter}
                    setIsChecked={setIsChecked}
                    setIsClicked={setIsClicked}
                    setDivSelected={setDivSelected}
                    setInputSelected={setInputSelected}
                    setUnitiesToMap={setUnitiesToMap}
                    setOptionsToMap={setOptionsToMap}
                    setMessages={setMessages}
                    instruction2={instruction2}
                    instruction3={instruction3}
                    setInstruction2={setInstruction2}
                    setInstruction3={setInstruction3}
                    setSkipBtn={setSkipBtn}
                    skipBtn={skipBtn}
                    width={width}
                  />
                 ) : null}
              </div>
            </form>
          </div>
        )}
        <Footer color={color} />
      </div>
    );
};

export default TestCss;
