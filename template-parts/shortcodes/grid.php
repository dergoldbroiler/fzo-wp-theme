<?php if( isset ($args['headline'])): ?>
<?php endif; ?>

<?php

    $subpages = get_posts(
        array(
            'parent' => $post->ID,
            'posts_per_page' => '20',
            'order' => 'DESC',
            'orderby' => 'date',
            'post_type' => 'page'
        )
    );


?>


<div class="posts-grid p-0 w-100 mt-5 d-xl-none" id="subpages">

    <?php 
    
    foreach ($subpages as $subpage) {
       
        get_template_part('template-parts/pages/subpage','', $subpage);
    }
 
    ?>
</div>

<div class="posts-grid p-0 w-100 mt-5 d-none d-xl-grid" id="">

    <?php 
    
    foreach ($subpages as $subpage) {
       
        get_template_part('template-parts/pages/subpage','', $subpage);
    }
 
    ?>
</div>