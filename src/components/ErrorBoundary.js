import React from "react";
import Error from "../pages/Error";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error: errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div className="main-container">
          <Error />
          <details>
            {this.state.error && this.state.error.toString()}
            <br></br>
            {this.state.errorInfo.ComponentStack}
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
