import FirebaseGallery from "./componetns/gallery/firebase_gallery";
import JsonFormatter from "./jsonFormatter";
import Header from "./componetns/header";
import FirebaseReviewList from "./componetns/customer_reviews/firebase_review_list";
import Footer from "./componetns/footer";
import instagram from "./icons/instagram.png";
import Landing from "./componetns/landing_section/landing_section";
import about from "./icons/about.jpg";

export default function Home() {
  // const json = new JsonFormatter("");


  return (
    <div className="contentWrapper">
      <Header 
        elements={[
          { title: "Home", href: "/" },
          { title: "About", href: "#Landing" }, // landing section => maybe rephrase to about or start or something
          { title: "Gallery", href: "#Gallery" },
          { title: "Contact", href: "#contactFooter" },
        ]}
      />

      <Landing 
          headline="me"
          aboutText="No man has been known to mankind which isn't a man who only thinks that mankind can achieve greatness as a man being. No man has been known to mankind which isn't a man who only thinks that mankind can achieve greatness as a man being."
          backgroundImageUrl="about"
      />

      <FirebaseGallery/>
      <FirebaseReviewList/>
      <Footer

      // json.generateLinks() make it equal links
        links={
          [
            { name: "Instagram", address: "insta.com", icon: instagram},
            { name: "TikTok", address: "tiktok.com", icon: instagram},
            { name: "Meta", address: "meta.com", icon: instagram},
          ]
        }
        // json.generateFooterInformation() make it equal companySpecs

        // perhaps split into 2 sides => one side category like Address and the other side the actual information => could allow extra style for right side => more focus on it
        const companySpecs ={ [
          "Company Name: Baumhaus",
          "Address: Neudietenholz 1, 12345 Baumhausen",
          "Email: BaumhausGMBH@mail.de",
          "Phone: 0123456789",
        ]}
      />
    </div>
  );
}
