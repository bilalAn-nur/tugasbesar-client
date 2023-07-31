import "./newResep.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetchTwoCollection";

const NewResep = ({ inputs, title }) => {
  const [info, setInfo] = useState({});
  const navigate = useNavigate();
  const [menu, setMenus] = useState([]);
  const [bahanbaku, setBahanBakus] = useState([]);

  const {
    data: dataMenu,
    loading: loadingMenu,
    error: errorMenu,
  } = useFetch("menu");

  const {
    data: dataBahanBaku,
    loading: loadingBahanBaku,
    error: errorBahanBaku,
  } = useFetch("bahanbaku");

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSelect = (e) => {
    const value = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setBahanBakus(value);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const newResep = {
        ...info,
      };
      await axios.post("/resep", newResep);
      navigate("/resep");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              <div className="formInput">
                <label>Nama Menu</label>
                <select id="id_menu" onChange={handleChange}>
                  {loadingMenu
                    ? "loading"
                    : dataMenu &&
                      dataMenu.map((menu) => (
                        <option value={menu.nama_menu}>{menu.nama_menu}</option>
                      ))}
                </select>
              </div>
              <div className="selectResep">
                <label>Bahan Baku</label>
                <select id="id_bahan_baku" multiple onChange={handleSelect}>
                  {loadingBahanBaku
                    ? "loading"
                    : dataBahanBaku &&
                      dataBahanBaku.map((bahanbaku) => (
                        <option value={bahanbaku.nama_bahan_baku}>
                          {bahanbaku.nama_bahan_baku}
                        </option>
                      ))}
                </select>
              </div>

              <div className="formInput">
                <label>L</label>
                <textarea
                  id="tata_cara"
                  type="text"
                  placeholder="Cara Pembuatan"
                  onChange={handleChange}
                />
              </div>
              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewResep;
