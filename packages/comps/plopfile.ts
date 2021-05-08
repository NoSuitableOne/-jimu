import {NodePlopAPI} from 'plop';

export default function (plop: NodePlopAPI) {
  plop.setGenerator('component', {
    description: 'add a new component',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'component name please'
    }, {
      type: 'list',
      choices: ['class', 'function'],
      name: 'type',
      message: 'choose template type'
    }],
    actions: function(data) {
      return [{
        type: 'addMany',
        destination: 'src/{{name}}/',
        base: 'template/basic',
        templateFiles: 'template/basic',
        verbose: true,
        skipIfExists: true
      }, {
        type: 'add',
        path: 'src/{{name}}/{{pascalCase name}}.tsx',
        templateFile: 'template/{{type}}.hbs',
        verbose: true,
        skipIfExists: true
      }];
    }
  });
};

