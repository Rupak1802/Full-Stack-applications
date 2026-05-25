const names=[
  {id:1,name:'Alice'},
  {id:2,name:'Bob'},
  {id:3,name:'Charlie'}
]
function App() {
  const vechiles=['mustang','f-150','expedition']
  const [car,truckl,suv] = vechiles;
  return (
    <div>
      <h1>Hello, World!</h1>
      <ol>
        {names.map(name => <li key={name.id}>{name.name} and my id is {name.id}</li>)}
      </ol>    
    </div>
  )
}

export default App