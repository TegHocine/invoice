type Props = {
  title: string;
  Icon: () => JSX.Element;
  onClick: () => void;
};

const Button: React.FC<Props> = ({ title, Icon, onClick }) => {
  return (
    <button
      type="button"
      className="mb-2 flex w-full max-w-sm items-center justify-center gap-2 rounded border border-gray-700 bg-gray-900 px-6 py-2 text-lg font-medium  capitalize leading-normal text-gray-100 transition duration-150 ease-in-out hover:bg-gray-800"
      onClick={onClick}
    >
      {Icon && (
        <span className="h-5 w-5">
          <Icon />
        </span>
      )}

      <span>{title}</span>
    </button>
  );
};

export default Button;
