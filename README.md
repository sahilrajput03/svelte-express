# This attempt to help share common files b/w frontend and backend has failed.

**Drawbacks of this approach**

1. We can not import libraries in the common file (e..g, `common/utils.ts`) because we get runtime error in that case. Please check comments in `common/utils.ts` file to know more about this.

# Svelte + Expressjs with common files usage

- Created on 12 Jan 2025.
- Note to developer: **To prevent vercel frontend deployments for any changes in backend folder you can ignore the build step in vercel using option "Only build if there are changes in a folder" as specifed in the docs here - [Vercel Docs: project-configuration/git-settings](https://vercel.com/docs/projects/project-configuration/git-settings#ignored-build-step) .**
  - Similarly in github actions we can specify for when to create a deployment i.e., when a changes are detected in a particular folder. (FYI: This is done by runing `git diff` command and see if the given ignored folder was changed and act accordingly).
  - Similarly in render - you can use feature as mentioned here - [https://render.com/docs/blueprint-spec#buildfilter](https://render.com/docs/blueprint-spec#buildfilter)
