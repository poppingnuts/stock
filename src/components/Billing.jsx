import { apple, bill, pexelalgo, google } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={pexelalgo}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Algorithmic trading <br className="sm:block hidden" />
        Setup
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Upgrade your investment game with our algorithmic trading training
        program. Our expert trainers will teach you how to set up your own
        algorithmic trading system using simple, easy-to-understand language.
        You'll learn how to make smarter, data-driven investment decisions that
        can help you achieve your financial goals.{" "}
        <span className="text-gradient">Enroll today for just ₹4999-/</span> and
        take the first step towards becoming a successful algorithmic trader.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <Button />
        {/* <img
          src={google}
          alt="google_play"
          className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
        /> */}
      </div>
    </div>
  </section>
);

export default Billing;
