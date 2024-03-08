class JsonFormatter {
    jsonContent;

    constructor(jsonFileLink) {
        try {
            this.jsonContent = JSON.parse(jsonFileLink);
        } catch (error) {
            console.error("Error parsing JSON:", error);
            this.jsonContent = {};
        }
    }


    generateHeaderInformation(){
        // TODO: Add code here to generate header infomation
    }

    generateFooterInformation() {
        // TODO: Add code here to generate footer information
    }

    generateLinks() {
        // TODO: Add code here to generate links
    }
}

export default JsonFormatter;