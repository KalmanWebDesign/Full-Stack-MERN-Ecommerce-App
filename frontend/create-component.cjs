const fs = require('fs');
const path = require('path');

const componentName = process.argv[2];

if (!componentName) {
  console.error('Please provide a component name.');
  process.exit(1);
}

const componentDir = path.join(__dirname, 'src', 'components', componentName);

if (!fs.existsSync(componentDir)) {
  fs.mkdirSync(componentDir, { recursive: true });
}

const componentContent = `import React from 'react';
import './${componentName}.css';

const ${componentName} = () => {
  return (
    <div>
      <h1>${componentName}</h1>
    </div>
  );
};

export default ${componentName};
`;

fs.writeFileSync(path.join(componentDir, `${componentName}.jsx`), componentContent);
fs.writeFileSync(path.join(componentDir, `${componentName}.css`), '');

console.log(`${componentName} component created successfully in ${componentDir}`);
