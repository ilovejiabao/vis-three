import { CSS2DPlane } from "@vis-three/core";
import { CSS2DPlaneConfig } from "./CSS2DConfig";
import { CSS2DCompiler } from "./CSS2DCompiler";
import { EngineSupport } from "@vis-three/middleware";
export declare const getElement: (element: string, engine: EngineSupport) => HTMLElement;
declare const _default: import("@vis-three/middleware").Processor<CSS2DPlaneConfig, CSS2DPlane, EngineSupport, CSS2DCompiler>;
export default _default;
