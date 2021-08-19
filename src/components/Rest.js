import React from "react";

export default class Rest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      appName:'',
      version:''
    };
  }

  componentDidMount() {
    fetch("/rest/")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
//            items: result.items,
            appName: result.appName,
            version: result.version
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, appName,version } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <div><span>Application Name</span><span>{appName}</span></div>
          <div><span>Version</span><span>{version}</span></div>
        </div>
        // <ul>
        //   {items.map(item => (
        //     <li key={item.id}>
        //       {item.name} {item.price}
        //     </li>
        //   ))}
        // </ul>
      );
    }
  }
  
}