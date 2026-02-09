import AnimatedTitleVariableMorphing from "@/components/AnimatedTitleVariableMorphing";


export default function Hero() {
    return (
        <section className="flex items-center justify-center min-h-screen w-full px-4">
          <div className="flex flex-col items-center w-full mx-auto text-center space-y-10">
            <h1 className="hidden w-0 h-0">Sacercode informatique</h1>
            {/* Hero Title */}
            <AnimatedTitleVariableMorphing/>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium">
              Parce que coder est un sacerdoce.
            </p>
            <p className="text-sm md:text-md text-gray-600 dark:text-gray-400 font-medium max-w-lg">
              Sacerdoce (nom masculin), sens figuré : Activité qui présente un caractère quasi religieux en raison du dévouement qu&apos;elle exige.
            </p>
            
            {/* Email Input Section */}
            {/* <div className="mt-12 max-w-md mx-auto">
              <div className="flex flex-col space-y-4">
                <input
                  type="email"
                  placeholder="Votre adresse e-mail"
                  disabled
                  className="w-full px-4 py-3 text-base border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 cursor-not-allowed focus:outline-none"
                />
                <button
                  disabled
                  className="w-full px-6 py-3 text-base font-medium text-white bg-gray-400 dark:bg-gray-600 rounded-lg cursor-not-allowed"
                >
                  Inscription à la newsletter bientôt disponible
                </button>
              </div>
            </div> */}
          </div>
        </section>
    );
}