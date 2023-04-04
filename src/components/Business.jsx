import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="features" className={layout.section}>
    {" "}
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        "Master the stock market with confidence{" "}
        <br className="sm:block hidden" />
        in just<span className="text-gradient">
          {" "}
          100 days of Live training
        </span>{" "}
        ."
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Looking to become a savvy investor in the stock market? Our 100-day
        stock market training program is the perfect solution for beginners and
        experienced investors alike. With our blend of theoretical concepts and
        hands-on experience, you'll gain the knowledge, skills, and strategies
        you need to succeed in the complex world of stocks. Our experienced
        instructors will guide you through each step of the learning process,
        providing personalized attention and feedback to ensure your
        success.&nbsp;
        <span className="text-gradient">
          Enroll today for just ₹25,000-/
        </span>{" "}
        and start your journey towards financial success!
      </p>

      <Button styles={`mt-10`} />
    </div>
    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
