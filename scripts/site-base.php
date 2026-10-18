<?php

declare(strict_types=1);

// The path the site is published under, from docara.json's base_url: "/" for a
// site at the root (ui-doc.test), "/ui-doc/" for the GitHub Pages project site.
// The Pages workflow sets base_url in its own checkout only; the committed
// docara.json keeps "/". The scripts that write site paths into the build
// (live demonstrations, the AI export) put this in front of them, as Docara
// does for the pages.
function ui_doc_site_base(string $root): string
{
    $site = json_decode((string) file_get_contents($root . '/docara.json'), true, 512, JSON_THROW_ON_ERROR);
    $base = $site['base_url'] ?? '/';
    if (! is_string($base) || preg_match('#\A/(?:[A-Za-z0-9._~-]+/)*\z#D', $base) !== 1) {
        throw new RuntimeException('docara.json base_url must be a path such as "/" or "/ui-doc/"');
    }

    return $base;
}
