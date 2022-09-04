import { useNavigate } from 'react-router-dom';
import s from './Button.module.scss';

const Button = () => {
  const navigate = useNavigate();

  return (
    <button
      className={ s.btn }
      type="button"
      onClick={ () => {
        navigate(-1, { replase: true });
      } }
    >
      &#11160; Go back
    </button>
  );
};

export default Button;
