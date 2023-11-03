<header class="container-fluid w-100 p-0" id="header">
  

    <div class="container bg-white py-4" id="header-inner-container">
        <div class="row">

            <div class="col-6 col-xl-3">
                <a href="/">
                    <img  src="<?php bloginfo('stylesheet_directory'); ?>/images/FZ_Olpe_Logo.webp" alt="Autohaus Löhr, Fahrzeugzentrum Olpe" class="img-fluid" id="top-logo"/>
                </a>
            </div>
            <div class="col-6 offset-xl-3 col-xl-6">
                <?php get_template_part('template-parts/header/contact','',array()) ?>
            </div>
        </div>
    </div>    
    
    <div class="w-100" id="menucontainer"></div>

</header>