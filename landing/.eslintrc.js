module.exports = {
    root: true, 
    env: {
      node: true, 
    },
    extends: [
      "eslint:recommended", 
      "plugin:vue/essential" 
    ],
    parserOptions: {
     
    },
    rules: {
        "vue/multi-word-component-names": "off"
    }
  };