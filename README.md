# binder-pr-bot
> A GitHub App built with [Probot](https://github.com/probot/probot) that A GitHub bot generating binder links for GitHub Pull Requests

## Usage

1. Configure the GitHub App (TODO: add link here).
2. Create `.github/binder.yml` based on the following template.
3. The bot will start commenting on new Pull Requests with a link to a binder session.

A `.github/binder.yml` file is required to enable this app. The file can be empty, or it can override any of these default settings:

```yaml
# Configuration for binder-pr-bot - https://github.com/ian-r-rose/binder-pr-bot

# URL to BinderHub Instance
binderHubUrl: https://mybinder.org/

# Prose for the begining of each comment by the bot
binderComment: Thanks for making a pull request to ${repo}!

# Suffix to add to the end of the each binder link 
# binderUrlSuffix: ?urlpath=lab

## Setup

```sh
# Install dependencies
npm install

# Run typescript
npm run build

# Run the bot
npm start
```

## Contributing

If you have suggestions for how binder-pr-bot could be improved, or want to report a bug, open an issue! We love any and all contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2019 Ian Rose <ian.r.rose@gmail.com>

## History

This project was originally named jupyterlab-dev-mode-bot. 
