import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/authSlice';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      dispatch(login(email));
    } else {
      setError('❌ Неверный формат email');
    }
  };

  return (
    <div className="flex h-screen justify-center items-center bg-gradient-to-br from-blue-100 to-purple-200">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md space-y-5"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Вход
        </h2>
        <input
          type="email"
          placeholder="Введите email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (!validateEmail(e.target.value)) {
              setError('❌ Неверный формат email');
            } else {
              setError('');
            }
          }}
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {error && (
          <p className="text-red-600 text-sm text-center">{error}</p>
        )}
        <button
          type="submit"
          disabled={!validateEmail(email)}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition disabled:bg-gray-300"
        >
          Войти
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
