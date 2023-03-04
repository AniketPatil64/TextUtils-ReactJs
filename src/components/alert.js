import React from "react";
function Alert(props){
    return <div className="alert">
             <h4>{props.alert.message}</h4>
            </div>
}
export default Alert;