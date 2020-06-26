var json;
var submit;

function submit(){
  submit = document.getElementById('input').value;
}

var minhaPromise = function(){
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/dinub');
        xhr.send(null);

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                    json = (JSON.parse(xhr.responseText));
                    dados();

                } else {
                    reject('Erro na Req.');
                }
            }
        }
    })
}

minhaPromise()
    .then(function(response) {
        console.log(response);
    })

    .catch(function(error) {
        console.warn(error);
        document.body.innerHTML = 'Erro ao carregar os dados';
    })


function dados(){

}

// logo enext
document.getElementById("enextLogo").innerHTML = `<svg style="width: 68px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 294.992 136.002"><path d="M620.456,374.119a9.686,9.686,0,0,1-2.9-2.3,10.682,10.682,0,0,1-1.892-3.225,10.287,10.287,0,0,1-.056-7.195,9.747,9.747,0,0,1,1.81-3.129,9.3,9.3,0,0,1,2.929-2.246,8.73,8.73,0,0,1,3.95-.868,8.117,8.117,0,0,1,4.476,1.186,7.431,7.431,0,0,1,2.763,3.087l-1.547.937a5.965,5.965,0,0,0-1.133-1.626,6.086,6.086,0,0,0-3.039-1.668,7.671,7.671,0,0,0-1.629-.179,6.583,6.583,0,0,0-3.122.716,7.171,7.171,0,0,0-2.279,1.875,8.183,8.183,0,0,0-1.4,2.6,9.454,9.454,0,0,0-.469,2.936,8.673,8.673,0,0,0,.566,3.115,8.814,8.814,0,0,0,1.547,2.633,7.44,7.44,0,0,0,2.32,1.82,6.388,6.388,0,0,0,2.915.675,7.355,7.355,0,0,0,1.7-.207,6.56,6.56,0,0,0,1.685-.661,7.076,7.076,0,0,0,1.506-1.13,5.848,5.848,0,0,0,1.16-1.64l1.6.827a5.978,5.978,0,0,1-1.326,1.943,8.7,8.7,0,0,1-1.906,1.42,9.56,9.56,0,0,1-2.224.882,9.229,9.229,0,0,1-2.307.3A7.86,7.86,0,0,1,620.456,374.119Zm18.827.014a9.308,9.308,0,0,1-2.914-2.233,10.127,10.127,0,0,1-1.878-3.184,10.466,10.466,0,0,1-.663-3.666,10.156,10.156,0,0,1,.7-3.749,10.343,10.343,0,0,1,1.948-3.17,9.432,9.432,0,0,1,2.929-2.191,8.284,8.284,0,0,1,3.647-.814,8.108,8.108,0,0,1,3.743.868,9.394,9.394,0,0,1,2.9,2.274,10.488,10.488,0,0,1,1.865,3.184,10.282,10.282,0,0,1,.663,3.624,10.152,10.152,0,0,1-.7,3.749,10.3,10.3,0,0,1-1.934,3.156,9.347,9.347,0,0,1-2.914,2.177,8.669,8.669,0,0,1-7.391-.027Zm.733-16.539a7.163,7.163,0,0,0-2.293,1.861,8.632,8.632,0,0,0-1.45,2.618,8.947,8.947,0,0,0-.511,2.977,9.093,9.093,0,0,0,.525,3.074,8.31,8.31,0,0,0,1.492,2.618,7.319,7.319,0,0,0,2.292,1.82,6.41,6.41,0,0,0,2.956.676,6.335,6.335,0,0,0,3.011-.717,7.356,7.356,0,0,0,2.293-1.875,8.65,8.65,0,0,0,1.45-2.618,8.979,8.979,0,0,0-.028-6.051,8.391,8.391,0,0,0-1.5-2.6,7.435,7.435,0,0,0-2.293-1.806,6.361,6.361,0,0,0-2.929-.675A6.433,6.433,0,0,0,640.016,357.593Zm101.471,17.242V367.5l-7.57-12.239h2.1l6.437,10.53,6.464-10.53h2.1l-7.625,12.294v7.277Zm-11.934,0-12.82-15.988v15.988h-1.905V355.264h1.491L729.3,371.555V355.291h1.906v19.544Zm-19.643,0-2.542-6.12h-8.814l-2.514,6.12H694l8.2-19.571h1.575l8.205,19.571Zm-10.94-7.636h7.957L703,357.524Zm-18.758,7.636V355.264h8.122a5.1,5.1,0,0,1,2.335.537,6.147,6.147,0,0,1,1.837,1.406,6.466,6.466,0,0,1,1.2,1.971,6.147,6.147,0,0,1,.428,2.233,6.836,6.836,0,0,1-.4,2.329,6.092,6.092,0,0,1-1.147,1.971,5.82,5.82,0,0,1-1.782,1.378,5.024,5.024,0,0,1-2.307.524h-6.382v7.223Zm1.905-8.932h6.272a3.3,3.3,0,0,0,1.561-.372,3.8,3.8,0,0,0,1.2-.992,4.681,4.681,0,0,0,.774-1.435,5.238,5.238,0,0,0,.276-1.695,4.757,4.757,0,0,0-1.174-3.143,3.927,3.927,0,0,0-1.271-.951,3.56,3.56,0,0,0-1.534-.344h-6.106Zm-8.784,8.932V358.764L666.179,371.2h-1.133l-7.183-12.433v16.071h-1.906V355.264h1.961l7.681,13.4,7.681-13.4h1.961v19.571Zm-80.559,0V355.264H600.9a5.1,5.1,0,0,1,2.335.537,6.148,6.148,0,0,1,1.837,1.406,6.466,6.466,0,0,1,1.2,1.971,6.148,6.148,0,0,1,.428,2.233,6.858,6.858,0,0,1-.4,2.329,6.091,6.091,0,0,1-1.147,1.971,5.819,5.819,0,0,1-1.782,1.378,5.024,5.024,0,0,1-2.307.524H594.68v7.223Zm1.905-8.932h6.272a3.3,3.3,0,0,0,1.561-.372,3.8,3.8,0,0,0,1.2-.992,4.68,4.68,0,0,0,.774-1.435,5.237,5.237,0,0,0,.276-1.695,4.756,4.756,0,0,0-1.174-3.143,3.926,3.926,0,0,0-1.271-.951,3.563,3.563,0,0,0-1.534-.344H594.68Zm-19.062,8.932V355.264h8.122a5.1,5.1,0,0,1,2.334.537,6.151,6.151,0,0,1,1.838,1.406,6.466,6.466,0,0,1,1.2,1.971,6.128,6.128,0,0,1,.427,2.233,6.835,6.835,0,0,1-.4,2.329A6.092,6.092,0,0,1,588,365.711a5.839,5.839,0,0,1-1.781,1.378,5.03,5.03,0,0,1-2.308.524h-6.381v7.223Zm1.907-8.932h6.27a3.294,3.294,0,0,0,1.561-.372,3.806,3.806,0,0,0,1.2-.992,4.717,4.717,0,0,0,.773-1.435,5.238,5.238,0,0,0,.276-1.695,4.756,4.756,0,0,0-1.174-3.143,3.946,3.946,0,0,0-1.271-.951,3.56,3.56,0,0,0-1.534-.344h-6.1ZM562.8,374.836l-4.117-9.676-4.145,9.676h-1.713l-8.26-19.571h2.044l7.128,17.339,3.73-8.849-3.425-8.352h1.851l2.762,6.946,2.79-6.946h1.823l-3.425,8.352L563.6,372.6l7.1-17.339h2.1l-8.288,19.571Zm-26.246,0-2.542-6.12H525.2l-2.515,6.12h-2.044l8.205-19.571h1.574l8.205,19.571Zm-10.94-7.636h7.957l-3.923-9.676Zm203.873-35.477-14.5-22.3-14.61,22.249a4.434,4.434,0,0,1-3.79,1.644,10.284,10.284,0,0,1-5.766-2.3c-2.142-1.534-3.186-3.124-3.186-4.712a4.362,4.362,0,0,1,.934-2.576l16.807-24-15.983-22.687a3.836,3.836,0,0,1-.933-2.412c0-1.643,1.043-3.233,3.185-4.767A10.35,10.35,0,0,1,697.8,267.5a3.612,3.612,0,0,1,3.406,1.643l13.785,21.537,13.841-21.427a3.874,3.874,0,0,1,3.514-1.753,10.443,10.443,0,0,1,5.987,2.356c2.142,1.589,3.24,3.179,3.24,4.767a4.471,4.471,0,0,1-.933,2.412l-16.092,22.8-.087.088,16.893,23.86a4.238,4.238,0,0,1,.934,2.576c0,1.534-1.044,3.068-3.131,4.658a9.926,9.926,0,0,1-5.986,2.357A4.158,4.158,0,0,1,729.488,331.723Zm-94.908-5.809c-5.876-4.932-8.623-11.4-8.623-19.4V293.691a24.232,24.232,0,0,1,8.074-18.413,29.2,29.2,0,0,1,38.776-.712,22.615,22.615,0,0,1,7.909,17.7,20.386,20.386,0,0,1-.933,6.686,6.2,6.2,0,0,1-2.966,3.616,13.909,13.909,0,0,1-3.79,1.371,30.683,30.683,0,0,1-4.613.438H644.686v-9.864h17.52c1.977,0,3.3,0,3.955-.548s.989-1.371.989-2.959a11.909,11.909,0,0,0-3.955-9.042,13.892,13.892,0,0,0-9.832-3.727,14.652,14.652,0,0,0-9.886,3.507,11.607,11.607,0,0,0-4.394,8.987v16.385a13.626,13.626,0,0,0,5.217,10.8c3.295,2.686,7.854,4,13.072,4a22.667,22.667,0,0,0,10.49-2.576c3.3-1.7,5.328-2.576,6.042-2.576a4.933,4.933,0,0,1,3.955,2.191,7.1,7.1,0,0,1,1.647,4.22c0,2.246-2.142,4.494-6.481,6.74s-9.611,3.4-15.927,3.4C647.872,333.312,640.457,330.846,634.58,325.913Zm-133.792,0c-5.877-4.932-8.788-11.4-8.788-19.4V293.691a24.4,24.4,0,0,1,8.238-18.413,29.422,29.422,0,0,1,38.941-.712,22.617,22.617,0,0,1,7.908,17.7,19.02,19.02,0,0,1-.933,6.686,6.2,6.2,0,0,1-2.966,3.616,13.93,13.93,0,0,1-3.79,1.371,30.7,30.7,0,0,1-4.613.438H510.125v-9.864h18.4c1.977,0,3.35,0,4.01-.548.714-.548,1.043-1.371,1.043-2.959a11.855,11.855,0,0,0-3.9-9.042,13.534,13.534,0,0,0-9.721-3.727,14.233,14.233,0,0,0-9.722,3.507,11.422,11.422,0,0,0-4.009,8.987v16.385a13.3,13.3,0,0,0,4.834,10.8c3.24,2.686,7.469,4,12.687,4a22.664,22.664,0,0,0,10.49-2.576c3.3-1.7,5.328-2.576,6.042-2.576a4.932,4.932,0,0,1,3.955,2.191,7.094,7.094,0,0,1,1.648,4.22c0,2.246-2.142,4.494-6.481,6.74s-9.667,3.4-15.983,3.4C514.189,333.312,506.665,330.846,500.788,325.913Zm275.275,6.358c-15.818,0-24.222-7.069-24.222-21.1V243.6c0-1.261.989-2.357,2.417-3.234a9.842,9.842,0,0,1,5.163-1.37,9.724,9.724,0,0,1,4.943,1.37,3.84,3.84,0,0,1,2.252,3.234v67.624c0,3.233.66,5.59,2.087,6.96,1.428,1.315,3.845,2.083,7.36,2.083h4.723a5.657,5.657,0,0,1,6.1,5.863,6.082,6.082,0,0,1-1.648,4.329,5.566,5.566,0,0,1-4.449,1.809ZM601.572,331.01a4.184,4.184,0,0,1-2.362-3.452V294.184a13.663,13.663,0,0,0-3.955-9.7,12.552,12.552,0,0,0-9.5-4.33,13.241,13.241,0,0,0-9.118,3.727V271.99c0-.493,1.428-.986,2.2-1.48a20.723,20.723,0,0,1,11.26-3.014c6.371,0,11.808,2.63,16.476,7.836s6.81,11.453,6.921,18.8v33.429a3.875,3.875,0,0,1-1.977,3.452,9.319,9.319,0,0,1-4.944,1.261A9.545,9.545,0,0,1,601.572,331.01Zm-41.192-.055a3.783,3.783,0,0,1-1.922-2.9V272.812a3.989,3.989,0,0,1,2.087-3.288,9.584,9.584,0,0,1,5.162-1.261,7.709,7.709,0,0,1,4.558,1.316c1.1.767.824,1.753,1.922,2.9v55.239a3.924,3.924,0,0,1-2.032,3.288,9.717,9.717,0,0,1-5.162,1.261A7.766,7.766,0,0,1,560.38,330.955Zm211.18-51.787V267.715h11.479a3.668,3.668,0,0,1,2.856,1.918,7.589,7.589,0,0,1,1.1,4.055,6.66,6.66,0,0,1-1.1,3.782,3.63,3.63,0,0,1-2.856,1.7Z" transform="translate(-492 -239)" fill="#fff"></path></svg>`
