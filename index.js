module.exports = function(fileInfo, api) {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  root.find(j.MemberExpression).forEach(path => {
    if (path.value.property.name === "protocol") {
      j(path).replaceWith("'wss'");
    }
  });

  return root.toSource();
};
