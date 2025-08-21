import './output.css';
const gymFeatures = [
  {
    title: "Personal Trainers",
    description:
      "Get matched with certified trainers who understand your goals, fitness level, and preferred workout style. Whether you're into strength training, cardio, or flexibility, our trainers are here to guide, motivate, and track your progress."
  },
  {
    title: "Flexible Packages",
    description:
      "Choose from curated bundles like Gym + Bath, or build your own with services that fit your lifestyle. Our packages are designed to be affordable, customizable, and scalable—so you only pay for what you need."
  },
  {
    title: "Custom Schedules",
    description:
      "Plan your workouts around your life. Use our intuitive scheduling tool to set training times, rest days, and even sync with your trainer’s availability. No more missed sessions—just consistent progress."
  },
  {
    title: "Easy Payment Options",
    description:
      "We support secure, hassle-free payments through mobile wallets, cards, and local banking systems. Manage subscriptions, renewals, and upgrades with just a few taps."
  },
  {
    title: "Fully Equipped Gym",
    description:
      "Access a wide range of modern machines, full dumbbell sets, and specialized equipment for every workout type. Whether you're a beginner or a pro, our gear is ready to support your grind."
  },
  {
    title: "Age & Gender-Based Plans",
    description:
      "Your body is unique—your workout should be too. We offer personalized routines based on age, gender, and fitness level to ensure safety, effectiveness, and long-term results."
  }
];

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
   <div className='px-40 py-20 pb-10 flex '>
     <div className='w-1/2 items-center'>
        <h1 className='text-5xl py-10'>Together We Lift.</h1>
        <p className='pb-10'>
          Welcome to <span className='text-xl text-[#dd2d4a]'>  Gym-app</span>   your digital space for strength, 
          wellness, and transformation. Whether you're starting your 
          fitness journey or leveling up your routine, Gym-app is designed 
          to empower you every step of the way. Discover workouts, connect 
          with trainers, and explore 
          wellness bundles that go beyond the gym. 
          Your goals are within 
          reach—and it all starts here.
          </p>
          <div>
            <a href='' className='bg-[#dd2d4a] px-6 py-1 hover:bg-[#e0405a] rounded-xl'>
                Start
            </a>
          </div>
          
    </div>
    <div className=''>
        <img src="/image.png" alt="Gym Interior" className="" />
    </div>
   </div>
  )
} 


function Servies (){
  return (
    <div className='p-5'>
      <div className='text-center text-xl text-[]'>What You will Find Here:</div>
      <div className='grid grid-cols-3 gap-3'>
        {gymFeatures.map((feature)=><Part gymFeatures = {feature}/>)}
        </div>
    </div>
  )
}
function Part({gymFeatures}){
  return(
    <div className='p-5 rounded border'>
        <div className='text-xl p-3'>{gymFeatures.title}</div>
        <div>{gymFeatures.description}</div>
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
