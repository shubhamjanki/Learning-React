export default function Card({userData}) {
  return (
    <div >
      <table border={1}>
          <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Age</td>
              <td>Email</td>
            
            </tr>
          </thead>
          <tbody>{
            userData.map((userData)=>(
            <tr key={userData.id}>
              <td >{userData.id}</td>
              <td>{userData.name}</td>
              <td>{userData.age}</td>
              <td>{userData.email}</td>
            </tr>
            ))
            }
          </tbody>
        </table>
    </div>

    );
}