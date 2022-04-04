class siteHeader extends HTMLElement {
    connectedCallback() {   //called when this is appened to document
        this.innerHTML = `
            <img src="justBeClawsBanner.png" style="width:50%; height:auto; display:block; margin-left:auto; margin-right:auto"/>
            <nav>
                <ul>
                    <li style="float:left"><a href="donate.html">Donate</a></li>
                    <li style="float:left"><a href="homePage.html">About Us</a></li>
                    <li style="float:left"><a href="animals-admin.html">Animals</a></li>
                    <li style="float:left"><a href="signUp.html">Sign Up</a></li>
                    <li style="float:left"><a href="login.html">Login</a></li>
                </ul>
            </nav>
        `;
    }
}

customElements.define('site-header',siteHeader);
