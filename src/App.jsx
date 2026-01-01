import React, { useEffect, useState } from 'react'

const App = () => {

  const [input1, setinput1] = useState("")
  let [input2, setinput2] = useState("")


  // const [userdata, setuserdata] = useState([])

  // useEffect(() => {
  //   const savedData = JSON.parse(localStorage.getItem("userdata"))
  //   if (savedData) {
  //     setuserdata(savedData)
  //   }
  // }, [])

const [userdata, setuserdata] = useState(() => {
  return JSON.parse(localStorage.getItem("userdata")) || []
})


  function writinginput(e){
    setinput1(e.target.value)
  }
  function writinginput2(e){
    setinput2(e.target.value)
  }
  
  function submitaction(e){
    e.preventDefault()
    let num1 = input2.slice(0, 4)
    let num2 = input2.slice(5, 100)
    input2 = num1 + " " + num2
    userdata.push({input1, input2})
    localStorage.setItem("userdata", JSON.stringify(userdata))
    setinput1("")
    setinput2("")

  }

  function deletehandler(e){
    const copyuser = [...userdata]
    copyuser.splice(e.target.id, 1)
    setuserdata(copyuser)
    localStorage.setItem("userdata", JSON.stringify(copyuser))
  }


  return (
    <div className='main'>
      <form onSubmit={submitaction}>
        <input
         type="text" 
         placeholder='Enter Name'
         value={input1}
         onChange={writinginput}
         />
         <input
         type="text"
         placeholder='Enter Number'
         value={input2}
         onChange={writinginput2}
         />

         <br />
      <button>SUBMIT</button>
      </form>

      {userdata.map(function(user, idx){
      return <div className='contact' key={idx}>
        <h3>{user.input1}</h3>
        <p>{user.input2}</p>
        <i id={idx} className="ri-delete-bin-6-line"
        onClick={deletehandler}
        ></i>
      </div>
      })}

    </div>
  )
}

export default App