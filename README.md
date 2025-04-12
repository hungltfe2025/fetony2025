# Gitflow
- master/main: Stable branch
- hotfix/CETE-xxxx: Hotfix branch when an incident occurs or bug fix on production env
- feature/CETE-xxxx: Feature branch, used for developing a story
- bugfix/CETE-xxxx: bugfix branch when occur on qc branch
- develop: unstable branch, used for development, can be reset anytime with an announcement
- qc/staging: unstable branch, used for QC team, can be reset anytime with an announcement
- uat: Used for sanity testing before release to production

# Step to step gitflow
```bash
# 1. create new branch from main branch
$ git checkout main
$ git checkout -b {name branch}
$ git add .
$ git commit -m "...."
$ git push

# 2. create PR (Pull Request)
```