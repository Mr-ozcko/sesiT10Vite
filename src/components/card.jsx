
export default function Card(props){
    return(
        <div>
            <h2>{props.title}</h2>
            <img src={props.img} 
                alt={props.title} 
                width={200} 
                height="auto" />
            <p>{props.teste1}</p>
            <p>{props.teste2}</p>
        </div>
    )
}