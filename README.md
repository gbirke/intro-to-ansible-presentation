# An introduction to Ansible

This is a presentation on the configuration management tool [Ansible](https://www.ansible.com/).

The HTML code is built with [Pug](https://github.com/pugjs/pug) (formerly known as Jade), as suggested by [this smashing tutorial](https://medium.com/@jakeout/deprecate-keynote-78f0f09424dd).

## Building the HTML
Run the commands

    npm install
    npm run build-resources
    npm run build-html

The presentation and its files will then be in the `build` folder.

## TODO
* Improve CSS for code examples - dark background, light text, highlighting of examples.
* Add reveal.js as a node module instead of copying source files from `src`.
* Improve build process with grunt by running pug in a grunt task, followed by the grunt file tasks from the reval.js node module. See http://stackoverflow.com/questions/16711058/running-a-grunt-task-on-one-gruntfile-from-another
* [Use Travis CI to put presentation in `gh-pages` branch of repo.](https://gist.github.com/domenic/ec8b0fc8ab45f39403dd)
