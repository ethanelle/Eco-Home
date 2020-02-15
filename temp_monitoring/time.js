function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function makeList(list) {
    for (let i = 0; i < 100; i++) {
        let now = new Date();
        let dd = now.getDate();
        let mm = now.getMonth() + 1;
        let yyyy = now.getFullYear();
        
        if (dd < 10)    dd = '0' + dd;
        if (mm < 10)    mm = '0' + mm;

        let min = now.getMinutes();
        let hr = now.getHours();
        let sec = now.getSeconds();

        if (min < 10)   min = '0' + min;
        if (hr < 10)    hr = '0' + hr;
        if (sec < 10)   sec = '0' + sec;

        let now_string = mm + '/' + dd + '/' + yyyy + ' ' + hr + ':' + min + ':' + sec;
        list.push({
            _id: now_string,
            temperature: (Math.floor(Math.random() * 10) + 70)
        });
        await sleep(1000);
    }
    console.log(list);
}

let list = [];
makeList(list);
