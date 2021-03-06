// $Id: vertical_tabs.node_form.js,v 1.1.2.11 2009/12/04 05:17:42 davereid Exp $

Drupal.verticalTabs = Drupal.verticalTabs || {};

Drupal.verticalTabs.book = function() {
  var text = $('#edit-book-bid option[selected]').text();
  if (text == Drupal.t('<none>')) {
    return Drupal.t('Not in book');
  }
  else if (text == Drupal.t('<create a new book>')) {
    return Drupal.t('New book');
  }
  return text;
}

Drupal.verticalTabs.revision_information = function() {
  if ($('#edit-revision').length) {
    if ($('#edit-revision').attr('checked')) {
      return Drupal.t('New revision');
    }
    else {
      return Drupal.t('No revision');
    }
  }
  else {
    return '';
  }
}

Drupal.verticalTabs.author = function() {
  var author = $('#edit-name').val() || Drupal.t('Anonymous');
  var date = $('#edit-date').val();
  if (date) {
    return Drupal.t('By @name on @date', { '@name': author, '@date': date });
  }
  else {
    return Drupal.t('By @name', { '@name': author });
  }
}

Drupal.verticalTabs.options = function() {
  var vals = [];
  if ($('#edit-status').attr('checked')) {
    vals.push(Drupal.t('Published'));
  }
  else {
    vals.push(Drupal.t('Not published'));
  }
  if ($('#edit-promote').attr('checked')) {
    vals.push(Drupal.t('Promoted to front page'));
  }
  if ($('#edit-sticky').attr('checked')) {
    vals.push(Drupal.t('Sticky on top of lists'));
  }
  if (vals.join(', ') == '') {
    return Drupal.t('None');
  }
  return vals.join(', ');
}

Drupal.verticalTabs.menu = function() {
  if ($('#edit-menu-link-title').val()) {
    return $('#edit-menu-link-title').val();
  }
  else {
    return Drupal.t('Not in menu');
  }
}

Drupal.verticalTabs.comment_settings = function() {
  return $('.vertical-tabs-comment_settings input:checked').parent().text();
}

Drupal.verticalTabs.attachments = function() {
  var size = $('#upload-attachments tbody tr').size();
  if (size) {
    return Drupal.formatPlural(size, '1 attachment', '@count attachments');
  }
  else {
    return Drupal.t('No attachments');
  }
}

Drupal.verticalTabs.path = function() {
  var path = $('#edit-path').val();
  var automatic = $('#edit-pathauto-perform-alias').attr('checked');

  if (automatic) {
    return Drupal.t('Automatic alias');
  }
  if (path) {
    return Drupal.t('Alias: @alias', { '@alias': path });
  }
  else {
    return Drupal.t('No alias');
  }
}

Drupal.verticalTabs.flag = function() {
  var flags = [];
  $('fieldset.vertical-tabs-flag input.form-checkbox').each(function() {
    if (this.checked) {
      flags.push(this.name.replace(/flag\[([a-z0-9]+)\]/, '$1'));
    }
  });

  if (flags.length) {
    return flags.join(', ');
  }
  else {
    return Drupal.t('No flags');
  }
}


Drupal.verticalTabs.taxonomy = function() {
  var terms = {};
  var termCount = 0;
  $('fieldset.vertical-tabs-taxonomy').find('select, input.form-text').each(function() {
    if (this.value) {
      var vocabulary = $(this).siblings('label').html();
      terms[vocabulary] = terms[vocabulary] || [];
      if ($(this).is('input.form-text')) {
        terms[vocabulary].push(this.value);
        termCount++;
      }
      else if ($(this).is('select')) {
        $(this).find('option[selected]').each(function() {
          terms[vocabulary].push($(this).text());
          termCount++;
        });
      }
    }
  });

  if (termCount) {
    var output = '';
    $.each(terms, function(vocab, vocab_terms) {
      if (output) {
        output += '<br />';
      }
      output += vocab;
      output += vocab_terms.join(', ');
    });
    return output;
  }
  else {
    return Drupal.t('No terms');
  }
}
