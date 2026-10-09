import { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [selectedCar, setSelectedCar] = useState<any>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [selectedCar]);

  const commonGallery = [
    'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  ];

  const cars = [
    { id: 1, name: 'BMW M9', type: 'Cabrio', price: '34,000', brand: 'BMW', fuel: 'Eléctrico', img: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Un descapotable eléctrico de lujo con diseño aerodinámico y un rendimiento excepcional en carretera. Su interior premium ofrece comodidad inigualable y tecnología de vanguardia para una experiencia de conducción superior.', images: ['https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', ...commonGallery] },
    { id: 2, name: 'BMW M8', type: 'Cabrio', price: '34,000', brand: 'BMW', fuel: 'Diésel', img: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Potencia diésel en un diseño agresivo. El M8 es un símbolo de estatus y velocidad. Equipado con lo último en seguridad y un sistema de infoentretenimiento de alta gama.', images: ['https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', ...commonGallery] },
    { id: 3, name: 'BMW 4', type: 'Cabrio', price: '34,000', brand: 'BMW', fuel: 'Gasolina', img: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'La serie 4 descapotable ofrece el balance perfecto entre elegancia y deportividad. Disfruta de la suave brisa con su techo plegable ultra silencioso y su motor de gasolina de alto rendimiento.', images: ['https://images.unsplash.com/photo-1556189250-72ba954cfc2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', ...commonGallery] },
    { id: 4, name: 'Seat Ibiza', type: 'Hatchback', price: '29,000', brand: 'Seat', fuel: 'Eléctrico', img: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'El clásico urbano, ahora en su versión 100% eléctrica. Ágil para la ciudad, con un diseño juvenil y conectividad total para acompañarte en tu día a día sin emisiones.', images: ['https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', ...commonGallery] },
    { id: 5, name: 'Seat Arona', type: 'SUV', price: '68,000', brand: 'Seat', fuel: 'Gasolina', img: 'https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Un SUV compacto diseñado para destacar. El Arona combina la practicidad de la ciudad con la robustez necesaria para aventuras de fin de semana, impulsado por un eficiente motor de gasolina.', images: ['https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', ...commonGallery] },
    { id: 6, name: 'Volkswagen Taigo', type: 'SUV', price: '82,000', brand: 'Volkswagen', fuel: 'Eléctrico', img: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'El futuro de la movilidad eléctrica. El Taigo es un SUV deportivo con tecnología inteligente y acabados premium. Amplio espacio interior y una autonomía sobresaliente para viajes largos.', images: ['https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', ...commonGallery] },
    { id: 7, name: 'Volkswagen T-Cross', type: 'SUV', price: '47,000', brand: 'Volkswagen', fuel: 'Diésel', img: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Versátil, amplio y económico. El T-Cross con motor diésel es ideal para familias que buscan rendimiento de combustible y seguridad de primer nivel en todos sus viajes.', images: ['https://images.unsplash.com/photo-1542282088-fe8426682b8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', ...commonGallery] },
    { id: 8, name: 'Volkswagen Passat', type: 'Sedán', price: '32,000', brand: 'Volkswagen', fuel: 'Diésel', img: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Elegancia y confort para largas distancias. El Passat es el sedán ejecutivo por excelencia, combinando acabados refinados, un habitáculo espacioso y un motor diseñado para la autopista.', images: ['https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', ...commonGallery] },
  ];

  const categories = [
    { icon: 'fa-car-side', name: 'Cabrio', count: 31 },
    { icon: 'fa-car', name: 'Coupe', count: 12 },
    { icon: 'fa-car-rear', name: 'Hatchback', count: 21 },
    { icon: 'fa-truck-pickup', name: 'Camioneta', count: 15 },
    { icon: 'fa-car-side', name: 'Sedán', count: 51 },
    { icon: 'fa-truck-monster', name: 'SUV', count: 41 },
  ];

  const filteredCars = activeCategory ? cars.filter(c => c.type === activeCategory) : cars;

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <i className="fa-solid fa-car-side"></i> Autocar
        </div>
        <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <li>Inicio</li>
          <li>Vehículos</li>
          <li>Contacto</li>
        </ul>
        <div className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </div>
      </nav>

      {!selectedCar ? (
        <>
          {/* Hero Section */}
      <section className="hero">
        <img src="/hero_car.jpg" alt="Hero background" className="hero-bg" />
        <div className="hero-content">
          <h1>La Forma Más Fácil de Comprar y Vender Vehículos</h1>
          <p>Encuentra el precio y distribuidor adecuado.</p>
          <button className="btn-learn">
            Saber Más <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <div className="hero-nav">
          <button><i className="fa-solid fa-chevron-left"></i></button>
          <button><i className="fa-solid fa-chevron-right"></i></button>
        </div>
      </section>

      {/* Search Bar */}
      <div className="search-container">
        <select className="search-field"><option>Todas las Categorías</option></select>
        <select className="search-field"><option>Marca</option></select>
        <select className="search-field"><option>Combustible</option></select>
        <select className="search-field"><option>Estado</option></select>
        <button className="btn-search">Buscar</button>
      </div>

      {/* Categories */}
      <section className="categories">
        {categories.map((cat, idx) => (
          <div 
            key={idx} 
            className={`category-card ${activeCategory === cat.name ? 'active' : ''}`}
            onClick={() => setActiveCategory(activeCategory === cat.name ? null : cat.name)}
          >
            <i className={`fa-solid ${cat.icon}`}></i>
            <h3>{cat.name}</h3>
            <p>{cat.count} anuncios</p>
          </div>
        ))}
      </section>

      {/* Cars Grid */}
      <section className="cars-grid">
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => (
          <div key={car.id} className="car-card" onClick={() => setSelectedCar(car)} style={{cursor: 'pointer'}}>
            <img src={car.img} alt={car.name} className="car-image" />
            <div className="car-info">
              <div className="car-title">
                {car.name} <i className="fa-solid fa-circle-check" style={{color: '#4caf50'}}></i>
              </div>
              <div className="car-subtitle">{car.type}</div>
              <div className="car-details">
                <span className="car-price">$ {car.price}</span>
                <div className="car-specs">
                  <span><i className="fa-solid fa-car"></i> {car.brand}</span>
                  <span><i className="fa-solid fa-gas-pump"></i> {car.fuel}</span>
                </div>
              </div>
            </div>
          </div>
        ))
        ) : (
          <div className="no-cars-msg" style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem', color: '#666' }}>
            No hay vehículos disponibles en esta categoría actualmente.
          </div>
        )}
      </section>
      
      <button className="btn-show-all">
        Ver Todos los Autos <i className="fa-solid fa-arrow-right"></i>
      </button>

      {/* Info Section */}
      <section className="info-section">
        <div className="info-visual">
          <div className="circle-bg"></div>
          <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Car presentation" className="car-render" style={{ mixBlendMode: 'multiply' }} />
          <div className="stat-badge stat-badge-1">
            <span className="stat-num">24</span>
            <span className="stat-text">Años de<br/>Experiencia</span>
          </div>
          <div className="stat-badge stat-badge-2">
            <span className="stat-num">240</span>
            <span className="stat-text">Equipo de<br/>Expertos</span>
          </div>
        </div>
        <div className="info-content">
          <h2>¿Quieres comprar o vender un vehículo?</h2>
          <p>
            Puedes poner a la venta tus vehículos registrándote en nuestro sitio web. Ya seas un distribuidor o vendas de forma personal. Vende tu vehículo de la forma más rentable. Con este sistema, que cuenta con millones de miembros, podrás comprar y vender vehículos rápidamente.
          </p>
          <div className="feature-list">
            <div className="feature-item">
              <i className="fa-solid fa-car-side feature-icon"></i>
              <div className="feature-text">
                <h4>Modelos de Vehículos</h4>
                <p>Estamos seguros de que encontrarás modelos de vehículos adecuados en nuestro sitio web.</p>
              </div>
            </div>
            <div className="feature-item">
              <i className="fa-solid fa-wrench feature-icon"></i>
              <div className="feature-text">
                <h4>Vehículos de Segunda Mano</h4>
                <p>Puedes poner a la venta tus vehículos usados añadiéndolos a nuestro sitio web.</p>
              </div>
            </div>
          </div>
          <button className="btn-know-us">
            Contáctanos <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </section>
        </>
      ) : (
        <div className="details-page-container">
          <button className="btn-back" onClick={() => setSelectedCar(null)}>
            <i className="fa-solid fa-arrow-left"></i> Volver a Vehículos
          </button>
          <div className="details-content">
            <div className="details-gallery">
              <img src={selectedCar.images[activeImageIndex]} alt={selectedCar.name} className="details-main-image" />
              <div className="details-thumbnails">
                {selectedCar.images.map((img: string, idx: number) => (
                  <img 
                    key={idx} 
                    src={img} 
                    alt={`Vista ${idx + 1}`} 
                    className={`thumbnail ${activeImageIndex === idx ? 'active' : ''}`}
                    onClick={() => setActiveImageIndex(idx)}
                  />
                ))}
              </div>
            </div>
            <div className="details-info">
              <h2>{selectedCar.name}</h2>
              <p className="details-subtitle">{selectedCar.type} &bull; {selectedCar.brand}</p>
              
              <div className="details-price">$ {selectedCar.price}</div>
              
              <p className="details-description">{selectedCar.description}</p>
              
              <div className="details-specs">
                <div className="spec-item">
                  <i className="fa-solid fa-gas-pump"></i>
                  <div>
                    <span className="spec-label">Combustible</span>
                    <span className="spec-value">{selectedCar.fuel}</span>
                  </div>
                </div>
                <div className="spec-item">
                  <i className="fa-solid fa-gears"></i>
                  <div>
                    <span className="spec-label">Transmisión</span>
                    <span className="spec-value">Automática</span>
                  </div>
                </div>
                <div className="spec-item">
                  <i className="fa-solid fa-gauge-high"></i>
                  <div>
                    <span className="spec-label">Kilometraje</span>
                    <span className="spec-value">0 km</span>
                  </div>
                </div>
                <div className="spec-item">
                  <i className="fa-regular fa-calendar-days"></i>
                  <div>
                    <span className="spec-label">Año</span>
                    <span className="spec-value">2026</span>
                  </div>
                </div>
              </div>

              <div className="details-actions">
                <button className="btn-black btn-contact-seller">
                  Cotizar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-col">
            <div className="footer-logo">
              <i className="fa-solid fa-car-side"></i> Autocar
            </div>
            <p>La forma más fácil de comprar y vender vehículos de primera clase. Encuentra tu auto ideal con nosotros hoy mismo.</p>
            <div className="social-links">
              <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#"><i className="fa-brands fa-twitter"></i></a>
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
              <a href="#"><i className="fa-brands fa-youtube"></i></a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Enlaces Rápidos</h4>
            <ul>
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Vehículos</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Soporte</h4>
            <ul>
              <li><a href="#">Preguntas Frecuentes</a></li>
              <li><a href="#">Política de Privacidad</a></li>
              <li><a href="#">Términos de Servicio</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contáctanos</h4>
            <ul className="contact-info-list">
              <li><i className="fa-solid fa-location-dot"></i> Av. Principal 123, Ciudad</li>
              <li><i className="fa-solid fa-phone"></i> +1 (234) 567 89 10</li>
              <li><i className="fa-solid fa-envelope"></i> info@autocar.com</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Autocar. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
