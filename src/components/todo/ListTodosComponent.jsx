function ListTodosComponent() {

    const today = new Date()
    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay())
  
    const todos = [
      {id: 1, descrpition: 'Learn AWS', done: false, targetDate:targetDate},
      {id: 2, descrpition: 'Learn Full Stack Development', done: false, targetDate:targetDate},
      {id: 3, descrpition: 'Learn DevOps', done: false, targetDate:targetDate}
    ]
  
    return(
      <div className='container'>
        <h1>Things You want to do!</h1>
        <div>
          <table className='table'>
            <thead>
              <tr>
                <td>ID</td>
                <td>Descrpition</td>
                <td>Is Done?</td>
                <td>Target Date</td>
              </tr>
            </thead>
            <tbody>
              {
                todos.map(
                  todo => (
                    <tr key={todo.id}>
                      <td>{todo.id}</td>
                      <td>{todo.descrpition}</td>
                      <td>{todo.done.toString()}</td>
                      <td>{todo.targetDate.toLocaleDateString()}</td>
                    </tr>
                  )
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    )
}

export default ListTodosComponent