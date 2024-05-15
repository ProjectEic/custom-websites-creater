"use client";
import React from "react";
import Settings from "../website_settings.json";
import Link from "next/link";

const Impressum = ({impressum}) => {
  const DatenschutzUrl = Settings["mode"] == "firebase" ? "/Datenschutz/f.html" : "/Datenschutz/l.html";
  
  return (
    <div className="Impressum p-8">
      <h1 className="text-center text-2xl mb-10">Impressum</h1>

      <p className="mb-2"><b>Angaben gemäß § 5 TMG:</b></p>
      <p className="mb-2">{impressum.name}<br/>{impressum.street}<br/> {impressum.postCodeWithCity}<br/> Deutschland </p>

      <p className="mb-2"><b>Kontakt:</b></p>
      <p className="mb-2">Telefon: {impressum.telephone}<br/>E-Mail: <a href={`mailto:${impressum.email}`}>{impressum.email}</a></p>

      <p className="mb-2"><b>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</b></p>
      <p className="mb-2">{impressum.name}<br/>{impressum.street}<br/> {impressum.postCodeWithCity}<br/>Deutschland</p>

      <p className="mb-2"><b>Haftungsausschluss:</b></p>

      <p className="mb-2"><b>Haftung für Inhalte</b></p>
      <p className="mb-2">Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>

      <p className="mb-2"><b>Haftung für Links</b></p>
      <p className="mb-2">Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>

      <p className="mb-2"><b>Urheberrecht</b></p>
      <p className="mb-2">Soweit nicht anders angegeben, liegen alle Rechte beim Verantwortlichen der Website. Die Verlinkung und die Verbreitung der Inhalte sind möglich, soweit nicht Rechte Dritter berührt werden bzw. eine Einzelfallregelung vorliegt. Im Falle der Verlinkung und der Verbreitung muss als Quelle der Name und die Internetadresse der Schule angegeben werden.</p>

      <p className="mb-2"><b>Datenschutzerklärung:</b></p>
      <p className="mb-2">Unsere Datenschutzerklärung finden Sie <a className="underline hover:text-gray-400 cursor-pointe" href={DatenschutzUrl}>hier</a>.</p>

      <p className="mt-10 hover:text-gray-400 hover:underline cursor-pointer"><Link href="/">Back to the Homepage</Link></p>
    </div>
  );
}

export default Impressum;
