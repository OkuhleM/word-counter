
import './App.css';
import { useState } from 'react'

function App() {
  const [blog, setBlog] = useState({

    text: "",
    length: 0,


  });


  const [wordsLength, setWordsLength] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    let { text, length } = blog
    // let limit = 2;

    if (length > 150) {
      alert("words exceed the capacity")

    } else if (text.length === 0) {
      alert('please input something')


    } else {
      setWordsLength(
        [...wordsLength, blog],


      )
    }


  }

  const handelChange = (e) => {

    setBlog({
      text: e.target.value,
      length: e.target.value.trim().split(' ').length
    })
    console.log('Angel', e.target.value.trim().split(' ').length);
  }


  return (
    <div className="wordCounter">
      <div>
        <textarea
          disabled={blog.text.split(' ').length > 150}
          value={blog.text} name="blog" onChange={handelChange}
        ></textarea><br />
        <button
          onClick={handleSubmit}
        >
          submit
        </button>
      </div>
      {

        <ul>
          {wordsLength.map((value, index) => {
            return (
              <div key={index}>
                <p>{value.text}</p>
                <p>{value.length}</p>
              </div>
            )
          })}
        </ul>}

    </div>
  );
}

export default App;
