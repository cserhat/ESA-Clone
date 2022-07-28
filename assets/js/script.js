
const api_url ='https://api.wheretheiss.at/v1/satellites/25544.json';
async function getISS(){
    const response = await fetch(api_url);
    const data = await response.json();
    const { latitude, longitude } = data;
    console.log(data.latitude);
    console.log(data.longitude);
    lat = data.latitude;
    lng = data.longitude;
    return data;
    
}

function initMap(data) {
    // The location of Uluru
    const uluru = { lat, lng};
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }

getISS().then(initMap)

function active() {
document.getElementById("but").classList.toggle("active");
;
}
function active2() {
document.getElementById("large").classList.toggle("active");
}
function active3() {
document.getElementById("large2").classList.toggle("active");
  }

function active4() {
  document.getElementById("large3").classList.toggle("active");
  }



    function image() {
      var image = document.getElementById('menu');
      if (image.src.match("assets/img/menu.png")) {
          image.src = "assets/img/x.png";
      }
      else {
          image.src = "assets/img/menu.png";
      }
  }