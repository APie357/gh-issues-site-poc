import { owner, repo, githubKey } from "./config.js";
import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: githubKey,
});

export class Issue {
  constructor(data) {
    this.id = data.number
    this.title = data.title
    this.body = data.body
    this.created = data.created_at
    this.updated = data.updated_at
    this.author = data.user
    this.state = data.state
    this.labels = []

    for (const label of data.labels) {
      this.labels.push(label.name);
    }
  }
}


export async function listIssues() {
  const response = await octokit.request("GET /repos/{owner}/{repo}/issues", { owner, repo })

  const issues = [];
  for (const issue of response.data) {
    issues.push(new Issue(issue))
  }

  return issues;
}

export async function getIssue(id) {
  const issue = (await octokit.request("GET /repos/{owner}/{repo}/issues/{id}", {owner, repo, id})).data
  return new Issue(issue)
}

