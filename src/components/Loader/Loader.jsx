import React from "react";
import { ThreeDots } from "react-loader-spinner";
import s from "./Loader.module.css";

const LoadMoreLoader = ({ onClick, isLoading }) => (
  <div className={s.container}>
    {isLoading ? (
      <div className={s.loaderContainer}>
        <ThreeDots color="#00BFFF" height={80} width={80} />
      </div>
    ) : (
      <button type="button" className={s.loadMoreBtn} onClick={onClick}>
        Load More
      </button>
    )}
  </div>
);

export default LoadMoreLoader;
