import FileGallery from "./componetns/gallery/files_gallery";
import FirebaseGallery from "./componetns/gallery/firebase_gallery";
import Header from "./componetns/header";
import ReviewList from "./componetns/customer_reviews/review_list";
import FirebaseReviewList from "./componetns/customer_reviews/firebase_review_list";

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
    </div>
  );
}
