import classes from "./MainNavigation.module.css";
import Link from "next/link";
import {AiOutlineSearch} from 'react-icons/ai'

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="#">
        <img
          src="https://cdn.icon-icons.com/icons2/130/PNG/256/eway_e-commerce_business_20560.png"
          alt="logo"
        ></img>
        </Link>
      </div>
      <div className={classes.find}>
      <input type="text"  placeholder="Cherchez un produit, une marque ou une catégorie"  className={classes.find__input} />
      <button className={classes.find__button}>Rechercher</button>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/">Se connecter</Link>
          </li>
          <li>
            <Link href="/">Aide</Link>
          </li>
          <li>
            <Link href="/">Panier</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
