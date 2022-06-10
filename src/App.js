import "./App.css";
import AllRoute from "./routers/routes";
import { BrowserRouter } from 'react-router-dom'
import GlobalContext from "./contexts/globalContext";
import { WishProvider } from "./contexts/wishlist-context";
import { FilterProvider } from "./contexts/filter-context";
import { CartProvider } from "./contexts/cart-context";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalContext>
        <CartProvider>
          <WishProvider>
            <FilterProvider>
                <AllRoute />
            </FilterProvider>
          </WishProvider>
          </CartProvider>
        </GlobalContext>
      </BrowserRouter>
    </>
  );
}

export default App;
