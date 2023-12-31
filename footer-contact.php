<?php
/**
 * The template for displaying the footer
 *
 */
?>


    <div class="container-fluid w-100 bg-lightgrey  p-0 mb-0">
        <div class="container p-0" id="contactform-container">   
            <div class="row">
                <div class="col-12">
                    <?php  echo do_shortcode('[contactform id="3"]'); ?>
                </div>
            </div>
        </div>  
       
    </div>

    <div class="container-fluid w-100  p-0 mb-0">
        <div class="container p-0" id="map-container">   
            <div class="row">
                <div class="col-12">
                    <?php  echo do_shortcode('[gmap]'); ?>
                </div>
            </div>
        </div>  
       
    </div>

<footer class="container-fluid w-100 bg-1 p-0 mb-0">
    <div class="container p-0" id="footercontact">   
        <div class="row">
            <div class="col-12">
                <?php  echo do_shortcode('[contactboxes]'); ?>
            </div>
        </div>
    </div>  
    <div class="w-100 bg-darkblue  rowmargin m60 mb-0"><br><br></div>  
</footer>



<?php wp_footer(); ?>


<script src="<?php bloginfo('stylesheet_directory'); ?>/bootstrap-5.3.0-alpha3-dist/js/bootstrap.min.js"></script>
<script src="<?php bloginfo('stylesheet_directory'); ?>/fontawesome/js/all.js"></script>
<script type="module"  src="<?php bloginfo('stylesheet_directory'); ?>/js/myjs.js"></script>
<script src="<?php bloginfo('stylesheet_directory'); ?>/js/slick/slick.js"></script>


</body>
</html>
