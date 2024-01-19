import accordionImg from "../../../assets/images/pictures/graphImg.svg";
import arrowDownIcon from "../../../assets/images/icons/chevron-down.svg";
import arrowUpIcon from "../../../assets/images/icons/chevron-up.svg";
import accordionContent from "../utils/accordionContent";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const AccordionSection = () => {
  const [isOpen, setIsOpen] = useState<number | null>(1);

  const toggleAccordion = (i: number) => {
    if (isOpen === i) {
      return setIsOpen(null);
    }

    setIsOpen(i);
  };

  const paraVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        opacity: { duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] },
        height: { duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] },
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        opacity: { duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] },
        height: { duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] },
      },
    },
  };

  const iconVariants = {
    closed: { rotate: 0 },
    open: { rotate: 90 },
  };

  return (
    <section className="accordion__sect content-grid">
      <h2 className="accordion__sect-title h2">
        Zaloguj się, Inwestuj, Odkrywaj - Trzy Kroki do Sukcesu
      </h2>
      <div className="accordion__sect-content">
        <img
          src={accordionImg}
          alt="accordion image"
          className="accordion__sect-img"
        />
        <div className="accordion__section-wrapper accordion">
          <AnimatePresence>
            {accordionContent.map((item, index) => (
              <div key={index} className="accordion-item glassyBg">
                <div
                  className={`accordion-header ${
                    isOpen === index ? "open" : ""
                  }`}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="accordion-title">
                    <img
                      src={item.icon}
                      alt="title icon"
                      className="accordion-icon"
                    />
                    <h3 className="accordion-title-text h3">{item.title}</h3>
                  </div>
                  <motion.img
                    src={isOpen === index ? arrowUpIcon : arrowDownIcon}
                    variants={iconVariants}
                    initial="closed"
                    animate={isOpen === index ? "open" : "closed"}
                    alt="arrow icon"
                  />
                </div>
                <motion.p
                  variants={paraVariants}
                  initial="hidden"
                  animate={isOpen === index ? "visible" : "hidden"}
                  exit="hidden"
                  className="accordion-content"
                >
                  {item.content}
                </motion.p>
              </div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default AccordionSection;

// TODO wystylizuj ta sekcje bo nie mam siły
