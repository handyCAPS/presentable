<?php
/**
 * Plugin Name:       Presentable
 * Plugin URI:        https://github.com/handyCAPS/presentable
 * Description:       Presentable let's user sign in and out
 * Version:           0.1.0
 * Author:            Tim Doppenberg
 * Author URI:        http://timdoppenberg.nl
 * Text Domain:       presentable
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Domain Path:       /l10n
 * GitHub Plugin URI: https://github.com/handyCAPS/presentable
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ){
    die;
}


/**
* Registers a new post type
* @uses $wp_post_types Inserts new post type object into the list
*
* @param string  Post type key, must not exceed 20 characters
* @param array|string  See optional args description above.
* @return object|WP_Error the registered post type object, or an error object
*/
function add_presentable_post_type() {

    $labels = array(
        'name'                => __( 'Presentables', 'presentable-js' ),
        'singular_name'       => __( 'Presentable', 'presentable-js' ),
        'add_new'             => _x( 'Add New presentable', 'presentable-js', 'presentable-js' ),
        'add_new_item'        => __( 'Add New presentable', 'presentable-js' ),
        'edit_item'           => __( 'Edit presentable', 'presentable-js' ),
        'new_item'            => __( 'New presentable', 'presentable-js' ),
        'view_item'           => __( 'View presentable', 'presentable-js' ),
        'search_items'        => __( 'Search Presentables', 'presentable-js' ),
        'not_found'           => __( 'No Presentables found', 'presentable-js' ),
        'not_found_in_trash'  => __( 'No Presentables found in Trash', 'presentable-js' ),
        'parent_item_colon'   => __( 'Parent presentable:', 'presentable-js' ),
        'menu_name'           => __( 'Presentables', 'presentable-js' ),
    );

    $args = array(
        'labels'              => $labels,
        'hierarchical'        => false,
        'description'         => 'description',
        'taxonomies'          => array(),
        'public'              => true,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'show_in_admin_bar'   => true,
        'menu_position'       => null,
        'menu_icon'           => null,
        'show_in_nav_menus'   => true,
        'publicly_queryable'  => true,
        'exclude_from_search' => false,
        'has_archive'         => true,
        'query_var'           => true,
        'can_export'          => true,
        'rewrite'             => true,
        'capability_type'     => 'post',
        'supports'            => array(
            'title','custom-fields', 'revisions', 'page-attributes', 'post-formats'
            )
    );

    register_post_type( 'presentable', $args );
}

add_action( 'init', 'add_presentable_post_type' );


// Liveload for dev

function livereload_script()
{
    wp_register_script('livereload', '//localhost:9091', array(), 1, true);
    wp_enqueue_script('livereload' );
}

add_action('wp_enqueue_scripts', 'livereload_script');