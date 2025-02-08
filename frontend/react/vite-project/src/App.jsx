import Random from "./Random";
function App() {
  const data = ["harsh", "dharm", "kumar", "kishore", "patil", "vijay", "chandra", "rajesh", "chandravardhan", "pat"];
  return (
    <div className="space-y-2">
      {data.map((elem, index) => (
        <div
          key={index}
          className="px-3 py-4 bg-zinc-100 w-fit rounded-md shadow-sm"
        >
          {elem}
        </div>
      ))}
       <Random/>
    </div>
   
  );
  
}
export default App;
