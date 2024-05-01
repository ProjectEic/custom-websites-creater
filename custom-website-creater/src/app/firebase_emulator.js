import website_data from './website_data.json';

function ref(a, b) {
    return b.replace(/^\//, "");
}
console.log(website_data);
async function get(path) {
    return {
        v: website_data[path],
        val: () => website_data[path]
    }
}

export { ref, get };