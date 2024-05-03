import FirebaseLanding from './componetns/landing_section/firebase_landing';
import FirebaseFooter from './componetns/footer/firebase_footer';
import FirebaseServiceList from './componetns/services/firebase_service_list';
import FirebaseGallery from './componetns/gallery/firebase_gallery';
import FirebaseReviewList from './componetns/customer_reviews/firebase_review_list';
import FirebaseDatenschutz from './componetns/Datenschutz/firebase_datenschutz';
import FirebaseImpressum from './componetns/Impressum/firebase_impressum';

import LocalLanding from './componetns/landing_section/local_landing';
import LocalFooter from './componetns/footer/local_footer';
import LocalServiceList from './componetns/services/local_service_list';
import FileGallery from './componetns/gallery/files_gallery';
import LocalReviewList from './componetns/customer_reviews/local_review_list';
import LocalDatenschutz from './componetns/Datenschutz/local_datenschutz';
import LocalImpressum from './componetns/Impressum/local_impressum';

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