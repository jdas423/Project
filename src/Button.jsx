

export default function Button({style,text}){
    return(
        <button style={{...style,display:"flex",justifyContent:"center",alignItems:"center"}}>
            {text}
        </button>
    )
}