import FileGallery from "./componetns/gallery/files_gallery";
import FirebaseGallery from "./componetns/gallery/firebase_gallery";
import JsonFormatter from "./jsonFormatter";
import Header from "./componetns/header";
import ReviewList from "./componetns/customer_reviews/review_list";
import FirebaseReviewList from "./componetns/customer_reviews/firebase_review_list";
import Footer from "./componetns/footer";

export default function Home() {
  const json = new JsonFormatter("");


  return (
    <div className="contentWrapper">
      <Header 
        elements={[
          { title: "Home", href: "/" },
          { title: "About", href: "/about" },
          { title: "Contact", href: "/contact" },
        ]}
      />
      <FirebaseGallery/>
      <FirebaseReviewList/>
      <Footer

      // json.generateLinks() make it equal links
        links={
          [
            { name: "Instagram", address: "insta.com", icon: "/instagram.png"},
            { name: "TikTok", address: "tiktok.com", icon: "/instagram.png"},
            { name: "Meta", address: "meta.com", icon: "/instagram.png"},
          ]
        }
        // json.generateFooterInformation() make it equal companySpecs
        const companySpecs ={ [
          "Company Name",
          "Address",
          "Email",
          "Phone",
        ]}
      />
    </div>
  );
}
