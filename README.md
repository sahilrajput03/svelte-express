# This attempt to help share common files b/w frontend and backend has failed.

_Check the drawbacks heading in this readme file._

# Svelte + Expressjs with common files usage

Created on 12 Jan 2025.

## Drawbacks of this approach

1. Any changes made in `backend` folder also triggers frontend deployment in vercel as well. (I tried to mitigate this issue by using `.vercelignore` file but it seems this file is to only include file/folder in the final build and not for the purpose to prevent deployment for changes of a folder like `backend` as I need), thus this file doesn't help me my case.
2. We can not import libraries in the common file (e..g, `common/utils.ts`) because we get runtime error in that case. Please check comments in `common/utils.ts` file to know more about this.
