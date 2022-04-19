import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = ({
  data,
  setInputUnit,
  setConverter,
  setIsInverted,
  isClicked,
  setIsClicked,
  divSelected,
  setDivSelected,
  isChecked,
  setIsChecked,
  setResult,
  setColor,
  setUnitiesToMap,
  setOptionsToMap,
  messages,
  setMessages,
  setHelp
}) => {
  return (
    <div
      className={messages ? "test-sidebar-anim test-sidebar" : "test-sidebar"}
    >
      <div className="sidebar-title">Grandeurs</div>
      <div className="sidebar-options">
        {data.map((elem, index) => {
          //const [isClicked{index}, setIsClicked{index}] = useState(false);
          return (
            <div
              key={index}
              className={
                isClicked && divSelected === elem.id
                  ? "sidebar-option option" + `${index + 1}` + "C"
                  : isClicked && divSelected !== elem.id
                  ? "sidebar-option option" + `${index + 1}`
                  : "sidebar-option option" + `${index + 1}`
              }
              onClick={() => {
                isClicked && setIsClicked(false);
                setDivSelected(elem.id);
                setIsClicked(true);
                setInputUnit(true);
                setConverter(false);
                setIsInverted(false);
                setResult(false);
                setColor(elem.color);
                setUnitiesToMap(elem.unities);
                setOptionsToMap(elem.options);
                setMessages(false);
                setHelp(false);
              }}
            >
              <span>{elem.name}</span>

              <FontAwesomeIcon className="icon-menu" icon={elem.icon} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
