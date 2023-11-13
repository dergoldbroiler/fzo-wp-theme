<?php get_header(); ?>

<div class="container p-0" id="main">

    <div class="row">
        <div class="col-12">
            <?php get_template_part('template-parts/posts/postgrid'); ?>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <?php the_content(); ?>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <?php get_template_part('template-parts/posts/about'); ?>
        </div>
    </div>

    <div class="row">
        <div class="col-12">
            <?php get_template_part('template-parts/shortcodes/servicebar'); ?>
        </div>
    </div>

    

</div>


<?php get_footer(); ?>