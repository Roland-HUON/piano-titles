const touch = document.querySelectorAll('touch')
const title = document.querySelector('h1')
const scoretexta = document.querySelector('#first')
const scoretextb = document.querySelector('#Igni')
const date = new Date().getDay()
const hours = new Date().getHours()
let scorea = 0
let scoreb = 0
const playbutton = document.querySelector('#flyup')
const flyUp= document.querySelector('.flyUp')
const Song=document.querySelector('#FU')
const q=document.querySelector('#FU #Q')
const s=document.querySelector('#FU #S')
const z=document.querySelector('#FU #Z')
const d=document.querySelector('#FU #D')

const basPage = document.querySelectorAll('ul li')
const Page = document.querySelector('main')

const playtwobutton = document.querySelector('#Ignite')
const Ignite= document.querySelector('.Ignite')
const TwoSong = document.querySelector('#IG')
const qq=document.querySelector('#IG #QQ')
const ss=document.querySelector('#IG #SS')
const zz=document.querySelector('#IG #ZZ')
const dd=document.querySelector('#IG #DD')

const thirdSong= document.querySelector('#last')
const yourSong=document.querySelector('.YourSong')
const Q = document.querySelector('.YourSong #Q')
const S = document.querySelector('.YourSong #S')
const D = document.querySelector('.YourSong #D')
const F = document.querySelector('.YourSong #F')
const G = document.querySelector('.YourSong #G')
const H = document.querySelector('.YourSong #H')
const J = document.querySelector('.YourSong #J')
const DOAAA = document.querySelector('.DOAAA')
const RE = document.querySelector('.RE')
const MI = document.querySelector('.MI')
const FA = document.querySelector('.FA')
const SOL = document.querySelector('.SOL')
const laAAA = document.querySelector('.laAAA')
const SI = document.querySelector('.SI')

Page.style.display = "none"
const sousTitre = document.querySelector('.sousTitre')
sousTitre.addEventListener('click',()=>{
Page.style.display = "block"
if((hours >= 8 && hours < 12) || (hours > 12 && hours <= 19)){
    title.innerHTML = "Bonjour ! Bienvenue sur Piano Titles!"
 }
 else if(hours === 12){
     title.innerHTML = "Il est l'heure de manger mais bienvenue sur Piano Titles!"
 }
 else if(hours >= 19 && hours <= 20){
     title.innerHTML = "L'heure du diner ! Reviens jouer à Piano Titles plus tard!"
 }
 else if(hours > 20 && hours < 23){
     title.innerHTML = "Bonsoir ! Bienvenue sur Piano Titles!" 
 }
 else{
     title.innerHTML = "Time to sleep ! You can play this game tomorrow but, by the way, welcome to Piano Titles!"
 }
sousTitre.innerHTML = "Appuyé sur le bouton Play pour jouer une partie sur le son de ton choix ou scroll pour jouer avec d'autres sons. Le dernier piano permet de jouer comme si c'étais un vrai alors appuies sur ces touches après avoir cliquer sur le bouton Play"
sousTitre.classList.remove("sousTitre")
})
for(const basPag of basPage){
    console.log(basPag)
    console.log(basPage[0])
basPag.addEventListener('click',()=>{
    for(i=0;i<=256;i++){
        setInterval(()=>{
            basPage[0].style.backgrounColor= "green"
        },2500)
        setInterval(()=>{
            basPage[0].style.backgroundColor= "orange"
            basPage[1].style.backgroundColor= "green"
        },5000)
        setInterval(()=>{
            basPage[1].style.backgroundColor= "orange"
            basPage[2].style.backgroundColor= "green"
        },10000)
        setInterval(()=>{
            basPage[2].style.backgroundColor= "orange"
            basPage[3].style.backgroundColor= "green"
        },15000)
        setInterval(()=>{
            basPage[3].style.backgroundColor= "orange"
        },20000)
    }
})
}
playbutton.addEventListener('click',()=>{
flyUp.play()
Song.style.border="5px solid blue"
const game = setInterval(()=>{
    const random=Math.floor(Math.random()*4)+1
if(random===1){
    q.style.backgroundColor="#ccac00"
    q.addEventListener('click', () =>{
        q.style.backgroundColor="#87CEEB"
        scorea = scorea +10
        scoretexta.innerHTML=`Votre score est de : ${scorea}`
    })
} else if(random===2){
    s.style.backgroundColor="#ccac00"
    s.addEventListener('click', () =>{
        s.style.backgroundColor="#87CEEB"
        scorea = scorea +10
        scoretexta.innerHTML=`Votre score est de : ${scorea}`
    })
} else if(random===3){
    z.style.backgroundColor="#ccac00"
    z.addEventListener('click', () =>{
        z.style.backgroundColor="#87CEEB"
        scorea = scorea +10
        scoretexta.innerHTML=`Votre score est de : ${scorea}`
    })
} else if(random===4){
    d.style.backgroundColor="#ccac00"
    d.addEventListener('click', () =>{
        d.style.backgroundColor="#87CEEB"
        scorea = scorea +10
        scoretexta.innerHTML=`Votre score est de : ${scorea}`
    })
}    
},2000)
playtwobutton.addEventListener('click',()=>{
    flyUp.pause()
    clearInterval(game)
    q.style.backgroundColor="#87CEEB"
    s.style.backgroundColor="#87CEEB"
    z.style.backgroundColor="#87CEEB"
    d.style.backgroundColor="#87CEEB"
    Song.style.border="5px solid black"
        })
        thirdSong.addEventListener('click',() => {
            clearInterval(game)
            q.style.backgroundColor="#87CEEB"
            s.style.backgroundColor="#87CEEB"
            z.style.backgroundColor="#87CEEB"
            d.style.backgroundColor="#87CEEB"
            flyUp.pause()
            Song.style.border="5px solid black"
        })
    })

