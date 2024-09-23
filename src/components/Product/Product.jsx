import "./Product.scss";
import { Link } from "react-router-dom";
import React from "react";

function Product(props) {
  return (
    <>
      <div className=" col p-4">
        <div class="card">
          <img src={props.Picture} class="card-img-top" alt="..." />
          <div class="card-body">
            <h6 class="card-title text-uppercase ">{props.Title}</h6>
            <p class="card-text">{props.description}</p>

            {props.isAvailable ? (
              <Link to="https://aparat.com" class="btn w-100 btn-warning">
                {props.price}
              </Link>
            ) : (
              <button href="#" class="w-100 btn btn-warning" disabled>
                ناموجود
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
