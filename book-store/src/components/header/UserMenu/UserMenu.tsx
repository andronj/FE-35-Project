import { Favorites } from "./Favourites/Favourites";
import { Cart } from "./Cart/Cart";
import { Profile } from "./Profile/Profile";
import "./userMenu.scss";

export const UserMenu = () => {
  return (
    <div className="user-bar">
      <Favorites />
      <Cart />
      <Profile />
    </div>
  );
};