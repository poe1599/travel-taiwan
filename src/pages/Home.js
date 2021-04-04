import { useState, useEffect } from 'react'

function Home() {
  const [kvOpacity, setKvOpacity] = useState([1, 0, 0, 0])
  const [timeOutBool, setTimeOutBool] = useState(true)

  useEffect(() => {
    setTimeOutBool(false)
    if (timeOutBool) {
      setTimeout(() => {
        const array = [...kvOpacity]
        const item = array.pop()
        array.unshift(item)
        setKvOpacity(array)
        setTimeOutBool(true)
        console.log(array)
      }, 5000)
    }
  }, [timeOutBool])

  return (
    <>
      <div className="container-fluid">
        <div className="heroImg">
          <div className="kv1" style={{ opacity: kvOpacity[0] }}></div>
          <div className="kv2" style={{ opacity: kvOpacity[1] }}></div>
          <div className="kv3" style={{ opacity: kvOpacity[2] }}></div>
          <div className="kv4" style={{ opacity: kvOpacity[3] }}></div>
        </div>
      </div>
    </>
  )
}

export default Home
