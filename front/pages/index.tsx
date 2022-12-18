import styles from "../styles/Home.module.scss";
import Search from "./searchBox";
import ResultBadge from "./ResultBadge";
import HeadWrapper from "../containers/HeadWrapper";

function HomeComponent() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__search}>
        <Search />
      </div>
      <div className={styles.wrapper__results}>
        <ResultBadge />
        <ResultBadge />
        <ResultBadge />
        <ResultBadge />
        <ResultBadge />
        <ResultBadge />
        <ResultBadge />
        <ResultBadge />
        <ResultBadge />
        <ResultBadge />
      </div>
    </div>
  );
}

const Home = () => {
  return (
    <HeadWrapper title={"123"}>
      <HomeComponent />
    </HeadWrapper>
  );
};

export default Home;
