


export default function Button(
    { children, className, ...props }
    : React.ButtonHTMLAttributes<HTMLButtonElement>
) {
    return (
        <button
            className={`bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}