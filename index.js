const puppeteer = require('puppeteer');
const url = [
 "https://m.facebook.com/messages/read/?tid=cid.c.100006201699529%3A100068414331474&surface_hierarchy=unknown&refid=11#fua",
    "https://m.facebook.com/messages/read/?tid=cid.c.100002202558570%3A100006201699529&surface_hierarchy=unknown&refid=11#fua",
    "https://m.facebook.com/messages/read/?tid=cid.c.100006201699529%3A100072376962422&surface_hierarchy=unknown&refid=11#fua",
    "https://m.facebook.com/messages/read/?tid=cid.c.100006201699529%3A100056643720066&surface_hierarchy=unknown&refid=11#fua",
    "https://m.facebook.com/messages/read/?tid=cid.c.100006201699529%3A100070914224481&surface_hierarchy=unknown&refid=11#fua",
    "https://m.facebook.com/messages/read/?tid=cid.c.100006201699529%3A100061424394952&surface_hierarchy=unknown&refid=11#fua",
    "https://m.facebook.com/messages/read/?tid=cid.c.100006201699529%3A100041992698547&surface_hierarchy=unknown&refid=11#fua",
    "https://m.facebook.com/messages/read/?tid=cid.c.100006201699529%3A100036006195791&surface_hierarchy=unknown&refid=11#fua",
    "https://m.facebook.com/messages/read/?tid=cid.c.100006201699529%3A100009518264205&surface_hierarchy=unknown&refid=11#fua",
];


async function run () {
    const browser = await puppeteer.launch({ 
        headless: false,
        args: [
        '--window-size=1366,768',
      ], });

    const page = await browser.newPage();

    function delay(time) {
        return new Promise(function(resolve) { 
            setTimeout(resolve, time)
        });
     }
     await delay(40000)

    var num = 0;
    async function funki(){

        await page.goto(url[num], {waitUntil: 'networkidle2'});


        
        await page.evaluate(() => {


try{
    document.querySelectorAll('._34em ._34ee')[document.querySelectorAll('._34em ._34ee').length-1].textContent
    location.reload();
}catch{
try{
    document.getElementById('composerInput').value='Salam';
    document.querySelectorAll('form')[1].submit()
}catch{
    location.reload();
}

}


        
           






        }
        )




        await page.waitForNavigation({waitUntil: 'networkidle2'});
        num++;
        if(num<url.length-1){
            await funki()
        }
    }

    await funki()
    browser.close();
}
run();