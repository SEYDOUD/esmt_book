const txtanim = document.querySelector("h1");
const txtanim2 = document.querySelector("h2");
new Typewriter(txtanim,{
    deleteSpeed:50
})

.changeDelay(50)
.typeString('ECOLE SUPPERIEUR MULTINATIONAL')
.pauseFor(300)
.typeString('<strong> DES TELECOMMUNICATIONS</strong>')
.pause(1000)
.deleteChars(18)
.typeString('<span style="color: red"> TELECOMMUNICATIONS</span>')
.start()

new Typewriter(txtanim2,{
    deleteSpeed:50
})

.changeDelay(50)
.typeString('. Un centre de documentation pour L\'ESMT <br>')
.pauseFor(300)
.typeString('. Un site de partage ds bons moments a L\'ESMT <br>')
.pauseFor(300)
.typeString('. Un lieu de renseignements pour L\'ESMT')
.pause(1000)
.start()
