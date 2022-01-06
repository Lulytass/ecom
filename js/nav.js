const navbar = () => {
  let nav = document.querySelector(".navbar");
  nav.innerHTML =
  `
  <div class="nav">
            <img src="img/sarang.png" class="brand-logo" alt="logo">
            <div class=" nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product">
                    <button class="search-btn">search</button>
                </div>
                <a href="#"><img src="img/canasto.png" alt="canasto"></a>
                <a href="#"><img src="img/usuario.png" alt="usuario"></a>
            </div>
        </div> 
        <ul class="links-container">
            <li class="link-item"><a class="link" href="#">Inicio</a></li>
            <li class="link-item"><a class="link" href="#">Hombre</a></li>
            <li class="link-item"><a class="link" href="#">Mujer</a></li>
            <li class="link-item"><a class="link" href="#">Niños</a></li>
        </ul>
  ` 
};
navbar();
