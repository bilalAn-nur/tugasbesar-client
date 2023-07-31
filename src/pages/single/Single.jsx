import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import EditMenu from "../Menu/EditMenu";

const Single = () => {
  return (
    <div className="new">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">{/* <h1>{title}</h1> */}</div>
        <div className="bottom">
          <div className="right">
            {/* <form>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    onChange={handleChange}
                    type={input.type}
                    placeholder={input.placeholder}
                    id={input.id}
                  />
                </div>
              ))}
              <button onClick={handleClick}>Send</button>
            </form> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
