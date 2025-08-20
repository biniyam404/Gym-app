import './output.css';

function App() {
  return (
    <div className="App">
      <Navigatin/>
    </div>
  );
}
function Navigatin (){
  return (
    <div>
      <Logo/>
      <NaveParts/>
      <Sign/>
      <Wellcome/>
      <Servies/>
      <Feedback/>
      <About/>
      <Footer/>
    </div>
  )
}
function Logo (){
  return (
    <div>
      Logo
    </div>
  )
}
function NaveParts (){
  return (
    <div>
     <a>About</a>
     <a>Personal Trainer</a>
     <a>My Schedules</a>
     <a>Packages</a>
     <a>Contacts</a>
    </div>
  )
}
function Sign(){
  return(
    <div>
      <button>
                Sign In
      </button>

      <button>
              Log In

      </button>
    </div>
  )
}
// The things that I wnat in the app
// nave , body,
function Wellcome(){
  return (
   <div>
     <div>
        <h1>Together We Lift.</h1>
        <p>
          <span>Welcome to Gym-app</span>  your digital space for strength, 
          wellness, and transformation. Whether you're starting your 
          fitness journey or leveling up your routine, Gym-app is designed 
          to empower you every step of the way. Discover workouts, connect 
          with trainers, and explore 
          wellness bundles that go beyond the gym. 
          Your goals are within 
          reach—and it all starts here.
          </p>
    </div>
    <div>
      <img/>
    </div>
   </div>
  )
} 

function Servies (){
  return (
    <div>
      <div>What You will Find Here:</div>
      <Part/>
    </div>
  )
}
function Part(){
  return(
    <div>
        Servies parts 
    </div>
  )
}

function About (){
          return(
            <div>
              About the gym
            </div>
          )
}

function Feedback(){
  return (
    <div>
        peoples feedback about the gym and ratings
    </div>
  )
}


function Footer(){
  return (
    <div>
        <User/>
        <Contacts/>
        <Comments/>
        <Location/>

    </div>
  )
}
function User(){
  return(
    <div>
      User Self mangment about his profile
    </div>
  )

}
function Contacts (){
    return(
      <div>
        Contacts
      </div>
    )
}

function Comments (){
  return (
    <div>
      comments
    </div>
  )
}
function Location (){
  return (
    <div>
      Location 
    </div>
  )
}




export default App;
