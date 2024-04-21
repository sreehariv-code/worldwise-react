import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import {
  AppLayout,
  Homepage,
  PageNotFound,
  Pricing,
  Product,
  Login,
} from "./pages";
import { City, CityList, CountryList, Form } from "./components";
import { CitiesProvider } from "./context/CitiesContext";
import { AuthProvider } from "./context/FakeAuthContext";

import ProtectedRoutes from "./routes/ProtectedRoutes";

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <Router>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="product" element={<Product />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="*" element={<PageNotFound />} />
            <Route
              path="app"
              element={
                <ProtectedRoutes>
                  <AppLayout />
                </ProtectedRoutes>
              }
            >
              {/* Acts as a Redirect (Programmatic navigation using <Navigate>). "replace" is used to current element in the history stack */}
              <Route index element={<Navigate replace to="cities" />} />
              <Route path="cities" element={<CityList />} />
              <Route path="cities/:id" element={<City />} />
              <Route path="countries" element={<CountryList />} />
              <Route path="form" element={<Form />} />
            </Route>
            <Route path="login" element={<Login />} />
          </Routes>
        </Router>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
