import React, { Component } from 'react';
import {Form, FormUnit} from 'pivotal-ui/react/forms';
import {Input} from 'pivotal-ui/react/inputs';




import logo from './logo.svg';

import './App.css';

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">
        <p className="App-intro">{this.state.response}</p>

        <div>

        <Form {...{
          fields: {
            host: {label: 'Host'},
            path: {label :'Path', children: <Input id="the-path"/>}
            }
            }}>
              {({fields}) => (
                <div>
                  {fields.host}
                  {fields.path}
                </div>
            )}

          </Form>



        </div>
        </div>
      );
  }
}

export default App;
