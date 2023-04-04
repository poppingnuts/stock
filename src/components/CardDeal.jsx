import { card, stock } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        "Trust no one unless you have eaten <br className="sm:block hidden" />{" "}
        much salt with him."
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        At H.E.A.T, we understand that your time and money are valuable assets,
        which is why we don't expect you to trust us blindly. Instead, we offer
        a demo session every Saturday and Sunday from 9:00 pm to 10:00 pm, where
        we showcase our famous "Half Candle Strategy" to help you learn how to
        make profits on an intraday basis. With the HCS strategy, you can expect
        at least 5 signals per month, providing ample opportunities to make
        profitable trades. And if you're satisfied with the results, you're free
        to continue trading on your own. But if you want to take your trading to
        the next level, we offer a comprehensive 100-days program to help you
        become a full-time trader.{" "}
        <span className="text-gradient">
          The best part? Our demo session is only 499-/!
        </span>{" "}
        That's right; you can learn from the best in the business without
        breaking the bank. So, join us for our next demo session, and let's help
        you achieve your trading goals together.
      </p>

      <button
        type="button"
        className={`py-4 px-6 font-poppins font-medium text-[18px] mt-10 text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
      >
        Join Demo
      </button>
    </div>

    <div className={layout.sectionImg}>
      <img src={stock} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
