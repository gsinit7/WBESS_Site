import '../Styles/Card.css'

export default function Card(props){
    return (
        <>
            <div className="Card">
                    <div id='image'>
                        <img id='img' src={props.image} />
                    </div>
                    <div className="CardText">
                        <p id='name'>{props.name}</p>
                        <p id='position'>{props.title}</p>
                    </div>
            </div>
        </>
    )
}