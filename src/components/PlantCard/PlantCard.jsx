import React from "react";
import styles from "../PlantCard/PlantCard.module.css";
import { TypeAnimation } from "react-type-animation";

const PlantCard = ({ icon, title, text }) => {
  return (
    <>
      <div className={`h-100 ${styles["plant-card"]}`}>
        <div className={`${styles["card-icon-wrapper"]}`}>
          <div
            className={`${styles["card-icon"]} ${styles["plant-info-icon"]}`}
          >
            {icon}
          </div>
        </div>
        <div className={`${styles["card-body"]}`}>
          <h5 className={`${styles["card-title"]}`}>{title}</h5>
          <div className={`${styles["card-divider"]}`}></div>
          <p className='card-text'>
            <TypeAnimation sequence={[text]} speed={75} cursor={false} />
          </p>
        </div>
      </div>
    </>
  );
};

export default PlantCard;
