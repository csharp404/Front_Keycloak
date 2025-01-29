
import Demo from './Components/Demo';
import useAuth from './Hooks/Auth';

function App() {
  const obj = useAuth();

  return obj.Islogin ? (
    <>
      <Demo />
      <button type="button" onClick={obj.Logout}>Logout</button>
    </>
  ) : (
    <div>Redirecting to login...</div>
  );
}

export default App;