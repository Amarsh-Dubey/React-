import React, { Component } from 'react';

// class MyComponent extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//       data: null,
//       loading: true,
//     };

//     this.handleClick = this.handleClick.bind(this);
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/posts/1')
//       .then(res => res.json())
//       .then(data => {
//         this.setState({ data, loading: false });
//       });

//     this.timer = setInterval(() => {
//       this.setState(prev => ({ count: prev.count + 1 }));
//     }, 1000);
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.count !== this.state.count) {
//       console.log('Count changed to:', this.state.count);
//     }
//   }

//   componentWillUnmount() {
//     clearInterval(this.timer);
//   }

//   handleClick() {
//     this.setState(prev => ({ count: prev.count + 1 }));
//   }

//   render() {
//     const { count, data, loading } = this.state;

//     return (
//       <div>
//         <h1>Count: {count}</h1>
//         <button onClick={this.handleClick}>Increment</button>

//         {loading ? (
//           <p>Loading...</p>
//         ) : (
//           <p>Data: {data?.title}</p>
//         )}
//       </div>
//     );
//   }
// }

// export default MyComponent;
class sample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }
    componentDidMount() {
        console.log('Component mounted');
    }

    shouldComponentUpdate(nextProps, nextState) {
    //     if (nextState.count > 5) {
    //         return false;
    //     }
    //     return true;
    // }
    console.log('Should component update?');
    return true;
    }
    