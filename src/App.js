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
      <About/>
      <Feedback testimonials={testimonials}/>
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
   <div className='px-50 py-10 pb-0 flex bg-[#343a40] '>
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
        <img src="/img.png" alt="Gym Interior" className="" />
    </div>
   </div>
  )
} 


function Servies (){
  return (
    <div className='p-5 bg-white'>
      <div className='pt-5 text-center text-2xl text-black relative group '>
        What You will Find Here
        <span className='absolute left-0 
              bottom-0 w-0 h-[1.5px] bg-[#dd2d4a]
              transition-all duration-300 
              group-hover:w-full'></span>
      </div>
      <div className='grid grid-cols-3 gap-5 p-5 '>
        {gymFeatures.map((feature)=><Part gymFeatures = {feature}/>)}
        </div>
    </div>
  )
}
function Part({gymFeatures}){
  return(
    <div className='p-5 rounded  hover:-translate-1 bg-[#ff0a54] transition duration-500'>
        <div className='text-xl text-center py-3 bg-black rounded-3xl shadow-xl '>{gymFeatures.title}</div>
        <div className='px-2 py-2'>{gymFeatures.description}</div>
    </div>
  )
}

function About (){
          return(
            <div className='p-10 py-25'>
              <h1 className='text-center text-xl p-5'>About</h1>
              <div className='flex items-center justify-center gap-5'>
                <img src='/about.png'  className='pl-25'/>
                <p className='p-5 w-1/2'>
                Welcome to Lift Gym — Where Strength Meets Purpose. At Lift Gym, we believe fitness is more than reps and routines—it's a journey of transformation. Whether you're just starting out or pushing past plateaus, our space is built to empower you. With certified personal trainers, flexible workout packages, and custom schedules that fit your lifestyle, we make progress personal. Our fully equipped facility supports every goal—from strength 
                and cardio to flexibility and recovery. Lift Gym is more than a place to train—it's a community where you grow, lift each other up, and redefine what's possible. Together, we lift.
              </p>
              
              </div>
            </div>
          )
}

const testimonials = [
  {
    Img:"./gymboy.jpg",
    name: "Kadianguleten",
    feedback:
      "I joined this gym four months ago and the services are excellent. I suggest trying the packages—they’re really enjoyable and effective. I’ve seen noticeable changes in my body in such a short time!",
  },
  {
    Img:"./gymboy.jpg",
    name: "Kadianguleten",
    feedback:
      "I joined this gym four months ago and the services are excellent. I suggest trying the packages—they’re really enjoyable and effective. I’ve seen noticeable changes in my body in such a short time!",
  },
  {
    Img:"./gymboy.jpg",
    name: "Kadianguleten",
    feedback:
      "I joined this gym four months ago and the services are excellent. I suggest trying the packages—they’re really enjoyable and effective. I’ve seen noticeable changes in my body in such a short time!",
  },
  {
    Img:"./gymboy.jpg",
    name: "Kadianguleten",
    feedback:
      "I joined this gym four months ago and the services are excellent. I suggest trying the packages—they’re really enjoyable and effective. I’ve seen noticeable changes in my body in such a short time!",
  },
];


function Feedback({testimonials}){
  return (
    <div className='p-20 bg-white text-black h-screen'>
        <div className='text-center text-xl p-5'>Feedbacks</div>
        <div className='grid grid-cols-2 gap-5'>
          {
          testimonials.map((test)=><PeoplesFeedback test = {test}/>)
          }
        </div>
    </div>
  )
}

function PeoplesFeedback({ test }) {
  return (
    <div className='flex gap-5 items-center shadow-sm'>
      <div className=''>
            <img
              src={test.Img}
              alt={`${test.name}'s feedback`}
              className="rounded object-cover"
            />
      </div>
      <div>
        <div className='text-xl font-bold'>{test.name}</div>
      <p className='font-semibold p-2'>{test.feedback}</p>
      </div>

    </div>
  );
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
