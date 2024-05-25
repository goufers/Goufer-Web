import { useState } from "react";




interface DbItem {
  firstName: string;

}
function Home() {
  const [dbData, setDbData] = useState<DbItem[]>([]);

  const getDb = async () => {
         const uri = "http://localhost:3000/users"
         const res = await fetch(uri);
         const data: DbItem[] = await res.json()
         setDbData(data)
  }
  getDb()

  return (
    <div>
    {dbData.map((item, index) => (
      <div key={index}>
        <p>{item.firstName}</p>
      </div>
    ))}
  </div>
  )
}

export default Home