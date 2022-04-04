userType = "adopter";

class siteHeader extends HTMLElement {
    connectedCallback() {   //called when this is appened to document       
        switch(userType) {
            case "default":
                    //default
                    this.innerHTML = `
                                <img src="justBeClawsBanner.png" style="width:50%; height:auto; display:block; margin-left:auto; margin-right:auto"/>
                                <nav>
                                    <ul>
                                        <li style="float:left"><a href="donate.html">Donate</a></li>
                                        <li style="float:left"><a href="homePage.html">About Us</a></li>
                                        <li style="float:left"><a href="animal-list.html">Animals</a></li>
                                        <li style="float:left"><a href="signUp.html">Sign Up</a></li>
                                        <li style="float:left"><a href="login.html">Login</a></li>
                                    </ul>
                                </nav>
                    `;
                break;
            case "adopter":
                    //adopter
                    this.innerHTML = `
                                <img src="justBeClawsBanner.png" style="width:50%; height:auto; display:block; margin-left:auto; margin-right:auto"/>
                                <nav>
                                    <ul>
                                        <li style="float:left"><a href="donate.html">Donate</a></li>
                                        <li style="float:left"><a href="homePage.html">About Us</a></li>
                                        <li style="float:left"><a href="animal-list.html">Animals</a></li>
                                        <li style="float:left"><a href="applications.html">Applications</a></li>
                                        <li style="float:left"><a onclick='switchUserType("default")'>Log Out</a></li>
                                        <li style="float:right"><a>Signed in as adopter</a></li>  
                                    </ul>
                                </nav>
                    `;
                break;
            case "foster":
                    //foster
                    this.innerHTML = `
                            <img src="justBeClawsBanner.png" style="width:50%; height:auto; display:block; margin-left:auto; margin-right:auto"/>
                            <nav>
                                <ul>
                                    <li style="float:left"><a href="donate.html">Donate</a></li>
                                    <li style="float:left"><a href="homePage.html">About Us</a></li>
                                    <li style="float:left"><a href="animal-list.html">Animals</a></li>
                                    <li style="float:left"><a href="applications.html">Applications</a></li>
                                    <li style="float:left"><a href="foster.html">My Profile</a></li>
                                    <li style="float:left"><a>Log Out</a></li>
                                    <li style="float:right"><a>Signed in as foster</a></li>  
                                </ul>
                            </nav>
                    `;
                break;
            case "admin":
                    //admin
                    this.innerHTML = `
                        <img src="justBeClawsBanner.png" style="width:50%; height:auto; display:block; margin-left:auto; margin-right:auto"/>
                        <nav>
                            <ul>
                                <li style="float:left"><a href="donate.html">Donate</a></li>
                                <li style="float:left"><a href="homePage.html">About Us</a></li>
                                <li style="float:left"><a href="animal-list.html">Animals</a></li>
                                <li style="float:left"><a href="foster-list.html">Fosters</a></li>
                                <li style="float:left"><a href="applications.html">Applications</a></li>
                                <li style="float:left"><a>Log Out</a></li>
                                <li style="float:right"><a>Signed in as admin</a></li>                                
                            </ul>
                        </nav>
                    `;
                break;
        }
    }
}

const test = function() {
    console.log("success");
}

const switchUserType = function(type) {
    userType = type;
    console.log(userType);
}

customElements.define('site-header',siteHeader);




