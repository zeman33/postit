// let testPostit= new Postit(100,100,200,200,"red","coucou",1)

// testPostit.affichePostit()
// testPostit.deplacement(200,400)
// testPostit.affichePostit()

// let monPostit= new Postit(400,800,400,800,"blue","kaka",2)

// monPostit.redimensionement(100,50)
// monPostit.affichePostit()

// let monPostit2= new Postit(200,200,400,400,"orange","OLALA,",5)

// monPostit2.changementDeText(20,30)
// monPostit2.affichePostit()

// let monPostit3= new Postit(150,150,250,250,"yellow","cetaitoi",8)

// monPostit3.changerCouleur(50,80)
// monPostit3.affichePostit()

// j'ai créer un tableau de postits

let tablePostit=[]
let action=""
let numPostit=-1
document.querySelector(".jaune").addEventListener("click",()=>{
    tablePostit.push( new Postit(1000,300,400,400,"yellow","coucou",tablePostit.length)) 
    tablePostit[tablePostit.length-1].affichePostit()
    
})

//  en cliquant les postits pour les déplacer en position horizontale=(X)

document.querySelector(".bleu").addEventListener("click",()=>{
    tablePostit.push( new Postit(1000,100,200,200,"blue","kaka",tablePostit.length))
    tablePostit[tablePostit.length-1].affichePostit()
})

document.querySelector(".orange").addEventListener("click",()=>{
    tablePostit.push( new Postit(1000,200,300,300,"orange","OLALA,",tablePostit.length))
    tablePostit[tablePostit.length-1].affichePostit()
})
document.body.addEventListener("mousemove",(event)=>{
if(numPostit>-1 && action=="deplacement"){
    tablePostit[numPostit].deplacement(event.clientX-tablePostit[numPostit].largeur+100,event.clientY-tablePostit[numPostit].hauteur+10)
    tablePostit[numPostit].affichePostit()
}
if(numPostit>-1 && action=="redimentionnement")
{
    console.log('test');
    tablePostit[numPostit].redimensionement(tablePostit[numPostit].largeurOrig+(event.clientX-tablePostit[numPostit].xOrig),tablePostit[numPostit].hauteurOrig+(event.clientY-tablePostit[numPostit].yOrig))
    tablePostit[numPostit].affichePostit()
}
})
document.body.addEventListener("click",()=>{
    numPostit=-1
    action=""
})
document.body.addEventListener("keydown",(event)=>{
    if(numPostit>-1 && action=="texte"){
        if(event.key=="Backspace"){
            tablePostit[numPostit].changementDeText(tablePostit[numPostit].texte.substr(0,tablePostit[numPostit].texte.length-1))
            tablePostit[numPostit].affichePostit()
        }
        else if(event.key=="Control")
        {
            
        }
        else if(event.key=="Alt")
        {
              
        }
        else if(event.key=="AltGraph")
        {
            
        }
        else if(event.key=="Enter")
        {
            tablePostit[numPostit].changementDeText(tablePostit[numPostit].texte+"<br>")
            tablePostit[numPostit].affichePostit()  
        }
        else
        {
            tablePostit[numPostit].changementDeText(tablePostit[numPostit].texte+event.key)
            tablePostit[numPostit].affichePostit()  
        }
        
    } 
}  )

/**
 * Cette fonction supprime un postit du tableau
 * @param {*} numPostit 
 */
function supPostit(numPostit)
{
    tablePostit.splice(numPostit,1)
}

























