var CronJob = require('cron').CronJob;

class Main {
    static async update(){
    console.log('CronJob');
    }
}



var job = new CronJob(
	'* * * * * *',
	function() {

        Main.update();
	},
	null,
	true,
	'America/Los_Angeles'
);

