import '../style/SobremiStyle.css'

export function ItemSkills({item}){
    return(
        <div className="itemSkills">
                {item.item}
                <h3>{item.nombre}</h3>
        </div>
    )
}