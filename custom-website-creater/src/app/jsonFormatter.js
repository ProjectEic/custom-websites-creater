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

    generateFooterInformation() {
        // TODO: Add code here to generate footer information
    }

    generateLinks() {
        // TODO: Add code here to generate links
    }
}
