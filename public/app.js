const {chromium} = require( 'playwright');
var CronJob = require('cron').CronJob;

const express = require('express');
const serveIndex = require('serve-index');
const bodyParser = require('body-parser');
const path = require('path');

const stylesheetPath = 'public/style.css';
let rootPublic = require('path').dirname('/public');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', express.static('public/media'), serveIndex('public/media', {
  'icons': true,
  template: 'template.html',
  stylesheetPath: stylesheetPath
}))
app.get('/', (req, res) => {

//generar rest del el archivo template en la carpeta public
  res.sendFile('template.html', {root: rootPublic});
});


var job = new CronJob(
	'*/5 * * * *',
	function() {

        Main.update();
	},
	null,
	true,
	'America/Los_Angeles'
);

const PORT = process.env.PORT || 3000;
// Listen
app.listen(PORT,function(){
    console.log('Servidor listo en el puerto',PORT);
})


class Main {
  static async update(){

      (async () => {

          const browser = await chromium.launch()
          const page = await browser.newPage()
          //Todos los productos
          await page.goto('https://zicca.pe/Productos/ListaProductosTiendaVirtual',  {timeout: 0} )
          await page.pdf({ path: 'public/media/TodasTallas-Zicaa.pdf', format: 'A5'})
      
          //Todos los productos talla 35
          await page.goto('https://zicca.pe/Productos/ListaProductosTiendaVirtual?idTalla=3',  {timeout: 0} )
          await page.pdf({ path: 'public/media/Talla35-Zicca.pdf', format: 'A5'})
      
          //Todos los productos talla 36
          await page.goto('https://zicca.pe/Productos/ListaProductosTiendaVirtual?idTalla=4',  {timeout: 0} )
          await page.pdf({ path: 'public/media/Talla36-Zicca.pdf', format: 'A5'})
      
          //Todos los productos talla 37
          await page.goto('https://zicca.pe/Productos/ListaProductosTiendaVirtual?idTalla=5',  {timeout: 0} )
          await page.pdf({ path: 'public/media/Talla37-Zicca.pdf', format: 'A5'})
      
          //Todos los productos talla 38
          await page.goto('https://zicca.pe/Productos/ListaProductosTiendaVirtual?idTalla=6',  {timeout: 0} )
          await page.pdf({ path: 'public/media/Talla38-Zicca.pdf', format: 'A5'})
      
          //Todos los productos talla 39
          await page.goto('https://zicca.pe/Productos/ListaProductosTiendaVirtual?idTalla=7',  {timeout: 0} )
          await page.pdf({ path: 'public/media/Talla39-Zicca.pdf', format: 'A5'})
      
          await browser. close()
      
          console.log('PDFs generados correctamente')
      
      })()
  }
}