"use client";
import FirebaseLanding from "./components/landing_section/firebase_landing";
import FirebaseFooter from "./components/footer/firebase_footer";
import FirebaseServiceList from "./components/services/firebase_service_list";
import FirebaseGallery from "./components/gallery/firebase_gallery";
import FirebaseReviewList from "./components/customer_reviews/firebase_review_list";
import FirebaseDatenschutz from "./Datenschutz/f/page";
import FirebaseImpressum from "./Impressum/f/page";

import LocalLanding from "./components/landing_section/local_landing";
import LocalFooter from "./components/footer/local_footer";
import LocalServiceList from "./components/services/local_service_list";
import FileGallery from "./components/gallery/files_gallery";
import LocalReviewList from "./components/customer_reviews/local_review_list";
import LocalDatenschutz from "./Datenschutz/l/page";
import LocalImpressum from "./Impressum/l/page";

const contentMap = {

    firebase: {
        "landing": <FirebaseLanding/>,
        "footer": <FirebaseFooter/>,
        "services": <FirebaseServiceList/>,
        "reviews": <FirebaseReviewList/>,
        "gallery": <FirebaseGallery/>,
        "datenschutz": <FirebaseDatenschutz/>,
        "impressum": <FirebaseImpressum/>
    },

    local: {
        "landing": <LocalLanding/>,
        "footer": <LocalFooter/>,
        "services": <LocalServiceList/>,
        "reviews": <LocalReviewList/>,
        "gallery": <FileGallery/>,
        "datenschutz": <LocalDatenschutz/>,
        "impressum": <LocalImpressum/>
    },

    displayText: {
        "landing": {title: "Startseite", href:"#Landing"},
        "footer": {title: "Kontakt", href:"#Contact"},
        "services": {title: "Dienstleistungen", href:"#Services"},
        "reviews": {title: "Bewertungen", href:"#Reviews"},
        "gallery": {title: "Gallerie", href:"#Gallery"},
        "datenschutz": {title: "Impressum", href:"/Datenschutz"},
        "impressum": {title: "Datenschutz", href:"/Impressum"},
    }

}


export default contentMap;