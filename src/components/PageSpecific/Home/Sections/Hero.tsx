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
              Edition de logiciels low-code.
              <br/>
              Formations web en école informatique.
            </p>
            {/* https://api.whatsapp.com/send/?phone=33782200608&text=Bonjour+Virgile%2C+j%27aimerais+d%C3%A9bloquer+un+projet+vibecod%C3%A9.%0A%0AType+de+projet+%28SaaS+%2F+app+mobile+%2F+web+app%29%3A%0AStack+actuelle+%28Lovable+%2F+Bolt+%2F+React+%2F+autre%29%3A%0ABlocage+principal+%28bugs+%2F+stores+%2F+dette+%2F+perf%29%3A%0AUrgence+%28cette+semaine+%2F+ce+mois%29%3A%0A%0ASource%3A+placement%3Drealisations+%7C+page%3D%2Frealisations&type=phone_number&app_absent=0 */}
            
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