import { Application } from 'probot' // eslint-disable-line no-unused-vars

export = (app: Application) => {
  app.on('pull_request.opened', async (context) => {
    const head = context.payload.pull_request.head;
    const ref = head.ref;
    const user = head.user.login;
    const repo = head.repo.name;

    const comment = `Thanks for making a pull request to JupyterLab!

To try out this branch on [binder](https://mybinder.org), follow this link: [![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/${user}/${repo}/${ref})`
    const issueComment = context.issue({ body: comment })
    await context.github.issues.createComment(issueComment)
  })
}
