; Drupal Brochure site make file 

; Set core version
core = 6.14
projects[] = drupal
; CCK and related
projects[cck][version] = 2.6
projects[filefield][version] = 3.2
projects[imagefield][version] = 3.2
projects[imagecache][version] = 2.0-beta10
projects[imageapi][version] = 1.6

; Views and related
projects[views][version] = 2.8
projects[views_bulk_operations][version] = 1.8

; Date and related 
projects[date][version] = 2.4

; Features and related
projects[strongarm][version] = 2.0-beta1
projects[features][version] = 1.0-beta4
projects[context][version] = 2.0-beta7

; Miscellaneous
projects[admin][version] = 1.0-beta3
projects[ctools][version] = 1.2
projects[pathauto][version] = 1.2
projects[token][version] = 1.12
projects[vertical_tabs][version] = 1.0-beta6
projects[auto_nodetitle][version] = 1.2
projects[diff][version] = 2.1-alpha3
projects[advanced_help][version] = 1.2
projects[custom_breadcrumbs][version] = 1.5

; Don't forget install profile specific modules
projects[brochure_core][version] = 1.0-alpha2

; Download latest WYSIWYG code via CVS. The 2.0 release is old and does not support CK Editor.
projects[wysiwyg][download][type] = "cvs"
projects[wysiwyg][download][module] = "contributions/modules/wysiwyg"
projects[wysiwyg][download][revision] = "DRUPAL-6--2"

; Libraries
libraries[ckeditor][download][type] = "get"
libraries[ckeditor][download][url] = "http://download.cksource.com/CKEditor/CKEditor/CKEditor%203.0.1/ckeditor_3.0.1.tar.gz"
libraries[ckeditor][directory_name] = "ckeditor"