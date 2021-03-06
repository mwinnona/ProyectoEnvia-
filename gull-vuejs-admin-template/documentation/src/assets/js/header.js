function loadHeader() {
  var headerHTML = `<div class="brand mr-md">
  <a href="#">Gull Vue!</a>
  <small>v1.0.0</small>
</div>
<button type="button" class="sidebar-toggle btn rounded-circle btn-raised btn-raised-default btn-icon"
  aria-label="Close">
  <i class="ti-menu"></i>
  <i class="ti-close"></i>
</button>
<span class="flex-grow-1"></span>
<a href="http://gull-vue.ui-lib.com/" class="btn btn-link btn-link-secondary mr-md d-none d-sm-block">Live Preview</a>
<a href="https://github.com/mh-rafi/gull-vue" class="btn btn-link btn-link-secondary mr-md d-none d-sm-block">Star on
  GitHub</a>

<a href="https://github.com/mh-rafi/gull-vue" class="btn btn-raised btn-raised-success">download</a>
`;

  $(".doc-header").html(headerHTML);

  // Collapsible sidebar
  $(".sidebar-toggle").on("click", function() {
    $(".wrapper").toggleClass("sidebar-open");
  });
}
