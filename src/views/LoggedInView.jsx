
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/authSlice';

const LoggedInView = () => {
  const email = useSelector((state) => state.auth.email);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-100 to-teal-200 text-gray-800">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center space-y-4">
        <h2 className="text-2xl font-bold">Добро пожаловать</h2>
        <p className="text-lg text-gray-600">{email}</p>
        <button
          onClick={() => dispatch(logout())}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold transition"
        >
          Выйти
        </button>
      </div>
    </div>
  );
};

export default LoggedInView;
