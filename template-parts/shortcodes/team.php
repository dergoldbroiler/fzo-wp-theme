<?php if( isset ($args['headline'])): ?>
<?php endif; ?>

<?php

    $subpages = get_posts(
        array(
            'post_type' => 'mitarbeiter',
            'posts_per_page' => '-1'
        )
    );


?>


<div class="posts-grid grid-four p-0 w-100 mt-5">

    <?php 
    
    foreach ($subpages as $subpage) {
        
        get_template_part('template-parts/posts/member','', $subpage);
    }
 
    ?>
</div>