interface IProps {
  diameter: string;
  color: string;
}

export default function Orbit({ diameter, color }: IProps) {
  return (
    <div
      style={{
        width: diameter,
        height: diameter,
        borderRadius: "50%",
        border: `3px dashed ${color}`,
      }}
    ></div>
  );
}
