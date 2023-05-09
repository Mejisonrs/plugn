var includeElements = document.getElementsByTagName("b:include");
  
Array.from(includeElements).forEach(includeElement => {
  var iconValue = JSON.parse(includeElement.getAttribute("data")).icon;

  var pathCode;
  switch (iconValue) {
    case "menu-center":
      pathCode = '<path d="M3 6h18M3 12H21M3 18H21"/>';
      break;
    case "menu-left":
      pathCode = '<path d="M3 6h9M3 12H21M3 18h9"/>';
      break;
    case "menu-right":
      pathCode = '<path d="M12 6h9M3 12H21m-9 6h9"/>';
      break;
    case "arrow-up":
      pathCode = '<path d="M6 15l6-6 6 6"/>';
      break;
    case "arrow-left":
      pathCode = '<path d="M15 18 9 12l6-6"/>';
      break;
    case "arrow-right":
      pathCode = '<path d="M9 18l6-6-6-6"/>';
      break;
    case "arrow-down":
      pathCode = '<path d="M6 9l6 6 6-6"/>';
      break;
    case "arrow-up-line":
      pathCode = '<path d="M9 6l3-3 3 3M12 21V3"/>';
      break;
    case "arrow-left-line":
      pathCode = '<path d="M6 9 3 12l3 3m15-3H3"/>';
      break;
    case "arrow-right-line":
      pathCode = '<path d="M18 9l3 3-3 3M3 12H21"/>';
      break;
    case "arrow-down-line":
      pathCode = '<path d="M9 18l3 3 3-3M12 3V21"/>';
      break;
    case "arrow-rotate-line":
      pathCode = '<path d="M20 18A10 10 0 1121.17 8M22 4V8H18"/>';
      break;
    case "arrow-trend-down":
      pathCode = '<path d="M23 18 13 8l-5 5L1 6M16 18h7V11"/>';
      break;
    case "arrow-trend-up":
      pathCode = '<path d="M23 6l-10 10-5-5-7 7M16 6h7V13"/>';
      break;
    case "arrows-rotate-line":
      pathCode = '<path d="M21.5 9A10 10 0 002.5 9M2 5V9H6m12 6h4v4M2.5 15a10 10 0 0019 0"/>';
      break;
    case "clock":
      pathCode = '<circle cx="12" cy="12" r="10"/><path d="M12 7v5l3 3"/>';
      break;
    case "coffee":
      pathCode = '<path d="M6 2V5m4-3V5m4-3V5m4 4v9a4 4 0 01-4 4H6A4 4 0 012 18V9H19a1 1 0 010 8H18"/>';
      break;
    case "comment":
      pathCode = '<path d="M4.3 16.7a9 9 0 113 3L3 21Z"/>';
      break;
    case "comment-dots":
      pathCode = '<path d="M4.3 16.7a9 9 0 113 3L3 21ZM8 12H8m4 0h0m4 0h0"/>';
      break;
    case "copy":
      pathCode = '<path d="M5 15h-1a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2V5"/><rect width="13" height="13" x="9" y="9" rx="2"/>';
      break;
    case "credit-card":
      pathCode = '<rect width="22" height="16" x="1" y="4" rx="2"/><path d="M1 9h22M5 16h2m3 0h5"/>';
      break;
    case "download":
      pathCode = '<path d="m7 10 5 5 5-5m-5 5V3m10 12v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4"/>';
      break;
    case "droplet":
      pathCode = '<path d="m12 1 6 6A9 9 0 1 1 6 7Z"/>';
      break;
    case "ellipsis-vertica":
      pathCode = '<circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/>';
      break;
    case "ellipsis":
      pathCode = '<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>';
      break;
    case "equals":
      pathCode = '<path d="M5 15h14M5 9h14"/>';
      break;
    case "file":
      pathCode = '<path d="m4 4a2 2 0 012-2h8l6 6v12a2 2 0 01-2 2H6A2 2 0 014 20z"/>';
      break;
    case "filter":
      pathCode = '<path d="M22 3H2l8 10v4l4 4v-8l8-10Z"/>';
      break;
    case "home":
      pathCode = '<path d="M21 21H3V9l9-7 9 7V21Z"/>';
      break;
    case "lock":
      pathCode = '<path d="M17 9V7a4 4 0 00-10 0v2"/><rect width="18" height="12" x="3" y="10" rx="2"/>';
      break;
    case "search":
      pathCode = '<circle cx="10" cy="10" r="7"/><path d="m15 15 6 6"/>';
      break;
    case "tag":
      pathCode = '<path d="M12 2H2v10l8.5 8.5q1.5 1.4 3 0l7-7q1.4-1.5 0-3ZM7 7h0"/>';
      break;
    case "user":
      pathCode = '<circle cx="12" cy="6" r="4"/><path d="M21 22a1 1 0 0 0-18 0Z"/>';
      break;
    case "close":
      pathCode = '<path d="M18 6 6 18M6 6l12 12"/>';
      break;
    case "telegram":
      pathCode = '<path d="M12.5 16 9 19.5 7 13l-5.5-2 21-8-4 18-7.5-7 4-3"/>';
      break;
    case "whatsapp":
      pathCode = '<circle cx="9" cy="9" r="1"/><circle cx="15" cy="15" r="1"/><path d="M8 9a7 7 0 0 0 7 7m-9 5.2A11 11 0 1 0 2.8 18L2 22Z"/>';
      break;
    case "twitter":
      pathCode = '<path d="M12 7.5a4.5 4.5 0 0 1 8-3Q22 4 23 3q0 2-2 4A13 13 0 0 1 1 19q5 0 7-2-8-4-5-13 4 5 9 5Z"/>';
      break;
    case "tiktok":
      pathCode = '<path d="m22 6v5q-4 0-6-2v7a7 7 0 11-5-6.7M11 16a2 2 0 10-2 2 2 2 0 002-2V1h5q2 5 6 5"/>';
      break;
    case "tumblr":
      pathCode = '<path d="M18 17.5V22h-4a5 5 0 0 1-5-5v-7H7V6.5q3.3-.9 3.5-4.5H14v4h4v4h-4v6.5q0 1 1 1Z"/>';
      break;
    case "paypal":
      pathCode = '<path d="m6 22 4-16h7a1 1 0 0 1 0 11h-4.7L11 22Zm1-4H2L6 2h7a1 1 0 0 1 0 11H8.3"/>';
      break;
    case "play":
      pathCode = '<path d="m7 3 14 9-14 9z"/>';
      break;
    case "patreon":
      pathCode = '<path d="M2 2h3v20H2Z"/><circle cx="15" cy="9" r="7"/>';
      break;
    case "instagram":
      pathCode = '<circle cx="12" cy="12" r="4"/><rect width="20" height="20" x="2" y="2" rx="5"/><path d="M17.5 6.5h0"/>';
      break;
    case "language":
      pathCode = '<path d="M2 5h14M9 2v3m4 0q-2 8-9 11m2-7q2 4 6 6m1 7 5-11 5 11m-1.4-3h-7.2"/>';
      break;
    case "gumroad":
      pathCode = '<circle cx="20" cy="4" r="2"/><circle cx="15" cy="16" r="2"/><path d="M18 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2"/>';
      break;
    case "cart-shopping":
      pathCode = '<path d="M1 2h4l3 12.4a2 2 0 0 0 2 1.6h9a2 2 0 0 0 2-1.6L23 6H6"/><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>';
      break;
    case "bag-shopping":
      pathCode = '<path d="M3 7v11a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7Zm13 3V6a4 4 0 0 0-8 0v4"/>';
      break;
    case "facebook-alt":
      pathCode = '<circle cx="12" cy="12" r="11"/><path d="M12 23V9.5A2.5 2.5 0 0 1 15 7m-5 6h4.5"/>';
      break;
    case "facebook":
      pathCode = '<path d="M17 14h-3v8h-4v-8H7v-4h3V7a5 5 0 0 1 5-5h3v4h-3q-1 0-1 1v3h4Z"/>';
      break;
    case "envelope":
      pathCode = '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 8-10 5L2 8"/>';
      break;
    case "globe":
      pathCode = '<path d="M2 12h20M12 2a15 15 0 0 0 0 20 15 15 0 0 0 0-20"/><circle cx="12" cy="12" r="10"/>';
      break;
    case "file-glitch":
      pathCode = '<path d="M2 11h4V4a2 2 0 0 1 2-2h8l6 6v5h-4v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Zm0-5h4m-5 5h10m-5 4h3M20 4h-7m1 13h8"/>';
      break;
    case "copyright":
      pathCode = '<circle cx="12" cy="12" r="9"/><path d="M14.6 9a4 4 0 1 0 0 6"/>';
      break;
    case "plus":
      pathCode = '<path d="M12 5v14m-7-7h14"/>';
      break;
    case "quote-left":
      pathCode = '<path d="M5 13h5v5H5v-7a4 5 0 0 1 4-5m5 7h5v5h-5v-7a4 5 0 0 1 4-5"/>';
      break;
    case "quote-right":
      pathCode = '<path d="M10 11H5V6h5v7a4 5 0 0 1-4 5m13-7h-5V6h5v7a4 5 0 0 1-4 5"/>';
      break;
    case "unlink":
      pathCode = '<path d="m18 13 3-3a1 1 0 0 0-7-7l-3 3m-5 5-3 3a1 1 0 0 0 7 7l3-3M5 5l14 14"/>';
      break;
    case "share":
      pathCode = '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.5 13.5 7 4m0-11-7 4"/>';
      break;
    case "heart":
      pathCode = '<path d="m12 21-8.8-8.3A5.6 5.6 0 1 1 12 6a5.6 5.6 0 1 1 8.9 6.6z"/>';
      break;
    case "box-archive":
      pathCode = '<path d="M21 8v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8M1 8V5a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v3Zm9 4h4"/>';
      break;
    default:
      // No se encontró un valor de icono válido
      console.error("Valor de icono no válido: " + iconValue);
      return;
  }

  var svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgElement.setAttribute("viewBox", "0 0 24 24");
  svgElement.setAttribute("class", "i " + iconValue);
  svgElement.innerHTML = pathCode;

  includeElement.parentNode.replaceChild(svgElement, includeElement);
});
