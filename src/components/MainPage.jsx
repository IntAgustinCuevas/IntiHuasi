import React from "react";
import "../styles/mainpage.css";

const MainPage = () => {
  const currentYear = new Date().getFullYear();

  return (
    <main className="mainpage mainpage-movil">
      <section className="section-products products-movil">
        <header className="section-header">
          <div className="header-div header-div-movil">
            <img src="/foto-intihuasi.jpeg" className="img-header" />
          </div>
        </header>

        <div className="products-page">
          <header className="products-header">
            <h2>....INTI HUASI....</h2>
          </header>

          <div className="products-grid">
            <div className="product-item">
              <div className="item-img">
                <img src="/product_1.jpg" className="h-full w-full"></img>
              </div>
              <div className="item-description">
                <a href="#" className="h-full w-full">
                  <div className="item-name">Remera IntiHuasiClicka</div>
                  <div className="item-price">$150.000,00</div>
                  <button className="item-button">Comprar</button>
                </a>
              </div>
            </div>
            <div className="product-item">
              <div className="item-img">
                <img src="/product_2.jpg" className="h-full w-full"></img>
              </div>
              <div className="item-description">
                <a href="#" className="h-full w-full">
                  <div className="item-name">Remera IntiHuasiClicka</div>
                  <div className="item-price">$150.000,00</div>
                  <button className="item-button">Comprar</button>
                </a>
              </div>
            </div>
            <div className="product-item">
              <div className="item-img">
                <img src="/product_3.jpg" className="h-full w-full"></img>
              </div>
              <div className="item-description">
                <a href="#" className="h-full w-full">
                  <div className="item-name">Remera IntiHuasiClicka</div>
                  <div className="item-price">$150.000,00</div>
                  <button className="item-button">Comprar</button>
                </a>
              </div>
            </div>
            <div className="product-item">
              <div className="item-img">
                <img src="/product_4.jpg" className="h-full w-full"></img>
              </div>
              <div className="item-description">
                <a href="#" className="h-full w-full">
                  <div className="item-name">Remera IntiHuasiClicka</div>
                  <div className="item-price">$150.000,00</div>
                  <button className="item-button">Comprar</button>
                </a>
              </div>
            </div>
          </div>

          <div className="products-header">
            <h2>....PRODUCTOS....</h2>
          </div>

          <div className="products-grid">
            <div className="product-item">
              <div className="item-img">
                <img src="/product_1.jpg" className="h-full w-full"></img>
              </div>
              <div className="item-description">
                <a href="#" className="h-full w-full">
                  <div className="item-name">Remera IntiHuasiClicka</div>
                  <div className="item-price">$150.000,00</div>
                  <button className="item-button">Comprar</button>
                </a>
              </div>
            </div>
            <div className="product-item">
              <div className="item-img">
                <img src="/product_2.jpg" className="h-full w-full"></img>
              </div>
              <div className="item-description">
                <a href="#" className="h-full w-full">
                  <div className="item-name">Remera IntiHuasiClicka</div>
                  <div className="item-price">$150.000,00</div>
                  <button className="item-button">Comprar</button>
                </a>
              </div>
            </div>
            <div className="product-item">
              <div className="item-img">
                <img src="/product_3.jpg" className="h-full w-full"></img>
              </div>
              <div className="item-description">
                <a href="#" className="h-full w-full">
                  <div className="item-name">Remera IntiHuasiClicka</div>
                  <div className="item-price">$150.000,00</div>
                  <button className="item-button">Comprar</button>
                </a>
              </div>
            </div>
            <div className="product-item">
              <div className="item-img">
                <img src="/product_4.jpg" className="h-full w-full"></img>
              </div>
              <div className="item-description">
                <a href="#" className="h-full w-full">
                  <div className="item-name">Remera IntiHuasiClicka</div>
                  <div className="item-price">$150.000,00</div>
                  <button className="item-button">Comprar</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="products-header">
        <h2>....PRODUCTOS....</h2>
      </div>

      <footer className="footer-main">
        <div className="footer-contact"></div>
        <section className="footer-section-legal">
          <div className="footer-copyright">
            &copy; {currentYear} IntiHuasi. Todos los derechos resevados.
          </div>
          <div className="footer-consumer">
            Defensa al consumidor. Para reclamos <a href="">ingresa aca</a> /{" "}
            {""}
            <a href="">Boton de arrepentimiento</a>
          </div>
        </section>
      </footer>
    </main>
  );
};

export default MainPage;

/* RECORDATORIO:
      Agregar mas margen al grid de productos
      aumentar la altura (y el ancho de ser necesario) de las imagenes de productos
      aumentar el tamaño de los product-headers, determinar el color final y agregarle margin-bottom
      
*/
