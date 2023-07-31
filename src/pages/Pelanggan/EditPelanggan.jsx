import "./newPelanggan.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import { userColumns } from "../../datatablesource";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const EditMenu = ({ inputs, title }) => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const pathid = location.pathname.split("/")[3];
  const [list, setList] = useState([]);
  const { data, loading, error } = useFetch(`/${path}`);

  const [info, setInfo] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  useEffect(() => {
    setList(data);
  }, [data]);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const newMenu = {
        ...info,
      };
      await axios.put(`/${path}/${pathid}`, newMenu);
      setList(list.filter((item) => item._id !== info._id));
      navigate("/menu");
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
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    type={input.type}
                    onChange={handleChange}
                    placeholder={input.placeholder}
                    id={input.id}
                  />
                </div>
              ))}
              <b>{info._id}</b>
              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditMenu;
