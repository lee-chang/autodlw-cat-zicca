const {chromium} = require( 'playwright');
var CronJob = require('cron').CronJob;


class Main {
    static async update(){

        (async () => {
  
            const browser = await chromium.launch()
            const page = await browser.newPage()
            //Todos los productos
            await page.goto('https://zicca.pe/Productos/ListaProductosTiendaVirtual',  {timeout: 0} )
            await page.pdf({ path: 'media/TodasTallas-Zicaa.pdf', format: 'A5'})
        
            //Todos los productos talla 35
            await page.goto('https://zicca.pe/Productos/ListaProductosTiendaVirtual?idTalla=3',  {timeout: 0} )
            await page.pdf({ path: 'media/Talla35-Zicca.pdf', format: 'A5'})
        
            //Todos los productos talla 36
            await page.goto('https://zicca.pe/Productos/ListaProductosTiendaVirtual?idTalla=4',  {timeout: 0} )
            await page.pdf({ path: 'media/Talla36-Zicca.pdf', format: 'A5'})
        
            //Todos los productos talla 37
            await page.goto('https://zicca.pe/Productos/ListaProductosTiendaVirtual?idTalla=5',  {timeout: 0} )
            await page.pdf({ path: 'media/Talla37-Zicca.pdf', format: 'A5'})
        
            //Todos los productos talla 38
            await page.goto('https://zicca.pe/Productos/ListaProductosTiendaVirtual?idTalla=6',  {timeout: 0} )
            await page.pdf({ path: 'media/Talla38-Zicca.pdf', format: 'A5'})
        
            //Todos los productos talla 39
            await page.goto('https://zicca.pe/Productos/ListaProductosTiendaVirtual?idTalla=7',  {timeout: 0} )
            await page.pdf({ path: 'media/Talla39-Zicca.pdf', format: 'A5'})
        
            await browser. close()
        
            console.log('Archivos cargados')
        
        })()
    }
}

var job = new CronJob(
	'*/5 * * * *',
	function() {

        Main.update();
	},
	null,
	true,
	'America/Los_Angeles'
);