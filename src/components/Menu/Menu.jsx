import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";
import "./Menu.scss";
import {
  faHome,
  faShoppingBag,
  faShoppingBasket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function Menu() {
  return (
    <div>
      <div id="HH" className="d-lg-none">
        <button>
          <FontAwesomeIcon icon={faUser} />
          <span>ورود</span>
        </button>
        <button>
          <FontAwesomeIcon icon={faShoppingBasket} />
          <span>سبد خرید</span>
        </button>

        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="icon icon-tabler icons-tabler-filled icon-tabler-category"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 3h-6a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1 -1v-6a1 1 0 0 0 -1 -1z" />
            <path d="M20 3h-6a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1 -1v-6a1 1 0 0 0 -1 -1z" />
            <path d="M10 13h-6a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1 -1v-6a1 1 0 0 0 -1 -1z" />
            <path d="M17 13a4 4 0 1 1 -3.995 4.2l-.005 -.2l.005 -.2a4 4 0 0 1 3.995 -3.8z" />
          </svg>
          <span>دسته بندی</span>
        </button>
        <button>
          <FontAwesomeIcon icon={faHome} />
          <span>خانه</span>
        </button>
      </div>
    </div>
  );
}

export default Menu;
