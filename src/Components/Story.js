import '../Styles/Story.css'

export default function Story(props){
    return (
        <>
            <div className="Story">
                    <div id='companyimage'>
                        <img  src={props.image} />
                    </div>
                    <div className="StoryText">
                        <p id='name'>{props.name}</p>
                        <p id='desc'>{props.desc}</p>
                    </div>
            </div>
        </>
    )
}