# Contributing

This tool is completely open source and contribution to this tool is highly encouraged for everyone! If you have found any issues during your usage of this program, please submit an issue and I'll go back to you right away.

In order to contribute to this project as a developer, please follow these style guide and workflow.

## Coding Style Guide

Please follow this for the sake of the code to be as readable and maintainable as possible.

- **_Use your best spelling and punctuation, in English._**
- Please ensure that your code style is uniform with mine to ensure easier maintainability.
- Please use the proper project structure.
- If possible, please do not add any dependencies unless if it is a clean dependency, this means a dependency without any dependencies.
- Before you submit your pull request, ensure that you run the following procedures to keep the code in standards.

```bash
yarn circular-check
yarn lint
yarn test
```

I do have a CI that will run on pull request, but it's always nice to have those run beforehand.

## Workflow

In order to contribute to this project, please create an issue about the problem that you are going to fix / add. After that, follow these instructions below.

- Fork the repository.
- Create a new branch based on the issue number that you created beforehand. Example: `git checkout -b issue-10`.
- Make sure to update the `CHANGELOG.md`, and the version number in `package.json`.
- Commit and push your features / changes.
- Create a new pull request.