playtwobutton.addEventListener('click',()=>{
Ignite.play()
TwoSong.style.border = "5px solid blue"
const games = setInterval(()=>{
    const randomb=Math.floor(Math.random()*4)+1
if(randomb===1){
    qq.style.backgroundColor="#ccac00"
    qq.addEventListener('click', () =>{
        qq.style.backgroundColor="#87CEEB"
        scoreb = scoreb +10
        scoretextb.innerHTML=`Votre score est de : ${scoreb}`
    })
} else if(randomb===2){
    ss.style.backgroundColor="#ccac00"
    ss.addEventListener('click', () =>{
        ss.style.backgroundColor="#87CEEB"
        scoreb = scoreb +10
        scoretextb.innerHTML=`Votre score est de : ${scoreb}`
    })
} else if(randomb===3){
    zz.style.backgroundColor="#ccac00"
    zz.addEventListener('click', () =>{
        zz.style.backgroundColor="#87CEEB"
        scoreb = scoreb +10
        scoretextb.innerHTML=`Votre score est de : ${scoreb}`
    })
} else if(randomb===4){
    dd.style.backgroundColor="#ccac00"
    dd.addEventListener('click', () =>{
        dd.style.backgroundColor="#87CEEB"
        scoreb = scoreb +10
        scoretextb.innerHTML=`Votre score est de : ${scoreb}`
    })
}
},1500)
playbutton.addEventListener('click',()=>{
    clearInterval(games)
    qq.style.backgroundColor="#87CEEB"
    ss.style.backgroundColor="#87CEEB"
    zz.style.backgroundColor="#87CEEB"
    dd.style.backgroundColor="#87CEEB"
    Ignite.pause()
    TwoSong.style.border="5px solid black"
        })
thirdSong.addEventListener('click',() => {
    clearInterval(games)
    qq.style.backgroundColor="#87CEEB"
    ss.style.backgroundColor="#87CEEB"
    zz.style.backgroundColor="#87CEEB"
    dd.style.backgroundColor="#87CEEB"
    Ignite.pause()
    TwoSong.style.border="5px solid black"
})
    })


