import { useEffect, useRef, useState } from "react";
import styles from "./../styles/ResultBadge.module.scss";
import nextId from "react-id-generator";

export default function ResultBadge() {
  const [isFull, setIsFull] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const badgeUniqueId = nextId() + "badge";

  useEffect(() => {
    const designComparator = (e: Event) => {
      const target = e.target as Window;
      {
        if (!isFull && target.innerWidth <= 850) {
          setIsMobile(true);
        }
      }
      {
        if (!isFull && target.innerWidth > 850) {
          setIsMobile(false);
        }
      }
    };

    if (window.innerWidth < 851) {
      setIsMobile(true);
    }

    window.addEventListener("resize", designComparator);
    return () => window.removeEventListener("resize", designComparator);
  });
  return (
    <div className={styles.wrapper}>
      <div
        className={
          isMobile
            ? styles.wrapper__top + " " + styles.wrapper__top__mobile
            : styles.wrapper__top
        }
      >
        {"Content title########"}
        <img src="/icons/magnet.svg" alt="magnet link" />
      </div>

      <div
        className={
          isMobile
            ? styles.wrapper__bottom + " " + styles.wrapper__bottom__mobile
            : styles.wrapper__bottom
        }
      >
        {isMobile ? (
          <>
            {isFull ? (
              <div
                className={styles.bottom}
                id={badgeUniqueId}
                style={{ transition: "0.5s" }}
              >
                <div className={styles.bottom__source}>source.ua</div>
                <div className={styles.bottom__info}>
                  <div className={styles.info__amount}>2GiB</div>
                  <div className={styles.info__date}>12-123-123</div>
                  <div className={styles.info__seeds}>
                    <img src="/icons/seeds.svg" />
                    123
                  </div>
                  <div className={styles.info__peers}>
                    <img src="/icons/peers.svg" />
                    3324
                  </div>
                </div>
                <div
                  className={styles.bottom__isFullBTN}
                  onClick={() => {
                    const list = document.getElementById(badgeUniqueId);
                    list?.classList.toggle(styles.collapse);
                    setTimeout(() => setIsFull(false), 1000);
                  }}
                >
                  Collapse
                </div>
              </div>
            ) : (
              <div
                className={styles.bottom__isFullBTN}
                style={{ opacity: "1", transition: "0.3s" }}
                onClick={() => setIsFull(true)}
              >
                View info
              </div>
            )}
          </>
        ) : (
          <>
            <div className={styles.bottom__source}>source.ua</div>
            <div className={styles.bottom__info}>
              <div className={styles.info__amount}>2GiB</div>
              <div className={styles.info__date}>12-123-123</div>
              <div className={styles.info__seeds}>
                <img src="/icons/seeds.svg" />
                123
              </div>
              <div className={styles.info__peers}>
                <img src="/icons/peers.svg" />
                3324
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
