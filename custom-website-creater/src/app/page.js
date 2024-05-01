import FirebaseGallery from "./componetns/gallery/firebase_gallery";
import Header from "./componetns/header";
import FirebaseReviewList from "./componetns/customer_reviews/firebase_review_list";
import Footer from "./componetns/footer";
import instagram from "./icons/instagram.png";
import Landing from "./componetns/landing_section/landing_section";
import Services from "./componetns/services/services_list"
import FirebaseServiceList from "./componetns/services/firebase_service_list";
import FirebaseLanding from "./componetns/landing_section/firebase_landing";
import FirebaseFooter from "./componetns/footer/firebase_footer";

import LocalReviewList from "./componetns/customer_reviews/local_review_list";

export default function Home() {
  // const json = new JsonFormatter("");


  return (
    <div className="contentWrapper">
      <Header 
        elements={[
          { title: "Home",href: "#Landing" }, // landing section => maybe rephrase to about or start or something
          { title: "Services", href: "#Services" },
          { title: "Gallery", href: "#Gallery" },
          { title: "Reviews", href: "#Reviews"},
          { title: "Contact", href: "#contactFooter" },
        ]}
      />

      {/* <Landing 
          headline="Baumheim Consulting Gmbh"
          aboutText="No man has been known to mankind which isn't a man who only thinks that mankind can achieve greatness as a man being. No man has been known to mankind which isn't a man who only thinks that mankind can achieve greatness as a man being."
          backgroundImageUrl="about"
      /> */}
      <FirebaseLanding/>

      {/* <Services services={[
          {
              name: "Service 1;Service 1;Service 1Service 1",
              text: "Description of service 1;Description of service 1;Description of service 1;Description of service 1;Description of service 1;Description of service 1",
              image: instagram,
              hasImage: true,
              link: "#contactFooter",
              linkText: "Kontakt"
          },
          {
              name: "Service 2",
              text: "Description of service 2",
              image: "",
              hasImage: false
          }
      ]} /> */}

      <FirebaseServiceList/>


      <FirebaseGallery/>

      
      <LocalReviewList/>

      {/* <Footer

      // json.generateLinks() make it equal links
        links={
          [
            { name: "Instagram", address: "insta.com", icon: instagram},
            { name: "TikTok", address: "tiktok.com", icon: instagram},
            { name: "Meta", address: "meta.com", icon: instagram},
          ]
        }
        // json.generateFooterInformation() make it equal companySpecs
        const companySpecs = {
          new Map([
            ['Company Name', 'Baumhaus'],
            ['Address', 'Neudietenholz 1, 12345 Baumhausen'],
            ['Email', 'BaumhausGMBH@mail.de'],
            ['Phone', '0123456789']
        ])}

      /> */}

      <FirebaseFooter/>


    </div>
  );
}
