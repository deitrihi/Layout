//document.querySelector('user-button')
// 완전 커스텀 엘리멘트
customElements.define('user-button', class UserButton extends HTMLElement  {
    constructor() {
        super();
    }
    connectedCallback() { 
        var shadow = this.attachShadow({mode: 'open'});
        
        var btn = document.createElement('button');
        setTimeout( () => {btn.textContent = this.textContent}, 0);
        this.addEventListener('click', (e) => {
            alert(this.textContent);
        });
        shadow.appendChild(btn);
    }
});

//document.querySelector('button[is=user-button-define]')
// button을 상속 받아서 내부를 수정
customElements.define('user-button-define', class UserButtonDefine extends HTMLButtonElement {
    constructor() {
        super();
        
        this.addEventListener('click', (e) => {
            alert('!!!!');
        });
    }
}, { extends: 'button' });