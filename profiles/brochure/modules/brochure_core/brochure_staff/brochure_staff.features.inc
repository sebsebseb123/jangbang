<?php

/**
 * Implementation of hook_content_default_fields().
 */
function brochure_staff_content_default_fields() {
  module_load_include('inc', 'brochure_staff', 'brochure_staff.defaults');
  $args = func_get_args();
  return call_user_func_array('_brochure_staff_content_default_fields', $args);
}

/**
 * Implementation of hook_ctools_plugin_api().
 */
function brochure_staff_ctools_plugin_api() {
  module_load_include('inc', 'brochure_staff', 'brochure_staff.defaults');
  $args = func_get_args();
  return call_user_func_array('_brochure_staff_ctools_plugin_api', $args);
}

/**
 * Implementation of hook_imagecache_default_presets().
 */
function brochure_staff_imagecache_default_presets() {
  module_load_include('inc', 'brochure_staff', 'brochure_staff.defaults');
  $args = func_get_args();
  return call_user_func_array('_brochure_staff_imagecache_default_presets', $args);
}

/**
 * Implementation of hook_node_info().
 */
function brochure_staff_node_info() {
  module_load_include('inc', 'brochure_staff', 'brochure_staff.features.node');
  $args = func_get_args();
  return call_user_func_array('_brochure_staff_node_info', $args);
}

/**
 * Implementation of hook_strongarm().
 */
function brochure_staff_strongarm() {
  module_load_include('inc', 'brochure_staff', 'brochure_staff.defaults');
  $args = func_get_args();
  return call_user_func_array('_brochure_staff_strongarm', $args);
}

/**
 * Implementation of hook_views_default_views().
 */
function brochure_staff_views_default_views() {
  module_load_include('inc', 'brochure_staff', 'brochure_staff.features.views');
  $args = func_get_args();
  return call_user_func_array('_brochure_staff_views_default_views', $args);
}
