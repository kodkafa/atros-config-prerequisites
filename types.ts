type System = "mac" | "arch" | "debian" | "fedora";

interface TaskBoilerPlate {
  system?: System | System;
}

interface PackageWithSystem {
  system?: System;
  list: string[];
}

interface InstallTask extends TaskBoilerPlate {
  type: "install";
  packages: (string | PackageWithSystem)[];
  params?: string[];
}

interface ShellTask extends TaskBoilerPlate {
  type: "shell";
  cmd: string;
}

/**Interface to define step */
export interface AtrosStep {
  title: string;
  description?: string;
  tasks: (InstallTask | ShellTask)[];
}
