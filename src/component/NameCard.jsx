export default function NameCard({userData ,color}){
    return(
        <>
        <div style={{border:"2px solid black",color:color,borderRadius:"5px", width:"200px", margin:"10px", padding:"10px"}}>
            <h1>Name Card</h1>
            <h2>{userData.id}</h2>
            <h2>{userData.name}</h2>
            <h2>{userData.age}</h2>
            <h2>{userData.email}</h2>
        </div>
        </>
    )

}