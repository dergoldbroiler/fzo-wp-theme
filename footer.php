<?php
/**
 * The template for displaying the footer
 *
 */
?>


<footer class="container-fluid w-100 bg-1">
<?php
    wp_nav_menu(array('menu' => 'footer', 'menu_id'=>'footermenu', 'menu_container' => false));
?>
</footer>



<?php wp_footer(); ?>


<script src="<?php bloginfo('stylesheet_directory'); ?>/bootstrap-5.3.0-alpha3-dist/js/bootstrap.min.js"></script>
<script src="<?php bloginfo('stylesheet_directory'); ?>/fontawesome/js/all.js"></script>
<script type="module"  src="<?php bloginfo('stylesheet_directory'); ?>/js/myjs.js"></script>
<script src="<?php bloginfo('stylesheet_directory'); ?>/js/slick/slick.js"></script>


</body>
</html>
