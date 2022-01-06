const createFooter = () => {
    let footer = document.querySelector("footer");
    footer.innerHTML=`
    <div class="footer-content">
            <img src="img/sarang.png" class="logo" alt="logo">
            <div class="footer-ul-container">
                <ul class="category">
                    <li class="category-title">Mujer</li>
                    <li><a href="#" class="footer-link">Remeras</a></li>
                    <li><a href="#" class="footer-link">vestidos</a></li>
                    <li><a href="#" class="footer-link">Pantalones</a></li>
                    <li><a href="#" class="footer-link">sweters</a></li>
                    <li><a href="#" class="footer-link">camperas</a></li>
                    <li><a href="#" class="footer-link">cinturones</a></li>
                    <li><a href="#" class="footer-link">relojes</a></li>
                </ul>
                <ul class="category">
                    <li class="category-title">Hombre</li>
                    <li><a href="#" class="footer-link">Remeras</a></li>
                    <li><a href="#" class="footer-link">camisas</a></li>
                    <li><a href="#" class="footer-link">Pantalones</a></li>
                    <li><a href="#" class="footer-link">sweters</a></li>
                    <li><a href="#" class="footer-link">camperas</a></li>
                    <li><a href="#" class="footer-link">cinturones</a></li>
                    <li><a href="#" class="footer-link">relojes</a></li>
                </ul>
            </div>
        </div>
        <p class="footer-title">sobre nosotros</p>
        <p class="info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum itaque sint voluptates repudiandae voluptatibus reiciendis, vel numquam veritatis harum, officia eum eligendi earum deleniti quasi quae impedit totam. Sint, est.
        Quia, eum voluptatem. Alias similique, officia fugiat rem vitae minima quos commodi accusantium eaque nam tempora neque numquam modi obcaecati tempore corporis minus sunt ipsum, ratione incidunt optio dolorem quas.
        Sapiente perferendis cum velit? Reprehenderit veritatis praesentium tenetur eius iste animi quae. Ipsa, nobis! Voluptatem obcaecati distinctio facere. Aut voluptate vitae ea. Nam, optio doloribus nemo culpa incidunt ipsam harum.</p>
        <p class="info">telefonos de contacto - 111 1111, 222 2222</p>
        <p class="info">mails de contacto - info@sarang.com.ar, envios@sarang.com.ar</p>
            <div class="footer-social-container">
                <div>
                    <a href="#" class="social-link">terminos y condiciones</a>
                    <a href="#" class="social-link">privacidad</a>
                </div>
                <div>
                    <a href="#" class="social-link"><img src="img/instagram.png" alt="instagram"></a>
                    <a href="#" class="social-link"><img src="img/facebook.png" alt="facebook"></a>
                    <a href="#" class="social-link"><img src="img/twitter.png" alt="twitter"></a>
                </div>
            </div>
            <p class="footer-credit">Creado por Lucía Soledad Tassi</p>
    `
}
createFooter();