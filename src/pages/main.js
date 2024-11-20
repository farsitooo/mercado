import React from 'react';
import './main.css';

const Main = () => {
  const products = [
    { id: 1, name: 'Auriculares Inalámbricos', price: 50, image: 'https://via.placeholder.com/300' },
    { id: 2, name: 'Smartwatch Familiar', price: 120, image: 'https://via.placeholder.com/300' },
    { id: 3, name: 'Cámara HD', price: 300, image: 'https://via.placeholder.com/300' },
    { id: 4, name: 'Lámpara LED Recargable', price: 30, image: 'https://via.placeholder.com/300' },
    { id: 5, name: 'Altavoz Bluetooth', price: 70, image: 'https://via.placeholder.com/300' },
    { id: 6, name: 'Teclado Mecánico', price: 90, image: 'https://via.placeholder.com/300' },
  ];

  return (
    <div className="app">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">BlueShop</div>
        <div className="search-container">
          <input type="text" placeholder="Busca productos para toda la familia..." className="search-bar" />
        </div>
        <div className="cart-icon">🛒</div>
      </header>

      {/* Welcome Banner */}
      <section className="welcome-banner">
        <h1 className="title">Bienvenido a BlueShop</h1>
        <p className="sub-title">Productos pensados para toda tu familia</p>
        <button className="shop-now">Explorar ahora</button>
      </section>

      {/* Promo Banner */}
      <section className="promo-banner">
        <h2>¡Promoción de Navidad! Hasta 50% OFF</h2>
        <p>Compra ahora y recibe antes de Navidad. Aplican términos y condiciones.</p>
      </section>

      {/* Slidebar de Productos */}
      <h2 className="section-title">Productos Destacados</h2>
      <div className="product-slidebar">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">${product.price}</p>
              <button className="add-to-cart">Agregar al carrito</button>
            </div>
          </div>
        ))}
      </div>

      {/* Benefits Section */}
      <section className="benefits">
        <h2>¿Por qué elegir BlueShop?</h2>
        <ul>
          <li>
            <span className="icon">🚚</span>
            <div className="text">Envío gratis en compras mayores a $100</div>
          </li>
          <li>
            <span className="icon">💳</span>
            <div className="text">Pagos seguros con tarjeta o transferencia</div>
          </li>
          <li>
            <span className="icon">🔄</span>
            <div className="text">Devoluciones fáciles y rápidas</div>
          </li>
          <li>
            <span className="icon">📦</span>
            <div className="text">Entrega rápida en 24-72 horas</div>
          </li>
          <li>
            <span className="icon">🌟</span>
            <div className="text">Garantía de satisfacción por 30 días</div>
          </li>
          <li>
            <span className="icon">🕑</span>
            <div className="text">Atención al cliente 24/7</div>
          </li>
        </ul>
      </section>

      {/* Contact Section */}
      <footer className="contact-section">
        <h2>Contacto</h2>
        <p>¿Tienes dudas o consultas? Escríbenos:</p>
        <ul>
          <li>📧 Email: soporte@blueshop.com</li>
          <li>📞 Teléfono: +1 800 123 456</li>
          <li>📍 Dirección: Av. Principal 123, Ensenada</li>
        </ul>
        <p>&copy; 2024 BlueShop. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Main;
