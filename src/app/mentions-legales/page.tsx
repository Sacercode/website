import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales - Sacercode",
  description: "Mentions légales de Sacercode, société de conseil et formation en informatique.",
};

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Mentions légales
          </h1>

          {/* Informations sur l'éditeur */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
              Informations sur l'éditeur
            </h2>
            <div className="space-y-2 text-gray-700">
              <p><span className="font-medium">Dénomination sociale :</span> SAS Sacercode</p>
              <p><span className="font-medium">Forme juridique :</span> Société par Actions Simplifiée (SAS)</p>
              <p><span className="font-medium">Capital social :</span> 1 500 €</p>
              <p><span className="font-medium">Siège social :</span> 71 rue de Vallières, 63000 Clermont-Ferrand, France</p>
              <p><span className="font-medium">Téléphone :</span> <a href="tel:+33652152656" className="text-blue-600 hover:text-blue-800">06 52 15 26 56</a></p>
              <p><span className="font-medium">SIRET :</span> 938 910 627 00018</p>
              <p><span className="font-medium">NAF/APE :</span> 58.29C</p>
              <p><span className="font-medium">TVA intracommunautaire :</span> FR12938910627</p>
              <p><span className="font-medium">RCS :</span> Clermont-Ferrand</p>
              <p><span className="font-medium">Représentant légal :</span> BLANCHARD Dorian - Président</p>
            </div>
          </section>

          {/* Hébergement */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
              Hébergement
            </h2>
            <div className="space-y-2 text-gray-700">
              <p><span className="font-medium">Hébergeur :</span> SAS Sacercode (auto-hébergement)</p>
              <p><span className="font-medium">Adresse :</span> 71 rue de Vallières, 63000 Clermont-Ferrand, France</p>
              <p><span className="font-medium">Téléphone :</span> <a href="tel:+33652152656" className="text-blue-600 hover:text-blue-800">06 52 15 26 56</a></p>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
              Propriété intellectuelle
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle.
                Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
              <p>
                La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
              </p>
            </div>
          </section>

          {/* Protection des données */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
              Protection des données personnelles
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD),
                vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité des données vous concernant.
              </p>
              <p>
                Pour exercer ces droits, vous pouvez nous contacter à l'adresse : <span className="font-medium"><a href="mailto:contact@sacercode.fr" className="text-blue-600 hover:text-blue-800">contact@sacercode.fr</a></span>
              </p>
              <p>
                <span className="font-medium">Responsable du traitement :</span> SAS Sacercode
              </p>
              <p>
                <span className="font-medium">Finalité du traitement :</span> Gestion des demandes de contact et amélioration de nos services
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibent text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
              Cookies
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Ce site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic.
                Les cookies sont de petits fichiers texte stockés sur votre appareil lorsque vous visitez notre site.
              </p>
              <p>
                Vous pouvez gérer vos préférences de cookies dans les paramètres de votre navigateur.
                Le refus d'installation d'un cookie peut entraîner l'impossibilité d'accéder à certains services.
              </p>
            </div>
          </section>

          {/* Responsabilité */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
              Limitation de responsabilité
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour,
                mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.
              </p>
              <p>
                SAS Sacercode ne pourra en aucun cas être tenue responsable de tout dommage de quelque nature qu'il soit résultant
                de l'interprétation ou de l'utilisation des informations et/ou documents disponibles sur ce site.
              </p>
            </div>
          </section>

          {/* Droit applicable */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
              Droit applicable et juridiction
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Les présentes mentions légales sont régies par le droit français.
                En cas de litige, les tribunaux français seront seuls compétents.
              </p>
              <p>
                <span className="font-medium">Tribunal compétent :</span> Tribunal de Commerce de Clermont-Ferrand
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
              Contact
            </h2>
            <div className="space-y-2 text-gray-700">
              <p>
                Pour toute question concernant ces mentions légales, vous pouvez nous contacter :
              </p>
              <p><span className="font-medium">Par téléphone :</span> <a href="tel:+33652152656" className="text-blue-600 hover:text-blue-800">06 52 15 26 56</a></p>
              <p><span className="font-medium">Par courrier :</span> SAS Sacercode, 71 rue de Vallières, 63000 Clermont-Ferrand, France</p>
              <p><span className="font-medium">Par email :</span> <a href="mailto:contact@sacercode.fr" className="text-blue-600 hover:text-blue-800">contact@sacercode.fr</a></p>
            </div>
          </section>

          {/* Date de mise à jour */}
          <section className="border-t pt-6 mt-8">
            <p className="text-sm text-gray-500 text-center">
              Dernière mise à jour : 9 juin 2025
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
