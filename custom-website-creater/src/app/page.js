import FirebaseGallery from "./componetns/gallery/firebase_gallery";
import JsonFormatter from "./jsonFormatter";
import Header from "./componetns/header";
import FirebaseReviewList from "./componetns/customer_reviews/firebase_review_list";
import Footer from "./componetns/footer";
import instagram from "./icons/instagram.png";

export default function Home() {
  // const json = new JsonFormatter("");


  return (
    <div className="contentWrapper">
      <Header 
        elements={[
          { title: "Home", href: "/" },
          { title: "About", href: "/about" },
          { title: "Contact", href: "#contactFooter" },
        ]}
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
