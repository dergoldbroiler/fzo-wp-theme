<?php
/**
 * The template for displaying the footer
 *
 */
?>

<?php if(is_page('fahrzeuge')): ?>
    <!-- Kreditformular -->
    <div class="container-fluid w-100 bg-blue my-5">
        <div class="container p-5" id="credit">   
            <div class="row">
                <div class="col-12">
                <?php echo FrmFormsController::get_form_shortcode( array( 'id' => 3 ) ); ?>
                </div>
            </div>
        </div>    
    </div>
<?php endif; ?>

<footer class="container-fluid w-100 bg-1">
    <div class="container p-0" id="footercontact">   
        <div class="row">
            <div class="col-12">
                <?php  echo do_shortcode('[contactboxes]'); ?>
            </div>
        </div>
    </div>    
</footer>



<?php wp_footer(); ?>


<script src="<?php bloginfo('stylesheet_directory'); ?>/bootstrap-5.3.0-alpha3-dist/js/bootstrap.min.js"></script>
<script src="<?php bloginfo('stylesheet_directory'); ?>/fontawesome/js/all.js"></script>
<script type="module"  src="<?php bloginfo('stylesheet_directory'); ?>/js/myjs.js"></script>
<script src="<?php bloginfo('stylesheet_directory'); ?>/js/slick/slick.js"></script>


</body>
</html>
