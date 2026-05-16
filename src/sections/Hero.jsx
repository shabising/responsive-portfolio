import { motion } from "framer-motion";
import Container from "../components/Container";

export default function Hero() {
  return (
    <section className="pt-10 lg:pt-16 pb-16">
      <Container>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* LEFT */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
            <h1
              className="
                font-display
                uppercase
                leading-[0.9]
                text-[58px]
                sm:text-[90px]
                md:text-[130px]
                lg:text-[180px]
              "
            >
              UI KIT
              <br />
              PORT
              <br />
              FOLIO
            </h1>

            <div className="flex items-center gap-6 mt-10">
              <div
                className="
                  w-14
                  h-14
                  rounded-full
                  bg-gray-300
                "
              />

              <div>
                <h3 className="font-bold uppercase">
                  Cristian Muñoz
                </h3>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Product Designer
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
            <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="
                    bg-white/70
                    dark:bg-white/5
                    backdrop-blur-xl
                    rounded-[32px]
                    p-8
                    border
                    border-gray-300
                    dark:border-gray-800
                "
            >
            {/* TOP NAV */}
            <div className="flex items-center justify-between mb-8">
              <div className="text-black dark:text-white font-bold">
                ✦ logo
              </div>

              <div className="flex items-center gap-8 text-sm text-gray-400">
                <span>Home</span>
                <span>Portfolio</span>
                <span>About</span>
              </div>
            </div>

            {/* HERO CONTENT */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2
                  className="
                    font-display
                    uppercase
                    leading-[0.9]
                    text-black
                    dark:text-white
                    text-5xl
                    md:text-6xl
                  "
                >
                  Product
                  <br />
                  Designer
                </h2>

                <p
                  className="
                    text-pink-500
                    text-3xl
                    font-bold
                    mt-6
                  "
                >
                  Cristian Muñoz
                </p>

                <button
                  className="
                    mt-10
                    rounded-xl
                    bg-black
                    dark:bg-white
                    dark:text-black
                    text-white
                    px-6
                    py-3
                    transition
                    duration-300
                    hover:scale-105
                    hover:-translate-y-1
                    hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]
                    "
                >
                  Get Started
                </button>
              </div>

              <div
                className="
                    bg-neutral-200bg-gradient-to-br
                    from-pink-300
                    to-orange-200
                    dark:from-pink-500/30
                    dark:to-orange-400/30
                    rounded-2xl
                    h-[320px]
                "
              />
            </div>

            {/* STATS */}
            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-3
                gap-6
                mt-10
              "
            >
              {[
                "90%",
                ">25.000",
                ">2K",
              ].map((item) => (
                <div
                  key={item}
                  className="
                    rounded-2xl
                    bg-white
                    dark:bg-[#111]
                    border
                    border-gray-300
                    dark:border-gray-800
                    p-6
                  "
                >
                  <h3
                    className="
                      text-green-300
                      text-3xl
                      font-bold
                    "
                  >
                    <>
                        {item}
                    </>
                  </h3>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}