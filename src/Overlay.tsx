interface OverlayProps {
  isEnabled: boolean;
}

export default function Overlay(props: OverlayProps) {
  return (
    <div
      className="overlay"
      style={{ display: props.isEnabled ? 'block' : 'none' }}
    ></div>
  );
}
