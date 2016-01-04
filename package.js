Package.describe({
    name: 'talos:mdl',
    version: '1.0.6_1',
    summary: 'Adds Sass support to zodiase:mdl'
});

Package.onUse(function (api) {
    api.versionsFrom('1.2.1');
    api.use('fourseven:scss@3.4.1');

///>>>>ASSETS
    // images
    api.addAssets(["images/buffer.svg", "images/tick.svg", "images/tick-mask.svg"], 'client');

    // fonts
    api.addAssets(["fonts/2fcrYFNaTjcS6g4U3t-Y5UEw0lE80llgEseQY3FEmqw.woff2",
        "fonts/2fcrYFNaTjcS6g4U3t-Y5ewrjPiaoEww8AihgqWRJAo.woff",
        "fonts/2fcrYFNaTjcS6g4U3t-Y5RV6cRhDpPC5P4GCEJpqGoc.woff"], 'client');
///<<<<ASSETS

    api.addFiles([
        'material-icons.css',
        'envConfigs.js',
        'material.js',
        'export.js'
    ], 'client');
    api.export([
        "componentHandler",
        "MDl"
    ], 'client');

    // Patchers.
    api.addFiles([
        'patchers/blaze.js'
    ], 'client');

    // Sass
    //api.addFiles('img-path-fix.scss', 'client');
    api.addFiles([
        'sass/animation/_animation.scss',
        'sass/badge/_badge.scss',
        'sass/button/_button.scss',
        'sass/card/_card.scss',
        'sass/checkbox/_checkbox.scss',
        'sass/data-table/_data-table.scss',
        'sass/footer/_mega_footer.scss',
        'sass/footer/_mini_footer.scss',
        'sass/grid/_grid.scss',
        'sass/icon-toggle/_icon-toggle.scss',
        'sass/layout/_layout.scss',
        'sass/list/_list.scss',
        'sass/menu/_menu.scss',
        'sass/palette/_palette.scss',
        'sass/progress/_progress.scss',
        'sass/radio/_radio.scss',
        'sass/resets/_resets.scss',
        'sass/resets/_h5bp.scss',
        'sass/resets/_mobile.scss',
        'sass/ripple/_ripple.scss',
        'sass/shadow/_shadow.scss',
        'sass/slider/_slider.scss',
        'sass/snackbar/_snackbar.scss',
        'sass/spinner/_spinner.scss',
        'sass/switch/_switch.scss',
        'sass/tabs/_tabs.scss',
        'sass/textfield/_textfield.scss',
        'sass/tooltip/_tooltip.scss',
        'sass/typography/_typography.scss',
        'sass/_color-definitions.scss',
        'sass/_functions.scss',
        'sass/_mixins.scss',
        'sass/_variables.scss',
        'sass/material-design-lite.scss',
        'material-design-lite.scss'
    ], 'client', {isImport: true});
});