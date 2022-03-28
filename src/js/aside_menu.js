var menu_array = [
    {name : 'Button', url : '/component/button'},
    {name : 'UserCam', url : '/component/user-cam'},
    {name : 'UserCamGrid', url : '/component/user-cam-grid'}
];

customElements.define('aside-menu', class AsideMenu extends HTMLUListElement {
    constructor() {
        super();
    }
    connectedCallback() { 
        for(let menu of menu_array) {
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.innerText = menu.name;
            a.href = menu.url;
            li.append(a);
            this.append(li);
        }
    }
}, { extends: 'ul' });