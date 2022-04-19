

const NeedHelp = ({setMessages, setHelp}) => {
    return (
      <div className="help-btn-container">
          <div className="need">
              Besoin d'aide ?</div>
        <div className="help-btns">
          <span className="yes-btn" onClick={() => {setMessages(true); setHelp(false);}} >avec plaisir</span>
          <span className="no-btn" onClick={() => {setHelp(false)}} >non merci</span>
        </div>

      </div>
    );
};

export default NeedHelp;