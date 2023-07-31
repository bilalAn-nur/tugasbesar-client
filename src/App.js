import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import EditMenu from "./pages/Menu/EditMenu";
import EditPelanggan from "./pages/Pelanggan/EditPelanggan";
import NewMenu from "./pages/Menu/NewMenu";
import NewResep from "./pages/Resep/NewResep";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  PelangganInputs,
  menuInputs,
  memesanInputs,
  resepInputs,
  bahanbakuInputs,
  detailbelanjaInputs,
  pembelianbahanInputs,
  pembayaranInputs,
  menuEdits,
  PelangganEdits,
} from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import {
  menuColumns,
  pelangganColumns,
  memesanColumns,
  resepColumns,
  bahanbakuColumns,
  pembelianbahanColumns,
  detailbelanjaColumns,
  pembayaranColumns,
} from "./datatablesource";
import NewPelanggan from "./pages/Pelanggan/NewPelanggan";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route
              index
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="menu">
              <Route index element={<List columns={menuColumns} />} />
              <Route
                path="edit/:_id"
                element={<EditMenu inputs={menuEdits} />}
              />
              <Route
                path="new"
                element={<NewMenu inputs={menuInputs} title="Add New Menu" />}
              />
            </Route>
            <Route path="pelanggan">
              <Route index element={<List columns={pelangganColumns} />} />
              <Route
                path="edit/:_id"
                element={<EditPelanggan inputs={EditPelanggan} />}
              />
              <Route
                path="new"
                element={
                  <NewPelanggan
                    inputs={PelangganInputs}
                    title="Add New Pelanggan"
                  />
                }
              />
            </Route>
            <Route path="memesan">
              <Route index element={<List columns={memesanColumns} />} />
              <Route path=":_id" element={<Single />} />
              <Route
                path="new"
                element={
                  <NewMenu inputs={memesanInputs} title="Add New memesan" />
                }
              />
            </Route>
            <Route path="resep">
              <Route index element={<List columns={resepColumns} />} />
              <Route path=":_id" element={<Single />} />
              <Route
                path="new"
                element={
                  <NewResep inputs={resepInputs} title="Add New resep" />
                }
              />
            </Route>
            <Route path="bahanbaku">
              <Route index element={<List columns={bahanbakuColumns} />} />
              <Route path=":_id" element={<Single />} />
              <Route
                path="new"
                element={
                  <NewMenu inputs={bahanbakuInputs} title="Add New bahanbaku" />
                }
              />
            </Route>
            <Route path="pembelianbahan">
              <Route index element={<List columns={pembelianbahanColumns} />} />
              <Route path=":_id" element={<Single />} />
              <Route
                path="new"
                element={
                  <NewMenu
                    inputs={pembelianbahanInputs}
                    title="Add New pembelianbahan"
                  />
                }
              />
            </Route>
            <Route path="detailbelanja">
              <Route index element={<List columns={detailbelanjaColumns} />} />
              <Route path=":_id" element={<Single />} />
              <Route
                path="new"
                element={
                  <NewMenu
                    inputs={detailbelanjaInputs}
                    title="Add New detailbelanja"
                  />
                }
              />
            </Route>
            <Route path="pembayaran">
              <Route index element={<List columns={pembayaranColumns} />} />
              <Route path=":_id" element={<Single />} />
              <Route
                path="new"
                element={
                  <NewMenu
                    inputs={pembayaranInputs}
                    title="Add New pembayaran"
                  />
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
