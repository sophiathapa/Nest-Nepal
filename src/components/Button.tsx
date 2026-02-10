const styles = {
  green: {
    button: "bg-green border-green-foreground",
    text: "text-green-foreground",
  },
  pink: {
    button: "bg-pink border-pink-foreground",
    text: "text-pink-foreground",
  },
};

const Button = ({ color = "green", placeholder = "Contact Sales" }) => {
  return (
    <button
      className={`rounded-xl border p-0 ${styles[color].button}`}
    >
      <div
        className={`flex items-center gap-2 h-[32px] px-3 ${styles[color].text}`}
      >
        <img
          src={`${color}.svg`}
          className="w-[26px] h-[26px]"
          alt={`${color} icon`}
        />
        {placeholder}
      </div>
    </button>
  );
};

export default Button;
