@php
    $locale = $page->locale();
    $distPath = rtrim($page->frameworkBaseUrl ?? '/framework/ui/distr/', '/') . '/';
    $smartPath = rtrim($page->frameworkSmartBaseUrl ?? '/framework/ui-smart', '/');
@endphp
<script>

    window.SF_BOOT_CONFIG = {
        icons: {
            accumulate: true,
        },
    };
    window.sfPath = "{{$distPath}}";
    window.sfSmartPath = "{{$smartPath}}";
    window.currentLocale = `{{$locale}}`
</script>
<script src="{{$distPath}}core/js/core.js"></script>
<link rel="preload" as="style" href="{{$distPath}}core/css/core.css">
<link rel="stylesheet" href="{{$distPath}}core/css/core.css"/>
