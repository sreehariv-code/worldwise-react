import styles from "./CountryItem.module.css";
import p from "prop-types";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;

CountryItem.propTypes = {
  country: p.any,
};
