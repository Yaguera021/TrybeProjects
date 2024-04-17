import './styles/Header.css';
import logo from '../images/Online Store.png';
import carrinho from '../assets/shopping-cart.svg';

function Header() {
  return (
    <div className='header-container'>
      <img src={logo} alt='logo' />
      <div className='carrinho-container'>
        Meu carrinho
        <img className='carrinho' src={carrinho} alt='carrinho-logo' />
      </div>
    </div>
  );
}

export default Header;
