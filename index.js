module.exports = function(fileInfo, api) {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  if (fileInfo.path.endsWith("react-dev-utils/webpackHotDevClient.js")) {
    root.find(j.Literal).forEach(path => {
      if (path.value.value === 'ws') {
        j(path.value.value = 'wss');
      }
    });

    return root.toSource();
  }

  return null;
};
