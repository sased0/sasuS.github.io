

onkoKirjautunut = () => {
    let kirjautunut = 'kylla';
    if (kirjautunut === 'kylla') {
        document.getElementById('tervetuloTeksti').textContent += ' Otto!';
    
    }
}
document.addEventListener("DOMContentLoaded", onkoKirjautunut);
