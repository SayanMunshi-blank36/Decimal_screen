import { AiFillHome, AiOutlineSwap } from "react-icons/ai";
import { GiCrossedChains, GiBreakingChain } from "react-icons/gi";
import { FaServer, FaSignOutAlt } from "react-icons/fa";
import { BsCoin, BsImage, BsReceipt, BsBroadcastPin } from "react-icons/bs";
import "../styles/Sidebar.css";

const Sidebar = () => {
  const liHandleClick = () => {};

  return (
    <>
      <div className="sidebar_container">
        <div className="sidebar_elems">
          <ul className="sidebar_elems_list">
            <li
              onClick={liHandleClick}
              className="sidebar_list_item selected_list_item"
            >
              <AiFillHome className="sidebar_icon" />
              <span className="list_span">Dashboard</span>
            </li>
            <li onClick={liHandleClick} className="sidebar_list_item">
              <AiOutlineSwap className="sidebar_icon" />
              <span className="list_span">Swap</span>
            </li>
            <li onClick={liHandleClick} className="sidebar_list_item">
              <GiCrossedChains className="sidebar_icon" />
              <span className="list_span">Cross-Chain</span>
            </li>
            <li onClick={liHandleClick} className="sidebar_list_item">
              <GiBreakingChain className="sidebar_icon" />
              <span className="list_span">Bond</span>
            </li>
            <li onClick={liHandleClick} className="sidebar_list_item">
              <FaServer className="sidebar_icon" />
              <span className="list_span">Masternode</span>
            </li>
            <li onClick={liHandleClick} className="sidebar_list_item">
              <BsCoin className="sidebar_icon" />
              <span className="list_span">Coins</span>
            </li>
            <li onClick={liHandleClick} className="sidebar_list_item">
              <BsImage className="sidebar_icon" />
              <span className="list_span">NFT</span>
            </li>
            <li onClick={liHandleClick} className="sidebar_list_item">
              <BsReceipt className="sidebar_icon" />
              <span className="list_span">Receipts</span>
            </li>
            <li onClick={liHandleClick} className="sidebar_list_item">
              <BsBroadcastPin className="sidebar_icon" />
              <span className="list_span">Broadcast</span>
            </li>
          </ul>
          <button className="sign_out_btn">
            <FaSignOutAlt className="sign_out_icon" />
            <span>Sign out</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
