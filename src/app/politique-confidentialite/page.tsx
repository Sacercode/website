import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | Sacercode",
  description: "Politique de confidentialité et protection des données personnelles de Sacercode, société de conseil et formation informatique.",
};

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-3xl font-bold mb-8">Politique de Confidentialité</h1>
          
          <p className="text-lg mb-8">
            Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Identité du responsable de traitement</h2>
            <div className="rounded-lg">
              <p><strong>SAS Sacercode</strong></p>
              <p>7 rue Barillot veuve Coupelon</p>
              <p>63000 Clermont-Ferrand</p>
              <p>SIRET : 938 910 627 00018</p>
              <p>Email du DPO : <a href="mailto:dpo@sacercode.com" className="text-blue-600 hover:text-blue-800">dpo@sacercode.com</a></p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Données collectées</h2>
            <p className="mb-4">
              Dans le cadre de nos activités de conseil et formation informatique, nous collectons uniquement les données personnelles nécessaires au contact et au suivi de nos prospects et clients :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Besoins techniques exprimés</li>
              <li>Informations collectées via les formulaires LinkedIn Lead Gen</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Finalités du traitement</h2>
            <p className="mb-4">Vos données personnelles sont traitées pour les finalités suivantes :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Établir un contact commercial</li>
              <li>Répondre à vos demandes d&apos;information</li>
              <li>Proposer nos services de conseil et formation</li>
              <li>Assurer le suivi de la relation client</li>
              <li>Respecter nos obligations légales</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Base légale</h2>
            <p>
              Le traitement de vos données personnelles est basé sur :
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Votre consentement lors de la soumission d&apos;un formulaire</li>
              <li>L&apos;intérêt légitime de Sacercode à développer son activité commerciale</li>
              <li>L&apos;exécution de mesures précontractuelles ou contractuelles</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Destinataires des données</h2>
            <p>
              Vos données personnelles sont destinées exclusivement aux équipes de Sacercode dans le cadre de leurs missions. 
              Nous n&apos;utilisons actuellement aucun service tiers, à l&apos;exception de LinkedIn et de son formulaire Lead Gen pour la collecte de prospects.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Durée de conservation</h2>
            <p>
              Vos données personnelles sont conservées pendant une durée de <strong>1 an</strong> à compter de leur collecte ou du dernier contact.
              Au-delà de cette période, elles sont supprimées de nos systèmes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Transferts de données</h2>
            <p>
              Sacercode ne transfère aucune donnée personnelle en dehors de l&apos;Union Européenne. 
              Toutes les données sont stockées et traitées en France.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Vos droits</h2>
            <p className="mb-4">
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Droit d&apos;accès :</strong> obtenir confirmation que vos données sont traitées et y accéder</li>
              <li><strong>Droit de rectification :</strong> corriger des données inexactes ou incomplètes</li>
              <li><strong>Droit à l&apos;effacement :</strong> demander la suppression de vos données</li>
              <li><strong>Droit à la limitation :</strong> limiter le traitement de vos données</li>
              <li><strong>Droit à la portabilité :</strong> récupérer vos données dans un format structuré</li>
              <li><strong>Droit d&apos;opposition :</strong> vous opposer au traitement de vos données</li>
              <li><strong>Droit de retrait du consentement :</strong> retirer votre consentement à tout moment</li>
            </ul>
            <div className="rounded-lg mt-6">
              <p>
                <strong>Pour exercer ces droits :</strong><br />
                Contactez notre DPO à l&apos;adresse : <a href="mailto:dpo@sacercode.com" className="text-blue-600 hover:text-blue-800">dpo@sacercode.com</a>
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Sécurité des données</h2>
            <p>
              Sacercode met en œuvre des mesures techniques et organisationnelles appropriées pour assurer 
              la sécurité de vos données personnelles et les protéger contre toute destruction, perte, 
              altération, divulgation ou accès non autorisé.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Réclamation</h2>
            <p>
              Si vous estimez que le traitement de vos données personnelles constitue une violation du RGPD, 
              vous avez le droit d&apos;introduire une réclamation auprès de la Commission Nationale de l&apos;Informatique 
              et des Libertés (CNIL) : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">www.cnil.fr</a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Modifications</h2>
            <p>
              Cette politique de confidentialité peut être mise à jour. La version en vigueur est celle 
              publiée sur notre site web. Nous vous encourageons à consulter régulièrement cette page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Contact</h2>
            <div className="rounded-lg">
              <p>
                Pour toute question concernant cette politique de confidentialité ou le traitement de vos données personnelles :
              </p>
              <p className="mt-4">
                <strong>Email DPO :</strong> <a href="mailto:dpo@sacercode.com" className="text-blue-600 hover:text-blue-800">dpo@sacercode.com</a><br />
                <strong>Adresse :</strong> SAS Sacercode, 7 rue Barillot veuve Coupelon, 63000 Clermont-Ferrand
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}