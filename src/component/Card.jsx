export default function Card({children,color}) {
  return (
    <div style={{padding:"10px",alignItems:"center", display:"flex",flexDirection:"column",justifyContent:"center",wordBreak:"break-word",overflow:"hidden",height:"200px" ,width:"400px",borderRadius:"5px",border:"solid black 2px",background:"yellow",color:color}}>
        {children}
    </div>

    );
}