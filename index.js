console.clear();
console.log('hello world!');
// URL als variable anlegen 
const url = "https://rickandmortyapi.com/api/location";
const locations = [];
// erstellen eine fetch und holen uns sämtliche Locations Daten  
fetch(url)
    .then((jsonObject) => jsonObject.json())
    .then((javascriptObject) => {
        //console.log(javascriptObject.results)
        displayLocations(javascriptObject.results);
    }).catch(error => console.error(error.message));


function displayLocations(locations){
    console.log(locations.length);
    // Filter-Funktion aufrufen
    filterLocations(locations);
}
// Filter-Funktion definieren
function filterLocations(locations){
    const allPlanets = locations.filter((location) => {
        if (location.type==="Planet" && location.dimension==="unknown") {
         
            return true;
        
        }
        return false;
      });
      
      //console.log(allPlanets);
      showPlanets(allPlanets);
}
function showPlanets(planets){
    planets.forEach((planet)=>{
          writeHtml(planet.name);  
    }  
    )
}

function writeHtml(){
    const planets = document.querySelector('[data-js="planets"]');
    
}