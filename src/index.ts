import { Application } from 'probot' // eslint-disable-line no-unused-vars

export = (app: Application) => {
  app.on('pull_request.opened', async (context) => {
    const ref = context.payload.head.ref; 
    const user = context.payload.head.user.login;
    const repo = context.payload.head.repo.name;

    const comment = `Thanks for making a pull request to JupyterLab!

To try out this branch on [binder](https://mybinder.org), follow this link:
[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/${user}/${repo}/${ref})`
    console.log(comment);
    const issueComment = context.issue({ body: comment })
    await context.github.issues.createComment(issueComment)
  })
}
