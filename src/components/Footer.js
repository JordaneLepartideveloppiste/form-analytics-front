

const Footer = ({color}) => {
    return (
        <div className="test-footer">
            <span style={{textShadow: "2px 2px 1px" + `${color}`}}>- developed by Four Factory® -</span>
        </div>
    );
};

export default Footer;