import './output.css';

function App() {
  return (
    <div className="App">
      <Navigatin/>
      <Wellcome/>
      <Servies/>
      <Feedback/>
      <About/>
      <Footer/>
    </div>
  );
}
function Navigatin (){
  return (
    <div className='py-5  px-10 flex justify-between items-center'>
      <Logo/>
      <NaveParts/>
      <Sign/>
    </div>
  )
}
function Logo (){
  return (
    <div className='pl-10 text-3xl'>
      Logo
    </div>
  )
}
function NaveParts (){
  return (
    <div className='space-x-6'>
     <a href='' className='relative group'>
      About
      {/* underlining using span */}
              <span className='absolute left-0 
              bottom-0 w-0 h-[1.5px] bg-[#dd2d4a]
              transition-all duration-300 
              group-hover:w-full'></span>
     </a>
     <a href=''  className='relative group'>
      Personal Trainer
      {/* underlining using span */}
              <span className='absolute left-0 
              bottom-0 w-0 h-[1.5px] bg-[#dd2d4a]
              transition-all duration-300 
              group-hover:w-full'></span>
      </a>
     <a href=''  className='relative group'>
      My Schedules
      {/* underlining using span */}
              <span className='absolute left-0 
              bottom-0 w-0 h-[1.5px] bg-[#dd2d4a]
              transition-all duration-300 
              group-hover:w-full'></span>
      </a>
     <a href=''  className='relative group'>
      Packages
      {/* underlining using span */}
              <span className='absolute left-0 
              bottom-0 w-0 h-[1.5px] bg-[#dd2d4a]
              transition-all duration-300 
              group-hover:w-full'></span>
      </a>
     <a href=''  className='relative group'>
      Contacts
      {/* underlining using span */}
              <span className='absolute left-0 
              bottom-0 w-0 h-[1.5px] bg-[#dd2d4a]
              transition-all duration-300 
              group-hover:w-full'></span>
      </a>
    </div>
  )
}
function Sign(){
  return(
    <div className='space-x-6'>
      <a href='' className='bg-[#dd2d4a] px-6 py-1 hover:bg-[#e0405a] rounded-xl'>
                Sign In
      </a>

      <button className='relative group'>
              Log In
              {/* underlining using span */}
              <span className='absolute left-0 
              bottom-0 w-0 h-[1.5px] bg-[#dd2d4a]
              transition-all duration-300 
              group-hover:w-full'></span>

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
