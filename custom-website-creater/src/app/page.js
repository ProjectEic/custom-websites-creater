import FileGallery from "./componetns/files_gallery";
import FirebaseGallery from "./componetns/firebase_gallery";
import Header from "./componetns/header";

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
    </div>
  );
}
