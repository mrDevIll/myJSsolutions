//from eloquent javascript

var MOUNTAINS = [
    { name: "Kilimanjaro", height: 5895, country: "Tanzania" },
    { name: "Everest", height: 8848, country: "Nepal" },
    { name: "Mount Fuji", height: 3776, country: "Japan" },
    { name: "Mont Blanc", height: 4808, country: "Italy/France" },
    { name: "Vaalserberg", height: 323, country: "Netherlands" },
    { name: "Denali", height: 6168, country: "United States" },
    { name: "Popocatepetl", height: 5465, country: "Mexico" }
];
function buildTable(data) {
    //create element table  
    let table = document.createElement("table");

    function createHeader(keys) {
        //returns the key of an object as th table headers from an object {key:data}
        let tr = document.createElement("tr");
        for (let key in keys) {
            let tHead = document.createElement("th");
            tr.appendChild(tHead).innerHTML = key;
        }
        return tr;

    }

    trHead = createHeader(data[0]);
    //passes the single object of the array;
    table.appendChild(trHead);

    for (let i = 0; i < data.length; i++) {
        let tr = document.createElement("tr");
        //create a single object
        let x = data[i];
        for (k in x) {
            let td = document.createElement("td");
            tr.appendChild(td).innerHTML = x[k];
        }

        table.appendChild(tr);

    }
    return table;

}
document.body.appendChild(buildTable(MOUNTAINS));