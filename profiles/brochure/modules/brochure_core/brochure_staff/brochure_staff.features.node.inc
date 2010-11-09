<?php

/**
 * Helper to implementation of hook_node_info().
 */
function _brochure_staff_node_info() {
  $items = array(
    'staff' => array(
      'name' => t('Staff'),
      'module' => 'features',
      'description' => t('Add someone to the staff member page on your site.'),
      'has_title' => '1',
      'title_label' => t('Name'),
      'has_body' => '1',
      'body_label' => t('Biography'),
      'min_word_count' => '0',
      'help' => '',
    ),
  );
  return $items;
}
