import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footerr}>
      <div className={classes.footer__verticalrow}>
        <div className={classes.footer__verticalrow__linkcol}>
          <div className={classes.footer__verticalrow__linkcol_table}>
            <div className={classes.footer__verticalrow__linkcol_titre}>
              Retrouvez-nous sur
            </div>
            <ul className={classes.footer__verticalrow__linkcol_table_list}>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Whatsapp</li>
            </ul>
          </div>
          <div className={classes.footer__verticalrow__linkcol_table_spacer}></div>
          <div className={classes.footer__verticalrow__linkcol_table}>
            <div className={classes.footer__verticalrow__linkcol_titre}>
              Service Client
            </div>
            <ul className={classes.footer__verticalrow__linkcol_table_list}>
              <li>Centre d'assistance</li>
              <li>Méthodes de paiement</li>
              <li>Expédition & Livraison</li>
              <li>Retour et remboursement</li>
              <li>Signaler un Produit</li>
              <li>Politique de Résolution des Litiges</li>
            </ul>
          </div>
          <div className={classes.footer__verticalrow__linkcol_table_spacer}></div>
          <div className={classes.footer__verticalrow__linkcol_table}>
            <div className={classes.footer__verticalrow__linkcol_titre}>
              A Propos
            </div>
            <ul className={classes.footer__verticalrow__linkcol_table_list}>
              <li>Qui sommes-nous</li>
              <li>Politique de confidentialité et de cookies</li>
              <li>Politique de retour et remboursement</li>
              <li>Conditions Générales d'Utilisation</li>
              <li>Black Friday 2022</li>
            </ul>
          </div>
          <div className={classes.footer__verticalrow__linkcol_table_spacer}></div>
          <div className={classes.footer__verticalrow__linkcol_table}>
            <div className={classes.footer__verticalrow__linkcol_titre}>
              Nous Rejoindre
            </div>
            <ul className={classes.footer__verticalrow__linkcol_table_list}>
              <li>Devenir Livreur</li>
              <li>Vendez sur notre plateforme</li>
              <li>Devenez un partenaire logistique</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
