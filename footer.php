<?php
/**
 * The template for displaying the footer
 *
 */
?>

<?php if(is_page('fahrzeuge')) : ?>
    <div class="container-fluid w-100 bg-lightgrey  p-0 mb-0">
        <div class="container p-0" id="creditform">   
            <div class="row">
                <div class="col-12">
                    <?php  echo do_shortcode('[creditform id="3"]'); ?>
                </div>
            </div>
        </div>  
       
    </div>
<?php endif; ?>



<footer class="container-fluid w-100 bg-1 p-0 mb-0">
    <div class="container p-3 p-lg-0" id="footercontact">   
        <div class="row">
            <div class="col-12">
                <?php  echo do_shortcode('[contactboxes type="footer"]'); ?>
            </div>
        </div>
    </div>  
    <div class="w-100 bg-darkblue d-flex flex-column-reverse flex-lg-column rowmargin m60 mb-0">


        <?php get_template_part('template-parts/footer/firstline'); ?>
        <?php get_template_part('template-parts/footer/secondline'); ?>
        <?php get_template_part('template-parts/footer/thirdline'); ?>
    </div>  
</footer>


<?php get_template_part('template-parts/modalcontent'); ?>
<?php wp_footer(); ?>


<script src="<?php bloginfo('stylesheet_directory'); ?>/bootstrap-5.3.0-alpha3-dist/js/bootstrap.min.js"></script>
<script src="<?php bloginfo('stylesheet_directory'); ?>/fontawesome/js/all.js"></script>
<script type="module"  src="<?php bloginfo('stylesheet_directory'); ?>/js/myjs.js"></script>
<script src="<?php bloginfo('stylesheet_directory'); ?>/js/slick/slick.js"></script>
<script src="<?php bloginfo('stylesheet_directory'); ?>/js/lottie.js"></script>

</body>
</html>
