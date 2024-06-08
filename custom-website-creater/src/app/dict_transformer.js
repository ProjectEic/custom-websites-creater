


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
}


function remove_dict_starting_order(dict) {
    if (!dict) {
        return dict;
    }
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
