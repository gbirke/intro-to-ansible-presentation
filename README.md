# An introduction to Ansible

This is a presentation on the configuration management tool [Ansible](https://www.ansible.com/).

The HTML code is built with [Pug](https://github.com/pugjs/pug) (formerly known as Jade), as suggested by [this smashing tutorial](https://medium.com/@jakeout/deprecate-keynote-78f0f09424dd).

## Building the HTML
Run the commands

    npm install
    npm run build-resources
    npm run build-html

The presentation and its files will then be in the `build` folder.

## Running the examples
To run the example playbooks from the `examples` directory, you need a to have [Vagrant](https://vagrantup.com/) installed. A [`Vagrantfile`](examples/Vagrantfile) for creating a suitable environment in a virtual machine is provided. The virtual machine has  the fixed IP address `192.168.23.23`, you can change it in the `Vagrantfile` if needed.
Start up the virtual machine with

    vagrant up

from the `examples` directory. The Vagrantfile does **not** use the playbooks for [provisioning](https://www.vagrantup.com/docs/provisioning/). Instead, you can run the playbooks yourself, while in the `examples` directory:

    ansible-playbook -i example-server lamp/lamp.yml
    ansible-playbook -i example-server dotfiles/dotfiles_all.yml

The `example-server` file is the [Ansible inventory file](http://docs.ansible.com/ansible/intro_inventory.html) for the virtual machine. If you changed the fixed IP address in the `Vagrantfile` you must also change it in `example-server`.

### Accessing the web server
The LAMP example creates two name-based virtual hosts, `example1.dev` and `example1.dev`. To access them, you must configure your DNS to resolve to the fixed IP address (`192.168.23.23`) of the virtual machine The easiest way to do that is by adding the following lines to your `/etc/hosts` file:

    192.168.23.23 example1.dev
    192.168.23.23 example2.dev

## TODO
* Improve CSS for code examples - dark background, light text, highlighting of examples.
* Add reveal.js as a node module instead of copying source files from `src`.
* Improve build process with grunt by running pug in a grunt task, followed by the grunt file tasks from the reval.js node module. See http://stackoverflow.com/questions/16711058/running-a-grunt-task-on-one-gruntfile-from-another
* [Use Travis CI to put presentation in `gh-pages` branch of repo.](https://gist.github.com/domenic/ec8b0fc8ab45f39403dd)
