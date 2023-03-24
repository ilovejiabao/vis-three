import { ObjectRule } from "@vis-three/module-object";
import { CSS3DObject } from "three/examples/jsm/renderers/CSS3DRenderer";
import { CSS3DCompiler } from "./CSS3DCompiler";
import { CSS3DAllType } from "./CSS3DConfig";
export type CSS3DRule = ObjectRule<CSS3DCompiler, CSS3DAllType, CSS3DObject>;
export declare const CSS3DRule: CSS3DRule;
