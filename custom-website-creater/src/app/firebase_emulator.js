import website_data from "./website_data.json";

const ref = (a, b) => {
    return b.replace(/^\//, "");
}
console.log(website_data);
const get = async (path) => {
    return {
        v: website_data[path],
        val: () => website_data[path]
    }
}

export { ref, get };