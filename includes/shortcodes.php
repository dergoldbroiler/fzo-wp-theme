<?php 
function getServiceBar($atts){
    ob_start();
    $content .= get_template_part('template-parts/shortcodes/servicebar');
    $content .= ob_get_clean(); 
    return $content;  
}

add_shortcode( 'servicebar', 'getServiceBar' );