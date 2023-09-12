import React, { Component } from "react";
import "./chat.css";

export class Chat extends Component{

        componentDidMount() {
            
            
            
    (function(d, m){
        var kommunicateSettings = 
            {"appId":"346e946c946655548bea090ab6dcce1ff","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});

       


        }

    render(){
        return(
            <div className="heading">
                <div className="heading2">
                <h1>ChatBot --> App</h1>
                </div>
            </div>
        )
    }
}



export default Chat;