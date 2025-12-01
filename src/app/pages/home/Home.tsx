import { motion } from "framer-motion";
import Btn from "../../shared/components/Btn";

export default function Home() {
  return (
    <motion.div
      className="w-full h-full flex items-center justify-center !px-4 sm:!px-0 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <main className="h-[80%] w-full flex items-center justify-center flex-col">
        <section
          className="
            h-96 w-full gap-2 flex flex-col
            items-center text-center justify-center
            sm:items-stretch sm:text-left
          "
        >
          {/* Fila 1 */}
          <div
            className="
              w-full sm:h-[20%] !px-2 sm:!px-4
              flex flex-row justify-between items-center
              gap-2 h-[13%] max-500__justify-center
            "
          >
            <div className="w-[60px] flex justify-start max-500">
              <span className="text-[0.7rem] sm:text-[0.8rem] font-bold">
                Creative Design
              </span>
            </div>

            <p className="text-[2.5rem] sm:text-[4rem] neue-machina-ultraBold">
              Andrés
            </p>

            <div className="w-[60px] relative flex justify-end max-500">
              <motion.span
                className="text-[4rem] sm:text-[5rem] absolute neue-machina-ultraBold rotate-[-60deg]"
                initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
                animate={{ rotate: -60, scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              >
                {"→"}
              </motion.span>
            </div>
          </div>

          {/* Fila 2 */}
          <div className="w-full sm:h-[20%] h-[13%] flex items-center justify-center sm:justify-center">
            <p className="text-[2.5rem] sm:text-[4rem] neue-machina-ultraBold">
              Licona Machado
            </p>
          </div>

          {/* Fila 3 */}
          <div className="w-full sm:h-1/4 h-[13%] flex items-center justify-center">
            <p className="text-[3rem] sm:text-[6rem] gallery">
              Full Stack
            </p>
          </div>

          {/* Fila 4 */}
          <div className="w-full sm:h-1/4 h-[13%] flex items-center justify-center flex-col">
            <p className="text-[2.5rem] sm:text-[5rem] gallery">
              Developer
            </p>
          </div>
        </section>

        <section className="h-[30%] w-full flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          >
            <Btn type="home" route="/about">
              About me
            </Btn>
          </motion.div>
        </section>
      </main>
    </motion.div>
  );
}
