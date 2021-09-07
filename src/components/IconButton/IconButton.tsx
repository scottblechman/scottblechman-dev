type IconButtonProps = {
  name: string,
  onClick: () => void
  disabled?: boolean
};

function IconButton({name, onClick, disabled}: IconButtonProps) {
  const handleClick = () => {
    if(!disabled) {
      onClick();
    }
  };

  return (
    <div onClick={handleClick} className={disabled ? "text-gray-400" : ""} role="button">
      <ion-icon name={name} size="large" />
    </div>
  );
}

export default IconButton;