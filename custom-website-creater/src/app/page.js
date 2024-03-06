import FileGallery from "./componetns/gallery/files_gallery";
import FirebaseGallery from "./componetns/gallery/firebase_gallery";
import Header from "./componetns/header";
import ReviewList from "./componetns/customer_reviews/review_list";
import FirebaseReviewList from "./componetns/customer_reviews/firebase_review_list";
import Footer from "./componetns/footer";

export default function Home() {
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
        links={
          [
            { name: "Instagramm", address: "insta.com", icon: "/instagramm.png"},
            { name: "TikTok", address: "tiktok.com", icon: "/instagramm.png"},
            { name: "Meta", address: "meta.com", icon: "/instagramm.png"},
          ]
        }
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
