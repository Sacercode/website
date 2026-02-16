


export default function Button(
    { children, className, ...props }
    : React.ButtonHTMLAttributes<HTMLButtonElement>
) {
    return (
        <button
            className={`bg-linear-to-br from-blue-500 to-teal-700 hover:from-blue-600 hover:to-teal-900 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}