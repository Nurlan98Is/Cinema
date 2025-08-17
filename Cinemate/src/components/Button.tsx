interface BtnType {
  title: string;
  style: object;
  onClick?: () => {};
}

export const Button = ({ title, style, onClick }: BtnType) => {
  return (
    <button style={style} onClick={() => {onClick}}>
      {title}
    </button>
  );
};
