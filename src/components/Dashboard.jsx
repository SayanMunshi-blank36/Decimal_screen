import {
  AiOutlineCopy,
  AiOutlineQrcode,
  AiOutlineArrowUp,
  AiFillCheckCircle,
  AiOutlineDown,
} from "react-icons/ai";
import { SiBitcoinsv } from "react-icons/si";
import { BsImage } from "react-icons/bs";
import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard_conatiner">
        <header className="darshboard_header">
          <h1 className="dashboard_heading">Dashboard</h1>
          <div className="toggle_dashboard_rightmost">
            <div className="wallet">
              <p>Wallet</p>
            </div>
            <div className="multisig">
              <p>Multisig</p>
            </div>
          </div>
        </header>
        <div className="header_below_section">
          <div className="square_profile"></div>
          <div className="info_header">
            <p className="upper_info_up">dx1fqz...7ruk</p>
            <p className="upper_info_down">Decimal</p>
          </div>
          <div className="square_btn">
            <AiOutlineCopy />
          </div>
          <div className="square_btn">
            <AiOutlineQrcode />
          </div>
          <p className="amt_shown">$2,117.96</p>
        </div>
        <div className="header_below_section below_middle_section">
          <div className="left_middle_section">
            <button className="up_icon_btn">
              <AiOutlineArrowUp />
            </button>
            <p className="send_coins">Send coins</p>
            <p className="send_coins_text">
              Transfer your coins to whoever you want - friends, family or
              business partners
            </p>
          </div>
          <div className="right_middle_section">
            <div className="right_middle_top">
              <div className="search_display">
                <div className="left_section_search_display">
                  <AiFillCheckCircle /> <span>0xaeD3...7a98</span>
                </div>
                <div className="right_section_search_display">
                  <AiOutlineQrcode />
                </div>
              </div>
              <div className="search_display">
                <div className="left_section_search_display">
                  <SiBitcoinsv /> <span>BitTeam Token</span> BTT
                </div>
                <div className="right_section_search_display">
                  <AiOutlineDown />
                </div>
              </div>
              <div className="search_display">
                <div className="left_section_search_display">
                  <span>48.26</span> BTT
                </div>
                <div className="right_section_search_display">
                  <button className="max_btn">MAX</button>
                </div>
              </div>
            </div>
            <button className="right_middle_center">
              <span className="plus_sign">+</span>Add recepient
            </button>
            <div className="right_middle_bottom">
              <div className="advanced_btn">
                <div className="toggle_btn">
                  <div className="toggle"></div>
                </div>
                <span>Advanced</span>
              </div>
              <button className="send_btn">Send</button>
            </div>
          </div>
        </div>
        <div className="below_section">
          <div className="header_below_section">
            <div className="header_section_coins">
              <div className="left_header_section_coins">
                <button className="ico_btn">
                  <SiBitcoinsv />
                </button>
                <span>Coins</span>
              </div>
              <div className="right_header_section_coins">$1,541.08</div>
            </div>
            <div className="section_coins">
              <ul className="coins">
                <li>
                  <div className="left_header_section_coins">
                    <SiBitcoinsv className="coins_logo" />
                    <span>Decimal DEL</span>
                  </div>
                  <div className="right_header_section_coins">7.338080</div>
                </li>
                <li>
                  <div className="left_header_section_coins">
                    <SiBitcoinsv className="coins_logo" />
                    <span>BitTeam Token BTT</span>
                  </div>
                  <div className="right_header_section_coins">635.467521</div>
                </li>
                <li>
                  <div className="left_header_section_coins">
                    <SiBitcoinsv className="coins_logo" />
                    <span>Minter Network BIP</span>
                  </div>
                  <div className="right_header_section_coins">0.207157</div>
                </li>
                <li>
                  <div className="left_header_section_coins">
                    <SiBitcoinsv className="coins_logo" />
                    <span>Wordlex WDX</span>
                  </div>
                  <div className="right_header_section_coins">20.492678</div>
                </li>
              </ul>
            </div>
          </div>
          <div className="header_below_section">
            <div className="header_section_coins">
              <div className="left_header_section_coins">
                <button className="ico_btn">
                  <BsImage />
                </button>
                <span>NFTs</span>
              </div>
              <div className="right_header_section_coins">$576.88</div>
            </div>
            <div className="nft_section_content">
              <div className="nft_box nft_box_1">
                <div className="img_cont"></div>
                <div className="nft_text">
                  <p className="nft_head">Rarible</p>
                  <p className="nft_t">$411.88</p>
                </div>
              </div>
              <div className="nft_box nft_box_2">
                <div className="img_cont"></div>
                <div className="nft_text">
                  <p className="nft_head">BitTeam Marketplace</p>
                  <p className="nft_t">$165.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
