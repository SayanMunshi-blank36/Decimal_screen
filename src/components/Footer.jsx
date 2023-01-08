import "../styles/Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer_container">
        <div className="left_footer">
          <p className="copyright">&copy; 2023 Decimal</p>
          <p className="made_by">made by Sayan Munshi</p>
        </div>
        <div className="right_footer">
          <ul className="footer_menu">
            <li>Explorer</li>
            <li>Calculator</li>
            <li>Status</li>
            <li>API & SDK</li>
            <li>Support</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
