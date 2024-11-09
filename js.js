const appCardTemplate=document.getElementById('app-card-template')



class AppCard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }
    connectedCallback(){

        console.log('Our element added to the DOM');
        this.shadowRoot.append(appCardTemplate.content.cloneNode(true));

        const title=this.getAttribute('title');
        const subtitle=this.getAttribute('subtitle');
        const lightButtonText=this.getAttribute('lightButtonText');
        const darkButtonText=this.getAttribute('darkButtonText');
        const imgSrc=this.getAttribute('imgSrc');
        

    
        this.shadowRoot.querySelector('h2').innerText=title;
        this.shadowRoot.querySelector('h3').innerText=subtitle;
        this.shadowRoot.querySelector('.button_light').innerText=lightButtonText;
        this.shadowRoot.querySelector('.button_dark').innerText=darkButtonText;
        this.shadowRoot.querySelector('img').src=imgSrc;
  
      const darkButton=this.shadowRoot.querySelector('.button_dark');
      darkButton.innerText=darkButtonText;
      darkButton.addEventListener('click',()=> this.handleDarkButtonClick());
        

    }
    disconnectedCallback(){
        console.log('Our element is removed from DOM');
        this.shadowRoot.querySelector('.button_dark').removeEventListener();

     }
     handleDarkButtonClick(){
        this.shadowRoot.querySelector('.card__copy').style['webkit-line-clamp']=10;
     }
     

}

window.customElements.define('app-card',AppCard);


