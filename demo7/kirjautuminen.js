

onkoKirjautunut = () => {
    let kirjautunut = 'kylla';
    if (kirjautunut === 'kylla') {
        document.getElementById('tervetuloTeksti').textContent += localStorage.getItem("kayttajatunnus");
    
    }
}
kirjaudu = () => {
    localStorage.setItem("kayttajatunnus", document.getElementById("kayttajatunnus").value); }
document.addEventListener("DOMContentLoaded", onkoKirjautunut);
