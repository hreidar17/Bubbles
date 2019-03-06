const getAllBundles = () => {
    return fetch('http://localhost:3500/api/bundles').then(resp => {
        if (resp.ok) {return resp.json(); }
    }).then(data => {
        if(!data) {return []; }
        console.log("this: " + data);
        const bundles = data;
        return bundles;
    });
};

export default {
    getAllBundles
};