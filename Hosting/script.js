https://www.econdb.com/api/series/RPUCUS/?format=json

var url = 'https://www.econdb.com/api/series/RPUCUS/?format=json'
async function getData(){
    const res = await fetch(url);
const data = await res.json()
console.log(data.data)
}
getData()