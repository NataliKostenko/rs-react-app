import React from 'react';

interface OverlayProps {
  isEnabled: boolean;
}

class Overlay extends React.Component<OverlayProps> {
  render(): React.ReactNode {
    return (
      <div
        className="overlay"
        style={{ display: this.props.isEnabled ? 'block' : 'none' }}
      ></div>
    );
  }
}
export default Overlay;
