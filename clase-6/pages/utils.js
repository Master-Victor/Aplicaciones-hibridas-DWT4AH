function createPage(title, content) {
  let html = "";

  html += `<!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">`;
  html += "<title>" + title + "</title></head><body>";
  html += "<h1>" + title + "</h1>";
  html += content;
  html += "</body></html>";

  return html;
}

function createProductList(productos) {
  let html = "";

  html += "<ul>";
  for (let i = 0; i < productos.length; i++) {
    html += "<li>" + productos[i].name + "</li>";
  }
  html += "</ul>";

  return html;
}

// module.exports = {
//     createPage,
//     createProductList
// }

export default {
  createPage,
  createProductList,
}

export {
    createPage,
    createProductList,
  }
