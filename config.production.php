<?php

/**
 * A publishable build must be reproducible from the current source tree.
 *
 * The normal local configuration keeps Docara's cache enabled for authoring,
 * but that cache can retain obsolete menu trees after an IA change. Production
 * validation therefore always renders from a clean cache.
 */
return [
    'cache' => false,
];
