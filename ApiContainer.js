// import React, { Component } from 'react';
// import axios from 'axios'

// import { View } from 'react-native'

// class ApiContainer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       loading: false,
//       data: null
//     }
//   }
//   users = async() => {
//     this.setState({
//       loading: true
//     })
//     try {
//       const response = await axios.get(
//         'http://localhost:3000/users'
//       )
//       this.setState({
//         loading: false,
//         data: response.data
//       })
//     } catch (error) {
//       alert(error.message)
//     }
//   }
// }