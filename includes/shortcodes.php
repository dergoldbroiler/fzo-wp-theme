<?php 
function getServiceBar($atts){
    ob_start();
    $content .= get_template_part('template-parts/shortcodes/servicebar');
    $content .= ob_get_clean(); 
    return $content;  
}

add_shortcode( 'servicebar', 'getServiceBar' );


function getPartnerBanner($atts){
    ob_start();
    $content .= get_template_part('template-parts/shortcodes/partnerbanner','',$atts);
    $content .= ob_get_clean(); 
    return $content;  
}

add_shortcode( 'partnerbanner', 'getPartnerBanner' );


function getPostTypeGrid($atts){
    ob_start();
    $content .= get_template_part('template-parts/shortcodes/grid','',$atts);
    $content .= ob_get_clean(); 
    return $content;  
}

add_shortcode( 'grid', 'getPostTypeGrid' );