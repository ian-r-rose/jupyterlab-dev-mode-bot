import { Application } from 'probot' // eslint-disable-line no-unused-vars

export = (app: Application) => {
  app.on('pull_request.opened', async (context) => {
    const head = context.payload.pull_request.head;
    const ref = encodeURIComponent(head.ref);
    const user = head.user.login;
    const repo = head.repo.name;

    // Get binder url
    const config = await context.config('config.yml', { 'binder_url': 'https://mybinder.org' })
    const binder = config.binder_url

    const comment = `Thanks for making a pull request to ${repo}!

To try out this branch on [binder](${binder}), follow this link: [![Binder](${binder}/badge_logo.svg)](${binder}/v2/gh/${user}/${repo}/${ref})`
    const issueComment = context.issue({ body: comment })
    await context.github.issues.createComment(issueComment)
  })
}
