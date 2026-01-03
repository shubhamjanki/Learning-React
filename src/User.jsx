export default function User({detail}){
    console.log(detail)
    return(
        <>
        <hr />
        <h1>{detail.map((val,index)=>
            <h2 key={index}>{val}</h2>
        )}</h1>
        
        </>
    )
}