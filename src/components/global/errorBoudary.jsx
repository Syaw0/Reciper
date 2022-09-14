/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import mainStore from '../../store/mainStore';
import FallbackUi from './fallbackUi';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    mainStore.setState((state) => ({ ...state, getPageDataError: true }));
    return { hasError: true };
  }

  componentDidCatch() {
    // log to service
  }

  handleErrorState(bool) {
    mainStore.setState((state) => ({ ...state, getPageDataError: bool }));
    this.setState((state) => ({ ...state, hasError: bool }));
  }

  render() {
    if (this.state.hasError) {
      return (
        <FallbackUi handleErrorState={this.handleErrorState.bind(this)} />
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
