console.clear();
console.log('hello world!');
// URL als variable anlegen 
const url = "https://rickandmortyapi.com/api/location";
// erstellen eine fetch und holen uns sämtliche Locations Daten  
const locations = fetch(url)
    .then((jsonObject) => jsonObject.json())
    .then((javascriptObject) => {
        console.log(javascriptObject.results)
        return javascriptObject.results;
    }).catch(error => console.error(error.message));
console.log(locations);