// Obtener el elemento HTML que contiene el includable
var includableElement = document.getElementById("i:meteor");

// Obtener el valor del atributo "data:icon"
var iconValue = includableElement.getAttribute("data-icon");

// Crear un elemento SVG
var svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svgElement.setAttribute("viewBox", "0 0 24 24");
svgElement.classList.add("i", iconValue);

// Crear un elemento de camino (path) correspondiente al valor del icono
var pathCode;
switch (iconValue) {
  case "monu":
    pathCode = '<path d="M3 6h9m-9 6h18M3 18h9"/>';
    break;
  case "menu":
    pathCode = '<path d="M12 6h9M3 12h18m-9 6h9"/>';
    break;
  case "home":
    pathCode = '<path d="M12 6h9M3 12h18m-9 6h9"/>';
    break;
  case "headline-prev":
    pathCode = '<path d="m16 20-8-8 8-8"/>';
    break;
  case "headline-next":
    pathCode = '<path d="m8 20 8-8-8-8"/>';
    break;
  case "user":
    pathCode = '<circle cx="12" cy="6" r="4"/><path d="M21 22a1 1 0 0 0-18 0Z"/>';
    break;
  case "clock":
    pathCode = '<circle cx="12" cy="12" r="10"/><path d="M12 7v5l3 3"/>';
    break;
  default:
    // Si no hay un valor de icono coincidente, no se muestra ningún icono
    pathCode = '';
    break;
}

// Establecer el código SVG correspondiente como el innerHTML del elemento SVG
svgElement.innerHTML = pathCode;

// Reemplazar el includable con el elemento SVG
includableElement.parentNode.replaceChild(svgElement, includableElement);
