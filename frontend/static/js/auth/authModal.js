export default () => {
    if (document.querySelector("#navAuth").innerHTML === "Login / Register") {
        if (!document.querySelector('#modalAuth')) {
            document.body.insertAdjacentHTML("beforeend",
                `<div id="modalAuth"
                      style="display: flex; align-items: center; justify-content: center; position: fixed; left: 0; top: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.4)">
                    <div id="modalContent" 
                         style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; width: 25%; height: 35%; background-color: rgba(0,0,0,0.4); padding: 1em; borders: 1px solid black; border-radius: 10px">
                            <div style="width: 100%; height: 10%; display: flex; justify-content: flex-end">
                                <div>
                                <p id="modalClose" style="color: white; padding: 0.2em 0.4em 0.2em 0.4em; border: 1px solid black; border-radius: 5px; cursor: pointer" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.3)'; this.style.transition='1s'" onmouseout="this.style.backgroundColor=null; this.style.transition='0s'">X</p>
                                </div>
                                </div>
                            <div id="loginDiv3" style="width: 100%; height: 20%;display: flex; flex-direction: row; justify-content: space-evenly">
                                <div style="width: 50%; text-align: center">
                                <p id="loginDiv3LoginP" style="color: green; font-size: xx-large; text-decoration: underline; cursor: pointer;" data-active="1">
                                    Login
                                </p>
                                </div>
                                <div style="width: 50%; text-align: center">
                                <p id="loginDiv3RegisterP" style="color: red; font-size: medium; cursor: pointer;" data-active="0">
                                    Register
                                </p>
                                </div>
                                </div>
                                <div id="loginDiv4" style="height: 50%; display: flex; flex-direction: column; align-items: center;">
                                    <label for="email" style="margin-top: 6%; padding-bottom: 1%; color: white; font-family: Papyrus; text-decoration: underline;">
                                        Email
                                    </label>
                                <input id="loginDiv4Email" type="email" name="email"></input>
                                    <label for="password" style="margin-top: 10%; padding-bottom: 1%; color: white; font-family: Papyrus; text-decoration: underline;">
                                        Password
                                    </label>
                                <input id="loginDiv4Password" type="password" name="password"></input> 
                                </div>
                            <div id="loginDiv5" style="margin-bottom: 3%; color: white; cursor: pointer; border: 1px solid black; border-radius: 5px; padding: 0.5em 1em 0.5em 1em" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.3)'; this.style.transition='1s'" onmouseout="this.style.backgroundColor=null; this.style.transition='0s'">
                                <h4 id="loginDiv5LoginRegister">
                                    Login
                                </h4>
                            </div>
                    </div>
                </div>`);
            document.querySelector("#modalClose").addEventListener("click", () => {
                document.querySelector("#modalAuth").style.display = "none";
            });
            document.querySelector("#loginDiv5").addEventListener("click", () => {
                // provider.sdk.auth.login() ...
                document.querySelector("#loginDiv4Email").value = "";
                document.querySelector("#loginDiv4Password").value = "";
            });
            document.querySelector("#loginDiv3LoginP").addEventListener("click", () => {
                if(document.querySelector("#loginDiv3LoginP").dataset.active == 0) {
                    document.querySelector("#loginDiv3LoginP").dataset.active = "1";
                    document.querySelector("#loginDiv3LoginP").style.fontSize = "xx-large";
                    document.querySelector("#loginDiv3LoginP").style.color = "green";
                    document.querySelector("#loginDiv3LoginP").style.textDecoration = "underline";
                    document.querySelector("#loginDiv3LoginP").style.transition = "0.3s";
                    document.querySelector("#loginDiv3RegisterP").dataset.active = "0";
                    document.querySelector("#loginDiv3RegisterP").style.fontSize = "medium";
                    document.querySelector("#loginDiv3RegisterP").style.color = "red";
                    document.querySelector("#loginDiv3RegisterP").style.textDecoration = "none";
                };
            });
            document.querySelector("#loginDiv3RegisterP").addEventListener("click", () => {
                if(document.querySelector("#loginDiv3RegisterP").dataset.active == 0) {
                    document.querySelector("#loginDiv3RegisterP").dataset.active = "1";
                    document.querySelector("#loginDiv3RegisterP").style.fontSize = "xx-large";
                    document.querySelector("#loginDiv3RegisterP").style.color = "green";
                    document.querySelector("#loginDiv3RegisterP").style.textDecoration = "underline";
                    document.querySelector("#loginDiv3RegisterP").style.transition = "0.3s";
                    document.querySelector("#loginDiv3LoginP").dataset.active = "0";
                    document.querySelector("#loginDiv3LoginP").style.fontSize = "medium";
                    document.querySelector("#loginDiv3LoginP").style.color = "red";
                    document.querySelector("#loginDiv3LoginP").style.textDecoration = "none";
                };
            });
            document.querySelector("#loginDiv3LoginP").addEventListener("mouseover", e => {
                if (e.target.dataset.active == 0) {
                    document.querySelector("#loginDiv3LoginP").style.fontSize = "large";
                    document.querySelector("#loginDiv3LoginP").style.color = "#ff6200";
                    document.querySelector("#loginDiv3LoginP").style.transition = "1s";
                };
            });
            document.querySelector("#loginDiv3LoginP").addEventListener("mouseout", e => {
                if (e.target.dataset.active == 0) {
                    document.querySelector("#loginDiv3LoginP").style.fontSize = "medium";
                    document.querySelector("#loginDiv3LoginP").style.color = "red";
                    document.querySelector("#loginDiv3LoginP").style.transition = "0s";
                };
            });
            document.querySelector("#loginDiv3RegisterP").addEventListener("mouseover", e => {
                if (e.target.dataset.active == 0) {
                    document.querySelector("#loginDiv3RegisterP").style.fontSize = "large";
                    document.querySelector("#loginDiv3RegisterP").style.color = "#ff6200";
                    document.querySelector("#loginDiv3RegisterP").style.transition = "1s";
                };
            });
            document.querySelector("#loginDiv3RegisterP").addEventListener("mouseout", e => {
                if (e.target.dataset.active == 0) {
                    document.querySelector("#loginDiv3RegisterP").style.fontSize = "medium";
                    document.querySelector("#loginDiv3RegisterP").style.color = "red";
                    document.querySelector("#loginDiv3RegisterP").style.transition = "0s";
                };
            });
        } else {
            document.querySelector("#modalAuth").style.display = "flex";
        };
    } else {
        // provider.sdk.auth.logout() ...
        console.log("logout");
    };
};
