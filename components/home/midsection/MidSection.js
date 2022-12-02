import Link from "next/link";
import classes from "./MidSection.module.css";

const styleImages = [
  {
    src: "https://images-eu.ssl-images-amazon.com/images/G/08/AMAZON-FASHION/2022/FASHION/CML/06_AUG/MERCH/GW/GW_DESK_SHOVELLER_200x200_ALL._CB629460178_.jpg",
  },
  {
    src: "https://images-eu.ssl-images-amazon.com/images/G/08/AMAZON-FASHION/2022/FASHION/CML/06_AUG/MERCH/GW/GW_DESK_SHOVELLER_200x200_W_COATS._CB629460178_.jpg",
  },
  {
    src: "https://images-eu.ssl-images-amazon.com/images/G/08/AMAZON-FASHION/2022/FASHION/CML/06_AUG/MERCH/GW/GW_DESK_SHOVELLER_200x200_M_COATS._CB629460178_.jpg",
  },
  {
    src: "https://images-eu.ssl-images-amazon.com/images/G/08/AMAZON-FASHION/2022/FASHION/CML/06_AUG/MERCH/GW/GW_DESK_SHOVELLER_200x200_W_JEWELLERY._CB629460178_.jpg",
  },
  {
    src: "https://images-eu.ssl-images-amazon.com/images/G/08/AMAZON-FASHION/2022/FASHION/CML/06_AUG/MERCH/GW/GW_DESK_SHOVELLER_200x200_W_WATCHES._CB629460178_.jpg",
  },
  {
    src: "https://images-eu.ssl-images-amazon.com/images/G/08/AMAZON-FASHION/2022/FASHION/CML/06_AUG/MERCH/GW/GW_DESK_SHOVELLER_200x200_M_WATCHES._CB629460178_.jpg",
  },
  {
    src: "https://images-eu.ssl-images-amazon.com/images/G/08/AMAZON-FASHION/2022/FASHION/CML/06_AUG/MERCH/GW/GW_DESK_SHOVELLER_200x200_M_ACC._CB629460178_.jpg",
  },
  {
    src: "https://images-eu.ssl-images-amazon.com/images/G/08/AMAZON-FASHION/2022/FASHION/CML/06_AUG/MERCH/GW/GW_DESK_SHOVELLER_200x200_W_BOOTS._CB629460178_.jpg",
  },
  {
    src: "https://images-eu.ssl-images-amazon.com/images/G/08/AMAZON-FASHION/2022/FASHION/CML/06_AUG/MERCH/GW/GW_DESK_SHOVELLER_200x200_M_BOOTS._CB629460178_.jpg",
  },
];

const beauteImages = [
  { src: "https://m.media-amazon.com/images/I/81SMNn3ARrL._AC_SY200_.jpg" },
  { src: "https://m.media-amazon.com/images/I/51o3m-JgWqL._AC_SY200_.jpg" },
  { src: "https://m.media-amazon.com/images/I/618u0XiwFvL._AC_SY200_.jpg" },
  { src: "https://m.media-amazon.com/images/I/61wiEaQ2zlL._AC_SY200_.jpg" },
  { src: "https://m.media-amazon.com/images/I/71zCEwi1PhL._AC_SY200_.jpg" },
  { src: "https://m.media-amazon.com/images/I/61K2MIf0FhL._AC_SY200_.jpg" },
  { src: "https://m.media-amazon.com/images/I/51DdnSoSwXL._AC_SY200_.jpg" },
  { src: "https://m.media-amazon.com/images/I/71WFj8LKYrL._AC_SY200_.jpg" },
  { src: "https://m.media-amazon.com/images/I/51Upl9a0THL._AC_SY200_.jpg" },
  { src: "https://m.media-amazon.com/images/I/91XqkjBO2FL._AC_SY200_.jpg" },
  { src: "https://m.media-amazon.com/images/I/61wREIwhmRL._AC_SY200_.jpg" },
  { src: "https://m.media-amazon.com/images/I/61MlC7rEJPL._AC_SY200_.jpg" },
  { src: "https://m.media-amazon.com/images/I/51azThTXubL._AC_SY200_.jpg" },
];

const MidSection = () => {
  return (
    <div>
      <div className={classes.main__container__section}>
        <div className={classes.main__container__section_title}>
          <h2>Les styles préférés des clients</h2>
          <span>
            <Link href="#">Voir plus</Link>
          </span>
        </div>
        <div className={classes.main__container__section_content}>
          <ul className={classes.main__container__section_content__list}>
            {styleImages.map((item, index) => {
              return (
                <li
                  key={index}
                  className={
                    classes.main__container__section_content__list_item
                  }
                >
                  <img src={item.src} alt="Ventes flash" />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={classes.main__container__section}>
        <div className={classes.main__container__section_title}>
          <h2>Meilleures ventes dans Beauté et Parfum</h2>
          <span>
            <Link href="#">Voir plus</Link>
          </span>
        </div>
        <div className={classes.main__container__section_content}>
          <ul className={classes.main__container__section_content__list}>
            {beauteImages.map((item, index) => {
              return (
                <li
                  key={index}
                  className={
                    classes.main__container__section_content__list_item
                  }
                >
                  <img src={item.src} alt="Ventes flash" />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MidSection;
