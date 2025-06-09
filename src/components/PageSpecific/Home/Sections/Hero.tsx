import AnimatedTitleVariableMorphing from "@/components/AnimatedTitleVariableMorphing";


export default function Hero() {
    return (
        <section className="min-h-screen bg-white dark:bg-black flex items-center justify-center px-4">
          <div className="w-full max-w-10xl mx-auto text-center space-y-10">
            {/* Hero Title */}
            <AnimatedTitleVariableMorphing/>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium">
              Site web en construction
            </p>
            
            {/* Email Input Section */}
            <div className="mt-12 max-w-md mx-auto">
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
            </div>
          </div>
        </section>
    );
}