
import Header from "./componetns/header";
import Settings from "./website_settings.json";
import Mapper from "./content_mapper"; 


export default function Home() {
  // const json = new JsonFormatter("");


  return (
    <div className="contentWrapper">
      <Header 
        elements={
          Settings["contents"].map((content) => (
            Mapper["displayText"][content]
          ))
        }
      />

      {
        Settings["contents"].map((content) => (
          Mapper[Settings["mode"]][content]
        ))
      }
      {/* <FirebaseLanding/>


      <FirebaseServiceList/>


      <FirebaseGallery/>

      
      <LocalReviewList/>

      <FirebaseFooter/> */}


    </div>
  );
}
