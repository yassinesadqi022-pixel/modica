import colors from '../../config/colors';

export default function Button({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '',
  disabled = false,
  ...props 
}) {
  const styles = {
    primary: {
      background: `linear-gradient(135deg, ${colors.orangeRoyal}, ${colors.orangeLight})`,
      boxShadow: `0 10px 30px rgba(255, 107, 53, 0.3)`,
      color: 'white'
    },
    secondary: {
      border: `2px solid ${colors.orangeRoyal}`,
      backgroundColor: 'transparent',
      color: 'white'
    },
    outline: {
      border: '2px solid #333',
      backgroundColor: 'transparent',
      color: '#999'
    }
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 ${className}`}
      style={styles[variant]}
      {...props}
    >
      {children}
    </button>
  );
}