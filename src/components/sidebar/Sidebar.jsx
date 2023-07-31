import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import axios from "axios";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const handleLogout = async () => {
    try {
      await axios.post("/auth/logout");
      window.location.href = "/login";
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Toko Ibu Ena</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/pelanggan" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Pelanggan</span>
            </li>
          </Link>
          <Link to="/memesan" style={{ textDecoration: "none" }}>
            <li>
              <CreditCardIcon className="icon" />
              <span>Pemesanan Makanan</span>
            </li>
          </Link>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Pembayaran</span>
          </li>
          <p className="title">PENGELOLAAN DATA DAPUR</p>
          <Link to="/resep" style={{ textDecoration: "none" }}>
            <li>
              <RestaurantMenuIcon className="icon" />
              <span>Resep</span>
            </li>
          </Link>
          <Link to="/menu" style={{ textDecoration: "none" }}>
            <li>
              <MenuBookIcon className="icon" />
              <span>Menu</span>
            </li>
          </Link>
          <Link to="/bahanbaku" style={{ textDecoration: "none" }}>
            <li>
              <ShoppingBasketIcon className="icon" />
              <span>Bahan Baku</span>
            </li>
          </Link>
          <Link to="/pembelianbahan" style={{ textDecoration: "none" }}>
            <li>
              <FoodBankIcon className="icon" />
              <span>Pembelian Bahan</span>
            </li>
          </Link>
          <Link to="/detailbelanja" style={{ textDecoration: "none" }}>
            <li>
              <ShoppingCartIcon className="icon" />
              <span>Detail Belanja</span>
            </li>
          </Link>
          <p className="title">USER</p>

          <Link
            to="#"
            onClick={handleLogout}
            style={{ textDecoration: "none" }}
          >
            <li>
              <ExitToAppIcon className="icon" />
              <span>Logout</span>
            </li>
          </Link>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
