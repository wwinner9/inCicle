import './style.css'

export default function Miniwidget(props){
    return(
        <div className="miniWidget" style={{borderColor:props.color}} > 
            <h4>{props.title}</h4>
            <ul>  
                {props.children} 
            </ul>
        </div> 
    );
}