thirdSong.addEventListener('click', () => {
    yourSong.style.border = "5px solid blue"
Q.addEventListener('click',()=>{
DOAAA.play()
Q.style.backgroundColor="green"
S.addEventListener('click', () => {
    Q.style.backgroundColor="#87CEEB"
})
D.addEventListener('click', () => {
    Q.style.backgroundColor="#87CEEB"
})
F.addEventListener('click', () => {
    Q.style.backgroundColor="#87CEEB"
})
G.addEventListener('click', () => {
    Q.style.backgroundColor="#87CEEB"
})
H.addEventListener('click', () => {
    Q.style.backgroundColor="#87CEEB"
})
J.addEventListener('click', () => {
    Q.style.backgroundColor="#87CEEB"
})
playbutton.addEventListener('click',()=>{
    Q.style.backgroundColor="#87CEEB"
    DOAAA.pause()
    yourSong.style.border="5px solid black"
        })
playtwobutton.addEventListener('click',() => {
    Q.style.backgroundColor="#87CEEB"
    DOAAA.pause()
    yourSong.style.border="5px solid black"
})
})
S.addEventListener('click',()=>{
    RE.play()
    S.style.backgroundColor="green"
    Q.addEventListener('click', () => {
        S.style.backgroundColor="#87CEEB"
    })
    D.addEventListener('click', () => {
        S.style.backgroundColor="#87CEEB"
    })
    F.addEventListener('click', () => {
        S.style.backgroundColor="#87CEEB"
    })
    G.addEventListener('click', () => {
        S.style.backgroundColor="#87CEEB"
    })
    H.addEventListener('click', () => {
        S.style.backgroundColor="#87CEEB"
    })
    J.addEventListener('click', () => {
        S.style.backgroundColor="#87CEEB"
    })
    playbutton.addEventListener('click',()=>{
        S.style.backgroundColor="#87CEEB"
        RE.pause()
        yourSong.style.border="5px solid black"
            })
    playtwobutton.addEventListener('click',() => {
        S.style.backgroundColor="#87CEEB"
        RE.pause()
        yourSong.style.border="5px solid black"
    })
})
D.addEventListener('click',()=>{
    MI.play()
    D.style.backgroundColor="green"
    Q.addEventListener('click', () => {
        D.style.backgroundColor="#87CEEB"
    })
    S.addEventListener('click', () => {
        D.style.backgroundColor="#87CEEB"
    })
    F.addEventListener('click', () => {
        D.style.backgroundColor="#87CEEB"
    })
    G.addEventListener('click', () => {
        D.style.backgroundColor="#87CEEB"
    })
    H.addEventListener('click', () => {
        D.style.backgroundColor="#87CEEB"
    })
    J.addEventListener('click', () => {
        D.style.backgroundColor="#87CEEB"
    })
    playbutton.addEventListener('click',()=>{
        D.style.backgroundColor="#87CEEB"
        MI.pause()
        yourSong.style.border="5px solid black"
            })
    playtwobutton.addEventListener('click',() => {
        D.style.backgroundColor="#87CEEB"
        MI.pause()
        yourSong.style.border="5px solid black"
    })
})
F.addEventListener('click',()=>{
    FA.play()
    F.style.backgroundColor="green"
    Q.addEventListener('click', () => {
        F.style.backgroundColor="#87CEEB"
    })
    D.addEventListener('click', () => {
        F.style.backgroundColor="#87CEEB"
    })
    S.addEventListener('click', () => {
        F.style.backgroundColor="#87CEEB"
    })
    G.addEventListener('click', () => {
        F.style.backgroundColor="#87CEEB"
    })
    H.addEventListener('click', () => {
        F.style.backgroundColor="#87CEEB"
    })
    J.addEventListener('click', () => {
        F.style.backgroundColor="#87CEEB"
    })
    playbutton.addEventListener('click',()=>{
        F.style.backgroundColor="#87CEEB"
        FA.pause()
        yourSong.style.border="5px solid black"
            })
    playtwobutton.addEventListener('click',() => {
        F.style.backgroundColor="#87CEEB"
        FA.pause()
        yourSong.style.border="5px solid black"
    })
})
G.addEventListener('click',()=>{
    SOL.play()
    G.style.backgroundColor="green"
    Q.addEventListener('click', () => {
        G.style.backgroundColor="#87CEEB"
    })
    D.addEventListener('click', () => {
        G.style.backgroundColor="#87CEEB"
    })
    F.addEventListener('click', () => {
        G.style.backgroundColor="#87CEEB"
    })
    S.addEventListener('click', () => {
        G.style.backgroundColor="#87CEEB"
    })
    H.addEventListener('click', () => {
        G.style.backgroundColor="#87CEEB"
    })
    J.addEventListener('click', () => {
        G.style.backgroundColor="#87CEEB"
    })
    playbutton.addEventListener('click',()=>{
        G.style.backgroundColor="#87CEEB"
        SOL.pause()
        yourSong.style.border="5px solid black"
            })
    playtwobutton.addEventListener('click',() => {
        G.style.backgroundColor="#87CEEB"
        SOL.pause()
        yourSong.style.border="5px solid black"
    })
})
H.addEventListener('click',()=>{
    laAAA.play()
    H.style.backgroundColor="green"
    Q.addEventListener('click', () => {
        H.style.backgroundColor="#87CEEB"
    })
    D.addEventListener('click', () => {
        H.style.backgroundColor="#87CEEB"
    })
    F.addEventListener('click', () => {
        H.style.backgroundColor="#87CEEB"
    })
    G.addEventListener('click', () => {
        H.style.backgroundColor="#87CEEB"
    })
    S.addEventListener('click', () => {
        H.style.backgroundColor="#87CEEB"
    })
    J.addEventListener('click', () => {
        H.style.backgroundColor="#87CEEB"
    })
    playbutton.addEventListener('click',()=>{
        H.style.backgroundColor="#87CEEB"
        laAAA.pause()
        yourSong.style.border="5px solid black"
            })
    playtwobutton.addEventListener('click',() => {
        H.style.backgroundColor="#87CEEB"
        laAAA.pause()
        yourSong.style.border="5px solid black"
    })
})
J.addEventListener('click',()=>{
    SI.play()
    J.style.backgroundColor="green"
    Q.addEventListener('click', () => {
        J.style.backgroundColor="#87CEEB"
    })
    D.addEventListener('click', () => {
        J.style.backgroundColor="#87CEEB"
    })
    F.addEventListener('click', () => {
        J.style.backgroundColor="#87CEEB"
    })
    G.addEventListener('click', () => {
        J.style.backgroundColor="#87CEEB"
    })
    S.addEventListener('click', () => {
        J.style.backgroundColor="#87CEEB"
    })
    H.addEventListener('click', () => {
        J.style.backgroundColor="#87CEEB"
    })
    playbutton.addEventListener('click',()=>{
        J.style.backgroundColor="#87CEEB"
        SI.pause()
        yourSong.style.border="5px solid black"
            })
    playtwobutton.addEventListener('click',() => {
        J.style.backgroundColor="#87CEEB"
        SI.pause()
        yourSong.style.border="5px solid black"
    })
})
})
