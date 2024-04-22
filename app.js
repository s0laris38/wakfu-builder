let version = "1.0"
const API = "https://wakfu.cdn.ankama.com/gamedata/"

async function updateVersion() {
    version = await fetch('${API}/config.json')
    console.log(version)
}

window.addEventListener("load", function(){ 
     updateVersion()
});