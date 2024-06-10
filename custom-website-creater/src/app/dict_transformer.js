


const order_str = '_';
function n_times_string(n) {
    return Array(n).fill(order_str).join('');
}



function add_dict_starting_order(dict) {
    if (!dict) {
        return dict;
    }
    let dict_keys = Object.keys(dict);
    const new_dict = {};
    dict_keys.forEach((key, index) => {
        new_dict[n_times_string(index) + key] = dict[key];
    });
    return new_dict;
}


// order dict keys by amount of order_str, less order_str means higher index
function order_dict(d) {
    let dict_keys = Object.keys(d);
    dict_keys.sort((a, b) => {
        let a_order = a.split(order_str).length - 1;
        let b_order = b.split(order_str).length - 1;
        return a_order - b_order;
    });
    const new_dict = {};
    dict_keys.forEach((key) => {
        new_dict[key] = d[key];
    });
    return new_dict;

}

function remove_dict_starting_order(dict) {
    if (!dict) {
        return dict;
    }

    dict = order_dict(dict);


    let dict_keys = Object.keys(dict);
    const new_dict = {};
    dict_keys.forEach((key, index) => {
        if (key[0] !== order_str) {
            new_dict[key] = dict[key];
            return;
        }
        new_dict[key.substring(index)] = dict[key];
    });
    return new_dict;
}




export {add_dict_starting_order, remove_dict_starting_order};
