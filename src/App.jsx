
import Post from './components/Post';
import PrimaryButton from './components/Button';

function App() {


  return (
    <>
    {/* <h1 style={{color:'red'}}>Hello World</h1> */}
    <h1>Hello World</h1>
    <Post author = "Shiv" body = "Hello Shiv" />
    <PrimaryButton name = "Click me!" />

    </>
  )
}

export default App
