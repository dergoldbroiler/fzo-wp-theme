

<div class="single-post bg-white">
    <?php if( has_post_thumbnail( $args->ID )): ?>
    <?php else: ?>
        <div class="w-100 imagecontainer bg-gray"></div>
    <?php endif; ?>

    <div class="single-post-content d-flex flex-column p-5">
        <h2 class="fs23 mb-3"><?php echo $args->post_title; ?></h2>
        <p><?php echo get_post_meta($args->ID,'teaser',true); ?></p>
    </div>
</div>