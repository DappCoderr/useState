// import React from 'react'
// import './App.css'

// function App() {
//   const [count, setcount] = useState(() => {return 0})
//   const [theme, settheme] = useState('😐')

//   function decrementCount(){
//     setcount(prevCount => prevCount - 1)
//     settheme(prevCount => '🥺')
//   }

//   function incrementCount(){
//     setcount(prevCount => prevCount + 1)
//     settheme(prevCount => '😃')
//   }


//   // const [state, setstate] = useState({count:4, theme: 'likes'})
//   // const count = state.count
//   // const theme = state.theme

//   // function decrementCount(){
//   //   setstate( prevstate => {
//   //     return{ ...prevstate, count: prevstate.count - 1}
//   //   })
//   // }

//   // function incrementCount(){
//   //   setstate(prevstate => {
//   //     return{ ...prevstate, count:prevstate.count + 1}
//   //   })
//   // }

//   return (
//     <div className='box'>
//       <button onClick={decrementCount}>-</button>
//       <span>{count}</span>
//       <span>{theme}</span>
//       <button onClick={incrementCount}>+</button>
//     </div>
//   )
// }

// export default App


// import React from 'react'

// function Welcome(props){
//   return <div>Hello, {props.name}</div>
// }

// function App() {
//   return (
//     <div>
//       <Welcome name="Hardik"/>
//       <Welcome name="Nirbhik"/>
//       <Welcome name="Kartikay"/>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }

//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     );
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }

// function App() {
//   return (
//     <div>
//       <Clock/>  
//     </div>
//   )
// }

// export default App



// import React from 'react'

// function handleClick(e){
//   e.preventDefault();
// }

// function App() {
//   return (
//     <div>
//       <a href='#' onClick={handleClick}>Click me</a>
//     </div>
//   )
// }

// export default App



// import React from 'react'

// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isToggleOn: false};
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState(state => ({
//       isToggleOn: !state.isToggleOn
//     }));
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'ON' : 'OFF'}
//       </button>
//     );
//   }
// }

// function App() {
//   return (
//     <div>
//       <Toggle/>     
//     </div>
//   )
// }

// export default App

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }

// function UserGreeting(props) {
//   return <h1>Welcome back!</h1>;
// }

// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>;
// }

// function LoginButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Login
//     </button>
//   );
// }

// function LogoutButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Logout
//     </button>
//   );
// }

// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = {isLoggedIn: false};
//   }

//   handleLoginClick() {
//     this.setState({isLoggedIn: true});
//   }

//   handleLogoutClick() {
//     this.setState({isLoggedIn: false});
//   }

//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     let button;
//     if (isLoggedIn) {
//       button = <LogoutButton onClick={this.handleLogoutClick} />;
//     } else {
//       button = <LoginButton onClick={this.handleLoginClick} />;
//     }

//     return (
//       <div>
//         <Greeting isLoggedIn={isLoggedIn} />
//         {button}
//       </div>
//     );
//   }
// }

// function Mailbox(props) {
//   const unreadMessages = props.unreadMessages;
//   return (
//     <div>
//       <h1>Hello!</h1>
//       {unreadMessages.length > 0 &&
//         <h2>
//           You have {unreadMessages.length} unread messages.
//         </h2>
//       }
//     </div>
//   );
// }

// const messages = ['React', 'Re: React', 'Re:Re: React', 'hardik', 'kartikay'];

// function App() {
//   return (
//     <div>
//       <Mailbox unreadMessages={messages}/>     
//     </div>
//   )
// }

// export default App


import React from 'react'

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Page/>
    </div>
  )
}

export default App
