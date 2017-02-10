var r = new XMLHttpRequest(); //Jquery buþið að skrifa þetta. klasi sem er gerður til þess að fá kóda annars staðar en af síðunni okkar
r.open("GET", "https://api.themoviedb.org/3/movie/550?api_key=62361387d4ff155b9130578453108221", true); // Notum oftast GET . URL eru Upplýsingar sem við erum að ná í . Gott að setja urlið í json validator til að fá þær skýrari.
r.onreadystatechange = function () { 
  if (r.readyState != 4 || r.status != 200) return; // event sem segir þegar gögnin eru tilbúin á servernum. 
  const response = JSON.parse(r.responseText) //function sem breytir streng í json object form. 
  const container = document.createElement("div"); //Bý til div sem heitir container. Ekki komin inná vefsíðuna ennþá. Er að vinna með þau.
  const image = document.createElement("img");
  const title = document.createElement("h1");
  image.src = "http://image.tmdb.org/t/p/original" + response.backdrop_path  //til að fá þessa slóð. Fara inní Configuration á https://developers.themoviedb.org/3/configuration og í Try It Out flipann. Setja þar inní Api keyinn. 
  title.innerHTML = response.original_title; //original_title hér 
  container.append(image);
  container.append(title);
  document.body.append(container);

};
r.send("banana=yellow");