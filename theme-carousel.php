<?php
/**
 * Plugin Name:       Theme Carousel
 * Description:       This is a slider/carousel block for WordPress.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           1.0.2
 * Author:            Kyle Laverty
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       theme-carousel
 *
 * @package           create-block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Register theme-carousel block
 */
function register_theme_carousel_block() {
    // Make sure to point to the correct build path for the block.json file
    register_block_type( __DIR__ . '/build/block.json' );
}
add_action( 'init', 'register_theme_carousel_block' );