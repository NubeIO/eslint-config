## NubeIO ESLint Tooling

This repository contains various tooling configurations for NubeIO internal projects.

### Configuration

To use the shared configuration in your project, you need to add this repository as a submodule.

#### Step 1: Add Configuration as a Submodule

Run the following command in your project to add the configuration as a submodule:

```bash
git submodule add git@github.com:NubeIO/eslint-config.git tooling/eslint
```

#### Step 2: Initialize All Submodules

If the submodule has already been added, you need to initialize all submodules after pulling the repository:

```bash
git submodule update --init
```

### Updating Submodules

To update the submodule to the latest version, run:

```bash
git submodule update --remote --merge
```

### Removing a Submodule

If you ever need to remove a submodule, use the following steps:

- Delete the relevant section from `.gitmodules`.
- Delete the relevant section from `.git/config`.
- Run `git rm --cached tooling/eslint`.
- Commit the changes and delete the submodule directory.

### Additional Tooling

More shared tooling configurations will be added to this repository over time. Make sure to check back for updates and new tools to enhance your development workflow.
