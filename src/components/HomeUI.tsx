import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";



export default function HomeUI() {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });


  return (
    <div
      className="flex justify-center items-center min-h-screen"
      style={{ backgroundColor: "rgb(10, 0, 27)" }}
      id="home"
    >
      <div className="max-w-screen-lg flex flex-col items-center md:flex-row">
        <section className="flex flex-col w-full md:w-1/2 md:text-left text-center order-last md:order-first pb-5 md:pb-0 items-center md:items-start">
          <motion.div
            className="text-white font-bold text-3xl md:text-7xl pb-2"
            // style={{ fontSize: "80px" }}
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{
              opacity: inView ? 1 : 0,
              transition: {
                opacity: { duration: 0.5 },
                staggerChildren: 0.05,
              },
            }}
          >
            {[..."Benvenuti"].map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{
                  opacity: inView ? 1 : 0,
                  x: inView ? 0 : 20,
                  transition: {
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 50,
                  },
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>

          <div className="w-[300px] md:w-auto">
            <p className="text-white md:text-left pl-1 text-sm md:text-base ">
              Mi chiamo Marco Caiazza e sono un Jr. Developer con una grande
              passione per il Front-End e la creazione di pagine web interattive
              e responsive.
            </p>

            <p className="text-white md:text-left mt-5 pl-1 text-sm md:text-base">
              Mi dedico a trasformare idee e design in interfacce utente
              funzionali, intuitive e ottimizzate per ogni dispositivo e
              piattaforma.
            </p>

            <p className="text-white md:text-left mt-5 pl-1 text-sm md:text-base">
              Il mio obiettivo è sviluppare soluzioni moderne e performanti che
              migliorino l'esperienza dell'utente, con un focus continuo sulla
              qualità, l'efficienza e l'accessibilità.
            </p>
          </div>
        </section>

        {/* <div className="flex justify-center items-center w-full md:w-1/2 p-4 mt-4 md:mt-0">
          <img
            src="/sfondopc.png"
            alt="img-HomePage"
            className="w-full max-w-[600px] h-auto object-cover"
            // priority
            // width={2400} 
            // height={2400} 
          />
        </div> */}


        <div className="md:w-1/2 mt-20 md:mt-0 flex justify-center md:justify-end">
        <div className="w-1/2 aspect-square overflow-hidden md:mr-3">
          <img
            src="/photo.jpg"
            alt="img-HomePage"
            className="rounded-full w-full h-full object-cover"
          />

        </div>
        </div>

      </div>
    </div>
  );
}
