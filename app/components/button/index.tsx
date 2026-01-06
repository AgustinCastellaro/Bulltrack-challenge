import { ReactNode } from "react";

interface ButtonProps {
  type?: "primary" | "secondary";
  text?: string;
  icon?: ReactNode;
  onChange: () => void;
  className?: string;
  color?: string;
  position?: "left" | "right";
}

export default function Button({ 
  type = "primary",
  text, 
  icon, 
  onChange, 
  className = "",
  color = "var(--color-green-100)",
  position = "left"
}: ButtonProps) {

  const style = color ? {
        color,
        borderColor: color,
        backgroundColor: `color-mix(in srgb, ${color} 10%, transparent)`
    } : {};

  return (
    <>
      {
        type === "primary"
        ?
          <button
              className={`flex items-center gap-2 p-2 px-2 bg-gray-400 text-white text-xs font-semibold rounded-xl hover:bg-gray-700 transition-colors cursor-pointer ${text ? "px-5" : "px-2"} ${className}`}
              onClick={onChange}
          >
            {
              position === "left" ?
                <>
                  {text && <span>{text}</span>}
                  {icon && <span className="flex items-center">{icon}</span>}
                </>
              : 
                <>
                  {icon && <span className="flex items-center">{icon}</span>}
                  {text && <span>{text}</span>}
                </>
            }
          </button>
        :
          <button
              className={`flex items-center gap-2 p-2 border-[1px] text-sm font-semibold rounded-xl transition-colors cursor-pointer ${text ? "px-5" : "px-2"} ${className}`}
              style={style}
              onClick={onChange}
          >
            {
              position === "left" ?
                <>
                  {text && <span>{text}</span>}
                  {icon && <span className="flex items-center">{icon}</span>}
                </>
              : 
                <>
                  {icon && <span className="flex items-center">{icon}</span>}
                  {text && <span>{text}</span>}
                </>
            }
          </button>
      }
    </>
  );
}