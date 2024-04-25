'use client';
import React from 'react';

const Datenschutzerklaerung = () => {
  return (
    <div className="Datenschutzerklaerung p-8">
      <h1 className="text-center text-2xl mb-5">Datenschutzerklärung</h1>
      <p className="mb-2"><strong>Verantwortliche Stelle im Sinne der Datenschutzgesetze:</strong></p>
      <p className="mb-2">Luca Schirmer<br/>Stephanstraße 5<br/> 64295 Darmstadt<br/>Deutschland</p>

      <p className="mb-2"><strong>Erhebung, Verarbeitung und Nutzung personenbezogener Daten:</strong></p>
      <p className="mb-2">Wir erheben, verarbeiten und nutzen Ihre personenbezogenen Daten nur, soweit sie für die Begründung, inhaltliche Ausgestaltung oder Änderung des Rechtsverhältnisses erforderlich sind (Bestandsdaten). Dies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet. Personenbezogene Daten über die Inanspruchnahme unserer Internetseiten (Nutzungsdaten) erheben, verarbeiten und nutzen wir nur, soweit dies erforderlich ist, um dem Nutzer die Inanspruchnahme des Dienstes zu ermöglichen oder abzurechnen.</p>

      <p className="mb-2"><strong>Weitergabe personenbezogener Daten:</strong></p>
      <p className="mb-2">Eine Weitergabe Ihrer Daten an Dritte ohne ausdrückliche Einwilligung, etwa zu Zwecken der Werbung, erfolgt nicht. Wir geben Ihre persönlichen Daten nur dann an Dritte weiter, wenn dies im Rahmen der Vertragsabwicklung notwendig ist. Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. b DSGVO.</p>

      <p className="mb-2"><strong>Datenverarbeitung auf dieser Internetseite:</strong></p>
      <p className="mb-2">Wir erheben und speichern automatisch in Server Log Files Informationen, die Ihr Browser an uns übermittelt. Dies sind:
        <br/>- Browsertyp/ -version
        <br/>- verwendetes Betriebssystem
        <br/>- Referrer URL (die zuvor besuchte Seite)
        <br/>- Hostname des zugreifenden Rechners (IP Adresse)
        <br/>- Uhrzeit der Serveranfrage.
      </p>

      <p className="mb-2">Diese Daten sind für uns nicht bestimmten Personen zuordenbar. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen, die Daten werden zudem nach einer statistischen Auswertung gelöscht.</p>

      <p className="mb-2"><strong>Auskunftsrecht:</strong></p>
      <p className="mb-2">Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Kontaktieren Sie uns auf Wunsch. Die Kontaktdaten finden Sie in unserem Impressum.</p>

      <p className="mt-10 hover:text-gray-400 cursor-pointer"><a href="/">Back to the Homepage</a></p>
    </div>
  );
};

export default Datenschutzerklaerung;
