import classes from "./TopSection.module.css";
import Link from "next/link";

const TopSection = () => {
  return (
    <div className={classes.container}>
      <div className={classes.container__flex}>
        <div className={classes.container__flex_item}>
          <div className={classes.container__flex_item_titre}>
            Vente Flash Hygiéne et santé
          </div>
          <div className={classes.container__flex_item_image}>
            <img
              src="https://m.media-amazon.com/images/I/5186FNK+bKL._AC_SY230_.png"
              alt="test"
            />
          </div>
          <div className={classes.container__flex_item_more}>
            <Link href="#">Decouvrir plus</Link>
          </div>
        </div>
        <div className={classes.container__flex_item}>
          <div className={classes.container__flex_item_titre}>
            Vente Flash sur nos appareils
          </div>
          <div className={classes.container__flex_item_image}>
            <img
              src=" https://images-eu.ssl-images-amazon.com/images/G/08/X-Site/Made_in_France/BFW22_MIF_CB_379x3041._SY304_CB604313928_.png"
              alt="test"
            />
          </div>
          <div className={classes.container__flex_item_more}>
            <Link href="#">Decouvrir plus</Link>
          </div>
        </div>
        <div className={classes.container__flex_item}>
          <div className={classes.container__flex_item_titre}>
            Vente Flash Black Friday
          </div>
          <div className={classes.container__flex_item_image}>
            <img
              src=" https://images-eu.ssl-images-amazon.com/images/G/08/Events/2022/Q4/Icons-Desktop/XCM_CUTTLE_1494594_2707236_379x304_1X_en_US._SY304_CB605044008_.jpg"
              alt="test"
            />
          </div>
          <div className={classes.container__flex_item_more}>
            <Link href="#">Decouvrir plus</Link>
          </div>
        </div>
        <div className={classes.container__flex_item}>
          <div className={classes.container__flex_item_titre}>
            Soins pour la peau de luxe
          </div>
          <div className={classes.container__flex_item_image}>
            <img
              src=" https://images-eu.ssl-images-amazon.com/images/G/08/AMAZON-FASHION/2022/FASHION/LUXURY_STORES/HOLIDAY_CAMPAIGN/GW/GW_DT_CAT_CARD_379x304_BEAUTY._SY304_CB610259915_.jpg"
              alt="test"
            />
          </div>
          <div className={classes.container__flex_item_more}>
            <Link href="#">Decouvrir plus</Link>
          </div>
        </div>
        <div className={classes.container__flex_item}>
          <div className={classes.container__flex_item_titre}>
            Vente Flash sur les appareils Amazon
          </div>
          <div className={classes.container__flex_item_rows}>
            <div className={classes.container__flex_item_row1}>
              <div className={classes.container__flex_item_row1_section1}>
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/08/kindle/journeys/Gj9vUkHh7N3zSj99/ODYxM2ZmOWYt-w186._SY116_CB604268005_.jpg"
                  alt="test"
                />
              </div>
              <div className={classes.container__flex_item_row1_section2}>
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/08/kindle/journeys/Gj9vUkHh7N3zSj99/ZmNlYTM0OWIt-w186._SY116_CB604268005_.jpg"
                  alt="test"
                />
              </div>
            </div>
            <div className={classes.container__flex_item_row1}>
              <div className={classes.container__flex_item_row1_section1}>
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/08/kindle/journeys/Gj9vUkHh7N3zSj99/NjY5NjY3ZjIt-w186._SY116_CB604268005_.jpg"
                  alt="test"
                />
              </div>
              <div className={classes.container__flex_item_row1_section2}>
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/08/kindle/journeys/Gj9vUkHh7N3zSj99/M2QyZDgxMTAt-w186._SY116_CB604316685_.jpg"
                  alt="test"
                />
              </div>
            </div>
          </div>
          <div className={classes.container__flex_item_more}>
            <Link href="#">Decouvrir plus</Link>
          </div>
        </div>
        <div className={classes.container__flex_item}>
          <div className={classes.container__flex_item_titre}>
            Offres groupées Echo pour Maisons Connectées
          </div>
          <div className={classes.container__flex_item_image}>
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/08/kindle/journeys/Gj9vUkHh7N3zSj99/NjMzMzIwMzYt-w379._SY304_CB604949621_.jpg"
              alt="test"
            />
          </div>

          <div className={classes.container__flex_item_more}>
            <Link href="#">Decouvrir plus</Link>
          </div>
        </div>
        <div className={classes.container__flex_item}>
          <div className={classes.container__flex_item_titre}>
            Ebooks Kindle: bons plans et petits prix
          </div>
          <div className={classes.container__flex_item_image}>
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/08/FR-hq/2022/img/E_Booksx2FKindle_Content/XCM_CUTTLE_1493679_2702711_379x304_1X_fr_FR._SY304_CB606846810_.jpg"
              alt="test"
            />
          </div>
          <div className={classes.container__flex_item_more}>
            <Link href="#">Decouvrir plus</Link>
          </div>
        </div>
        <div className={classes.container__flex_item}>
          <div className={classes.container__flex_item_titre}>
            Vente Flash Informatique
          </div>
          <div className={classes.container__flex_item_image}>
            <img
              src="https://m.media-amazon.com/images/I/51129kgkTGL._AC_SY230_.png"
              alt="test"
            />
          </div>
          <div className={classes.container__flex_item_more}>
            <Link href="#">Decouvrir plus</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
