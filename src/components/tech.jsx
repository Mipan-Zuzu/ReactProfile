import "../App.css";

const Tech = ({Techs,random}) => {
    const Result = Techs
    const assets = {
        react : "https://camo.githubusercontent.com/9242244a22ff5237b5410291986a5d911e829e494f47913c7d9bd0404627d789/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f612f61372f52656163742d69636f6e2e737667",
        mongo : "https://skillicons.dev/icons?i=mongodb",
        node : "https://skillicons.dev/icons?i=nodejs",
        expres : "https://skillicons.dev/icons?i=express"
    }
    return (
        <>
            <div className="Tech">
                <img src={assets.react} width={20} /><a> {Result[0]}</a>
                <img src={assets.mongo} width={20} /><a> {Result[1]}</a>
                <img src={assets.node} width={20} /><a> {Result[2]}</a>
                <img src={assets.expres} width={20} /><a> {Result[3]}</a>
                <a>{!random ? "Null" : random}</a>
            </div>
        </>
    )
}

export default Tech