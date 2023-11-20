<?php if( isset ($args['headline'])): ?>
<?php endif; ?>

<?php
    $subpages = get_pages(
        array(
            'parent' => $post->ID,
            'posts_per_page' => '-1'
        )
    );


?>


<div class="posts-grid p-0 w-100">

    <?php 
    
    foreach ($subpages as $subpage) {
       
        get_template_part('template-parts/pages/subpage','', $subpage);
    }
 
    ?>
</div>