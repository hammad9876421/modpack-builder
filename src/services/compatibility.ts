import type { Mod } from "../types/mod";

export interface CompatibilityReport {
  valid: boolean;
  warnings: string[];
}

export function checkCompatibility(
  mods: Mod[]
): CompatibilityReport {
  const warnings: string[] = [];

  const loaders = new Set<string>();

  mods.forEach((mod) => {
    (mod.loaders || []).forEach((loader) => {
      loaders.add(loader);
    });
  });

  if (loaders.has("fabric") && loaders.has("forge")) {
    warnings.push(
      "Fabric and Forge mods are mixed together."
    );
  }

  if (loaders.has("fabric") && loaders.has("neoforge")) {
    warnings.push(
      "Fabric and NeoForge mods are mixed together."
    );
  }

  const ids = new Set<string>();

  mods.forEach((mod) => {
    if (ids.has(mod.id)) {
      warnings.push(
        `Duplicate mod detected: ${mod.title}`
      );
    }

    ids.add(mod.id);
  });

  return {
    valid: warnings.length === 0,
    warnings,
  };
}
