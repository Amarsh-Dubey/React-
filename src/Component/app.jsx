// import React, { Component } from 'react';

// // class MyComponent extends Component {

// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       count: 0,
// //       data: null,
// //       loading: true,
// //     };

// //     this.handleClick = this.handleClick.bind(this);
// //   }

// //   componentDidMount() {
// //     fetch('https://jsonplaceholder.typicode.com/posts/1')
// //       .then(res => res.json())
// //       .then(data => {
// //         this.setState({ data, loading: false });
// //       });

// //     this.timer = setInterval(() => {
// //       this.setState(prev => ({ count: prev.count + 1 }));
// //     }, 1000);
// //   }

// //   componentDidUpdate(prevProps, prevState) {
// //     if (prevState.count !== this.state.count) {
// //       console.log('Count changed to:', this.state.count);
// //     }
// //   }

// //   componentWillUnmount() {
// //     clearInterval(this.timer);
// //   }

// //   handleClick() {
// //     this.setState(prev => ({ count: prev.count + 1 }));
// //   }

// //   render() {
// //     const { count, data, loading } = this.state;

// //     return (
// //       <div>
// //         <h1>Count: {count}</h1>
// //         <button onClick={this.handleClick}>Increment</button>

// //         {loading ? (
// //           <p>Loading...</p>
// //         ) : (
// //           <p>Data: {data?.title}</p>
// //         )}
// //       </div>
// //     );
// //   }
// // }

// // export default MyComponent;
// class sample extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0,
//         }
//     }
//     componentDidMount() {
//         console.log('Component mounted');
//     }

//     shouldComponentUpdate(nextProps, nextState) {
//     //     if (nextState.count > 5) {
//     //         return false;
//     //     }
//     //     return true;
//     // }
//     console.log('Should component update?');
//     return true;
//     }
// import React from 'react'
// import { useState } from 'react'

// function Sample() {
//   // let count=0
//   const [count, setCount]=useState(0)
  
//   const increment = () => {
//        setCount(count + 1)
//     }

//     const decrement = () => {
//        setCount(count - 1)
//     }
//   return (
//     <div>
//       <h1>This is a sample component</h1>
//       <h2>{count}</h2>
//       <button style={{backgroundColor:"red",color:"white", width:"100px", height:"30px"}} onClick={increment}>Increment</button>
//       <button style={{backgroundColor:"yellow", color:"black", width:"100px", height:"30px"}} onClick={decrement}>decrement</button>
//     </div>
//   )
// }

// export default Sample
import { useState } from 'react'
import styles from '../Css/app.module.css'

function Sample() {
  // let count=0
  const [count, setCount]=useState(0)
  
  const increment = () => {
       setCount(count + 1)
    }

    const decrement = () => {
       setCount(count - 1)
    }
  return (
    <div>
      <h1>This is a sample component</h1>
      <h2>{count}</h2>
      <button className={styles.btn} onClick={increment}>Increment</button>
      <button className={styles.btn} onClick={decrement}>decrement</button>
    </div>
  )
}

export default Sample