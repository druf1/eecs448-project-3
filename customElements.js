userType = "adopter";

class siteHeader extends HTMLElement {
    connectedCallback() {   //called when this is appened to document       
        switch(userType) {
            case "default":
                    //default
                    this.innerHTML = `
                    <img src="JustBeClawsHeaderImage.png" style="width:50%; height:auto; display:block; margin-left:auto; margin-right:auto"/>
                    <div id="primary" class="topnav">
                        <div class="secondary leftcolumn">
                            <a href="homePage.html">Home</a>
                            <a href="animal-list.html">Animals</a>
                            <a href="donate.html">Donate</a>
                        </div>

                        <div class="secondary rightcolumn">
                            <a href="signUp.html">Sign Up</a>
                            <a href="login.html">Login</a>
                        </div>
                    </div>
                    `;
                break;
            case "adopter":
                    //adopter
                    this.innerHTML = `
                    <div class="HeaderImageBackground">
                        <img src="JustBeClawsHeaderImage.png" style="width:50%; height:auto; display:block; margin-left:auto; margin-right:auto"/>
                    </div>
                        <div id="primary" class="topnav">
                            <div class="secondary leftcolumn">
                                <a href="homePage.html">Home</a>
                                <a href="animal-list.html">Animals</a>
                                <a href="donate.html">Donate</a>
                                <a href="applications.html">Applications</a>
                            </div>

                            <div class="secondary rightcolumn">
                                <a onclick='switchUserType("default")'>Log Out</a>
                                <b>Signed in as adopter</a>
                            </div>
                        </div>
                    `;
                break;
            case "foster":
                    //foster
                    this.innerHTML = `
                            <img src="justBeClawsBanner.png" style="width:50%; height:auto; display:block; margin-left:auto; margin-right:auto"/>
                            <topnav>
                                <ul>
                                    <li style="float:left"><a href="donate.html">Donate</a></li>
                                    <li style="float:left"><a href="homePage.html">About Us</a></li>
                                    <li style="float:left"><a href="animal-list.html">Animals</a></li>
                                    <li style="float:left"><a href="applications.html">Applications</a></li>
                                    <li style="float:left"><a href="foster.html">My Profile</a></li>
                                    <li style="float:left"><a>Log Out</a></li>
                                    <li style="float:right"><a>Signed in as foster</a></li>  
                                </ul>
                            </topnav>
                    `;
                break;
            case "admin":
                    //admin
                    this.innerHTML = `
                        <img src="justBeClawsBanner.png" style="width:50%; height:auto; display:block; margin-left:auto; margin-right:auto"/>
                        <topnav>
                            <ul>
                                <li style="float:left"><a href="donate.html">Donate</a></li>
                                <li style="float:left"><a href="homePage.html">About Us</a></li>
                                <li style="float:left"><a href="animal-list.html">Animals</a></li>
                                <li style="float:left"><a href="foster-list.html">Fosters</a></li>
                                <li style="float:left"><a href="applications.html">Applications</a></li>
                                <li style="float:left"><a>Log Out</a></li>
                                <li style="float:right"><a>Signed in as admin</a></li>                                
                            </ul>
                        </topnav>
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




