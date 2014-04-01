Package.describe({
  summary: "Instagram API Client"
});

Npm.depends({"instagram-node-lib": "0.0.7"});

Package.on_use(function (api) {
  if(api.export) {
    api.export('InstagramWrapper');
  }
  api.add_files("main.js", "server");
});