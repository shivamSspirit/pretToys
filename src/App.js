import "./App.css";
import AllRoute from "./routers/routes";
import { BrowserRouter } from 'react-router-dom'
import GlobalContext from "./contexts/globalContext";
import { WishProvider } from "./contexts/wishlist-context";
import { FilterProvider } from "./contexts/filter-context";
import { CartProvider } from "./contexts/cart-context";
import { AuthProvider } from "./contexts/auth-context";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <GlobalContext>
            <CartProvider>
              <WishProvider>
                <FilterProvider>
                  <AllRoute />
                </FilterProvider>
              </WishProvider>
            </CartProvider>
          </GlobalContext>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
