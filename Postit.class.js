class Postit {
    x;
    y;
    largeur;
    hauteur;
    couleur;
    texte;
    id;

    /**
     * funtion pour construire un Postit
     * 
     * @param {*} x 
     * @param {*} y 
     * @param {*} largeur 
     * @param {*} hauteur 
     * @param {*} couleur 
     * @param {*} texte 
     * @param {*} id 
     */
    constructor(x,
        y,
        largeur,
        hauteur,
        couleur,
        texte,
        id) 
    {
        this.x = x;
        this.y = y;
        this.largeur = largeur;
        this.hauteur = hauteur;
        this.couleur = couleur;
        this.texte = texte;
        this.id = id;
    }
    /**
     * function qui permet de se déplacer horizontallement en position:X et 
     * @param {*} x 
     * @param {*} y 
     */
    deplacement(x, y) {
        this.x = x;
        this.y = y;
    }
    redimensionement(largeur,hauteur) {
        this.largeur = largeur;
        this.hauteur = hauteur;    
    }
    changementDeText(texte) {
        this.texte = texte;
    }
    changerCouleur(Color) {
        this.couleur = Color;
    }
    affichePostit() {
        let elem = document.getElementById("postit" + this.id)
        if (elem == null) {
            elem = document.createElement("div")
            document.body.appendChild(elem)
        }
        elem.id = "postit" + this.id
        elem.style.position = "fixed";
        elem.style.left = this.x + "px";
        elem.style.top = this.y + "px";
        elem.style.width = this.largeur + "px";
        elem.style.height = this.hauteur + "px";
        elem.style.backgroundColor = this.couleur;
        elem.innerHTML = this.texte;

    
        let menu = document.createElement("div")
        menu.className="menu"
        elem.appendChild(menu)
        
        let bouton_deplacement= document.createElement("div")
        menu.appendChild(bouton_deplacement)
        bouton_deplacement.className="fas fa-arrows-alt"
        bouton_deplacement.addEventListener("click",(event)=>{
            if(numPostit==this.id){
                numPostit=-1
                action=""
            }
            else
            {
                numPostit=this.id 
                action="deplacement"
                
            }
        event.stopPropagation() 
        })

        let bouton_descendre= document.createElement("div")
        menu.appendChild(bouton_descendre)
        bouton_descendre.className="fas fa-arrow-circle-down"

        let bouton_monter= document.createElement("div")
        menu.appendChild(bouton_monter)
        bouton_monter.className="fas fa-arrow-up"

        let bouton_supprimer= document.createElement("div")
        menu.appendChild(bouton_supprimer)
        bouton_supprimer.addEventListener("click",(event)=>{
            elem.parentNode.removeChild(elem)
            supPostit(this.id)
        })


        bouton_supprimer.className="far fa-trash-alt"

        let bouton_coleur= document.createElement("div")
        menu.appendChild(bouton_coleur)
        bouton_coleur.className="fas fa-tint"
        bouton_coleur.addEventListener("click",()=>{
            
            if(this.couleur=="yellow"){
                console.log('test');
                this.changerCouleur("blue")
                this.affichePostit()
            }
            else if
            (this.couleur=="blue"){
                this.changerCouleur("orange")
                this.affichePostit()
            }
            else
            {
                this.changerCouleur("yellow")
                this.affichePostit()
            }
        })

        let bouton_redimentionner= document.createElement("div")
        menu.appendChild(bouton_redimentionner)
        bouton_redimentionner.addEventListener("click",(event)=>
        {
            if(numPostit==this.id){
                numPostit=-1
                action=""
            }
            else
            {
                numPostit=this.id 
                action="redimentionnement"
                this.largeurOrig=this.largeur
                this.hauteurOrig=this.hauteur
                this.xOrig=event.clientX
                this.yOrig=event.clientY
            }
        event.stopPropagation()  
        })
        bouton_redimentionner.className="fas fa-expand-alt"

        let bouton_changementtexte= document.createElement("div")
        menu.appendChild(bouton_changementtexte)
        bouton_changementtexte.className="fas fa-text-height"
        bouton_changementtexte.addEventListener("click",(event)=>{
            if(numPostit==this.id){
                numPostit=-1
                action=""
            }
            else
            {
                numPostit=this.id 
                action="texte"
            }
        event.stopPropagation()   
        })

    }
}






