import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      name: '',
      balance: '',
      isSubmitted: false,
      title: '',
      author: '',
      body: ''
      
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/users')
    .then((response) => {
      console.log(response.data[0])
      this.setState({
        title: response.data[0].title,
        body: response.data[0].body,
        author: response.data[0].author,
        value: response.data[0].date_created
      })
    })
    .catch((error) => {
      console.error(error)
    })
  }
  
  handleChange(event) {
    this.setState({value: event.target.value})
    //console.log(this.state.value);
  }
  
  handleSubmit(event) {
    // this.state.value
    this.setState({isSubmitted: true})
    event.preventDefault()
    //console.log(this.state.value)
    // for (let i = 0; i < data.length; i++) {
    //   if (data[i].name === this.state.value) {
    //     this.setState({name: data[i].name, balance: data[i].balance})
    //   }
    // }
    // axios.get('http://localhost:3000/api/user', {
    //   params: {
    //     username: this.state.value
    //   }
    // })
    // .then((response)=> {
    //   console.log(response.data)
    //   // this.setState({name: response.data, balance: response.data})
    //   //response.data[0].name
    // })
    // .catch((error) => {
    //   console.error(error);
    // })

    // axios.get('http://localhost:3000/api/users', {
    //   params: {
    //     username: this.state.value,

    //   }
    // })
    // .then((response)=> {
    //   console.log(response.data)
    //   this.setState({name: response.data[0].name})
    //   //response.data[0].name
    // })
    // .catch((error) => {
    //   console.error(error)
    // })
  }
  
  render () {
    // if (!this.state.isSubmitted) {
      return (
        <div>
          {/* <form onSubmit={this.handleSubmit}> */}
            <h1>Never</h1>
            <h2> Ending</h2>
            <h3>Treat</h3>
            
              <p>Title: {this.state.title}</p>
              <p>{this.state.body}</p>
              <p>Author: {this.state.author}</p>
              <p>Posted: {this.state.value}</p>
            
        </div>
      );
    // } else {
    //   return (
    //     <div>
    //     <Balance name={this.state.name} balance={this.state.balance} />
    //     {/* <input type="text" value={this.state.value} onChange={this.handleChange} />
    //     <input type="submit" value="Get Balance" />
    //     <input type="text" value={this.state.name} onChange={this.handleChange}/> */}
    //   {/* </form> */}
    //   </div>
    //   )
    // }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
