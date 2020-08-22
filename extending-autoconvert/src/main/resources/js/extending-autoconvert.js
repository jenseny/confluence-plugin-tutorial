define('jenseny/autoconvert/dacconverter', ['tinymce'], function (tinymce) {
    "use strict";
    console.log(1)
    function DacConverter() {
        function pasteHandler(uri, node, done) {
            var directoryParts = uri.directory.split('/'),
                pageName;
            console.log("directoryParts:"+directoryParts)
            console.log("uri.host:"+uri.host)
            console.log("directoryParts.length:"+directoryParts.length)
            console.log("directoryParts[4]:"+directoryParts[4])
            console.log("directoryParts[1]:"+directoryParts[1])
            console.log("uri.anchor:"+uri.anchor)
            if (uri.host === "developer.atlassian.com" &&
                directoryParts.length >= 4 && directoryParts[4] === "" &&
                (directoryParts[1] === "server" || directoryParts[1] === "cloud") &&
                uri.anchor === "" &&
                node.text() === uri.source) {

                pageName = decodeURIComponent(directoryParts[3]);
                pageName = pageName.charAt(0).toUpperCase() + pageName.slice(1).replace(/-/g, " ");

                node.text(pageName);
                done(node);
            } else {
                done();
            }
            tinymce.plugins.Autoconvert.autoConvert.addHandler(pasteHandler);

        }
    }

    return DacConverter;
});

require('confluence/module-exporter').safeRequire('jenseny/autoconvert/dacconverter', function (DacConverter) {
    require('ajs').bind("init.rte", DacConverter);
});