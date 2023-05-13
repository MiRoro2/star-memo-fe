interface IProps {
  diameter: string;
  color: string;
  children?: React.ReactNode;
}

export default function Circle({ diameter, color, children }: IProps) {
  return (
    <div
      style={{
        width: diameter,
        height: diameter,
        borderRadius: "50%",
        backgroundColor: color,
      }}
    >
      {children}
    </div>
  );
}
