function initMap(length,users) {
   const options = {
     zoom: 16,
     center: { lat:32.75 ,lng:-97.13}
   }
   const map = new google.maps.Map(document.getElementById('map'),options)
   function addMarker(props) {
      const marker = new google.maps.Marker({
         position: {lat:parseFloat(props.latitude),lng:parseFloat(props.longitude)},
         map:map,
         label: props.label
       });
   }
   let displayText = document.getElementById('displayText')
   displayText.innerHTML=""
   let displayT = ""
   let labels = 1
   if (length>10){
      for(i=0;i<10;i++){
         const latitude = users.businesses[i].coordinates.latitude
         const longitude = users.businesses[i].coordinates.longitude
         const image = users.businesses[i].image_url
         const rating = users.businesses[i].rating
         const url = users.businesses[i].url
         const name = users.businesses[i].name
         
         displayT = displayT += `${image}\n 
         ${rating}\n
         ${url}\n     
         `
         
         const output = `<li>
               <img src=${image}><br/>
               <a href=${url}>${name}</a>
               <p>Rating: ${rating}</p>
         </li>`;

         displayText.insertAdjacentHTML("beforeend", output);
         let img = document.createElement('img')

         addMarker({
            latitude: latitude,
            longitude: longitude,
            label: `${labels}`,

         })
         labels += 1
      }
   }
   else{
      for(i=0;i<length;i++){
         const latitude = users.businesses[i].coordinates.latitude
         const longitude = users.businesses[i].coordinates.longitude
         const image = users.businesses[i].image_url
         const rating = users.businesses[i].rating
         const url = users.businesses[i].url
         const name = users.businesses[i].name
         
         displayT = displayT += `${image}\n 
         ${rating}\n
         ${url}\n     
         `

         const output = `<li>
               <img src=${image}><br/>
               <a href=${url}>${name}</a>
               <p>Rating: ${rating}</p>
         </li>`;

         displayText.insertAdjacentHTML("beforeend", output);

         addMarker({
            latitude: latitude,
            longitude: longitude,
            label: `${labels}`,

         })
         labels += 1
         
      }
   }


   
 }




function sendRequest () {
   const search = document.getElementById('search')
   let value = search.value
   value = value.replaceAll(" ","+")
   var xhr = new XMLHttpRequest();
   xhr.open("GET", `https://api.yelp.com/v3/businesses/search?term=${value}&location=Arlington+Texas&limit=10`,true);
   xhr.setRequestHeader("Accept","application/json");
   xhr.setRequestHeader("Authorization", "Bearer i6LdgRRNDolECGnS0Q7MQf5c3-nNV9rciQdmNy6x0jBFGtBv8DlnCSd2erPEOlKOb6m63MFMj0UzEEINB58fmdZBgy0bW75qfrb4BtRQxZGFcmqczb3vFXjK6G9qYXYx");
   
   xhr.onload = function(){
      if(this.status == 200){
         const users = JSON.parse(this.responseText);
         console.log(users.businesses);
         length = users.businesses.length
         
         initMap(length,users)
         


         
      }
   }
   xhr.send(null);
}

