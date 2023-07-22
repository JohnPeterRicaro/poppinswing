const Button = ({
  style,
  children,
  name,
  data,
  className,
  directory,
  eventHandler,
}) => {
  return (
    <button name={name} style={style} className={className}
    onClick={eventHandler}>
        {children}
    </button>
  );
};

export default Button;
